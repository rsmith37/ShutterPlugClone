import axios from "axios";

import setAuthToken from '../utils/setAuthToken';
import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER
} from "./types";

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile")
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

// Get profile by User ID
export const getProfileByUserId = userId => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/${userId}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: null
      })
    );
};

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
    axios
    .post("/api/profile", profileData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get all profiles
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile/all")
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILES,
        payload: null
      })
    );
};

// Search for profiles
export const searchProfiles = (search) => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile/search', search)
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      })  
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILES,
        payload: {}
      })  
    )
}

// Delete account & profile
export const deleteAccount = () => dispatch => {
  if (window.confirm('Are you sure? This action CAN NOT be undone!')) {
   axios
    .delete('/api/profile')
    .then(res => 
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        })
    )
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
    
    // Remove profile from state
    dispatch(clearCurrentProfile());
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
  }
}

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
