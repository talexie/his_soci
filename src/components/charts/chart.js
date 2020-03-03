import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

export const createChartCategories=(options,categories)=>{
  options.xAxis={}
  options.xAxis.categories= categories;
  return options;
}
/**
 * create his_soci chart
 * @param { array } Data to be visualized on chart
 * @param { string } Name of the chart series
 */
export const createHisSociChart=(data,name,type)=>{
  const hisSociChart = {
    type: type,
    pointPlacement: 'on',
    name: name,
    data: data
  }
  return hisSociChart;
}
export const addChartSeries=(options,series,update)=>{
  if(update){
    if(series !== undefined){
      options.series.push(series);
      return options;
    }
    else{
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
      options.chart={
        type:'line',
        polar:true
      }
    }
    else{
      options.chart={
        type:type,
        polar:false
      }
    }
    return options;
  }
}
export const changeChartTitle=(options,title)=>{
  if(title !== undefined){    
    options.title={
      text:title
    }
    return options;
  }
}
export const Chart = ({ options }) => {
  return (
    <HighchartsReact
      { ...options }
      highcharts={ Highcharts }
      constructorType={"chart"}
      options={ options }
      allowChartUpdate={ true }
      updateArgs={[true, true, true]}
    />
  );
};
export default Chart;
