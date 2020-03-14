import {
    take,
    put,
    call,
    takeEvery,
    takeLatest,
    all
  } from "redux-saga/effects";

  function* workActiveTab(action) {
    try {
        console.log(action, 'asga')
      // yield put({
      //   type: errorTypes.PENDING
      // });
    //   const res = yield call(
    //     axios.post,
    //     "http://127.0.0.1:5000/api/users/login",
    //     action.payload
    //   );
    //   // Save to localStorage
    //   console.log(res.data);
    //   const { token } = res.data;
    //   // // Set token to ls
    //   localStorage.setItem("jwtToken", token);
    //   // // Set token to Auth header
    //   setAuthToken(token);
    //   // // Decode token to get user data
    //   const decoded = jwt_decode(token);
    //   yield put({ type: authTypes.LOGIN_SUCCESS, payload: decoded });
    console.log(action.data)
    } catch (error) {
      yield put({ type: "LOGIN_ERROR" });
    } finally {
      yield put({
        type: "DONE"
      });
    }
  }
  
  export function* watchActiveTab() {
    yield takeLatest("ACTION_SAVE_ACTIVE_TAB", workActiveTab);
  }
  

  function* workDefaultTab(action) {
    try {
        console.log(action, 'asgasdsd')
    } catch (error) {
      yield put({ type: "LOGIN_ERROR" });
    } finally {
      yield put({
        type: "DONE"
      });
    }
  }
  
  export function* watchDefaultTab() {
    yield takeLatest("ACTION_SAVE_DEFAULT_TAB", workDefaultTab);
  }

  function* workSaveTab(action) {
    try {
        console.log(action, '123')
    } catch (error) {
      yield put({ type: "LOGIN_ERROR" });
    } finally {
      yield put({
        type: "DONE"
      });
    }
  }
  
  export function* watchSaveTab() {
    yield takeLatest("ACTION_SAVE_All_TAB", workSaveTab);
  }



  function* workSaveProductTab(action) {
    try {
        console.log(action, '234')
    } catch (error) {
      yield put({ type: "LOGIN_ERROR" });
    } finally {
      yield put({
        type: "DONE"
      });
    }
  }
  
  export function* watchSaveProductTab() {
    yield takeLatest("ACTION_SAVE_CREATE_TAB", workSaveProductTab);
  }