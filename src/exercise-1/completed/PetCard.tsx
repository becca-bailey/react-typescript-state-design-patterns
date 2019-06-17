import * as React from "react";
import Card from "../../components/Card";
import { Pet } from "../../types";

// This is an exercise that uses setState to manage state inside this card Component.

// Instructions
// 1. Change xdescribe to describe in __tests__/Card.test.tsx
// 2. Run `yarn test`
// 3. Use setState to make this test suite pass.
// 4. Run `yarn storybook` to preview card

interface PetCardProps {
  initialExpanded?: boolean;
  onToggle?(expanded: boolean): void;
  pet: Pet;
}

interface PetCardState {
  expanded: boolean;
}

class PetCard extends React.Component<PetCardProps, PetCardState> {
  constructor(props: PetCardProps) {
    super(props);
    this.state = {
      expanded: props.initialExpanded || false
    };
  }

  render() {
    const { props, state } = this;
    return (
      <Card>
        <Card.Header>
          <Card.Image
            src={props.pet.imageUrl}
            alt={`A photo of ${props.pet.name}`}
          />
          <Card.HeaderContent>
            <Card.Title>{props.pet.name}</Card.Title>
            <Card.Toggle
              expanded={state.expanded}
              onToggle={this.handleToggle}
            />
          </Card.HeaderContent>
        </Card.Header>
        <Card.Body visible={state.expanded}>
          <h3>Age</h3>
          <p>{props.pet.age} years</p>
          <h3>Favorite Activities</h3>
          <ul>
            {props.pet.favoriteActivities.map((activity, i) => (
              <li key={i}>{activity}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
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

export default PetCard;
