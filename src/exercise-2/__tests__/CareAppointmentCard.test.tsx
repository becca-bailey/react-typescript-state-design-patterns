import { cleanup, fireEvent, render } from "@testing-library/react";
import * as React from "react";
import CareAppointmentCard from "../CareAppointmentCard";

const lucy = {
  name: "Lucy",
  imageUrl: "http://placekitten.com/300/300",
  age: 1,
  favoriteActivities: ["Playing with toy mice", "Sleeping", "Eating"]
};

const becca = {
  name: "Becca",
  phoneNumber: "(555) 555-5555",
  email: "becca@test.com"
};

const bill = {
  name: "Bill Murray",
  position: "Walker",
  imageUrl: "https://fillmurray.com/300/300"
};

const careAppointment = {
  pets: [lucy],
  owner: becca,
  employee: bill,
  date: new Date("2019-07-01")
};

xdescribe("CareAppointmentCard", () => {
  afterEach(cleanup);

  it("does not display the card body when it is first rendered", () => {
    const { queryByTestId } = render(
      <CareAppointmentCard careAppointment={careAppointment} />
    );

    expect(queryByTestId("card-body")).toBeNull();
  });

  it("can be expanded", async () => {
    const { getByTestId, queryByTestId } = render(
      <CareAppointmentCard careAppointment={careAppointment} />
    );

    expect(queryByTestId("card-body")).toBeNull();

    fireEvent.click(getByTestId("card-toggle"));

    expect(getByTestId("card-body")).toBeTruthy();
  });

  it("can be initially expanded", async () => {
    const { getByTestId } = render(
      <CareAppointmentCard careAppointment={careAppointment} initialExpanded />
    );

    expect(getByTestId("card-body")).toBeTruthy();
  });

  it("calls onToggle if it is present", () => {
    const props = {
      careAppointment,
      onToggle: jest.fn()
    };
    const { getByTestId } = render(<CareAppointmentCard {...props} />);

    fireEvent.click(getByTestId("card-toggle"));

    expect(props.onToggle).toHaveBeenCalledWith(true);
  });
});
