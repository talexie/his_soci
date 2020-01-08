import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import { Actions, jsonformsReducer, createAjv, getData, getDefaultData } from '@jsonforms/core';
import { materialCells, materialRenderers } from '@jsonforms/material-renderers';
import { JsonFormsDispatch,JsonFormsReduxContext, } from '@jsonforms/react';
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";

// Custom JSONforms controls
import RatingControl, { RatingControlTester } from './customRatingControl';
import customInputFileControl, { customInputFileControlTester } from './customFileControl';
import customInputControl, { customInputControlTester } from './customInputControl';
import CustomSelectControl, { CustomSelectControlTester } from './customSelectControl';
import CustomRadioGroupControl, { CustomRadioGroupControlTester } from './customRadioGroupControl';
import CustomGroupRenderer, { CustomGroupRendererTester } from './customGroupRenderer';
import cMaterialArrayLayoutRenderer, { cMaterialArrayLayoutRendererTester } from './materialArrayLayoutRenderer';

const styles = createStyles({
  container: {
    padding: '1em'
  },
});
const saveFormData = (state) => {
  let jsonFormState = state.getState();
  return { data: getData(jsonFormState),defaultData: getDefaultData(jsonFormState),errors: jsonFormState.jsonforms.core.errors,core:jsonFormState.jsonforms,schema:jsonFormState.jsonforms.core.schema,uischema:jsonFormState.jsonforms.core.uischema };
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
  }
  render() {
    const { title,schema,uiSchema,getSubmittedData} = this.state;
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
