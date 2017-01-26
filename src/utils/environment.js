import config from 'utils/config';


export function isProd() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
    return false;
  }
  return true;
}

export function getApi() {
  return isProd() ? config.production.api : config.development.api;
}