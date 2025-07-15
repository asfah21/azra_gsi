import type { Employee } from './mocks/employees';

let employees: Employee[] = [
  { 
    id: 1, 
    name: 'Edward Perry',
    age: 25, 
    joinDate: new Date().toISOString(), 
    role: 'super_admin',
    dept: 'IT'
  },
  { 
    id: 2,
    name: 'Josephine Drake',
    age: 36,
    joinDate: new Date().toISOString(), 
    role: 'admin',
    dept: 'GA'
  },
  {
    id: 3,
    name: 'Cody Phillips',
    age: 19,
    joinDate: new Date().toISOString(),
    role: 'admin',
    dept: 'HR'
  },
];

export const getEmployeesStore = () => employees;

export const setEmployeesStore = (newEmployees: Employee[]) => {
  employees = newEmployees;
};
