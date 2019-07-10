import * as React from "react";
import Card from "../../components/Card";
import Tag from "../../components/Tag";
import CardProvider from "./CardProvider";
import CardContext from "./CardContext";
import { Employee } from "../../types";

// This is an exercise that uses Context to manage state inside this card Component.
// Docs: https://reactjs.org/docs/context.html

// Instructions
// 1. Change xdescribe to describe in __tests__/CareAppointmentCard.test.tsx
// 2. Run `yarn test`
// 3. Use setState to make this test suite pass.
// 4. Run `yarn storybook` to preview card

interface EmployeeCard {
  initialExpanded?: boolean;
  employee: Employee;
  onToggle?(expanded: boolean): void;
}

interface EmployeeCardSectionProps {
  employee: Employee;
}

const EmployeeCardHeader: React.SFC<EmployeeCardSectionProps> = props => {
  // 👀 We are using the useContext hook here in order to get state
  // from our CardContext. You can also access this context using
  // <CardContext.Consumer>
  const { expanded, toggle } = React.useContext(CardContext);
  return (
    <Card.Header>
      <Card.Image
        src={props.employee.imageUrl}
        alt={`A photo of ${props.employee.name}`}
      />
      <Card.HeaderContent>
        <Card.Title>{props.employee.name}</Card.Title>
        <Card.Toggle expanded={expanded} onToggle={toggle} />
      </Card.HeaderContent>
      {!expanded && (
        <div data-testid="tags">
          <Tag>{props.employee.position}</Tag>
        </div>
      )}
    </Card.Header>
  );
};

const EmployeeCardBody: React.SFC<EmployeeCardSectionProps> = props => {
  const { expanded } = React.useContext(CardContext);
  return (
    <Card.Body visible={expanded}>
      <h3>About</h3>
      <p>Position: {props.employee.position}</p>
    </Card.Body>
  );
};

const EmployeeCard: React.SFC<EmployeeCard> = props => {
  return (
    <CardProvider
      initialExpanded={props.initialExpanded}
      onToggle={props.onToggle}
    >
      <Card>
        {/* 👀 We are passing an employee prop into both of these child components.
        Is there a way to further reduce this duplication? */}
        <EmployeeCardHeader employee={props.employee} />
        <EmployeeCardBody employee={props.employee} />
      </Card>
    </CardProvider>
  );
};

export default EmployeeCard;
