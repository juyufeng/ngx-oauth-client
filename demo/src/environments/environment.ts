// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api: {
    host: 'https://mattj-demo.sandbox.knetikcloud.com',
    token: 'oauth/token',
    key: 'web_client',
    withCredentials: true,
    tokens: {
      access: 'access_token',
      refresh: 'refresh_token'
    }
  }
};
