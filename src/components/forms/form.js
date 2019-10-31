import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import { Actions, jsonformsReducer, createAjv,JsonFormsState } from '@jsonforms/core';
import { materialCells, materialRenderers } from '@jsonforms/material-renderers';
import { JsonFormsDispatch,JsonFormsReduxContext } from '@jsonforms/react';
import { Button } from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";

// Custom JSONforms controls
import RatingControl, { RatingControlTester } from './customRatingControl';
import customInputFileControl, { customInputFileControlTester } from './customFileControl';
import customInputControl, { customInputControlTester } from './customInputControl';
import CustomSelectControl, { CustomSelectControlTester } from './customSelectControl';
import CustomRadioGroupControl, { CustomRadioGroupControlTester } from './customRadioGroupControl';
import CustomMaterialArrayTableRenderer, { CustomMaterialArrayTableRendererTester } from './customMaterialArrayTableLayoutRenderer';
import CustomGroupRenderer, { CustomGroupRendererTester } from './customGroupRenderer';
import cMaterialArrayLayoutRenderer, { cMaterialArrayLayoutRendererTester } from './materialArrayLayoutRenderer';

const styles = createStyles({
  container: {
    padding: '1em'
  },
});
const saveFormData = (state: JsonFormsState) => {
  let jsonFormState:any = state.getState();
  return jsonFormState.jsonforms.core;
};
// create store for the form
const store = createStore(
  combineReducers(
     { jsonforms: jsonformsReducer() }),
     {
       jsonforms: {
         renderers: materialRenderers,
         cells: materialCells
       }
     }
);
const ajvV =(schema,refSchema)=>{
  const ajv = createAjv();
  ajv.addSchema(
    schema,
    refSchema,
  );
  return ajv;
}
class HisJsonForm extends Component {
  state={
    title: this.props.title,
    data:this.props.data,
    schema: this.props.schema,
    uiSchema: this.props.uiSchema,
    refSchema: this.props.refSchema,
    getSubmittedData: this.props.getSubmittedData,

  }

  render() {
    const { title,data,schema,uiSchema,refSchema,getSubmittedData} = this.state;
    store.dispatch(Actions.init(data, schema, uiSchema));
    store.dispatch(Actions.registerRenderer(RatingControlTester, RatingControl));
    store.dispatch(Actions.registerRenderer(customInputControlTester, customInputControl));
    store.dispatch(Actions.registerRenderer(CustomSelectControlTester, CustomSelectControl));
    store.dispatch(Actions.registerRenderer(CustomRadioGroupControlTester, CustomRadioGroupControl));
    store.dispatch(Actions.registerRenderer(customInputFileControlTester, customInputFileControl));
    store.dispatch(Actions.registerRenderer(CustomGroupRendererTester,CustomGroupRenderer));
    store.dispatch(Actions.registerRenderer(cMaterialArrayLayoutRendererTester,cMaterialArrayLayoutRenderer));
    return(
      <Provider store={store}>
      <JsonFormsReduxContext>
        <div>
           {/* other markup... */}
           { title }
           <JsonFormsDispatch onChange={
             ()=>{
               getSubmittedData(saveFormData(store))
             }
           }
          />
        </div>
      </JsonFormsReduxContext>

      </Provider>
    );
  }
}
export default withStyles(styles)(HisJsonForm);
