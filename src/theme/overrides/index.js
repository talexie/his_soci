import  MuiButton  from './MuiButton';
import MuiIconButton from './MuiIconButton';
import MuiPaper from './MuiPaper';
import { MuiTableCell}  from './MuiTableCell';
import MuiTableHead from './MuiTableHead';
import MuiTypography from './MuiTypography';
import  { MuiInput } from './MuiInput';

const LayoutTheme = (theme='dark')=>({
  components:{
    MuiButton ,
    MuiIconButton : MuiIconButton(theme),
    MuiPaper,
    MuiTableCell :MuiTableCell(theme),
    MuiTableHead,
    MuiTypography,
    MuiInput :MuiInput(theme),
  }
});
export default LayoutTheme;
