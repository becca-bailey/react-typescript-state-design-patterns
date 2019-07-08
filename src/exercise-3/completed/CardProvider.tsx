import * as React from "react";
import CardContext from "./CardContext";

interface CardProviderProps {
  initialExpanded?: boolean;
  onToggle?(expanded: boolean): void;
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
    this.state = {
      expanded: props.initialExpanded || false
    };
  }

  get stateAndHelpers() {
    return {
      expanded: this.state.expanded,
      toggle: this.handleToggle
    };
  }

  render() {
    return (
      <CardContext.Provider value={this.stateAndHelpers}>
        {this.props.children}
      </CardContext.Provider>
    );
  }

  // ✏️This component is formatted as a bound function from
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

export default CardProvider;
