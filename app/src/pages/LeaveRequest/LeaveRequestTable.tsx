import React, { useState } from "react";
import { Column } from "react-table";
import Table from "../../components/table/index";
import { LeaveRequestStatus } from "../../enum/leaveRequest";
import StatusPill from "../../components/pill/StatusPill";
import Button from "../../components/button/Button";
import ConfirmModal from "../../components/modal/Modal";

enum LeaveType {
  Vacation = "Vacation Leave",
  Sick = "Sick Leave",
  Maternity = "Maternity Leave",
  Paternity = "Paternity Leave",
  FamilyResponsibility = "Family Responsibility Leave",
  Bereavement = "Bereavement Leave",
  Casual = "Casual Leave",
  Marriage = "Marriage Leave",
  PublicHoliday = "Public Holiday Leave",
  Earned = "Earned Leave",
  Compensatory = "Compensatory Leave",
}

type TableData = {
  fullname: string;
  leaveType: LeaveType;
  leaveDays: number;
  reasons: string;
  status: LeaveRequestStatus;
  action?: any;
};

const columns = (handleOpenModal: () => void): Column<TableData>[] => {
  return [
    {
      Header: "Full Name",
      accessor: "fullname",
    },
    {
      Header: "Leave Type",
      accessor: "leaveType",
    },
    {
      Header: "Leave Days",
      accessor: "leaveDays",
    },
    {
      Header: "Reasons",
      accessor: "reasons",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ value }) => {
        return <StatusPill key={value} status={value} />;
      },
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ value }) => {
        return (
          <div className="flex gap-4">
            <Button variant="primary" type="button" onClick={handleOpenModal}>
              Approved
            </Button>

            <Button variant="secondary" type="button">
              Rejected
            </Button>
          </div>
        );
      },
    },
  ];
};

const data: TableData[] = [
  {
    fullname: "John Doe",
    leaveType: LeaveType.Vacation,
    leaveDays: 5,
    reasons: "Family trip",
    status: LeaveRequestStatus.APPROVED,
  },
  {
    fullname: "Jane Smith",
    leaveType: LeaveType.Sick,
    leaveDays: 3,
    reasons: "Flu",
    status: LeaveRequestStatus.CANCELLED,
  },
  {
    fullname: "Jane Smith 2",
    leaveType: LeaveType.Sick,
    leaveDays: 3,
    reasons: "Flu",
    status: LeaveRequestStatus.REJECTED,
  },
  {
    fullname: "Jane Smith 23",
    leaveType: LeaveType.Sick,
    leaveDays: 3,
    reasons: "Flu",
    status: LeaveRequestStatus.REQUESTED,
  },
  // Add more data as needed
];

function LeaveRequestTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    console.log("Confirmed!");
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto">
      <div className="">
        <Table columns={columns(handleOpenModal)} data={data} />
      </div>

      <ConfirmModal
        isOpen={isModalOpen}
        onConfirm={handleConfirm}
        onRequestClose={handleCloseModal}
        message="Are you sure you want to approve this leave request?"
      />
    </div>
  );
}

export default LeaveRequestTable;
