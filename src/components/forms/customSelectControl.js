import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import {
  WithClassname,
  RankedTester,
  rankWith,
  computeLabel,
  isDescriptionHidden,
  isPlainLabel,
  not,
  and,
  EnumCellProps,
  optionIs,
  schemaMatches,
} from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { areEqual } from '@jsonforms/react';
import merge from 'lodash/merge';

const checkSelectControl = and(optionIs('select','true'),optionIs('custom','true'));

/**
 * Default tester for custom select controls.
 * @type {RankedTester}
 */
export const CustomSelectControlTester: RankedTester =
  rankWith(Number.MAX_VALUE, checkSelectControl );


export const CustomSelectControl = React.memo((props: EnumCellProps & WithClassname) => {
  const {
    data,
    id,
    enabled,
    uischema,
    path,
    handleChange,
    config,
    schema,
    label,
    required,
    description,
    errors,
    visible,
  } = props;
  const isValid = errors.length === 0;
  const appliedUiSchemaOptions = merge({}, config, uischema.options);
  const enumSchema = schema.enum;
  const readOnly = schema.readOnly;
  const maxLength = schema.maxLength;
  const showDescription = !isDescriptionHidden(
    visible,
    description,
    props.isFocused,
    appliedUiSchemaOptions.showUnfocusedDescription
  );
  const onChange = (ev: any) => handleChange(path, ev.target.value);

  return (
    <div
      style={{ paddingTop: '1.5em' }}
    >
      <Hidden xsUp={!visible}>
        <TextField
          id={ id + "-select"}
          select
          label={computeLabel(
            isPlainLabel(label) ? label : label.default,
            required,
            appliedUiSchemaOptions.hideRequiredAsterisk
          )}
          error={!isValid}
          fullWidth={!appliedUiSchemaOptions.trim  || maxLength === undefined}
          value={ data || ''}
          onChange={ onChange }
          SelectProps={{
            MenuProps: {
            },
          }}
          helperText={!isValid ? errors : showDescription ? description : null}
          InputLabelProps={{ shrink: true }}
          margin="normal"
          variant={ appliedUiSchemaOptions.variant }
          InputProps={{
            readOnly
          }}
          disabled={!enabled}
          autoFocus={appliedUiSchemaOptions.focus}
        >
          {enumSchema.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Hidden>
    </div>
  );
}, areEqual);

export default withJsonFormsControlProps(CustomSelectControl);
