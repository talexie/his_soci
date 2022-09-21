/**  @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { AppBar, Toolbar, Divider } from '@mui/material';

const root = css`
    box-shadow: none;
    background-color: #ffffff;
  `;
const divider = css`
    background-color: rgb(190, 208, 225);
  `;

const Topbar = props => {
  const { className, ...rest } = props;
  return (
    <AppBar
      {...rest}
      css={[root, className]}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        <Link to="/">
          <img
            alt="Logo"
            src="/static/images/logos/logo-diteq-web.png"
          />
        </Link>
      </Toolbar>
    <Divider css={divider}/>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
