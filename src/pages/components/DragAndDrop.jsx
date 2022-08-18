import React, { useState } from "react";
import Files from "react-files";
import add_img from "assets/img/add-image.svg";
import { isObjectEmpty } from "utils/helper";

const DragAndDrop = ({onChange}) => {
	const [uploadedFile, setUploadedFile] = useState([]);

	const onFilesChange = (file) => {
		setUploadedFile(file[0]);
    onChange()
		console.log(file, file[0].name);
	};

	// error to display when error on file upload
	const onFilesError = (error, file) => {
		console.log("error code " + error.code + ": " + error.message);
	};

	return (
		<div className="my-4">
			<Files
				className={`flex items-center justify-between py-6 px-5 bg-gray-50 rounded-md border-2 border-blue-300 border-dashed cursor-pointer`}
				onChange={onFilesChange}
				onError={onFilesError}
				accepts={["image/png", "image/jpeg"]} // accepts=["image/png", "image/jpeg", ".pdf", "audio/*"]
				multiple={false}
				maxFileSize={10 * 1000000} // maxFileSize={10000000}
				minFileSize={0} // minFileSize={0}
				clickable
			>
				{ uploadedFile.length === 0 ?
					<div>
						<i className="ut-cloud-upload ut--5x text-gray-300" />
						<p className="text-gray-600 font-semibold">Ajouter le logo du commerce</p>
						<p className="text--caption my-2 text-gray-400">Formats supportés: PNG, JPG</p>
						<p className="text--caption text-gray-400">Taille maximale: 10MB</p>
					</div>
          :
          <span className="text-gray-600 font-semibold">{uploadedFile.name} </span>
				}

				<button className="">
					<img src={uploadedFile.length === 0 ? '' : uploadedFile.preview?.url} onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src = add_img;
      }} className="rounded w-28 ml-4" />
				</button>
			</Files>
		</div>
	);
};

export default DragAndDrop;
