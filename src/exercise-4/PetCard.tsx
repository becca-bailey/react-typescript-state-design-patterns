import * as React from "react";
import Card from "../components/Card";
import { Pet } from "../types";

interface PetCardProps {
  id: string;
  pet: Pet;
}

const PetCard: React.SFC<PetCardProps> = props => {
  // ✏️ We will need to get the state from CardListContext. Let's use the useContext hook here.

  const expanded = true;
  const toggle = (id: string) => {};
  // 👀  ^ Update these variables
  return (
    <Card>
      <Card.Header>
        <Card.Image
          src={props.pet.imageUrl}
          alt={`A photo of ${props.pet.name}`}
        />
        <Card.HeaderContent>
          <Card.Title>{props.pet.name}</Card.Title>
          <Card.Toggle expanded={expanded} onToggle={() => toggle(props.id)} />
        </Card.HeaderContent>
      </Card.Header>
      <Card.Body visible={expanded}>
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
};

export default PetCard;
