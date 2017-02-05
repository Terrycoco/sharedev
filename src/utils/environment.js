import config from 'utils/config';


export function isProd() {
  if (process.env.NPM_CONFIG_PRODUCTION) {
    return true;
  }
  return false;
}

export function getApi() {
  return isProd() ? config.production.api : config.development.api;
}