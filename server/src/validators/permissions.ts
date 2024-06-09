export const hasAccessToUpdateLeave = (
  currentUser: any,
  userRoles: string[],
  leaveRequest: any
): boolean => {
  const isManager = currentUser.id === leaveRequest.manager_id;
  //   const isHR = currentUser.role === 'HR';
  //   const isAdmin = currentUser.role === 'Admin';

  const isHR = userRoles.includes('HR');
  const isAdmin = userRoles.includes('Admin');

  return isManager || isHR || isAdmin;
};
