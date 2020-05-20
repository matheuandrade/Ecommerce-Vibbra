import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createDeal } from '../../../action/Deal';
import { useForm } from "react-hook-form";
import SaveIcon from '@material-ui/icons/Save';

import { 
  Button, 
  TextField, 
  FormControl,
  Grid, 
  Typography,
  InputLabel,
  Select,
  MenuItem,
  } from '@material-ui/core';

import useStyles from './Styles';

const CreateDeal = ({
  createDeal
}) => {  

  const { register, handleSubmit, errors } = useForm();

  const [dealType, setDealType] = useState(1);
  const [urgencyType, setUrgencyType] = useState(1);

  const handleDealType = (event) => {
    setDealType(event.target.value);
  };

  const handleUrgencyType = (event) => {
    setUrgencyType(event.target.value);
  };

  const onSubmit = async (data) => {
    // const response = await createDeal(data);

    console.log(data);
    
  };

  const classes = useStyles();

    return (
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formControl} noValidate>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Create Deal
        </Typography>
          <Grid container spacing={3}>       
            <Grid item xs={2} md={2} >
              <TextField
                  error={errors.value}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="value"
                  label="Value"
                  name="value"
                  autoComplete="off"
                  helperText={errors.value && "Value is required."}
                  autoFocus
                  inputRef={register({ required: true })}
              />          
            </Grid>

            <Grid item xs={3} md={3}>
              <TextField
                  error={errors.description}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="off"
                  helperText={errors.description && "Description is required."}
                  autoFocus
                  inputRef={register({ required: true })}
              />
            </Grid>  

            <Grid item xs={2} md={2}>
              <TextField
                  error={errors.tradeFor}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="tradeFor"
                  label="Trade for"
                  name="tradeFor"
                  autoComplete="off"
                  helperText={errors.tradeFor && "Trade For is required."}
                  autoFocus
                  inputRef={register({ required: true })}
                />
            </Grid>
            <Grid item xs={2} md={2}>
              <FormControl variant="outlined" className={classes.formControlSelect}>
                  <InputLabel id="tipo-label">Tipo</InputLabel>
                  <Select
                      labelId="tipo-label"
                      id="type"
                      value={dealType}
                      onChange={handleDealType}
                      label="Type"
                      className="outlined"
                    >
                    <MenuItem value={1}>Venda</MenuItem>
                    <MenuItem value={2}>Troca</MenuItem>
                    <MenuItem value={3}>Desejo</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
          </Grid>
          <br></br>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Location
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={2} md={2}>
                <TextField
                      error={errors.latitude}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="latitude"
                      label="Latitude"
                      name="latitude"
                      autoComplete="off"
                      helperText={errors.latitude && "Latitude is required."}
                      autoFocus
                      inputRef={register({ required: true })}
                />
            </Grid>
            <Grid item xs={2} md={2}>
                <TextField
                      error={errors.longitude}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="longitude"
                      label="Longitude"
                      name="longitude"
                      autoComplete="off"
                      helperText={errors.longitude && "Longitude is required."}
                      autoFocus
                      inputRef={register({ required: true })}
                />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4} md={4}>
              <TextField
                    error={errors.address}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="off"
                    helperText={errors.address && "Address is required."}
                    autoFocus
                    inputRef={register({ required: true })}
              />
            </Grid>
            <Grid item xs={2} md={2}>
              <TextField
                    error={errors.city}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                    autoComplete="off"
                    autoFocus
                    inputRef={register({ required: true })}
                    helperText={errors.city && "City is required."}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={2} md={2}>
                <TextField
                      error={errors.state}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="state"
                      label="State"
                      name="state"
                      autoComplete="off"
                      autoFocus
                      inputRef={register({ required: true })}
                      helperText={errors.state && "State is required."}
                />
            </Grid>
            <Grid item xs={2} md={2}>
                <TextField
                      error={errors.zipcode}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="zipcode"
                      label="Zipcode"
                      name="zipcode"
                      autoComplete="off"
                      helperText={errors.zipcode && "Zipcode is required."}
                      autoFocus
                      inputRef={register({ required: true })}
                />
              </Grid>
            </Grid>
            <br></br>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Urgency
            </Typography>
            <br></br>
            <Grid container spacing={3}>
              <Grid item xs={1} md={1}>
                <FormControl variant="outlined">
                    <InputLabel id="tipo-label">Urgency</InputLabel>
                    <Select
                        labelId="tipo-label"
                        id="tipo"
                        value={urgencyType}
                        onChange={handleUrgencyType}
                        label="Age"
                        className="outlined"
                      >
                      <MenuItem value={1}>Baixa</MenuItem>
                      <MenuItem value={2}>Média</MenuItem>
                      <MenuItem value={3}>Alta</MenuItem>
                      <MenuItem value={4}>Data</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
                <Grid item xs={3} md={3} variant="outlined" container justify="space-around">
                  <TextField
                    id="date"
                    label="Limit Date"
                    type="date"
                    variant="outlined"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
            </Grid>
            <br></br>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Photos
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={6} md={6}>
                  <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="photo"
                        label="Photo Url"
                        name="photo"
                        autoComplete="off"
                        autoFocus
                        inputRef={register({ required: true })}
                  />
                </Grid>
            </Grid>
            <br></br>
            <Grid container spacing={6}>
              <Grid item xs={2} md={2} container justify="space-around">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
    </form>
    )
};

export default connect(
  null,
  {
    createDeal,
  }
)(CreateDeal);
