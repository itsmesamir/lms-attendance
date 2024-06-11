// hooks/useUser.ts

import { useQuery } from "@tanstack/react-query";

import { fetchEmployees } from "../services/employee";
import { EmployeeData } from "../types/employee";

// Define types for query keys
const queryKeys = {
  employee: ["employee"] as const,
};

// Hook to fetch employee data
export const useEmployee = () => {
  return useQuery<EmployeeData[]>({
    queryKey: queryKeys.employee,
    queryFn: ({ signal }) => fetchEmployees(signal),
  });
};

// Hook to update user data
// export const useUpdateUser = () => {
//   const queryClient = useQueryClient();
//   return useMutation(updateUser, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(queryKeys.userData);
//     },
//   });
// };
