import React, { useState, useEffect, useCallback, useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
} from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { UserButton, MultiFilter, } from 'components';

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  chartDetailedContainer: {
    height: 600,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
  subdomain:{
    backgroundColor:'#e4e8ea',
  },
  domain:{
    backgroundColor:'#c2d8e3',
  },  
  subcomponent:{
    backgroundColor:'#fff',
  },  
}));

const SubDomainTableRow=({ row,nextRow,className,visible })=>{
  const classes = useStyles();
  return (
    row !== undefined?row.map( (subdomain,i)=> {      
      return (
        <>
          <TableRow className = { className } key={ subdomain.name }>
            <TableCell component="th" scope="row">
              {subdomain.name}
            </TableCell>
            <TableCell>
              {subdomain.current[0].y }
            </TableCell>
            <TableCell>
              {subdomain.goal[0].y}
            </TableCell>
          </TableRow>
          <SubDomainTableRow key={"next-"+subdomain.name+"-"+i } visible = { true } className = { classes.subcomponent } row={ subdomain[nextRow] }/>
        </>
        )
    }):
    (
      <Hidden xsUp={visible}>
        <TableRow>
          <TableCell></TableCell>
        </TableRow>
      </Hidden>
    )
  )
}

const HSDataTable = ({ hisStagesData, className, ...rest }) => {
  const classes = useStyles();
  const filters = ['Self','Consensus','All'];
  const [type, setType]= useState('Self');
  const [tableRows, setTableRows] = useState({ rows: hisStagesData });
  const getFilter =useCallback((ev)=>{
    if(ev !== undefined){
      if(ev.length > 0 && ev.isArray){
      
        if (type !== ev[0]) {
          // Row changed since last render. Update isScrollingDown.
          setType(ev[0] !== null && type > ev[0]);
        }
      }
      else{
        setType(ev);
      }
    }

  },[]);

 
  /**
   * handleChange for chart re-drawing
   */
  const createTable=async(ev)=>{
    getFilter(ev);
    const rows = hisStagesData;
    if (rows !== undefined){
      setTableRows(()=>{
        return {
          rows: rows
        }
      })
    }
  }
  useEffect((ev)=>{
    createTable(ev);
  },[hisStagesData]);
 
  return (
    <div>
      <Grid item container spacing={2} direction="row" justify="space-around" alignItems="center">
        <Grid item lg={12} xs={12} md={12} xl={12}>
          <Card className={clsx(classes.chartDetailedContainer, className)}>
            <CardHeader
              action={
                <Grid container>
                  <Grid item>
                    <MultiFilter label={'Assessment Type' } data={ filters } getData={ getFilter} />
                  </Grid>
                  <Grid item>
                    <UserButton color="primary" variant="text" value="Update" getFormData={ createTable }/>
                  </Grid>                 
                </Grid>
              }
              title={ "HIS Stages Data Analysis" }
            />
            <Divider />
            <CardContent>
            <Paper className={classes.root}>
              <div className={classes.tableWrapper}>
                <Table stickyHeader className={classes.table} aria-label="Data Table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Stage</TableCell>
                      <TableCell>Current</TableCell>
                      <TableCell>Goal</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    { 
                      tableRows.rows.map((row,i) => {
                        return (
                          <>
                            <TableRow className= { classes.domain } key={row.name+"-"+i}>
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell>
                                {row.current[0].y }
                              </TableCell>
                              <TableCell>
                                {row.goal[0].y }  
                              </TableCell>

                            </TableRow>
                            <SubDomainTableRow key={row.name+"-sub"+i } visible={ true } className = { classes.subdomain } row={ row.subdomains } nextRow= {'subcomponents'}/>
                          </>
                        )                        
                      })
                    }
                  </TableBody>
                </Table>
              </div>
            </Paper>
            </CardContent>
            <Divider />
            <CardActions>
              <div></div>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

HSDataTable.propTypes = {
  className: PropTypes.string
};

export default HSDataTable;
