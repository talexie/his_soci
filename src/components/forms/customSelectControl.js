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

export const findEnumSchema = (schemas) =>{
  if(schemas !== undefined){
    schemas.find(
      s => s.enum !== undefined && (s.type === 'string' || s.type === undefined)
    );
  }
  return schemas
};
export const findConditionalEnumSchema = (schemas,path) =>{
  
  if(schemas !== undefined){
    const conditionAllOf = schemas[(path.split('.'))[0]].allOf;
    schemas.find(
      s => s.enum !== undefined && (s.type === 'string' || s.type === undefined)
    );
  }
  return schemas
};
export const findTextSchema = (schemas) =>
  schemas.find(s => s.type === 'string' && s.enum === undefined);
export const resolveSubSchemas = (
  schema,
  rootSchema,
  keyword
) => {
  // resolve any $refs, otherwise the generated UI schema can't match the schema???
  const schemas = schema[keyword];
  if(schemas !== undefined){
    if (schemas.findIndex(e => e.$ref !== undefined) !== -1) {
      return {
        ...schema,
        [keyword]: (schema[keyword]).map(e =>
          e.$ref ? resolveSchema(rootSchema, e.$ref) : e
        )
      };
    }
  }
  return schema;
};
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
  renderers,
  uischemas,
  rootSchema
}) => {
  const isValid = errors.length === 0;
  const appliedUiSchemaOptions = merge({}, config, uischema.options);
  const enumSchema = schema.enum;
  const readOnly = schema.readOnly || appliedUiSchemaOptions.readOnly;
  const maxLength = schema.maxLength;
  const showDescription = !isDescriptionHidden(
    visible,
    description,
    isFocused,
    appliedUiSchemaOptions.showUnfocusedDescription
  );
  const onChange = (ev) => handleChange(path, ev.target.value);
  //console.log("schema", schema, " uischemas", uischema, "path:", path);
  const _schema = resolveSubSchemas(schema,rootSchema, 'allOf');
  //const _schema = resolveSchema(rootSchema, 'allOf');
  const delegateUISchema = findMatchingUISchema(uischemas)(
    _schema,
    uischema.scope,
    path
  );
  const enumSchemax = findEnumSchema(schema.allOf);
  //console.log("_schema:",_schema, " delegated: ",delegateUISchema, " enum:", enumSchemax);
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
