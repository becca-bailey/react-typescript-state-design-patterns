import * as React from "react";
import Card from "../components/Card";
import { CareAppointment } from "../types";

// This is an exercise that uses render props to manage state inside this card Component.
// Docs: https://reactjs.org/docs/render-props.html

// Instructions
// 1. Change xdescribe to describe in __tests__/CareAppointmentCard.test.tsx
// 2. Run `yarn test`
// 3. Use render props to make this test suite pass.
// (You will need to update this component and CardManager.tsx )

interface CareAppointmentCardProps {
  initialExpanded?: boolean;
  onToggle?(expanded: boolean): void;
  careAppointment: CareAppointment;
}

const CareAppointmentCard: React.SFC<CareAppointmentCardProps> = props => {
  const title = "Title";
  const { owner, pets } = props.careAppointment;
  return (
    // 👀 You will need to use the CardManager component here
    <Card>
      <Card.Header>
        <Card.StackedImages
          images={pets.map(({ imageUrl, name }) => ({
            src: imageUrl,
            alt: `Photo of ${name}`
          }))}
        />
        <Card.HeaderContent>
          <Card.Title>{title}</Card.Title>
          {/* 👀 Check these props */}
          <Card.Toggle expanded={true} onToggle={() => {}} />
        </Card.HeaderContent>
      </Card.Header>
      <Card.Body visible={true}>
        <h3>Contact</h3>
        <p>{owner.name}</p>
        <p>{owner.phoneNumber}</p>
        <p>{owner.email}</p>
        <h3>Special Instructions</h3>
        <p>{props.careAppointment.instructions}</p>
      </Card.Body>
    </Card>
  );
};

export default CareAppointmentCard;
