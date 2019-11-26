import React, { Component, useEffect, useState, useCallback } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { MultiFilter } from 'components';
import merge from 'lodash/merge';
HighchartsMore(Highcharts);

const useStyles = () => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
});
const filters = [];
export const createChartCategories=(options,categories)=>{
  options.xAxis={}
  options.xAxis.categories= categories;
  return options;
}
export const addChartSeries=(options,series,update)=>{
  if(update){
    if(series !== undefined){
      options.series.push(series);
      return options;
    }
  }
  else{
    return {
      ...options,
      series:[series]
    }
  }
}
export const changeChartType=(options,type)=>{
  if(type !== undefined){
    if(type === 'polar'){
      options.chart.type='line';
      options.chart.polar = true;
    }
    else{
      options.chart.type=type;
      options.chart.polar = false;
    }
    return options;
  }
}
export const changeChartTitle=(options,title)=>{
  if(title !== undefined){
    options.title.text=title;
    return options;
  }
}
export const Chart = ({ options, title, type, data }) => {
  return (
    <HighchartsReact
      { ...options }
      highcharts={Highcharts}
      constructorType={"chart"}
      options={ options }
      allowChartUpdate={true}
      updateArgs={[true, true, true]}
    />
  );
};
const options = {
  polar: true,
  title: {
    text: "",
  },
  credits: {
    enabled: false
  },
  xAxis: {
    categories: [],
  },
  labels: {
    items: [{
      html: '',
      style: {
        left: '50px',
        top: '18px',
        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
      }
    }]
  },
  series: [],
  plotOptions: {
    series: {
      point: {
        events: {
        }
      }
    }
  }
};
class LineChart extends Component {

  state = {
    title: this.props.title,
    chartType: this.props.charttype,
    series: this.props.series,
    // To avoid unnecessary update keep all options in the state.
    chartOptions:this.props.options? this.props.options:options,
    hoverData: null
  };
  setHoverData = (e) => {
    // The chart is not updated because `chartOptions` has not changed.
    this.setState({ hoverData: e.target.category })
  }

  updateSeries = (updates) => {
    // The chart is updated only with new options.
    const { title, chartType, series } = this.state;
    //updates.series[0].type = chartType;
    updates.series = series;
    updates.title.text = title;
    console.log("updates",updates);
    this.setState({
      chartOptions: updates
    });
  }

  render() {
    const { chartOptions, hoverData,title,chartType } = this.state;
    const { className,classes, ...rest } = this.props;
    return (
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardHeader
          action={
            <MultiFilter data={ filters }/>
          }
          title={ title }
        />
        <Divider />
        <CardContent>
          <div className={classes.chartContainer}>
            <HighchartsReact
              highcharts={Highcharts}
              options={chartOptions}
              allowChartUpdate={true}
              updateArgs={[true, true, true]}
            />
          </div>
        </CardContent>
        <Divider />
        <CardActions className={classes.actions}>
          <Button
            color="primary"
            size="small"
            variant="text"
            onClick={()=>{this.updateSeries(chartOptions)}}
          >
            Update <ArrowRightIcon />
          </Button>
        </CardActions>
      </Card>
    )
  }
}
LineChart.propTypes = {
  className: PropTypes.string
};
export default withStyles(useStyles)(LineChart);
