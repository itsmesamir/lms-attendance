import { Request, Response } from 'express';

import LeaveRequestStatusService from '../services/leaveRequestStatus';

export const updateLeaveRequestStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await LeaveRequestStatusService.updateLeaveRequestStatus(
      req.body
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteLeaveRequestStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const result = await LeaveRequestStatusService.deleteLeaveRequestStatus(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
