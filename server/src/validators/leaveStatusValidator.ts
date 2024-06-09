// i have texts in different format, Requested, Approved, Rejected, Cancelled

const validStatusTransitions = {
  Requested: ['Approved', 'Rejected', 'Cancelled'],
  Approved: ['Cancelled'],
  Rejected: [],
  Cancelled: []
};

export const validateStatusTransition = (
  currentStatus: string,
  newStatus: string
): boolean => {
  return validStatusTransitions[currentStatus]?.includes(newStatus) ?? false;
};

export const requiresReason = (status: string): boolean => {
  return status === 'REJECTED';
};
