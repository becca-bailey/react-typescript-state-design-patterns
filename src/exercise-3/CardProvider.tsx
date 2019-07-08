import * as React from "react";
import CardContext from "./CardContext";

interface CardProviderProps {
  // ✏️ Add your props here
}

interface CardProviderState {
  expanded: boolean;
}

class CardProvider extends React.Component<
  CardProviderProps,
  CardProviderState
> {
  constructor(props: CardProviderProps) {
    super(props);
    // ✏️ Initialize state here
    // 👀 Initializing state with an initial value is called the
    // state initializer pattern
  }

  render() {
    // 👀 Check out the children prop in StateManagerProps to
    // figure out what to return here
    return (
      <CardContext.Provider value={{}}>
        {this.props.children}
      </CardContext.Provider>
    );
  }
}

export default CardProvider;
