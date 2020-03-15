import React from 'react';
import {
  mapDispatchToControlProps,
  mapStateToControlProps,
  rankWith,
  isDescriptionHidden,
  computeLabel,
  isPlainLabel,
  optionIs,
} from '@jsonforms/core';
import merge from 'lodash/merge';
import { Control } from '@jsonforms/react';
import { Rating } from './Rating';
import { connect } from 'react-redux';
import { Hidden } from '@material-ui/core';
/**
 * Default tester for integer controls.
 * @type {RankedTester}
 */
export const RatingControlTester =
  rankWith(Number.MAX_VALUE, optionIs('rating',true));


export class RatingControl extends Control {

  /**
   * @inheritDoc
   */
  render() {
    const {
       id,
       errors,
       label,
       schema,
       description,
       visible,
       required,
       config
     } = this.props;
     const isValid = errors.length === 0;
     const appliedUiSchemaOptions = merge(
       {},
       config,
       this.props.uischema.options
     );
     //const onChange = (ev) => handleChange(path, ev.target.value);
     const fieldType = schema.format === 'password'?'password':'text';
     const maxLength = schema.maxLength;
     const showDescription = !isDescriptionHidden(
       visible,
       description,
       this.state.isFocused,
       appliedUiSchemaOptions.showUnfocusedDescription
     );
    return (
      <div
        style={{ paddingTop: '1.5em' }}
      >
        <Hidden xsUp={!visible}>
          <Rating
            id={id + '-input'}
            label={computeLabel(
              isPlainLabel(label) ? label : label.default,
              required,
              appliedUiSchemaOptions.hideRequiredAsterisk
            )}
            type={fieldType}
            error={!isValid}
            fullWidth={!appliedUiSchemaOptions.trim  || maxLength === undefined}
            helperText={!isValid ? errors : showDescription ? description : null}
            value={this.props.data}
            onClick={(ev) => {
              this.props.handleChange(this.props.path, Number(ev.value));
            }}

          />
        </Hidden>
      </div>
    );
  }
}

export default connect(mapStateToControlProps, mapDispatchToControlProps)(RatingControl);
