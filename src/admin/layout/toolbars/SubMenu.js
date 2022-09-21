import { useState } from 'react';
import {
    List,
    MenuItem,
    ListItemIcon,
    Typography,
    Collapse,
    ListItem,
    Tooltip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

/**
 * Submenu
 * @param {*} props 
 * @returns 
 */
export const SubMenu = (props) => {
    const { 
        handleToggle, 
        name, 
        page,
        children, 
        dense,
        isOpen
    } = props;
    const [open,setOpen ] = useState(isOpen);
    const handleChange = _e=>{
        setOpen(!open);
        handleToggle({ type: 'UPDATE_APP_UISCHEMA', payload:{
            app: page
        }}) 
    }
    const header = name?(
        <ListItem dense={dense} onClick={handleChange}>
            <ListItemIcon sx={{ minWidth: 5 }}>
                {open ? <ExpandMoreIcon /> : <ExpandLessIcon/>}
            </ListItemIcon>
            <Typography variant="inherit" color="textSecondary">
                {name }
            </Typography>
        </ListItem>
    ):null;

    return (
        <div>
            { open ? (
                header
            ) : (
                <Tooltip title={ name } placement="right">
                    {header}
                </Tooltip>
            )}
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                    dense={dense}
                    component="div"
                    disablePadding
                    sx={{
                        '& a': {
                            transition:
                                'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
                            paddingLeft: 2,
                        },
                    }}
                >
                    {children}
                </List>
            </Collapse>
        </div>
    );
};

export default SubMenu;