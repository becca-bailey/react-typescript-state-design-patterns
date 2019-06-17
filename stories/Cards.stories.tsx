import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import PetCard from "../src/exercise-1/completed/PetCard";
import { Pet } from "../src/types";

const lucy: Pet = {
  name: "Lucy",
  imageUrl: "http://placekitten.com/300/300",
  age: 1,
  favoriteActivities: ["Playing with toy mice", "Sleeping", "Eating"]
};

storiesOf("Cards/PetCard", module).add("default", () => (
  <PetCard pet={lucy} onToggle={action("toggle")} />
));
