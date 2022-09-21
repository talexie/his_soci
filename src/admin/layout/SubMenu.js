import {
    List,
    MenuItem,
    ListItemIcon,
    Typography,
    Collapse,
    Tooltip,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';

const SubMenu = (props) => {
    const { 
        handleToggle, 
        isOpen, 
        name, 
        icon, 
        children, 
        dense 
    } = props;

    const header = (
        <MenuItem dense={dense} onClick={handleToggle}>
            <ListItemIcon sx={{ minWidth: 5 }}>
                {isOpen ? <ExpandMore /> : icon}
            </ListItemIcon>
            <Typography variant="inherit" color="textSecondary">
                {translate(name)}
            </Typography>
        </MenuItem>
    );

    return (
        <div>
            {sidebarIsOpen || isOpen ? (
                header
            ) : (
                <Tooltip title={ name } placement="right">
                    {header}
                </Tooltip>
            )}
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List
                    dense={dense}
                    component="div"
                    disablePadding
                    sx={{
                        '& a': {
                            transition:
                                'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
                            paddingLeft: sidebarIsOpen ? 4 : 2,
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