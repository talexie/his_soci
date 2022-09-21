import { setToken,getToken } from '@alkuip/core';
import { Buffer } from 'buffer';
/**
 * This represents some generic auth provider API, like Firebase.
 */
 const AuthDhis2Provider ={
    isAuthenticated: false,
    login: async({url, username, password,dsUrl,integration,standalone }) =>{
      const token = getToken();
      let authEncoded =  token?.api;
      let headers = new Headers();
      if((username !=='') && standalone && (password !=='')){
        authEncoded = "Basic " + Buffer.from(username + ":" + password).toString('base64');
        setToken(undefined,authEncoded);
        headers = {
          ...headers,
          "Authorization": authEncoded
        }
      }
      const authRes = await fetch(`${url}/api/dataStore/ugx_elmis/setup`,{
        credentials: 'include',
        headers: headers
      });
      if (authRes.status < 200 || authRes.status >= 300) {
        throw new Error(authRes.statusText);
      }
      const auth = await authRes.json();
      
      setToken(auth?.apiKey,undefined); 
      if(dsUrl){
        
        const dsAuthRes = await fetch(`${dsUrl}/dataStore`,
          {
            headers: {
              'x-api-key': auth?.apiKey,
              'strategy': 'apiKey'
            }
          }
        );
        const dsAuth = await dsAuthRes.json();
        if(dsAuth?.authenticated){
          return dsAuth;
        }
        else{
          throw new Error(dsAuthRes.statusText);
          //return Promise.reject({ redirectTo: '/login', logoutUser: false });
        }
      }
      return Promise.resolve();
    },
    logout: async()=> {
      sessionStorage.removeItem('auth');
      sessionStorage.removeItem('dsApiKey');
      setTimeout(()=>{}, 100);
    },
    checkError: (error) => {
      const status = error.status;
      if (status === 401 || status === 403) {
        AuthDhis2Provider.isAuthenticated = false;
        return Promise.reject({ redirectTo: '/login', logoutUser: false });
          
      }
      // other error code (404, 500, etc): no need to log out
      return Promise.resolve();
    },
    checkAuth: (params) => {
const { standalone} = params;
     	if(standalone && sessionStorage.getItem('auth') && sessionStorage.getItem('dsApiKey')){
	    return Promise.resolve();

      	}
	if(!standalone && sessionStorage.getItem('dsApiKey')){
	   return Promise.resolve();
	}
      return Promise.reject({ redirectTo: '/login' });
    },
    getIdentity: () => {
      try {
          const { id, fullName,displayName, avatar } = JSON.parse(sessionStorage.getItem('auth'));
          return Promise.resolve({ id, fullName, displayName, avatar });
      } catch (error) {
          return Promise.reject(error);
      }
    },
    getPermissions: () => {
        // Required for the authentication to work
        return Promise.resolve();
    },
  };

  export { 
    AuthDhis2Provider 
  };
