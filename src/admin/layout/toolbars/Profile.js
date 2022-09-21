import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Avatar, Typography,useTheme } from '@mui/material';
import { useLoginUser } from '@alkuip/core';

const root = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: fit-content;
  `;
const avatar = css({
    width: 60,
    height: 60
});
export const Profile = props => {
  const { className} = props;
  const theme =useTheme();
  const { user:dhis2User } = useLoginUser();

  const user = {
    name: 'ALKIP Platform',
    avatar: '/images/avatars/avatar_19.png',
    bio: 'Adaptive Low-cost Knowledge Integration Platform'
  };
  return (
    <div
      css={[root, className]}
    >
      <Avatar
        alt="Person"
        css={avatar}
        component={RouterLink}
        src={ "" }
        to={ `/dashboard` }
      />
      <Typography
        css={css`
        margin-top: ${ theme.spacing(1) };
      `}
        variant="h4"
      >
       { dhis2User.displayName??user.name }
      </Typography>
      <Typography variant="body2">{ ""}</Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

