import React from "react";
import PetCard from "./exercise-1/completed/PetCard";
import * as data from "./data.json";
import CareAppointmentCard from "./exercise-2/completed/CareAppointmentCard";
import EmployeeCard from "./exercise-3/completed/EmployeeCard";
import PetCardList from "./exercise-4/completed/PetCardList";

const careAppointment = {
  pets: data.pets,
  owner: data.owners[0],
  employee: data.employees[0],
  date: new Date()
};

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Pet Card (Exercise #1)</h1>
      <PetCard pet={data.pets[0]} />
      <h1>Care Appointment Card (Exercise #2)</h1>
      <CareAppointmentCard careAppointment={careAppointment} />
      <h1>Employee Card (Exercise #3)</h1>
      <EmployeeCard employee={data.employees[0]} />
      <h1>Pet Card List (Exercise #4)</h1>
      <PetCardList pets={data.pets} />
    </div>
  );
};

export default App;
