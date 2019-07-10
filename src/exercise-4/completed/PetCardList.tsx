import * as React from "react";
import { Pet } from "../../types";
import CardListProvider from "./CardListProvider";
import PetCard from "./PetCard";

interface PetCardListProps {
  pets: Pet[];
  onToggle?(id?: string): void;
}

const PetCardList: React.SFC<PetCardListProps> = props => {
  return (
    <CardListProvider onToggle={props.onToggle}>
      {props.pets.map(pet => (
        <PetCard id={pet.id} key={pet.id} pet={pet} />
      ))}
    </CardListProvider>
  );
};

export default PetCardList;
