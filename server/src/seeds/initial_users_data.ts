exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          password:
            '$2b$10$2hiVm9lZHzBvVPrBy1kenui1cTGnmTVVXFtig/gMhgkDUZ2uYGT8S',
          gender: 'Male',
          mobilePhone: 1234567890,
          address: '123 Main St, Anytown, USA',
          birthday: '1990-01-01',
          joinDate: '2022-01-01',
          country: 'USA',
          timezone: 'UTC-5',
          workingShift: 'Day',
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 1,
          updated_by: 1
        },
        {
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@example.com',
          password:
            '$2b$10$2hiVm9lZHzBvVPrBy1kenui1cTGnmTVVXFtig/gMhgkDUZ2uYGT8S',
          gender: 'Female',
          mobilePhone: 9876543210,
          address: '456 Oak St, Othertown, USA',
          birthday: '1995-05-05',
          joinDate: '2021-12-01',
          country: 'USA',
          timezone: 'UTC-5',
          workingShift: 'Night',
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 1,
          updated_by: 1
        },
        {
          firstName: 'Alice',
          lastName: 'Johnson',
          email: 'alice.johnson@example.com',
          password:
            '$2b$10$2hiVm9lZHzBvVPrBy1kenui1cTGnmTVVXFtig/gMhgkDUZ2uYGT8S',
          gender: 'Female',
          mobilePhone: 5555555555,
          address: '789 Elm St, Anycity, USA',
          birthday: '1988-10-15',
          joinDate: '2020-05-20',
          country: 'USA',
          timezone: 'UTC-5',
          workingShift: 'Day',
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 1,
          updated_by: 1
        },
        {
          firstName: 'Bob',
          lastName: 'Smithson',
          email: 'bob.smithson@example.com',
          password:
            '$2b$10$2hiVm9lZHzBvVPrBy1kenui1cTGnmTVVXFtig/gMhgkDUZ2uYGT8S',
          gender: 'Male',
          mobilePhone: 7777777777,
          address: '1010 Pine St, Somewhere, USA',
          birthday: '1975-03-25',
          joinDate: '2019-08-10',
          country: 'USA',
          timezone: 'UTC-5',
          workingShift: 'Night',
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 1,
          updated_by: 1
        },
        {
          firstName: 'Eve',
          lastName: 'Williams',
          email: 'eve.williams@example.com',
          password:
            '$2b$10$2hiVm9lZHzBvVPrBy1kenui1cTGnmTVVXFtig/gMhgkDUZ2uYGT8S',
          gender: 'Female',
          mobilePhone: 9999999999,
          address: '555 Maple St, Nowhere, USA',
          birthday: '2000-12-31',
          joinDate: '2023-04-15',
          country: 'USA',
          timezone: 'UTC-5',
          workingShift: 'Day',
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 1,
          updated_by: 1
        }
      ]);
    });
};

// const abc = {
//   "firstName": "John",
//   "lastName": "Doe",
//   "email": "john.doe@example.com",
//   "password": "password",
//   "gender": "Female",
//   "mobilePhone": "9999999999",
//   "address": "555 Maple St, Nowhere, USA",
//   "birthday": "2000-12-31",
//   "joinDate": "2023-04-15",
//   "country": "USA",
//   "timezone": "UTC-5",
//   "workingShift": "Day"
// }
