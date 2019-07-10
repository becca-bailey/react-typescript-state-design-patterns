import * as React from "react";
import CardListContext from "./CardListContext";

interface CardListProviderProps {
  initialExpandedCardId?: string;
  onToggle?(id?: string): void;
}

const CardListProvider: React.SFC<CardListProviderProps> = ({ children }) => {
  // ✏️Since this is a functional component, let's use the useState hook to keep track of our state here.

  return (
    <CardListContext.Provider value={{}}>{children}</CardListContext.Provider>
  );
};

export default CardListProvider;
