import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";


// Text Fields MUI 
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';


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
            type: 'SET_EDIT_SUBMIT',
            payload: editIngredient
        })
       
        history.push('/user');
    }

    //CANCEL- works 
    const cancelClick = (event) => {
        history.push('/user');
    }

    console.log('edit Ingredient', editIngredient);

    return (
        <>
            <div className=".container">
                <div>
                    <h1> Edit Foods <EditIcon></EditIcon> </h1>
                </div>


                <div className="form ">
                    <Box sx={{ minWidth: 120 }}>

                        <form 
                        className="FormContainer"
                        onSubmit={(event) => handleSubmit(event, editIngredient)}>
                            <InputLabel> Edit Your Inventory </InputLabel>

                            <TextField
                                variant="outlined"
                                label="update food here"
                                type="text"
                                value={editIngredient.food_name}
                                onChange={(event) => handleChange(event, "food_name")}
                            />
                            <TextField
                            id="date"
                                placeholder="expiration_date"
                                helperText="Expiration Date"

                                type="date"
                                value={editIngredient.expiration_date}
                                onChange={(event) => handleChange(event, 'expiration_date')}
                            />

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

                    </Box>
                </div>
            </div>
        </>
    );
}

export default EditForm;