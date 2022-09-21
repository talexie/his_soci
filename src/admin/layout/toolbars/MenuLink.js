import PropTypes from 'prop-types';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useLoginUser, useCreatePath,useUiMenuSchema } from '@alkuip/core';
import { css } from '@emotion/react';
import { getUserAccess } from '@alkuip/dhis2';
import { ListItem, Button,useTheme,colors } from '@mui/material';

const  item = css`
    display: grid;
    padding-top: 0;
    padding-bottom: 0;
  `;
const link =css`
  display: grid;
  font-size: 18px;`;
const icon = theme =>css`
  margin-right: 8px;
  width: 20;
  height: 20;`;

const button = (theme) =>css`
  color: ${ colors.blueGrey[800]};
  padding: 10px 8px;
  justify-content: flex-start;
  text-transform: none;
  letter-spacing: 0;
  width: 100%;
  font-weight: ${ theme.typography.fontWeightMedium};
`;
const active =theme =>css`
    color: ${ theme.palette.primary.main};
    font-weight: ${ theme.typography.fontWeightMedium};
    '& $icon': {
      color: ${ theme.palette.primary.main};
    };
  `;
export const MenuLink=(props)=> {
  const { 
    page 
  } = props;
  const { uischemas } = useUiMenuSchema();
  const { userDetails } = useLoginUser();
  const createPath = useCreatePath();
  const theme = useTheme();
  const pageUiSchemas = uischemas?.filter((uis)=>uis?.appName === page?.appId);
  return (
          pageUiSchemas?.map((ui,index)=>{
            const access = getUserAccess(userDetails,ui?.uischema?.options?.accessGroup?.code);
            if(access.canCreateOrUpdate || access.canApprove || access.isAdmin || access.isSuperAdmin || access.canViewOnly || access.isUser){
                return(
                    <ListItem
                        css={item}
                        disableGutters
                        key={ `page-admin-${ui.title}-${index}`}
                    >
                    {
                        ui.type === 'external'?

                        (
                        <a href={ui.href} target="_blank" rel="noopener noreferrer">
                            <Button
                            activeclassname={ active(theme)}
                            css={button(theme)}
                            key={ `page-admin-${ui.title}-${index}`}
                            >
                            <div css={icon(theme)}>{ui.icon}</div>
                            {ui.title}
                            </Button>
                        </a>
                        ):(
                            ui?.uischema?.options?.link?(
                                <Link 
                                  key ={`link-${index}`} 
                                  color="inherit" 
                                  to={  createPath({
                                      resource: `/${ui?.uischema?.options?.route}/${ui?.uischema?.options?.path}?action=${ui.action}`,
                                      type: 'list',
                                  }) } 
                                  css={ link }>
                                    <Button
                                    activeclassname={ active(theme)}
                                    css={button(theme)}
                                    key={ `page-admin-${ui.title}-${index}`}
                                    >
                                      <div css={icon(theme)}><HomeIcon/></div>
                                      { ui?.uischema?.options?.label??ui.action}
                                    </Button>
                                </Link>
                            ): null
                        )
                    }
                    </ListItem>
                );
            }
            else{
              return null;
            }
          })
       
  );
}

MenuLink.propTypes = {
  page: PropTypes.object,
};

export default MenuLink;
