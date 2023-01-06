import React from "react";

function ImageCard({ image }) {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-sm  overflow-hidden shadow-lg rounded my-4 hover:skew-x-12 translate-x-3">
      <img src={image.webformatURL} alt="random image" className="w-full" />
      <div className="px-4 py-2">
        <div className="font-bold text-xl text-purple-900">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Download:</strong>
            {image.downloads}
          </li>
          <li>
            <strong>size:</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="py-2 px-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-400 rounded inline-block font-bold px-2 py-1 mr-2 cursor-pointer capitalize"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ImageCard;
