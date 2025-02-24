import React, { useState } from "react";
import "./UpLoadPhoto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTrash } from "@fortawesome/free-solid-svg-icons";
const UpLoadPhoto = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <div className="upload-photo">
      <h3 className="category-title">Upload a Photo</h3>

      {image ? (
        <div className="photo-container">
          <div className="photo-container-img">
            <img src={image} alt="Uploaded Preview" />
          </div>
          <span onClick={removeImage} className="remove-photo">
            <FontAwesomeIcon icon={faTrash} color="#f1338f" />
            <p>Remove Photo</p>
          </span>
        </div>
      ) : (
        <label>
          <div className="img-input-con">
            <div
              className="img-input-field"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden-input"
                id="fileInput"
              />
              <FontAwesomeIcon
                icon={faImage}
                color="rgba(0,0,0,.5)"
                fontSize="24px"
              />
            </div>
            <span>
              <p>
                Student photo is required and it should be in png, jpeg or jpg
                format
              </p>
              <span className="input-button">Choose Photo</span>
            </span>
          </div>
        </label>
      )}
    </div>
  );
};

export default UpLoadPhoto;
