import { Grid, Typography, useTheme } from '@mui/material';
import { css } from '@emotion/react';

  const root = theme =>css({
    padding: theme.spacing(4)
  });
  const content= css({
    paddingTop: 150,
    textAlign: 'center'
  });
  const image = css({
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  });

const NotFound = () => {
  const theme = useTheme();
  return (
    <div css={root(theme)}>
      <Grid
        container
        justifyContent="center"
        spacing={4}
      >
        <Grid
          item
          lg={6}
          xs={12}
        >
          <div css={content}>
            <Typography variant="h1">
              404: The page you are looking for isn’t here
            </Typography>
            <Typography variant="subtitle2">
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
            </Typography>
            <img
              alt="Under development"
              css={image}
              src="/images/undraw_page_not_found_su7k.svg"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;
