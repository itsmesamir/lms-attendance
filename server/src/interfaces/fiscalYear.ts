export interface FiscalYear {
  id: number;
  country: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
  createdBy?: number;
  deletedBy?: number;
  updatedBy?: number;
}
