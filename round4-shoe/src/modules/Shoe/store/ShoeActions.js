import axios from 'axios';
import * as ShoeActionTypes from './ShoeActionTypes';
import { BaseUrl } from '../../config/common';

export function getAllShoesStart(newShoe) {
  return dispatch => {
    axios.get(`${BaseUrl}/Shoes`).then(
      res => {
        if (res.status === 200) {
          dispatch(getAllShoesSuccess(res.data));
        }
      },
      err => {
        dispatch(getAllShoesFailure(err));
      }
    );
  };
}

const getAllShoesSuccess = data => {
  return {
    type: ShoeActionTypes.GET_ALL_SHOES_SUCCESS,
    payload: data
  };
};
const getAllShoesFailure = error => {
  return {
    type: ShoeActionTypes.GET_ALL_SHOES_FAILURE,
    payload: error
  };
};

export function addNewShoeStart(newShoe) {
  return dispatch => {
    axios.post(`${BaseUrl}/Shoes`, newShoe).then(
      res => {
        if (res.status === 201) {
          dispatch(addNewShoeSuccess(res.data));
        }
      },
      err => {
        dispatch(addNewShoeFailure(err));
      }
    );
  };
}

const addNewShoeSuccess = data => {
  return {
    type: ShoeActionTypes.ADD_NEW_SHOE_SUCCESS,
    payload: data
  };
};
const addNewShoeFailure = error => {
  return {
    type: ShoeActionTypes.ADD_NEW_SHOE_FAILURE,
    payload: error
  };
};

export function deleteShoeStart(id) {
  return dispatch => {
    axios.delete(`${BaseUrl}/Shoes/${id}/`).then(
      res => {
        if (res.status === 200) {
          dispatch(deleteShoeSuccess(id));
        }
      },
      err => {
        dispatch(deleteShoeFailure(err));
      }
    );
  };
}

const deleteShoeSuccess = data => {
  return {
    type: ShoeActionTypes.DELETE_SHOE_SUCCESS,
    payload: data
  };
};
const deleteShoeFailure = error => {
  return {
    type: ShoeActionTypes.DELETE_SHOE_FAILURE,
    payload: error
  };
};

export function updateShoeStart(id, newShoe) {
  return dispatch => {
    axios.put(`${BaseUrl}/Shoes/${id}/`, newShoe).then(
      res => {
        if (res.status === 200) {
          dispatch(updateShoeSuccess(res.data));
        }
      },
      err => {
        dispatch(updateShoeFailure(err));
      }
    );
  };
}

const updateShoeSuccess = newShoe => {
  return {
    type: ShoeActionTypes.UPDATE_SHOE_SUCCESS,
    payload: newShoe
  };
};
const updateShoeFailure = error => {
  return {
    type: ShoeActionTypes.UPDATE_SHOE_FAILURE,
    payload: error
  };
};

export default {
  getAllShoesStart,
  addNewShoeStart,
  deleteShoeStart,
  updateShoeStart
};
