import { Request, Response } from 'express';

import LeaveRequestService from '../services/leaveRequest';

export const createLeaveRequest = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const leaveRequest = req.body;
    const result = await LeaveRequestService.createLeaveRequest(leaveRequest);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllLeaveRequests = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const leaveRequests = await LeaveRequestService.getLeaveRequests();
    res.status(200).json({ data: leaveRequests });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLeaveRequestsByEmployeeId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const employeeId = parseInt(req.params.employee_id, 10);
    const leaveRequests =
      await LeaveRequestService.getLeaveRequestsByEmployeeId(employeeId);
    res.status(200).json({ data: leaveRequests });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLeaveRequestById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const leaveRequest = await LeaveRequestService.getLeaveRequestById(id);
    res.status(200).json(leaveRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateLeaveRequest = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const leaveRequest = req.body;
    const result = await LeaveRequestService.updateLeaveRequest(
      id,
      leaveRequest
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteLeaveRequest = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const result = await LeaveRequestService.deleteLeaveRequest(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
