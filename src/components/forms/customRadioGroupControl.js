import merge from 'lodash/merge';
import React from 'react';
import {
  computeLabel,
  ControlProps,
  ControlState,
  isDescriptionHidden,
  isPlainLabel,
  rankWith,
  RankedTester,
  optionIs,
  and,
  schemaMatches,
} from '@jsonforms/core';
import { Control, withJsonFormsControlProps } from '@jsonforms/react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Hidden
} from '@material-ui/core';

export class CustomRadioGroupControl extends Control<
  ControlProps,
  ControlState
> {
  render() {
    const {
      config,
      id,
      label,
      required,
      description,
      errors,
      data,
      schema,
      visible
    } = this.props;
    const isValid = errors.length === 0;
    const appliedUiSchemaOptions = merge(
      {},
      config,
      this.props.uischema.options
    );
    const showDescription = !isDescriptionHidden(
      visible,
      description,
      this.state.isFocused,
      appliedUiSchemaOptions.showUnfocusedDescription
    );

    const options = schema.enum;

    return (
      <Hidden xsUp={!visible}>
        <FormControl
          component={'fieldset'}
          fullWidth={!appliedUiSchemaOptions.trim}
        >
          <FormLabel
            htmlFor={id}
            error={!isValid}
            component={'legend'}
          >
            {computeLabel(
              isPlainLabel(label) ? label : label.default,
              required,
              appliedUiSchemaOptions.hideRequiredAsterisk
            )}
          </FormLabel>

          <RadioGroup
            value={this.state.value}
            onChange={(_ev, value) => this.handleChange(value)}
            row={true}
          >
            {options.map(optionValue => (
              <FormControlLabel
                value={optionValue}
                key={optionValue}
                control={<Radio checked={data === optionValue} />}
                label={optionValue}
              />
            ))}
          </RadioGroup>
          <FormHelperText error={!isValid}>
            {!isValid ? errors : showDescription ? description : null}
          </FormHelperText>
        </FormControl>
      </Hidden>
    );
  }
}

export const CustomRadioGroupControlTester: RankedTester = rankWith(
  Number.MAX_VALUE,
  and(optionIs('format', 'radio'),schemaMatches(schema => schema.hasOwnProperty('enum')))
);
export default withJsonFormsControlProps(CustomRadioGroupControl);
