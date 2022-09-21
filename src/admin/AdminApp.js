import {
  UserContext,
  useFetchApi,
  useConfig,
} from '@alkuip/core';
import { 
  isGroupValid,
  userIsSuperAdmin,
} from '@alkuip/dhis2';


const AdminApp = ({ children } ) => {
  const { 
    baseUrl,
    headers, 
    appName='elmis' 
  } = useConfig();
  const { data:user } = useFetchApi(`${baseUrl}/api/me?paging=false&fields=id,displayName,phoneNumber,email,userCredentials[username,userRoles[id,name]],userGroups[id,name,code],authorities,organisationUnits[id],dataViewOrganisationUnits[id]`,headers,false);
  const ous = user?.organisationUnits?.map((i)=>i?.id);
  const ousView = user?.dataViewOrganisationUnits?.map((i)=>i?.id);
  // From User, get user props and check for restricted access group and create a flag on User Context
  
  const restrictedAccess = (isGroupValid(user?.userGroups,'specialforces','code') || isGroupValid(user?.userGroups,'special_forces','code')) ;
  // Loop through apps to know the permission type
  const checkUser = userIsSuperAdmin(user,appName); 
  const loggedInUser = {
    userDetails: user,
    user: {
      id: user?.id,
      displayName: user?.displayName,
      email: user?.email,
      phoneNumber: user?.phoneNumber,
      username: user?.userCredentials?.username
    },
    access: { 
      'dataEntry': [],
      'dataView': [],
      'dataEntryLoading': false ,
      'dataViewLoading': false
    },
    restrictedAccess: {
      enabled:restrictedAccess,
      locationGroup: 'specialforces'
    },
    permissions:{
      isAppAdmin: checkUser.isAdmin, 
      isSuperAdmin: checkUser.isSuperAdmin,
      isAppUser: checkUser.isUser,
    },
    viewAccess:ousView,
    createAccess:ous
  }
  return ( 
    <UserContext.Provider value= {loggedInUser}>
      { children }
    </UserContext.Provider>
  );
}
export default AdminApp;
