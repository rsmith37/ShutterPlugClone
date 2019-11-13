import axios from "axios";
import { UPLOAD_IMAGE, GET_IMAGES } from "./types";

// Upload image
export const uploadImage = image => dispatch => {
  console.log("Image " + image);
  const config = {
    'Content-Type': 'multipart/form-data'
  }

  let fd = new FormData();
  fd.append('file', image);

    axios
      // .post(`/api/images/upload`, fd, config)
      .post('/api/images/upload', image)
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

  // Get all images
export const getImages = () => dispatch => {
  axios
    .get("/api/images/pics")
    .then(res =>
      dispatch({
        type: GET_IMAGES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_IMAGES,
        payload: null
      })
    );
};


