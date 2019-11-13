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
const filters = [
'Last 7 Days',
'Last Week',
'Last Month'
];
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
    options.series = [];
    options.series.push(series);
    return options;
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
  const [state,setState] = useState(options);
  const handleChange=useCallback(async ()=>{
    await setState(options);
  },[]);
  useEffect(()=>{
    handleChange();
  },[state]);
  return (
    <HighchartsReact
      { ...state }
      highcharts={Highcharts}
      constructorType={"chart"}
      options={state}
      allowChartUpdate={true}
      updateArgs={[true, true, true]}
    />
  );
};
const options = {
  polar: true,
  title: {
    text: "Demo Chart",
  },
  credits: {
    enabled: false
  },
  xAxis: {
    categories: ['A', 'B', 'C'],
  },
  labels: {
    items: [{
      html: 'Total consumption',
      style: {
        left: '50px',
        top: '18px',
        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
      }
    }]
  },
  series: [{
      type: 'column',
      name: 'Jane',
      data: [3, 2, 1, 3, 4]
    }, {
      type: 'column',
      name: 'John',
      data: [2, 3, 5, 7, 6]
    }, {
      type: 'column',
      name: 'Joe',
      data: [4, 3, 3, 9, 0]
    }, {
      type: 'spline',
      name: 'Average',
      data: [3, 2.67, 3, 6.33, 3.33],
      marker: {
        lineWidth: 2,
        lineColor: Highcharts.getOptions().colors[3],
        fillColor: 'white'
      }
    },
    {
      type: 'pie',
      name: 'Total consumption',
      data: [{
        name: 'Jane',
        y: 13,
        color: Highcharts.getOptions().colors[0] // Jane's color
      }, {
        name: 'John',
        y: 23,
        color: Highcharts.getOptions().colors[1] // John's color
      }, {
        name: 'Joe',
        y: 19,
        color: Highcharts.getOptions().colors[2] // Joe's color
      }],
      center: [100, 80],
      size: 100,
      showInLegend: false,
      dataLabels: {
        enabled: false
      }
    }],
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
    const { title, chartType } = this.state;
    updates.series[0].type = chartType;
    updates.title.text = title;
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
