import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';

export const Loading = (props) => {
    const {
        className,
        loadingPrimary = 'Loading',
        loadingSecondary = 'Loading',
        ...rest
    } = props;
    return (
        <div className={className} {...rest}>
            <div>
                <CircularProgress
                    
                    color="primary"
                />
                <h1>{loadingPrimary}</h1>
                <div>{loadingSecondary}.</div>
            </div>
        </div>
    );
};

Loading.propTypes = {
    className: PropTypes.string,
    loadingPrimary: PropTypes.string,
    loadingSecondary: PropTypes.string,
};

Loading.defaultProps = {
    loadingPrimary: 'Loading...',
    loadingSecondary: 'Loading..',
};