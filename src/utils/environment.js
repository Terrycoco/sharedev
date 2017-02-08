import config from 'utils/config';
  
// var envVar = process.env.OPENSHIFT_ENV_VAR;

export function isProd() {
  if (process.env.NODE_ENV == "production") {
    return true;
  }
  return false;
}

export function getApi() {
  return isProd() ? config.production.api : config.development.api;
}