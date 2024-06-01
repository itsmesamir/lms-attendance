export interface Employee {
  // employee seeds
  //    {
  //     id: 1,
  //     first_name: 'John',
  //     last_name: 'Doe',
  //     email: 'john.doe@example.com',
  //     department_id: 1,
  //     designation: 'Software Engineer',
  //     address: '123 Main St',
  //     contact_info: '123-456-7890',
  //     manager_id: null,
  //     gender: 'Male',
  //     middle_name: '',
  //     birthday: '1990-01-01',
  //     join_date: '2020-01-01',
  //     country_id: 2,
  //     timezone: 'UTC',
  //     working_shift: 'Day',
  //     created_by: 1,
  //     updated_by: 1
  //   },

  // now the interface
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  department: string;
  designation: string;
  address: string;
  contact_info: string;
  manager: number;
  gender: string;
  middle_name: string;
  birthday: string;
  join_date: string;
  country: string;
  timezone: string;
  working_shift: string;
}
