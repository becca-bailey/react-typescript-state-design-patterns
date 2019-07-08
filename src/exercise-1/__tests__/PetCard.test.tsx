import { cleanup, fireEvent, render, wait } from "@testing-library/react";
import * as React from "react";
import PetCard from "../PetCard";

const lucy = {
  name: "Lucy",
  imageUrl: "http://placekitten.com/300/300",
  age: 1,
  favoriteActivities: ["Playing with toy mice", "Sleeping", "Eating"]
};

xdescribe("PetCard", () => {
  afterEach(cleanup);

  it("does not display the card body when it is first rendered", () => {
    const { queryByTestId } = render(<PetCard pet={lucy} />);

    expect(queryByTestId("card-body")).toBeNull();
  });

  it("can be expanded", async () => {
    const { getByTestId, queryByTestId } = render(<PetCard pet={lucy} />);

    expect(queryByTestId("card-body")).toBeNull();

    fireEvent.click(getByTestId("card-toggle"));

    expect(getByTestId("card-body")).toBeTruthy();
  });

  it("can be initially expanded", async () => {
    const { getByTestId } = render(<PetCard pet={lucy} initialExpanded />);

    expect(getByTestId("card-body")).toBeTruthy();
  });

  it("calls onToggle if it is present", () => {
    const props = {
      pet: lucy,
      onToggle: jest.fn()
    };
    const { getByTestId } = render(<PetCard {...props} />);

    fireEvent.click(getByTestId("card-toggle"));

    expect(props.onToggle).toHaveBeenCalledWith(true);
  });
});
