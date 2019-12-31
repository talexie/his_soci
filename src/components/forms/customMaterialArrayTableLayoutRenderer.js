import React, { useCallback, useEffect } from 'react';
import {
  rankWith,
  optionIs,
  or,
} from "@jsonforms/core";
import {
  Hidden,
} from "@material-ui/core";
import { withJsonFormsArrayLayoutProps,} from '@jsonforms/react';
import { CustomMaterialArrayLayout } from './customMaterialArrayTableLayout';


const checkArrayTableControl = or(optionIs('tableLayout',true));
/**
 * Custom tester for custom array controls.
 * @type {RankedTester}
 */
export const CustomMaterialArrayTableRendererTester =
  rankWith(Number.MAX_VALUE, checkArrayTableControl );

export const CustomMaterialArrayTableRenderer =
  ({ uischema, schema, path, visible, renderers, enabled, id, rootSchema, data, errors,addItem })=>{

    const addItemCb = useCallback((p, value) => addItem(p, value), [addItem]);

    useEffect(()=>{
        //setShowForm(true);
      //addItemCb(path,data);
    },[addItem]);
    return (
      <Hidden xsUp={!visible}>
         <CustomMaterialArrayLayout
           label={uischema.label}
           uischema={uischema}
           schema={schema}
           id={id}
           rootSchema={rootSchema}
           errors={errors}
           enabled={enabled}
           visible={visible}
           data={data}
           path={path}
           onClick={ addItemCb }
           renderers={renderers}
         />
      </Hidden>
    );
  };

  export default withJsonFormsArrayLayoutProps(CustomMaterialArrayTableRenderer);
