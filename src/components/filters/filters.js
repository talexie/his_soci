import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultipleSelect =({ data, getData=(event)=>{},multiple,label,...rest })=> {
  const classes = useStyles();
  const [selectOption, setSelectOption] = React.useState([]);

  const handleChange=(event)=> {
    setSelectOption([event.target.value].join(','));
    getData(event.target.value);
  }

  return (
    <div className={ clsx(classes.root) } style={{ paddingTop: '1.5em' }} >
        <InputLabel htmlFor="select-multiple-checkbox">{ label }</InputLabel>
        <TextField
          className={ classes.formControl }
          select
          multiple={ multiple?'false':multiple }
          margin="normal"
          variant="outlined"
          value={selectOption || ''}
          onChange={handleChange}
          placeholder ={ label }
          input={<Input id="select-multiple-checkbox" />}
          SelectProps={
            MenuProps
          }
        >
          {data.map(name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectOption.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </TextField>
    </div>
  );
}
export default MultipleSelect;
