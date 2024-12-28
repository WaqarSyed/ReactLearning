import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, featuredImage, title }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full rounded-xl bg-sky-300 p-4">
        <div className="w-full mb-4 justify-center">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl h-40 max-w-40"
          />
        </div>
        <p className="font-bold text-base truncate text-gray-700 ">{title}</p>
      </div>
    </Link>
  );
}

export default PostCard;
