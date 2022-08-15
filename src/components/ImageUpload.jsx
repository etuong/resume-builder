import React from "react";
import Files from "react-files";
import { useResume } from "../contexts/ResumeContext";

function ImageUpload() {
  const { about, setAbout } = useResume();

  const onFilesChange = (files) => {
    console.log(files[0].preview.url);
    setAbout({ ...about, picture: files[0].preview.url });
  };

  const onFilesError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
  };
  return (
    <Files
      className="files-dropzone"
      onChange={onFilesChange}
      onError={onFilesError}
      accepts={["image/png", "image/jpeg"]}
      maxFileSize={10000000}
      minFileSize={0}
      clickable
    >
      Upload Image
    </Files>
  );
}

export default ImageUpload;
