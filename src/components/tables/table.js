import React, { forwardRef, Component, useEffect, useState } from 'react';
import MaterialTable,{ MTableToolbar, MTableHeader, Paper as MTPaper} from 'material-table';
import  { AccountCircle,Favorite,FavoriteBorder,AddBox,ArrowUpward, Check,ChevronLeft,ChevronRight, Clear,Edit,FilterList,FirstPage,LastPage,Remove,SaveAlt,Save,Search,ViewColumn,DeleteOutline,ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Chip,
} from '@material-ui/core';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdtdataCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    Save: forwardRef((props, ref) => <Save {...props} ref={ref} />),
    AccountCircle: forwardRef((props, ref) => <AccountCircle {...props} ref={ref} />),
    Favorite: forwardRef((props, ref) => <Favorite {...props} ref={ref} />),
    FavoriteBorder: forwardRef((props, ref) => <FavoriteBorder {...props} ref={ref} />)
  };

  const useStyles = makeStyles(theme => ({
    root: {},
    content: {
      padding: 0
    },
    inner: {
      minWidth: 1050
    },
    nameContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    avatar: {
      marginRight: theme.spacing(2)
    },
    actions: {
      justifyContent: 'flex-end'
    }
  }));

const SimpleTable = ( props )=> {
  const { columns, data,title, url, headers, className, error, isLoaded, totalCount, ...rest } = props;
  const classes = useStyles();
  const [tdata,setTdata] = useState({
    columns:[],
    data: data,
    totalCount: 0,
    title: '',
    url: '',
    headers: [],
    error: null,
    isLoaded: false,
  });
  useEffect(()=>{
    let headers = new Headers();
    let username = "admin";
    let password = "district";
    let authString = `${username}:${password}`;
    setTdata({ data: data });
    headers.set('Authorization', 'Basic ' + btoa(authString));
    headers.set('Access-Control-Allow-Origin', '*');
    /*fetch(url,
      {
        headers:  headers,
      })
      .then(res => res.json())
      .then(
        (result: any) => {
          setTdata({
            data: result,
            totalCount: result.length,
            isLoaded: true
          });
        },
        (error) => {
          setTdata({
            isLoaded: true,
            error
          });
        }
      );*/
  },[]);

  return (
    <MaterialTable
      icons = { tableIcons }
      title= { title }
      columns={ columns }
      data={
        (data.length !== 0)? data: []
      }
      components={
        {
          Toolbar: props => (
              <div style={{ backgroundColor: '#232ddf' }}>
                  <MTableToolbar {...props} />
              </div>
          )
        },
        {
          Header: props => (
              <div style={{ backgroundColor: '#232ddf' }}>
                  <MTableHeader {...props} />
              </div>
          )
        },
        {
          MTPaper : props => (
            <Card
              {...rest}
              className={clsx(classes.root, className)}
            >
              <CardContent className={classes.content}>
                <PerfectScrollbar>
                  <div className={classes.inner}>
                    <MTPaper { ...props } />
                    </div>
                </PerfectScrollbar>
              </CardContent>

            </Card>
          )
        }
      }
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              {
                data.push(newData);
                setTdata({ data : data }, () => resolve());
              }
              resolve()
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              {
                const index = data.indexOf(oldData);
                data[index] = newData;
                setTdata({ data : data }, () => resolve());
              }
              resolve()
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              {
                const index = data.indexOf(oldData);
                data.splice(index, 1);
                setTdata({ data: data }, () => resolve());
              }
              resolve()
            }, 1000)
          }),
      }}
      detailPanel={[
        {
          tooltip: 'Show More',
          icon: ExpandMore,
          render: rowData => {
            return (
              <div
                style={{
                  fontSize: 100,
                  textAlign: 'center',
                  color: 'white',
                  backgroundColor: '#43A047',
                }}
              >
                {rowData.name}
              </div>
            )
          },
        },
      ]}
      actions={[
        {
          icon: Save,
          tooltip: 'Save',
          onClick: (event, rowData) => alert("You saved " + rowData.name)
        }
      ]}
      options={{
        exportButton: true,
        filtering:true,
        pageSize:10,
        search:true,
      }}
    />
  );
}
export default SimpleTable;
