import { Router } from "express";
import {createEmployee, getEmployeeById,getAllEmployees, updateEmployee, deleteEmployee, searchEmployees} from "../controller/employeeController.js";

const router = new Router();


router.get('/employee/search', searchEmployees);

router.post('/employee', createEmployee);
router.get('/', getAllEmployees);

router.get('/employee/:id', getEmployeeById);
router.put('/employee/:id', updateEmployee);
router.delete('/employee/:id', deleteEmployee);


export default router;