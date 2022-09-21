import { createTheme } from '@mui/material/styles';

import { palette } from './palette';
import { typography } from './typography';
import overrides from './overrides';
const breakpoints = [576, 768, 992, 1200];

export const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)
export const defaultTheme = (theme='dark') =>createTheme({
  palette: palette(theme),
  typography: typography(theme),
  overrides
});

export default defaultTheme;
