import * as React from "react";

const CardContext = React.createContext({ expanded: true, toggle: () => {} });

export default CardContext;
