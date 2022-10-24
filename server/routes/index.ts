import { IRouter, Logger } from 'kibana/server';
import { schema } from '@kbn/config-schema';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ConfigType } from '../config';
import fetch from 'node-fetch';

interface RegisterRoutesParams {
  config$: Observable<ConfigType>;
  logger: Logger;
  router: IRouter;
}

export const registerRoutes = (options: RegisterRoutesParams) => {
  const { config$, logger, router } = options;

  const getElastAlertServerUrl = async () =>  {
    let config = await config$.pipe(take(1)).toPromise();

    return `http${(config.serverSsl ? 's' : '')}://${config.serverHost}:${config.serverPort}${config.serverPath}`;
  }
  const getElastAlertServerCustomRequestHeaders = async () =>  {
    let config = await config$.pipe(take(1)).toPromise();

    return config.serverCustomRequestHeaders;
  }

  // create & edit rule
  router.post(
    {
      path: '/api/elastalert/rules/{ruleID}',
      validate: {
        params: schema.object({
          ruleID: schema.string(),
        }),
        body: schema.object({
          yaml: schema.string(),
        }),
      }
    },
    async (context, req, response) => {
      let customHeaders = await getElastAlertServerCustomRequestHeaders()
      const postParams = {
        method: 'POST',
        headers: {...{
          "content-type": "application/json"
        }, ...customHeaders },
        body: JSON.stringify(req.body),
      };

      const postRequest = async () => {
        let url = (await getElastAlertServerUrl()) + `/rules/${req.params.ruleID}`;
        logger.debug(`POST ${url}`);

        return fetch(url, postParams)
          .then((r: any) => r.json())
          .then((responseJson: any) => {
            return responseJson;
          });
      };

      const result = await postRequest();

      return response.ok({
        body: {
          data: result,
        },
      });
    }
  );

  // test rule
  router.post(
    {
      path: '/api/elastalert/test',
      validate: {
        body: schema.object({
          rule: schema.string(),
          options: schema.object({
            testType: schema.string()
          })
        }),
      }
    },
    async (context, req, response) => {
      let customHeaders = await getElastAlertServerCustomRequestHeaders()
      const postParams = {
        method: 'POST',
        headers: {...{
          "content-type": "application/json"
        }, ...customHeaders },
        body: JSON.stringify(req.body),
      };

      const postRequest = async () => {
        let url = (await getElastAlertServerUrl()) + `/test`;
        logger.debug(`POST ${url}`);
        return fetch(url, postParams);
      };

      const result = await postRequest();

      return response.custom({
        statusCode: result.status,
        body: result.body
      });
    }
  );

  router.get(
    {
      path: '/api/elastalert/{path*}',
      validate: {
        params: schema.object({
          path: schema.string(),
        })
      }
    },
    async (context, req, response) => {
      let customHeaders = await getElastAlertServerCustomRequestHeaders()
      const getParams = {
        method: 'GET',
        headers: customHeaders
      };

      const getRequest = async () => {
        let url = (await getElastAlertServerUrl()) + `/${req.params.path}`;
        logger.debug(`GET ${url}`);

        return fetch(url, getParams);
      };
      const result = await getRequest();
      return response.ok({
        body: result.body
      });
    }
  );

  router.delete(
    {
      path: '/api/elastalert/rules/{ruleID}',
      validate: {
        params: schema.object({
          ruleID: schema.string(),
        })
      }
    },
    async (context, req, response) => {
      let customHeaders = await getElastAlertServerCustomRequestHeaders()
      const deleteParams = {
        method: 'DELETE',
        headers: customHeaders
      };

      const deleteRequest = async () => {
        let url = (await getElastAlertServerUrl()) + `/rules/${req.params.ruleID}`;
        logger.debug(`DELETE ${url}`);

        return fetch(url, deleteParams);
      };
      await deleteRequest();
      // TODO: handle error
      return response.ok({
        body: {
          success: true,
        },
      });
    }
  );
}
