import React from 'react';
import isPlainObject from 'lodash/isPlainObject';
import concat from 'lodash/concat';
import merge from 'lodash/merge';

/**
 Create events data payload for DHIS2 Event program without registration
**/
export const createDataValues=(currentData, event)=>{
  if(currentData !== undefined){
    currentData.events.push(event);
  }
  return currentData;
}
/**
 Create event from data submitted
**/
export const createEvent=(data)=>{
  let event:any = {
    dataValues:[]
  };
  if(data !== undefined){
    data.map((value)=>{
      Object.keys(value).map((keyValue)=>{
        event.dataValues=concat(event.dataValues,getValue(value[keyValue],keyValue));
      });
    });
  }
  return event;
}

/**
getValue from object
**/
const getValue=(value,key)=>{
  let objectArray= [];
  if(isPlainObject(value)){
    Object.keys(value).map((keyValue)=>{
      const keyProperty = '#/'+ key +'/properties/'+ keyValue;
      objectArray.push({ value:value[keyValue],dataElement:keyProperty});
    });
  }
  else{
      objectArray.push({ value: value, dataElement: key });
  }
  return objectArray;
}
/**
Check and create dataStore
**/
export const getDataStore= async (d2,namespace,key)=>{
  if(await d2.dataStore.has(namespace)){
    d2.dataStore.get(namespace).then(nsp=> {
      nsp.get(key).then(value => {
        console.log(namespace+ " already exists");
      });
    });
  }
  else{
    d2.dataStore.create(namespace).then(nsp => {
        nsp.set(key, {});
    });
  }
}
/**
Save data to datastore
**/
export const updateDataStore= async (d2,namespace,key,data)=>{
  if(await d2.dataStore.has(namespace)){
    d2.dataStore.get(namespace).then(nsp=> {
      nsp.get(key).then(value => {
        nsp.set(key, merge({},value,data));
      });
    });
  }
}
