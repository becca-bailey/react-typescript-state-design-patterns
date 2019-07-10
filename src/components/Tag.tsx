import * as React from "react";
import { Chip } from "@material-ui/core";

const Tag: React.SFC = ({ children }) => {
  return <Chip label={children} />;
};

export default Tag;
