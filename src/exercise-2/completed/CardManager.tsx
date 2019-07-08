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
    this.state = {
      // 👀 Initializing state with an initial value is called the
      // state initializer pattern
      expanded: props.initialExpanded || false
    };
  }

  render() {
    return this.props.children({
      expanded: this.state.expanded,
      toggle: this.handleToggle
    });
  }

  // 👀 This component is formatted as a bound function from
  // the class properties proposal syntax in order to access 'this'
  // from a child component.
  // https://reactjs.org/docs/faq-functions.html#class-properties-stage-3-proposal
  handleToggle = () => {
    this.setState(
      ({ expanded }) => ({
        expanded: !expanded
      }),
      () => this.props.onToggle && this.props.onToggle(this.state.expanded)
    );
  };
}

export default CardManager;
