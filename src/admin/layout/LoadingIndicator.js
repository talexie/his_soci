import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { css } from '@emotion/react';

import NavigationRefresh from '@mui/icons-material/Refresh';

export const LoadingIndicator = (props) => {
    const { className, sx, ...rest } = props;
    const loading = false;

    const theme = useTheme();
    return (
        <div className={className} sx={sx}>
            {loading ? (
                <CircularProgress
                    css={['app-loader',loader(theme)]}
                    color="inherit"
                    size={theme.spacing(2)}
                    thickness={6}
                    {...rest}
                />
            ) : (
                <NavigationRefresh/>
            )}
        </div>
    );
};

LoadingIndicator.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    width: PropTypes.string,
};


const loader =(theme) => css({
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
});