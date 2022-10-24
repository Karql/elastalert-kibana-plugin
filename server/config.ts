import { schema, TypeOf } from '@kbn/config-schema';

export type ConfigType = TypeOf<typeof ConfigSchema>;

export const ConfigSchema = schema.object({
    serverSsl: schema.boolean({ defaultValue: false }),
    serverHost: schema.string({ defaultValue: "localhost" }),
    serverPort: schema.number({ defaultValue: 3030 }),
    serverPath: schema.string({ defaultValue: "" }),
    serverCustomRequestHeaders: schema.object ({ defaultValue: {} })
});