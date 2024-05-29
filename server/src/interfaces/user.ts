export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  middleName?: string;
  mobilePhone: number;
  password?: any;
  address?: string;
  birthday: string;
  joinDate: string;
  country: string;
  timezone: string;
  workingShift: string;
}
