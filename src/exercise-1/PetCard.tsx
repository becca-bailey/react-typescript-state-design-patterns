import * as React from "react";
import Card from "../components/Card";
import { Pet } from "../types";

// This is an exercise that uses setState to manage state inside this card Component.

// Instructions
// 1. Change xdescribe to describe in __tests__/PetCard.test.tsx
// 2. Run `yarn test`
// 3. Add state to this component to make the tests pass.
// 4. Run `yarn storybook` to preview card

interface PetCardProps {
  pet: Pet;
  initialExpanded?: boolean;
}

interface PetCardState {
  //✏️ Add code here
}

class PetCard extends React.Component<PetCardProps, PetCardState> {
  render() {
    const { props } = this;
    return (
      <Card>
        <Card.Header>
          <Card.Image
            src={props.pet.imageUrl}
            alt={`A photo of ${props.pet.name}`}
          />
          <Card.HeaderContent>
            <Card.Title>{props.pet.name}</Card.Title>
            <Card.Toggle onToggle={this.handleToggle} />
          </Card.HeaderContent>
        </Card.Header>

        {/* 👀 Check this visible prop */}
        <Card.Body visible={true}>
          <h3>Age</h3>
          <p>{props.pet.age} years</p>
          <h3>Favorite Activities</h3>
          <ul>
            {props.pet.favoriteActivities.map((activity: string, i: number) => (
              <li key={i}>{activity}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    );
  }

  // This component is formatted as a bound function from
  // the class properties proposal syntax in order to access 'this'
  // from a child component.
  // https://reactjs.org/docs/faq-functions.html#class-properties-stage-3-proposal
  handleToggle = () => {
    //✏️ Add code here
  };
}

export default PetCard;
