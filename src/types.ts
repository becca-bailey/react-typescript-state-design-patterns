export type Pet = {
  name: string;
  imageUrl: string;
  age: number;
  favoriteActivities: string[];
};

export type Owner = {
  name: string;
  phoneNumber: string;
  email: string;
};

export type Employee = {
  name: string;
  position: string;
  imageUrl: string;
};

export type CareAppointment = {
  owner: Owner;
  pets: Pet[];
  date: Date;
  employee: Employee;
  instructions?: string;
};
