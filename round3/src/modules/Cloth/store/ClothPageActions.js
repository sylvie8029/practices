import axios from 'axios';
import * as ClothPageActionTypes from './ClothPageActionTypes';
import { BaseUrl } from '../config/common';

export function getAllClothPagesStart(newClothPage) {
  return dispatch => {
    axios.get(`${BaseUrl}/ClothPages`).then(
      res => {
        if (res.status === 200) {
          dispatch(getAllClothPagesSuccess(res.data));
        }
      },
      err => {
        dispatch(getAllClothPagesFailure(err));
      }
    );
  };
}

const getAllClothPagesSuccess = data => {
  return {
    type: ClothPageActionTypes.GET_ALL_CLOTHPAGE__S_SUCCESS,
    payload: data
  };
};
const getAllClothPagesFailure = error => {
  return {
    type: ClothPageActionTypes.GET_ALL_CLOTHPAGE__S_FAILURE,
    payload: error
  };
};

export function addNewClothPageStart(newClothPage) {
  return dispatch => {
    axios.post(`${BaseUrl}/ClothPages`, newClothPage).then(
      res => {
        if (res.status === 201) {
          dispatch(addNewClothPageSuccess(res.data));
        }
      },
      err => {
        dispatch(addNewClothPageFailure(err));
      }
    );
  };
}

const addNewClothPageSuccess = data => {
  return {
    type: ClothPageActionTypes.ADD_NEW_CLOTHPAGE___SUCCESS,
    payload: data
  };
};
const addNewClothPageFailure = error => {
  return {
    type: ClothPageActionTypes.ADD_NEW_CLOTHPAGE___FAILURE,
    payload: error
  };
};

export function deleteClothPageStart(id) {
  return dispatch => {
    axios.delete(`${BaseUrl}/ClothPages/${id}/`).then(
      res => {
        if (res.status === 200) {
          dispatch(deleteClothPageSuccess(id));
        }
      },
      err => {
        dispatch(deleteClothPageFailure(err));
      }
    );
  };
}

const deleteClothPageSuccess = data => {
  return {
    type: ClothPageActionTypes.DELETE_CLOTHPAGE___SUCCESS,
    payload: data
  };
};
const deleteClothPageFailure = error => {
  return {
    type: ClothPageActionTypes.DELETE_CLOTHPAGE___FAILURE,
    payload: error
  };
};

export function updateClothPageStart(id, newClothPage) {
  return dispatch => {
    axios.put(`${BaseUrl}/ClothPages/${id}/`, newClothPage).then(
      res => {
        if (res.status === 200) {
          dispatch(updateClothPageSuccess(res.data));
        }
      },
      err => {
        dispatch(updateClothPageFailure(err));
      }
    );
  };
}

const updateClothPageSuccess = newClothPage => {
  return {
    type: ClothPageActionTypes.UPDATE_CLOTHPAGE___SUCCESS,
    payload: newClothPage
  };
};
const updateClothPageFailure = error => {
  return {
    type: ClothPageActionTypes.UPDATE_CLOTHPAGE___FAILURE,
    payload: error
  };
};

export default {
  getAllClothPagesStart,
  addNewClothPageStart,
  deleteClothPageStart,
  updateClothPageStart
};