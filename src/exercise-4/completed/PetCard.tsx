import * as React from "react";
import Card from "../../components/Card";
import { Pet } from "../../types";
import CardListContext from "./CardListContext";

interface PetCardProps {
  id: string;
  pet: Pet;
}

const PetCard: React.SFC<PetCardProps> = props => {
  const { expandedCardId, toggle } = React.useContext(CardListContext);
  const expanded = expandedCardId === props.id;
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
