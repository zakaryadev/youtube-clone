import React from "react";
import ContentLoader from "react-content-loader";
import { Card } from "./styled";

const SkeletonCard = () => (
  <Card>
    <ContentLoader
      speed={1}
      width={295}
      height={265}
      viewBox="0 0 295 265"
      backgroundColor="#3d3d3d"
      foregroundColor="#4d4d4d"
    >
      <rect x="0" y="-1" rx="12" ry="12" width="289" height="150" />
      <rect x="0" y="160" rx="4" ry="4" width="289" height="40" />
      <rect x="-1" y="210" rx="4" ry="4" width="130" height="18" />
      <rect x="0" y="241" rx="4" ry="4" width="130" height="18" />
    </ContentLoader>
  </Card>
);

export default SkeletonCard;
