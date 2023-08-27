import React from "react";

const Footer = () => {
  // Define a style for the background image
  const backgroundStyle = {
    backgroundImage: "url('/rotatebrain.gif')", // Replace with the actual GIF path
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "300px", // Set the desired height for the background
    width: '300px',
  };

  return (
    <div className="my-28 flex items-center justify-center">
      <div>
        <div
          className="relative"
          style={backgroundStyle}
        >
          {/* Add a semi-transparent background for text readability */}
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <span className="text-white text-xs absolute inset-0 flex items-center justify-center mt-[302px]  0 ml-20">
            Coded by Vlad Guzun
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
