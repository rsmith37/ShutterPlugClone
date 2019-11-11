import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Axios from 'axios'
import { uploadImage } from '../../../actions/imageActions';

class UploadImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            file: ""
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

        onSubmit(e) {
            e.preventDefault();
            const image = {
                file: this.state.file
            }
            // const file = this.state.file;
            this.props.uploadImage(image);
        }

        onChange(e) {
            // This sets the state for whatever input field the user is currently typing in
            this.setState({ [e.target.name]: e.target.value });
          }
    
    
    // fileSelectedHandler = event => {
    //     this.setState({
    //         selectedFile: event.target.files[0]
    //     })
    // }

    // fileUploadHandler = () => {
    //     const fd = new FormData();
    //     fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    //     Axios.post('', fd)
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => {
    //         res.json(err);
    //     });
    // }

    render() {   
    
        return (
            <div className="container">
                <div className="row">
                    <h1 className="text-center display-4 my-4">Mongo File Uploads</h1>
                    {/* <form action="/upload" method="POST" enctype="multipart/form-data"> */}
                        {/* <form action="/api/images/upload" method="post" encType="multipart/form-data"> */}
                        <form onSubmit={this.onSubmit}>
                       <div className="custom-file mb-3">
                           <input type="file" name="file" id="file" value={this.state.file} className="custom-file-input" onChange={this.onChange} />
                           <label htmlFor="file" className="custom-file-label">Choose File</label>
                           </div> 
                           <input type="submit" value="Submit" className="btn btn-primary btn-block"/>
                    </form>
                </div>
            </div>
            // <div>
            //     <input type="file" onChange={this.fileSelectedHandler}/>
            //     <button onClick={this.fileUploadHandler}>Upload</button>
            // </div>
        )
    }
}

UploadImage.propTypes = {
    uploadImage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    image: state.image
});

export default connect(mapStateToProps, {uploadImage})(UploadImage);