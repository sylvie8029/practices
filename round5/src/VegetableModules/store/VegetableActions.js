import axios from 'axios';
import * as VegetableActionTypes from './VegetableActionTypes';
import { BaseUrl } from '../../config/common';

export function getAllVegetablesStart(newVegetable) {
  return dispatch => {
    axios.get(`${BaseUrl}/Vegetables`).then(
      res => {
        if (res.status === 200) {
          dispatch(getAllVegetablesSuccess(res.data));
        }
      },
      err => {
        dispatch(getAllVegetablesFailure(err));
      }
    );
  };
}

const getAllVegetablesSuccess = data => {
  return {
    type: VegetableActionTypes.GET_ALL_VEGETABLES_SUCCESS,
    payload: data
  };
};
const getAllVegetablesFailure = error => {
  return {
    type: VegetableActionTypes.GET_ALL_VEGETABLES_FAILURE,
    payload: error
  };
};

export function addNewVegetableStart(newVegetable) {
  return dispatch => {
    axios.post(`${BaseUrl}/Vegetables`, newVegetable).then(
      res => {
        if (res.status === 201) {
          dispatch(addNewVegetableSuccess(res.data));
        }
      },
      err => {
        dispatch(addNewVegetableFailure(err));
      }
    );
  };
}

const addNewVegetableSuccess = data => {
  return {
    type: VegetableActionTypes.ADD_NEW_VEGETABLE_SUCCESS,
    payload: data
  };
};
const addNewVegetableFailure = error => {
  return {
    type: VegetableActionTypes.ADD_NEW_VEGETABLE_FAILURE,
    payload: error
  };
};

export function deleteVegetableStart(id) {
  return dispatch => {
    axios.delete(`${BaseUrl}/Vegetables/${id}/`).then(
      res => {
        if (res.status === 200) {
          dispatch(deleteVegetableSuccess(id));
        }
      },
      err => {
        dispatch(deleteVegetableFailure(err));
      }
    );
  };
}

const deleteVegetableSuccess = data => {
  return {
    type: VegetableActionTypes.DELETE_VEGETABLE_SUCCESS,
    payload: data
  };
};
const deleteVegetableFailure = error => {
  return {
    type: VegetableActionTypes.DELETE_VEGETABLE_FAILURE,
    payload: error
  };
};

export function updateVegetableStart(id, newVegetable) {
  return dispatch => {
    axios.put(`${BaseUrl}/Vegetables/${id}/`, newVegetable).then(
      res => {
        if (res.status === 200) {
          dispatch(updateVegetableSuccess(res.data));
        }
      },
      err => {
        dispatch(updateVegetableFailure(err));
      }
    );
  };
}

const updateVegetableSuccess = newVegetable => {
  return {
    type: VegetableActionTypes.UPDATE_VEGETABLE_SUCCESS,
    payload: newVegetable
  };
};
const updateVegetableFailure = error => {
  return {
    type: VegetableActionTypes.UPDATE_VEGETABLE_FAILURE,
    payload: error
  };
};

export default {
  getAllVegetablesStart,
  addNewVegetableStart,
  deleteVegetableStart,
  updateVegetableStart
};
