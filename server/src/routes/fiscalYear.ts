import * as express from 'express';

import * as FiscalYearController from '../controllers/fiscalYear';

const router = express.Router();

router.post('/', FiscalYearController.createFiscalYear);
router.get('/', FiscalYearController.getAllFiscalYears);
router.get('/:country', FiscalYearController.getFiscalYearByCountry);
router.get('/details/:id', FiscalYearController.getFiscalYearById);
router.put('/:id', FiscalYearController.updateFiscalYear);
router.delete('/:id', FiscalYearController.deleteFiscalYear);

export default router;
