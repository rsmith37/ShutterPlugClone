import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Axios from 'axios'
import { uploadImage, getImages } from '../../../actions/imageActions';

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
            const file = this.state.file;
            console.log("File: " + Object.getOwnPropertyNames(file));
            this.props.uploadImage(file);
        }

        onChange(e) {
            // This sets the state for the file that the user selects
            this.setState({ file: e.target.files[0] });
          }

    componentDidMount() {
        
        }
    

    render() {   
        const { image } = this.state;
    
        return (
            <div className="container">
                <div className="row">
                    <h1 className="text-center display-4 my-4">Mongo File Uploads</h1>
                    {/* <img
            src={image}
            alt='Helpful alt text'/> */}
                        <form onSubmit={this.onSubmit} encType="multipart/form-data" >
                       <div className="custom-file mb-3">
                           <input type="file" name="file" id="file" className="custom-file-input" onChange={this.onChange} />
                           <label htmlFor="file" className="custom-file-label">Choose File</label>
                           </div> 
                           <input type="submit" value="Submit" className="btn btn-primary btn-block"/>
                    </form>
                </div>
            </div>
        )
    }
}

UploadImage.propTypes = {
    uploadImage: PropTypes.func.isRequired,
    getImages: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    file: state.file
});

export default connect(mapStateToProps, {uploadImage, getImages})(UploadImage);