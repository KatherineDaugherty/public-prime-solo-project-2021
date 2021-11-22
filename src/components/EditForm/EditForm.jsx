import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";


// Text Fields MUI 
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

//Install MUI 
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function EditForm(props) {

    //intialize hooks 
    const dispatch = useDispatch();
    const history = useHistory();
    const editIngredient = useSelector((store) => store.editIngredientReducer);

    //get type and location for dropdown arrays 
    const type = useSelector(store => store.type);
    const location = useSelector(store => store.location);

    useEffect(() => {
        dispatch({ type: 'FETCH_TYPE' });
        dispatch({ type: 'FETCH_LOCATION' });
    }, []);

    //check if changing as typing 
    function handleChange(event, property) {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: property, value: event.target.value }
        });
    }

    //called with submit button is pushed
    function handleSubmit(event) {
        event.preventDefault();
        dispatch({
            type: 'SET_EDIT_ITEM',
            payload: editIngredient
        })
        dispatch({
            type: 'CLEAR_EDIT', payload: ''
        })
        history.push('/user');

    }

    //CANCEL- works 
    const cancelClick = (event) => {
        alert('nothing was saved');
        history.push('/user');
    }


    console.log('food_name', editIngredient);
    console.log('type', type )


    return (
        <>
            <div className=".container">
                <div>
                    <h1> Edit Foods </h1>
                </div>


                <div className="form">
                    <Box sx={{ minWidth: 120 }}>

                        {/* <FormControl full width> */}
                        {/* className="formPanel" */}


                        <form onSubmit={(event) => handleSubmit(event, editIngredient)}>
                            <InputLabel> Edit Your Inventory </InputLabel>

                            <TextField
                                variant="outlined"
                                label="type food here"
                                type="text"
                                value={editIngredient.food_name}
                                onChange={(event) => handleChange(event, "food_name")}
                            />

                            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Expiration Date"
                            value={newItem.expiration_date}
                            onChange={(event) => handlePropertyChange(event, 'expiration_date')}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider> */}
                            <input
                                placeholder="expiration_date"
                                type="date"
                                value={editIngredient.expiration_date}
                                onChange={(event) => handleChange(event, 'expiration_date')}
                            />

{/* **********NEEDS WORK  */}
                            {/* Types Dropdown */}
                            <InputLabel> Type of Food </InputLabel>
                            <Select
                                label="type"
                                value={editIngredient.food_type_id}
                                onChange={(event) => handleChange(event, 'food_type_id')}>


                                {type.map((type) => {
                                    return (
                                        <MenuItem key={type.id} value={type.id}>
                                            {type.type}
                                        </MenuItem>
                                    );
                                })}
                            </Select>

{/* **************NEEDS WORK  */}
                            {/* Location dropdown */}
                            <InputLabel> Location of Food </InputLabel>

                            <Select
                                label="location"
                                placeholder="location_id"
                                value={editIngredient.location_id}
                                onChange={(event) => handleChange(event, 'location_id')}
                            >

                                {location.map((location) => {
                                    return (
                                        <MenuItem key={location.id} value={location.id}>
                                            {location.location}
                                        </MenuItem>
                                    );
                                })}

                            </Select>

                            <Stack direction="column" spacing={2}>
                                <Button
                                    type="submit"
                                    variant="contained">
                                    Update </Button>

                                <Button
                                    type="button"
                                    onClick={cancelClick}
                                    variant="contained">
                                    Cancel </Button>
                            </Stack>
                        </form>

                        {/* </FormControl> */}
                    </Box>
                </div>
            </div>
        </>

    );
}

export default EditForm;