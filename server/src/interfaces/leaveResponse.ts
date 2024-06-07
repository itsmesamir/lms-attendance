interface LeaveResponse {
  id: number;
  employee_Id: string;
  teamManagerId: number;
  designationId: number;
  designationName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  manager: any; // Define the structure of manager details
  departmentDescription: string;
  startDate: string;
  endDate: string;
  leaveDays: number;
  reason: string;
  leaveStatus: string;
  status: string;
  responseRemarks: string | null;
  leaveTypeId: number;
  leaveType: string;
  defaultDays: number;
  transferableDays: number;
  fiscalId: number;
  fiscalStartDate: string;
  fiscalEndDate: string;
  fiscalIsCurrent: boolean;
  createdAt: string;
  updatedAt: string | null;
}
