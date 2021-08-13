import React, { useState } from "react";
import "./App.css";

import Dropzone from "react-dropzone";
import { BsDownload } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function App() {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) =>
    setFileNames(acceptedFiles.map((file) => file.name));

  return (
    <IconContext.Provider value={{ color: "#9eaeb6", size: "65" }}>
      <div className="App">
        <div className="outer-layer">
          {/* <div className="border-layer"></div> */}
          <div>
            <Dropzone
              onDrop={handleDrop}
              accept="image/*"
              minSize={1024}
              maxSize={3072000}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <div className="input-content-container">
                    <div>
                      <BsDownload />
                    </div>
                    <p>
                      <strong>Choose a file</strong> or drag it here.
                    </p>
                  </div>
                </div>
              )}
            </Dropzone>

            <div></div>
            <strong>Files:</strong>
            <ul>
              {fileNames.map((fileName) => (
                <li key={fileName}>{fileName}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
