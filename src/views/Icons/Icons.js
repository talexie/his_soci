import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

  const root =theme =>css({
    padding: theme.spacing(4)
  });
  const iframe=css({
    width: '100%',
    minHeight: 640,
    border: 0
  });

const Icons = () => {
  const theme = useTheme();

  return (
    <div css={root(theme)}>
      <iframe
        css={iframe}
        src="https://material.io/tools/icons/?icon=accessibility&style=outline"
        title="Material Design icons"
      />
    </div>
  );
};

export default Icons;
