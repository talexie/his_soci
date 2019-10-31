import React from 'react';

import {
  ArrayControlProps,
  ControlElement,
  Helpers,
  isObjectArrayWithNesting,
  mapDispatchToArrayControlProps,
  mapStateToArrayControlProps,
  RankedTester,
  rankWith,
  or,
  optionIs,
} from '@jsonforms/core';
import { MaterialArrayLayout } from './materialArrayLayout';
import { connect } from 'react-redux';

export const cMaterialArrayLayoutRenderer  = (
  {
    uischema,
    data,
    path,
    findUISchema,
    addItem,
    removeItems,
    errors,
    createDefaultValue,
    schema,
    rootSchema,
  }) => {

  const controlElement = uischema ;
  const labelDescription = Helpers.createLabelDescriptionFrom(controlElement);
  const label = labelDescription.show ? labelDescription.text : '';

  return (
    <MaterialArrayLayout
      data={data}
      label={label}
      path={path}
      addItem={addItem}
      removeItems={removeItems}
      findUISchema={findUISchema}
      uischema={uischema}
      schema={schema}
      errors={errors}
      rootSchema={rootSchema}
      createDefaultValue={()=>createDefaultValue}
    />
  );
};

export default connect(
  mapStateToArrayControlProps,
  mapDispatchToArrayControlProps
)(cMaterialArrayLayoutRenderer);

export const cMaterialArrayLayoutRendererTester = rankWith(Number.MAX_VALUE, or(optionIs('tableLayout',false)));
