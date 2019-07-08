import * as React from "react";
import Card from "../../components/Card";
import { CareAppointment } from "../../types";
import CardManager from "./CardManager";

// This is an exercise that uses Context to manage state inside this card Component.
// Docs: https://reactjs.org/docs/context.html

// Instructions
// 1. Change xdescribe to describe in __tests__/CareAppointmentCard.test.tsx
// 2. Run `yarn test`
// 3. Use setState to make this test suite pass.
// 4. Run `yarn storybook` to preview card

interface CareAppointmentCardProps {
  initialExpanded?: boolean;
  onToggle?(expanded: boolean): void;
  careAppointment: CareAppointment;
}

const CareAppointmentCard: React.SFC<CareAppointmentCardProps> = props => {
  const title = "Title";
  const { owner, pets } = props.careAppointment;
  return (
    <CardManager
      initialExpanded={props.initialExpanded}
      onToggle={props.onToggle}
    >
      {({ toggle, expanded }) => (
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
              <Card.Toggle expanded={expanded} onToggle={toggle} />
            </Card.HeaderContent>
          </Card.Header>
          <Card.Body visible={expanded}>
            <h3>Contact</h3>
            <p>{owner.name}</p>
            <p>{owner.phoneNumber}</p>
            <p>{owner.email}</p>
            <h3>Special Instructions</h3>
            <p>{props.careAppointment.instructions}</p>
          </Card.Body>
        </Card>
      )}
    </CardManager>
  );
};

export default CareAppointmentCard;
