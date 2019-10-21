import React, { useCallback, useState, useEffect } from 'react';

import {
  mapStateToLayoutProps,
  rankWith,
  uiTypeIs,
  optionIs,
  or,
  computeLabel,
  isPlainLabel,
  ArrayLayoutProps,
  composePaths,
  createDefaultValue,
  findUISchema,
  mapDispatchToArrayControlProps,
} from "@jsonforms/core";
import {
  MaterialLayoutRenderer,
  ArrayLayoutToolbar,
  MaterialArrayLayout
} from "@jsonforms/material-renderers";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Hidden,
  Grid,
  Tooltip
} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { connect } from "react-redux";
import { withJsonFormsArrayLayoutProps,JsonFormsDispatch, } from '@jsonforms/react';
import merge from 'lodash/merge';
import { CustomMaterialArrayLayout } from './customMaterialArrayTableLayout';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';


const checkArrayTableControl = or(optionIs('tableLayout',true));
/**
 * Custom tester for custom array controls.
 * @type {RankedTester}
 */
export const CustomMaterialArrayTableRendererTester: RankedTester =
  rankWith(Number.MAX_VALUE, checkArrayTableControl );

export const CustomMaterialArrayTableRenderer =
  ({ uischema, schema, path, visible, renderers, enabled, id, label, rootSchema, data, errors,addItem, childPath,uischemas,createDefault }: ArrayLayoutProps)=>{
    const [showForm,setShowForm] = useState(false);
    const foundUISchema = findUISchema(
       uischemas,
       schema,
       uischema.scope,
       path,
       undefined,
       uischema,
       rootSchema
     );
      const addItemCb = useCallback((p: string, value: any) => addItem(p, value), [addItem]);

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
