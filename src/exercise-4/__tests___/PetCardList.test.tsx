import * as React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import PetCardList from "../PetCardList";

xdescribe("PetCardList", () => {
  const pets = [
    {
      id: "1",
      name: "Lucy",
      imageUrl: "http://placekitten.com/200/300",
      age: 1,
      favoriteActivities: ["eating", "bird watching", "sleeping"]
    },
    {
      id: "2",
      name: "Shadow",
      imageUrl: "http://placekitten.com/200/300",
      age: 7,
      favoriteActivities: ["rolling around on the floor"]
    }
  ];

  afterEach(cleanup);

  it("does not display the card bodies when it is first rendered", () => {
    const { queryAllByTestId } = render(<PetCardList pets={pets} />);

    expect(queryAllByTestId("card-body")).toHaveLength(0);
  });

  it("can expand the first card", async () => {
    const { getAllByTestId, queryAllByTestId } = render(
      <PetCardList pets={pets} />
    );

    expect(queryAllByTestId("card-body")).toHaveLength(0);

    fireEvent.click(getAllByTestId("card-toggle")[0]);

    expect(queryAllByTestId("card-body")).toHaveLength(1);
  });

  it("can collapse the first card", async () => {
    const { getAllByTestId, queryAllByTestId } = render(
      <PetCardList pets={pets} />
    );

    fireEvent.click(getAllByTestId("card-toggle")[0]);

    expect(queryAllByTestId("card-body")).toHaveLength(1);

    fireEvent.click(getAllByTestId("card-toggle")[0]);

    expect(queryAllByTestId("card-body")).toHaveLength(0);
  });

  it("only allows one card to be expanded", async () => {
    const { getAllByTestId, queryAllByTestId } = render(
      <PetCardList pets={pets} />
    );

    fireEvent.click(getAllByTestId("card-toggle")[0]);
    fireEvent.click(getAllByTestId("card-toggle")[1]);

    expect(queryAllByTestId("card-body")).toHaveLength(1);
  });

  it("calls onToggle if it is present", () => {
    const props = {
      pets,
      onToggle: jest.fn()
    };
    const { getAllByTestId } = render(<PetCardList {...props} />);

    fireEvent.click(getAllByTestId("card-toggle")[0]);

    expect(props.onToggle).toHaveBeenCalledWith("1");
  });
});
