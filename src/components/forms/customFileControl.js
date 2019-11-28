import React from 'react';
import {
  RankedTester,
  rankWith,
  isDescriptionHidden,
  or,
  optionIs,
  schemaMatches,
} from '@jsonforms/core';
import { Hidden } from '@material-ui/core';

import { DropzoneArea } from 'material-ui-dropzone';

import merge from 'lodash/merge';
import { Control,withJsonFormsControlProps } from '@jsonforms/react';

const checkInputFileControl = or(schemaMatches(schema => schema.hasOwnProperty('contentMediaType')),optionIs('fileInput',true));
/**
 * Default tester for custom input controls.
 * @type {RankedTester}
 */
export const customInputFileControlTester =
  rankWith(Number.MAX_VALUE, checkInputFileControl );


export class customInputFileControl extends Control {

  /**
   * @inheritDoc
   */
  render() {
   const {
      id,
      errors,
      schema,
      description,
      visible,
      path,
      handleChange,
      data,
      config
    } = this.props;
    const isValid = errors.length === 0;
    const appliedUiSchemaOptions = merge(
      {},
      config,
      this.props.uischema.options
    );
    const onChange = (ev) => handleChange(path, ev);
    const readOnly = schema.readOnly;
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
          <DropzoneArea
            dropzoneText= "Drag and Drop files here"
            maxFileSize={ appliedUiSchemaOptions.fileSize || 100000 }
            dropzoneClass = ""
            filesLimit = { appliedUiSchemaOptions.filesLimit || 1 }
            value={ data  || ''}
            onChange={ onChange}
          />
        </Hidden>
      </div>
    );
  }
}

export default withJsonFormsControlProps(customInputFileControl);
