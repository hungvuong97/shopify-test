import {
    take,
    put,
    call,
    takeEvery,
    takeLatest,
    all
  } from "redux-saga/effects";


  function* workSaveTabByStation(action) {
    try {
        console.log(action, '124454545')
    } catch (error) {
      yield put({ type: "LOGIN_ERROR" });
    } finally {
        
      yield put({
        type: "DONE"
      });
    }
  }
  
  export function* watchSaveTabByStation() {
    yield takeLatest("ACTION_SAVE_PRODUCT_DESCRIPTION", workSaveTabByStation);
  }