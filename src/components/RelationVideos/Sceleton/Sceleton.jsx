import React from "react";
import ContentLoader from "react-content-loader";

const Sceleton = () => {
  return (
    <ContentLoader
      speed={1}
      width={415}
      height={116}
      viewBox="0 0 415 116"
      backgroundColor="#3d3d3d"
      foregroundColor="#4d4d4d"
    >
      <rect x="0" y="0" rx="4" ry="4" width="150" height="116" />
      <rect x="160" y="0" rx="4" ry="4" width="250" height="40" />
      <rect x="160" y="57" rx="0" ry="0" width="150" height="20" />
      <rect x="160" y="93" rx="0" ry="0" width="105" height="19" />
    </ContentLoader>
  );
};

export default Sceleton;
