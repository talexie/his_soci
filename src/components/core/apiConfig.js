let backendHost;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if(hostname === 'engine.diteqafrica.com') {
  backendHost = 'http://engine.diteqafrica.com';
} else if(hostname === 'dev.diteqafrica.com') {
  backendHost = 'https://dev.diteqafrica.com';
} else {
  //backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:3000';
  backendHost = 'http://engine.diteqafrica.com';
}

export const ENGINE_ROOT_API = `${backendHost}:30232/api/`;
