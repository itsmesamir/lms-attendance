// StatusPill.tsx
import React from "react";
import { LeaveRequestStatus } from "../../enum/leaveRequest";
import { LeaveRequestStatusMap } from "../../constants/leaveRequest";

type StatusPillProps = {
  status: LeaveRequestStatus;
};

const statusStyles: Record<LeaveRequestStatus, string> = {
  [LeaveRequestStatus.REQUESTED]: "bg-blue-200",
  [LeaveRequestStatus.APPROVED]: "bg-green-200",
  [LeaveRequestStatus.REJECTED]: "bg-red-200",
  [LeaveRequestStatus.CANCELLED]: "bg-gray-200",
};

function StatusPill({ status }: StatusPillProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-normal rounded-full text-gray-700 ${statusStyles[status]}`}
    >
      {LeaveRequestStatusMap[status]}
    </span>
  );
}

export default StatusPill;
