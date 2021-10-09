import React, { useState } from "react";
import axios from "axios";
import { Image } from "semantic-ui-react"

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import JustImageUpload from "./JustImageUpload";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function ImageUpload() {
  const [url, setUrl] = useState("no pictures")
  const [caption, setCaption] = useState("");
  const [files, setFiles] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(caption);
    try {
      // send image stuff in files state
      let data = new FormData();
      data.append("file", files[0].file);
      data.append("caption", caption);
      let res = await axios.post("/api/memes", data);
      console.log(res);
    } catch (err) {
      alert("err in post meme occured");
    }
  };

  const fileChanged = (fileItems) => {
    setFiles(fileItems);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p> OR upload a file </p>
        <FilePond
          files={files}
          allowMultiple={false}
          // onupdatefiles={setFiles}
          onupdatefiles={fileChanged}
          labelIdle='Drag and Drop your files or <span class="filepond--label-action">Browse</span>'
        />
        <br />
        <button type="submit">add</button>
      </form>
      <Image src={url} />
      {/* <JustImageUpload /> */}
    </div>
  );
}