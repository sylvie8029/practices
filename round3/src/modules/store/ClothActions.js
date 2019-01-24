import axios from 'axios';
import * as ClothActionTypes from './ClothActionTypes';
import { BaseUrl } from '../config/common';

export function getAllClothsStart(newCloth) {
  return dispatch => {
    axios.get(`${BaseUrl}/Cloths`).then(
      res => {
        if (res.status === 200) {
          dispatch(getAllClothsSuccess(res.data));
        }
      },
      err => {
        dispatch(getAllClothsFailure(err));
      }
    );
  };
}

const getAllClothsSuccess = data => {
  return {
    type: ClothActionTypes.GET_ALL_CLOTHS_SUCCESS,
    payload: data
  };
};
const getAllClothsFailure = error => {
  return {
    type: ClothActionTypes.GET_ALL_CLOTHS_FAILURE,
    payload: error
  };
};

export function addNewClothStart(newCloth) {
  return dispatch => {
    axios.post(`${BaseUrl}/Cloths`, newCloth).then(
      res => {
        if (res.status === 201) {
          dispatch(addNewClothSuccess(res.data));
        }
      },
      err => {
        dispatch(addNewClothFailure(err));
      }
    );
  };
}

const addNewClothSuccess = data => {
  return {
    type: ClothActionTypes.ADD_NEW_CLOTH_SUCCESS,
    payload: data
  };
};
const addNewClothFailure = error => {
  return {
    type: ClothActionTypes.ADD_NEW_CLOTH_FAILURE,
    payload: error
  };
};

export function deleteClothStart(id) {
  return dispatch => {
    axios.delete(`${BaseUrl}/Cloths/${id}/`).then(
      res => {
        if (res.status === 200) {
          dispatch(deleteClothSuccess(id));
        }
      },
      err => {
        dispatch(deleteClothFailure(err));
      }
    );
  };
}

const deleteClothSuccess = data => {
  return {
    type: ClothActionTypes.DELETE_CLOTH_SUCCESS,
    payload: data
  };
};
const deleteClothFailure = error => {
  return {
    type: ClothActionTypes.DELETE_CLOTH_FAILURE,
    payload: error
  };
};

export function updateClothStart(id, newCloth) {
  return dispatch => {
    axios.put(`${BaseUrl}/Cloths/${id}/`, newCloth).then(
      res => {
        if (res.status === 200) {
          dispatch(updateClothSuccess(res.data));
        }
      },
      err => {
        dispatch(updateClothFailure(err));
      }
    );
  };
}

const updateClothSuccess = newCloth => {
  return {
    type: ClothActionTypes.UPDATE_CLOTH_SUCCESS,
    payload: newCloth
  };
};
const updateClothFailure = error => {
  return {
    type: ClothActionTypes.UPDATE_CLOTH_FAILURE,
    payload: error
  };
};

export default {
  getAllClothsStart,
  addNewClothStart,
  deleteClothStart,
  updateClothStart
};
