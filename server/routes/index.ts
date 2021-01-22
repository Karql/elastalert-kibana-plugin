import { IRouter } from 'kibana/server';
import fetch from 'node-fetch';
export function defineRoutes(router: IRouter) {
  const uri = process.env.PROTOCOL + '://' + process.env.HOSTNAME + process.env.PORT;
  router.get(
    {
      path: '/api/elastalert/{path}',
      validate: false,
    },
    async (context, req, response) => {
      const getRequest = async () => {
        return fetch(uri + req.route.path)
          .then((r: any) => r.json())
          .then((responseJson: any) => {
            return responseJson;
          });
      };
      const result = await getRequest();
      return response.ok({
        body: {
          data: result,
        },
      });
    }
  );
  router.post(
    {
      path: '/api/elastalert/{path}',
      validate: false,
    },
    async (context, req, response) => {
      const postParams = {
        method: 'POST',
        body: JSON.stringify({
          params: {
            index: 'elastalert',
          },
        }),
      };
      const postRequest = async () => {
        return fetch(uri + req.route.path, postParams)
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
  router.delete(
    {
      path: '/api/elastalert/{path}',
      validate: false,
    },
    async (context, req, response) => {
      return response.ok({
        body: {
          success: true,
        },
      });
    }
  );
}
