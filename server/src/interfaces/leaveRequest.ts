export interface LeaveRequest {
  id: number;
  employeeId: number;
  leaveTypeId: number;
  startDate: string;
  endDate: string;
  leaveDays: number;
  reason: string;
  status: string;
  createdBy: number;
  createdAt: string;
  updatedBy?: number;
  updatedAt?: string;
  managerId?: number;
}
