import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import HotTub from '@mui/icons-material/HotTub';
import History from '@mui/icons-material/History';

import { useAuthenticated } from '@alkuip/core';
import { Typography } from '@mui/material';

export const NotFound = props => {
    const { className, title, ...rest } = props;
    useAuthenticated();
    return (
        <div className={className} {...sanitizeRestProps(rest)}>
            <Typography>{ title } </Typography>
            <div>
                <HotTub/>
                <h1>Not found</h1>
                <div>The page was not found.</div>
            </div>
            <div>
                <Button
                    variant="contained"
                    startIcon={<History />}
                    onClick={goBack}
                >
                    { `Back` }
                </Button>
            </div>
        </div>
    );
};

const sanitizeRestProps = ({
    staticContext,
    history,
    location,
    match,
    ...rest
}) => rest;

NotFound.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.object,
};

export const goBack=()=> {
    window.history.go(-1);
}