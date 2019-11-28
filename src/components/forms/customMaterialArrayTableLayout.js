import range from 'lodash/range';
import React from 'react';
import {
  ArrayLayoutProps,
  composePaths,
  computeLabel,
  createDefaultValue,
  isPlainLabel,
  findUISchema,
} from '@jsonforms/core';
import map from 'lodash/map';
import Paper from '@material-ui/core/Paper';
import  ExpandPanelRenderer from '@jsonforms/material-renderers';
import { CustomArrayLayoutToolbar } from "./customArrayLayoutToolbar";
import merge from 'lodash/merge';

const paperStyle = { padding: 10 };
interface MaterialArrayLayoutState {
  expanded: string | boolean;
}
export class CustomMaterialArrayLayout extends React.PureComponent<
  ArrayLayoutProps,
  MaterialArrayLayoutState
> {
  state: MaterialArrayLayoutState = {
    expanded: null
  };
  innerCreateDefaultValue = () => createDefaultValue(this.props.schema);
  handleChange = (panel: string) => (_event: any, expanded: boolean) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };
  isExpanded = (index: number) =>
    this.state.expanded === composePaths(this.props.path, `${index}`);
  render() {
    const {
      data,
      path,
      schema,
      uischema,
      errors,
      addItem,
      renderers,
      label,
      required,
      rootSchema,
      config,
      uischemas,
    } = this.props;
    const appliedUiSchemaOptions = merge(
      {},
      config,
      this.props.uischema.options
    );
    let showForm = false;
    const foundUISchema = findUISchema(
      uischemas,
      schema,
      uischema.scope,
      path,
      undefined,
      uischema,
      rootSchema
    );
    return (
      <Paper style={paperStyle}>
        <CustomArrayLayoutToolbar
          label={computeLabel(
            isPlainLabel(label) ? label : label.default,
            required,
            appliedUiSchemaOptions.hideRequiredAsterisk
          )}
          errors={errors}
          path={path}
          schema = { schema }
          uischema = { uischema }
          addItem={ addItem }
          renderers = { renderers }
          foundUISchema = { foundUISchema }
          createDefault={ this.innerCreateDefaultValue}
        />
        <div>
          {data > 0 ? (
            map(range(data), index => {
              return (
                <ExpandPanelRenderer
                  index={index}
                  expanded={this.isExpanded(index)}
                  schema={schema}
                  path={path}
                  handleExpansion={this.handleChange}
                  uischema={uischema}
                  renderers={renderers}
                  key={index}
                  rootSchema={rootSchema}
                  enableMoveUp={index != 0}
                  enableMoveDown={index < data - 1}
                  config={config}
                />
              );
            })
          ) : (
            <p>No data</p>
          )}
        </div>
      </Paper>
    );
  }
}
export default CustomMaterialArrayLayout
