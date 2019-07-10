import * as React from "react";
import Card from "../components/Card";
import Tag from "../components/Tag";
import { Employee } from "../types";

// This is an exercise that uses Context to manage state inside this card Component.
// Docs: https://reactjs.org/docs/context.html

// Instructions
// 1. Change xdescribe to describe in __tests__/EmployeeCard.test.tsx
// 2. Run `yarn test`
// 3. Use a context and provider to make this test suite pass
// (You will need to update this component, CardContext.tsx and CardProvider.tsx )

interface EmployeeCard {
  initialExpanded?: boolean;
  employee: Employee;
  onToggle?(expanded: boolean): void;
}

interface EmployeeCardSectionProps {
  employee: Employee;
}

const EmployeeCardHeader: React.SFC<EmployeeCardSectionProps> = props => {
  return (
    <Card.Header>
      <Card.Image
        src={props.employee.imageUrl}
        alt={`A photo of ${props.employee.name}`}
      />
      <Card.HeaderContent>
        <Card.Title>{props.employee.name}</Card.Title>
        {/* ✏️Update these props */}
        <Card.Toggle onToggle={() => {}} />
      </Card.HeaderContent>
      <div data-testid="tags">
        <Tag>{props.employee.position}</Tag>
      </div>
    </Card.Header>
  );
};

const EmployeeCardBody: React.SFC<EmployeeCardSectionProps> = props => {
  return (
    // ✏️Update these props
    <Card.Body visible={true}>
      <h3>About</h3>
      <p>Position: {props.employee.position}</p>
    </Card.Body>
  );
};

const EmployeeCard: React.SFC<EmployeeCard> = props => {
  return (
    // 👀 You will need to use the CardProvider component here
    <Card>
      {/* 👀 We are passing an employee prop into both of these child components.
        Is there a way to further reduce this duplication? */}
      <EmployeeCardHeader employee={props.employee} />
      <EmployeeCardBody employee={props.employee} />
    </Card>
  );
};

export default EmployeeCard;
