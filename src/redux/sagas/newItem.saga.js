import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* postItem(action) {
    try {
        console.log('new item', action.payload);
        yield axios.post ('/api/type/post', action.payload);

        //yield put ({type: 'FETCH_INGREDIENTS'})
    } catch (error) {
        console.log('Error in POST', error);
        
    }
}

function* newItemSaga() {
    yield takeLatest('POST_ITEM', postItem);
}

export default newItemSaga;