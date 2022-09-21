import { palette } from './palette';

export const typography = (theme='dark')=>({
  h1: {
    color: palette(theme).text.primary,
    fontWeight: 500,
    fontSize: '35px',
    letterSpacing: '-0.24px',
    lineHeight: '40px'
  },
  h2: {
    color: palette(theme).text.primary,
    fontWeight: 500,
    fontSize: '29px',
    letterSpacing: '-0.24px',
    lineHeight: '32px'
  },
  h3: {
    color: palette(theme).text.primary,
    fontWeight: 500,
    fontSize: '24px',
    letterSpacing: '-0.06px',
    lineHeight: '28px'
  },
  h4: {
    color: palette(theme).text.primary,
    fontWeight: 500,
    fontSize: '20px',
    letterSpacing: '-0.06px',
    lineHeight: '24px'
  },
  h5: {
    color: palette(theme).text.primary,
    fontWeight: 500,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '20px'
  },
  h6: {
    color: palette(theme).text.primary,
    fontWeight: 500,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '20px'
  },
  subtitle1: {
    color: palette(theme).text.primary,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '25px'
  },
  subtitle2: {
    color: palette(theme).text.secondary,
    fontWeight: 400,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px'
  },
  body1: {
    color: palette(theme).text.primary,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px'
  },
  body2: {
    color: palette(theme).text.secondary,
    fontSize: '12px',
    letterSpacing: '-0.04px',
    lineHeight: '18px'
  },
  button: {
    color: palette(theme).text.primary,
    fontSize: '14px'
  },
  caption: {
    color: palette(theme).text.secondary,
    fontSize: '11px',
    letterSpacing: '0.33px',
    lineHeight: '13px'
  },
  overline: {
    color: palette(theme).text.secondary,
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '13px',
    textTransform: 'uppercase'
  }
});
export default typography;