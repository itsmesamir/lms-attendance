import React from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Column } from "react-table";
import Table from "../../components/table/index";
import Button from "../../components/button/Button";
import { useEmployee } from "../../hooks/useEmployee";
import LoadingWrapper from "../../components/loadingWrapper/LoadingWrapper";

type TableData = {
  id: number;
  name: string;
  email: string;
  designation: string;
  department: string;
  country: string;
  manager: string;
  action?: any;
};

const columns: Column<TableData>[] = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Designation",
    accessor: "designation",
  },
  {
    Header: "Department",
    accessor: "department",
  },
  {
    Header: "Country",
    accessor: "country",
  },
  {
    Header: "Manager",
    accessor: "manager",
  },
  {
    Header: "Action",

    accessor: "action",
    Cell: ({ value }) => {
      return (
        <div className="flex gap-4 items-center justify-center">
          <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer">
            <MdModeEdit size={24} />
          </div>

          <div className="w-6 h-6 text-red-500 hover:text-red-600 cursor-pointer">
            <MdDelete size={24} />
          </div>
        </div>
      );
    },
  },
];

const employeeData: any[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    designation: "Software Engineer",
    department: {
      id: 1,
      name: "Engineering",
    },
    country: {
      id: 2,
      name: "Canada",
    },
    manager: {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      designation: "Software Engineer",
      department: {
        id: 1,
        name: "Engineering",
      },
      country: {
        id: 2,
        name: "Canada",
      },
    },
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    designation: "Product Manager",
    department: {
      id: 2,
      name: "Product",
    },
    country: {
      id: 2,
      name: "Canada",
    },
    manager: {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      designation: "Software Engineer",
      department: {
        id: 1,
        name: "Engineering",
      },
      country: {
        id: 2,
        name: "Canada",
      },
    },
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    designation: "HR Specialist",
    department: {
      id: 3,
      name: "HR",
    },
    country: {
      id: 4,
      name: "India",
    },
    manager: {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      designation: "Product Manager",
      department: {
        id: 2,
        name: "Product",
      },
      country: {
        id: 2,
        name: "Canada",
      },
    },
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "Brown",
    email: "bob.brown@example.com",
    designation: "Accountant",
    department: {
      id: 4,
      name: "Finance",
    },
    country: {
      id: 4,
      name: "India",
    },
    manager: {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      designation: "HR Specialist",
      department: {
        id: 3,
        name: "HR",
      },
      country: {
        id: 4,
        name: "India",
      },
    },
  },
  {
    id: 5,
    firstName: "Charlie",
    lastName: "Davis",
    email: "charlie.davis@example.com",
    designation: "Sales Executive",
    department: {
      id: 5,
      name: "Sales",
    },
    country: {
      id: 3,
      name: "Nepal",
    },
    manager: {
      id: 4,
      firstName: "Bob",
      lastName: "Brown",
      email: "bob.brown@example.com",
      designation: "Accountant",
      department: {
        id: 4,
        name: "Finance",
      },
      country: {
        id: 4,
        name: "India",
      },
    },
  },
  {
    id: 6,
    firstName: "Dana",
    lastName: "Miller",
    email: "dana.miller@example.com",
    designation: "Marketing Specialist",
    department: {
      id: 6,
      name: "Marketing",
    },
    country: {
      id: 2,
      name: "Canada",
    },
    manager: {
      id: 5,
      firstName: "Charlie",
      lastName: "Davis",
      email: "charlie.davis@example.com",
      designation: "Sales Executive",
      department: {
        id: 5,
        name: "Sales",
      },
      country: {
        id: 3,
        name: "Nepal",
      },
    },
  },
  {
    id: 7,
    firstName: "Eve",
    lastName: "Wilson",
    email: "eve.wilson@example.com",
    designation: "Customer Support",
    department: {
      id: 7,
      name: "Support",
    },
    country: {
      id: 4,
      name: "India",
    },
    manager: {
      id: 6,
      firstName: "Dana",
      lastName: "Miller",
      email: "dana.miller@example.com",
      designation: "Marketing Specialist",
      department: {
        id: 6,
        name: "Marketing",
      },
      country: {
        id: 2,
        name: "Canada",
      },
    },
  },
];

const datas: TableData[] = employeeData.map((employee) => ({
  id: employee.id,
  name: `${employee.firstName} ${employee.lastName}`,
  email: employee.email,
  designation: employee.designation,
  department: employee.department.name,
  country: employee.country.name,
  manager: employee.manager
    ? `${employee.manager.firstName} ${employee.manager.lastName}`
    : "N/A",
}));

function EmployeeTable() {
  const { data, error, isLoading } = useEmployee();

  const employeeData: TableData[] = data?.map((employee) => ({
    id: employee.id,
    name: `${employee.firstName} ${employee.lastName}`,
    email: employee.email,
    designation: employee.designation,
    department: employee.department.name,
    country: employee.country.name,
    manager: employee.manager
      ? `${employee.manager.firstName} ${employee.manager.lastName}`
      : "N/A",
  })) as TableData[];

  return (
    <div className="container mx-auto">
      {data && (
        <LoadingWrapper
          emptyMessage="No Employee Data"
          length={employeeData.length}
          loading={isLoading}
        >
          <Table columns={columns} data={employeeData} />
        </LoadingWrapper>
      )}
    </div>
  );
}

export default EmployeeTable;
