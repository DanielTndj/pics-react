import React from "react";

const ImageList = ({ images }) => {
  const pics = images.map(({ id, urls, alt_description }) => {
    return <img key={id} src={urls.regular} alt={alt_description} />;
  });

  return <div className="">{pics}</div>;
};

export default ImageList;
