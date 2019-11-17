import {
    UPLOAD_IMAGE
  } from "../actions/types";
  
  const initialState = {
    file: ""
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case UPLOAD_IMAGE:
        return {
          ...state,
          file: action.payload.file
        };
      default:
        return state;
    }
  }
  