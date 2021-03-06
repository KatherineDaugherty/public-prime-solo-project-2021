
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* deleteIngredient(action) {
    try {
        //when DELETE_INGREDIENT is called 
        //${action.payload.id}  corresponds to /:id
        yield axios.delete(`/api/user/delete/${action.payload.id}`)
        console.log('action.payload' , action.payload);
        //call all FETCH to re render to page 
        yield put({ type: "FETCH_INGREDIENTS" })
    } catch (err) {
        console.log('error in delete', err);
        yield put

    }
};


function* deleteSaga() {
    //Watching for DELETE_ITEM to be called
    yield takeLatest('DELETE_INGREDIENT', deleteIngredient)
};

export default deleteSaga;
