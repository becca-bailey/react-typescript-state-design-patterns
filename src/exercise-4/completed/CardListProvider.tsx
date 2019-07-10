import * as React from "react";
import CardListContext from "./CardListContext";

interface CardListProviderProps {
  initialExpandedCardId?: string;
  onToggle?(id?: string): void;
}

const CardListProvider: React.SFC<CardListProviderProps> = ({
  initialExpandedCardId,
  onToggle,
  children
}) => {
  const [expandedCardId, setExpandedCardId] = React.useState(
    initialExpandedCardId
  );

  React.useEffect(() => {
    onToggle && onToggle(expandedCardId);
  });

  function toggle(id: string) {
    expandedCardId === id
      ? setExpandedCardId(undefined)
      : setExpandedCardId(id);
  }

  return (
    <CardListContext.Provider value={{ expandedCardId, toggle }}>
      {children}
    </CardListContext.Provider>
  );
};

export default CardListProvider;
