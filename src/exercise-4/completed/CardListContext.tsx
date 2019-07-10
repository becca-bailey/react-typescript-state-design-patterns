import * as React from "react";

interface CardListContextType {
  expandedCardId?: string;
  toggle(id?: string): void;
}

// ✏️You will need to add some default values here
const CardListContext = React.createContext<CardListContextType>({
  expandedCardId: undefined,
  toggle: () => {}
});

export default CardListContext;
