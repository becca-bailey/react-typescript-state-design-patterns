import * as React from "react";

interface CardManagerChildProps {
  expanded: boolean;
  toggle(): void;
}

interface CardManagerProps {
  initialExpanded?: boolean;
  onToggle?(expanded: boolean): void;
  children(props: CardManagerChildProps): React.ReactElement;
}

interface CardManagerState {
  expanded: boolean;
}

class CardManager extends React.Component<CardManagerProps, CardManagerState> {
  constructor(props: CardManagerProps) {
    super(props);
    // ✏️ Initialize state here
    // 👀 Initializing state with an initial value is called the
    // state initializer pattern
  }

  render() {
    // 👀 Check out the children prop in StateManagerProps to
    // figure out what to return here
    return <div />;
    // ^ ✏️ delete this
  }
}

export default CardManager;
