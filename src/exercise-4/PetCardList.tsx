import * as React from "react";
import { Pet } from "../types";
import CardListProvider from "./CardListProvider";
import PetCard from "./PetCard";

// This is an exercise that uses hooks and context to manage the state of the entire card list
// Context Docs: https://reactjs.org/docs/context.html
// Hooks Docs: https://reactjs.org/docs/hooks-reference.html

// Instructions
// 1. Change xdescribe to describe in __tests__/PetCardList.test.tsx
// 2. Run `yarn test`
// 3. Use a context and provider to make this test suite pass
// (You will need to update PetCard.tsx, CardListContext.tsx and CardListProvider.tsx )

interface PetCardListProps {
  pets: Pet[];
  onToggle?(id?: string): void;
}

const PetCardList: React.SFC<PetCardListProps> = props => {
  return (
    <CardListProvider>
      {props.pets.map(pet => (
        <PetCard id={pet.id} key={pet.id} pet={pet} />
      ))}
    </CardListProvider>
  );
};

export default PetCardList;
