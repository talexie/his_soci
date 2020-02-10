import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import {
  RankedTester,
  rankWith,
  computeLabel,
  isDescriptionHidden,
  isPlainLabel,
  optionIs,
  resolveSchema,
  findMatchingUISchema,
} from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { areEqual } from '@jsonforms/react';
import merge from 'lodash/merge';

const checkSelectControl = optionIs('select',true);

/**
 * Default tester for custom select controls.
 * @type {RankedTester}
 */
export const CustomSelectControlTester =
  rankWith(Number.MAX_VALUE, checkSelectControl );

export const CustomSelectControl = React.memo(( {
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
  isFocused,
  rootSchema
}) => {
  const isValid = errors.length === 0;
  const appliedUiSchemaOptions = merge({}, config, uischema.options);
  const enumSchema = appliedUiSchemaOptions.sort?(schema.enum).sort():schema.enum;
  const readOnly = schema.readOnly || appliedUiSchemaOptions.readOnly;
  const maxLength = schema.maxLength;
  const showDescription = !isDescriptionHidden(
    visible,
    description,
    isFocused,
    appliedUiSchemaOptions.showUnfocusedDescription
  );
  const onChange = (ev) => handleChange(path, ev.target.value);
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
          {
            enumSchema?(enumSchema.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))):
              (<MenuItem key={ "Select " + label } value={"NoValue"}>
                { "Select "+label }
              </MenuItem>)
         }
        </TextField>
      </Hidden>
    </div>
  );
}, areEqual);

export default withJsonFormsControlProps(CustomSelectControl);
