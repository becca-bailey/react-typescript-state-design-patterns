import { cleanup, fireEvent, render } from "@testing-library/react";
import * as React from "react";
import EmployeeCard from "../EmployeeCard";

const bill = {
  name: "Bill Murray",
  position: "Walker",
  imageUrl: "https://fillmurray.com/300/300"
};

xdescribe("EmployeeCard", () => {
  afterEach(cleanup);

  it("does not display the card body when it is first rendered", () => {
    const { queryByTestId } = render(<EmployeeCard employee={bill} />);

    expect(queryByTestId("card-body")).toBeNull();
  });

  it("can be expanded", async () => {
    const { getByTestId, queryByTestId } = render(
      <EmployeeCard employee={bill} />
    );

    expect(queryByTestId("card-body")).toBeNull();

    fireEvent.click(getByTestId("card-toggle"));

    expect(getByTestId("card-body")).toBeTruthy();
  });

  it("displays tags only when collapsed", () => {
    const { queryByTestId, getByTestId } = render(
      <EmployeeCard employee={bill} />
    );

    expect(queryByTestId("tags")).toBeTruthy();

    fireEvent.click(getByTestId("card-toggle"));

    expect(queryByTestId("tags")).toBeNull();
  });

  it("can be initially expanded", async () => {
    const { getByTestId } = render(
      <EmployeeCard employee={bill} initialExpanded />
    );

    expect(getByTestId("card-body")).toBeTruthy();
  });

  it("calls onToggle if it is present", () => {
    const props = {
      employee: bill,
      onToggle: jest.fn()
    };
    const { getByTestId } = render(<EmployeeCard {...props} />);

    fireEvent.click(getByTestId("card-toggle"));

    expect(props.onToggle).toHaveBeenCalledWith(true);
  });
});
