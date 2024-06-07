interface LeaveBalance {
  id: number;
  employeeId: string;
  leaveTypeId: number;
  entitlement: number;
  remainingDays: number;
  expiresOn: string | null;
  reason: string | null;
  countryId: number | null;
  fiscalYearId: number | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  createdBy: number | null;
  deletedBy: number | null;
  updatedBy: number | null;
}
