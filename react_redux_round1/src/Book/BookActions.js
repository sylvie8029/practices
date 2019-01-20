import axios from 'axios';
import * as BookActionTypes from './BookActionTypes';
import { BaseUrl } from '../config/common';

export function getAllBooksStart(newBook) {
  return dispatch => {
    axios.get(`${BaseUrl}/Books`).then(
      res => {
        if (res.status === 200) {
          dispatch(getAllBooksSuccess(res.data));
        }
      },
      err => {
        dispatch(getAllBooksFailure(err));
      }
    );
  };
}

const getAllBooksSuccess = data => {
  return {
    type: BookActionTypes.GET_ALL_BOOKS_SUCCESS,
    payload: data
  };
};
const getAllBooksFailure = error => {
  return {
    type: BookActionTypes.GET_ALL_BOOKS_FAILURE,
    payload: error
  };
};

export function addNewBookStart(newBook) {
  return dispatch => {
    axios.post(`${BaseUrl}/Books`, newBook).then(
      res => {
        if (res.status === 201) {
          dispatch(addNewBookSuccess(res.data));
        }
      },
      err => {
        dispatch(addNewBookFailure(err));
      }
    );
  };
}

const addNewBookSuccess = data => {
  return {
    type: BookActionTypes.ADD_NEW_BOOK_SUCCESS,
    payload: data
  };
};
const addNewBookFailure = error => {
  return {
    type: BookActionTypes.ADD_NEW_BOOK_FAILURE,
    payload: error
  };
};

export function deleteBookStart(id) {
  return dispatch => {
    axios.delete(`${BaseUrl}/Books/${id}/`).then(
      res => {
        if (res.status === 200) {
          dispatch(deleteBookSuccess(id));
        }
      },
      err => {
        dispatch(deleteBookFailure(err));
      }
    );
  };
}

const deleteBookSuccess = data => {
  return {
    type: BookActionTypes.DELETE_BOOK_SUCCESS,
    payload: data
  };
};
const deleteBookFailure = error => {
  return {
    type: BookActionTypes.DELETE_BOOK_FAILURE,
    payload: error
  };
};

export function updateBookStart(id, newBook) {
  return dispatch => {
    axios.put(`${BaseUrl}/Books/${id}/`, newBook).then(
      res => {
        if (res.status === 200) {
          dispatch(updateBookSuccess(res.data));
        }
      },
      err => {
        dispatch(updateBookFailure(err));
      }
    );
  };
}

const updateBookSuccess = newBook => {
  return {
    type: BookActionTypes.UPDATE_BOOK_SUCCESS,
    payload: newBook
  };
};
const updateBookFailure = error => {
  return {
    type: BookActionTypes.UPDATE_BOOK_FAILURE,
    payload: error
  };
};

export default {
  getAllBooksStart,
  addNewBookStart,
  deleteBookStart,
  updateBookStart
};
