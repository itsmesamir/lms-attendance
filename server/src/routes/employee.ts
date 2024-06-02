import * as express from 'express';
import * as EmployeeController from '../controllers/employee';

const router = express.Router();

router.post('/create', EmployeeController.createEmployee);
router.put('/update/:id', EmployeeController.updateEmployee);
router.delete('/delete/:id', EmployeeController.deleteEmployee);
router.get('/fetch/:id', EmployeeController.fetchEmployeeById);
router.get('/fetch', EmployeeController.fetchAllEmployees);

export default router;
