import axios from "axios";
import { UPLOAD_IMAGE, GET_IMAGES } from "./types";
import setMultipartContentType from "../utils/setMultipartContentType";

// Upload image
export const uploadImage = file => dispatch => {
  console.log("Image " + file);
  console.log("Image size " + file.size);
  console.log("Image mime type " + file.mimetype);
  console.log("Image buffer " + file.buffer);

  const config = { headers: { 'Content-Type': 'multipart/form-data', 'Data': file[0] } };
  let fd = new FormData();
  fd.append('file', file[0])
  setMultipartContentType();
    axios
      // .post(`/api/images/upload`, fd, config)
      .post('/api/images/upload', fd, config)
      .then(res => {
        dispatch({
          type: UPLOAD_IMAGE,
          payload: res
        })}
      )
      .catch(err =>
        dispatch({
          type: UPLOAD_IMAGE,
          payload: err
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


