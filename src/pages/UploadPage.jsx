import { useState } from "react";
import { TiHome } from "react-icons/ti";
import { GoBell } from "react-icons/go";
import {
  AiOutlineCloudUpload,
  AiOutlineQuestionCircle,
  AiOutlineHistory,
} from "react-icons/ai";
import { MdContactSupport } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";

const UploadPage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-80 bg-[#12062A] text-white p-5 flex flex-col gap-6">
        <h1 className="text-2xl font-bold ">DIRTIFYDATA</h1>
        <nav className="flex flex-col gap-4">
          <a href="/" className="flex items-center gap-3">
            <span>
              <TiHome />
            </span>{" "}
            Home
          </a>
          <a href="#" className="flex items-center gap-3">
            <span>
              {" "}
              <AiOutlineQuestionCircle />{" "}
            </span>{" "}
            User Guide
          </a>
          <a href="#" className="flex items-center gap-3">
            <span>
              <AiOutlineHistory />
            </span>{" "}
            History
          </a>
          <a href="#" className="flex items-center gap-3">
            <span>
              <MdContactSupport />
            </span>{" "}
            Support
          </a>
          <a href="#" className="flex items-center gap-3">
            <span>
              <FaSignOutAlt />
            </span>{" "}
            Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-gray-100">
        {/* Header */}
        <div className="flex justify-end items-center mb-6">
          <GoBell className="w-6 h-6 text-gray-600" />
          <span className="ml-4 text-gray-700">elonmusk@gmail.com</span>
        </div>

        {/* Upload Section */}
        <div className="bg-white p-10 rounded-lg shadow-md max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold mb-4">
            Upload from your computer
          </h2>
          <label
            htmlFor="file-upload"
            className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-10 cursor-pointer hover:bg-gray-50"
          >
            <AiOutlineCloudUpload className="w-12 h-12 text-blue-500 mb-4" />
            <span className="text-blue-600 font-medium">
              Click to upload
            </span>{" "}
            or drag and drop
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          {file && (
            <p className="mt-4 text-gray-700">Selected file: {file.name}</p>
          )}
          <p className="text-gray-500 mt-2 text-sm">
            Max. upload file size (500MB)
          </p>
        </div>
      </main>
    </div>
  );
};
export default UploadPage;
