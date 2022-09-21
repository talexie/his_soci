import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { AppBar, Container, Toolbar, Typography, useTheme } from '@mui/material';

const img = css`
  height:22px!important;
  margin-left:3px;
  vertical-align:text-bottom;
  padding: 0 8px;
  `;
const license= css`
  display:inline-block;
  padding: 8px
  `;
export const Footer = props => {
  const { className } = props;
  const theme = useTheme();
  return (
    <Container
      css={css(css`
      margin-bottom: 0;
      padding: ${theme.spacing(4)};
      sx={{ top: 'auto', bottom: 0 }}
    `, className)}
    >
        <Typography variant="body1" xmlnscc="https://creativecommons.org/ns#" xmlnsdct="https://purl.org/dc/terms/">
            <a property="dct:title" rel="cc:attributionURL" href="https://nataaha.com">ALKIP Platform</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://nataahahotels.com">Nataaha Hotels</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" css={ license }>CC BY-NC 4.0
            <img css={img}
              src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"/><img css={img} src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"/><img css={img} src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"/></a>
        </Typography>
    </Container>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
