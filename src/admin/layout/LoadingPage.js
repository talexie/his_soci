import PropTypes from 'prop-types';
import { Loading } from './Loading';

export const LoadingPage = ({
    loadingPrimary = 'Loading......',
    loadingSecondary = 'Loading....',
    ...props
}) => (
    <Loading
        loadingPrimary={loadingPrimary}
        loadingSecondary={loadingSecondary}
        {...props}
    />
);

LoadingPage.propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    loadingPrimary: PropTypes.string,
    loadingSecondary: PropTypes.string,
};