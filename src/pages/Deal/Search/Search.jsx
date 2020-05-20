import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserLocation } from '../../../action/Application';
import { SearchDeal } from '../../../action/Deal';

import { 
  Table, 
  Link, 
  TableBody,
  TableCell, 
  TableHead,
  TableRow,
  Typography,
  } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  }
}));

const Search = ({  
  setUserLocation,
  location,
  deals,
  SearchDeal
}) => {  

  useEffect(() => {
    if(!location){
      if (navigator.geolocation) {
          navigator.geolocation.watchPosition(function(position) {
            const userLocation = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }          
            setUserLocation(userLocation);
        });
      }
    }
    if(!deals){
      SearchDeal({}); 
    }
  },[deals]);

  const classes = useStyles();

  return (
      <div className={classes.formControl}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Deals
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
            </TableRow>
          </TableHead>
          { deals &&
            <TableBody>
              {deals.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.value}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.location?.city}</TableCell>
                  <TableCell>{row.location?.state}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          } 
        </Table>
        <div className={classes.seeMore}>
          <Link color="primary" href="#" onClick={() => true}>
            See more deals
          </Link>
        </div>
      </div>
    )
};

const mapState = state => ({
  location: state.application.location,
  deals: state.deal.dealSearch
});

export default connect(
    mapState,
    {
      setUserLocation,
      SearchDeal
     }
)(Search);