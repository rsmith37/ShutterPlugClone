import axios from "axios";
import { UPLOAD_IMAGE } from "./types";

// Upload image
export const uploadImage = image => dispatch => {
  const headers = {
    'content-type': 'application/json',
    'Content-Type': 'multipart/form-data'
  }
    axios
      .post(`/api/images/upload`, image, {headers : headers})
      .then(res =>
        dispatch({
          type: UPLOAD_IMAGE,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: UPLOAD_IMAGE,
          payload: null
        })
      );
  };