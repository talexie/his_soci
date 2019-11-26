import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import { Actions, jsonformsReducer, createAjv,JsonFormsState, getData, getDefaultData } from '@jsonforms/core';
import { materialCells, materialRenderers } from '@jsonforms/material-renderers';
import { JsonFormsDispatch,JsonFormsReduxContext, JsonForms } from '@jsonforms/react';
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
  return { data: getData(state.getState()),defaultData: getDefaultData(state.getState()),errors: state.getState().jsonforms.core.errors,core:state.getState().jsonforms,schema:state.getState().jsonforms.core.schema,uischema:state.getState().jsonforms.core.uischema };
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
const ajv = createAjv({
  useDefaults: true
});

class HisJsonForm extends Component {
  state={
    title: this.props.title,
    data:this.props.data || {},
    schema: this.props.schema,
    uiSchema: this.props.uiSchema,
    getSubmittedData: this.props.getSubmittedData,

  }
  componentDidMount(){
    this.setState(
      {
        data: this.state.data
      },
      (prevState)=>{}
    );
  }
  render() {
    const { title,data,schema,uiSchema,getSubmittedData} = this.state;
    store.dispatch(Actions.init(this.props.data, schema, uiSchema,ajv));
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
           <h3>{ title }</h3>
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
