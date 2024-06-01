import * as express from 'express';
import {
  createCountry,
  fetchCountryById,
  fetchAllCountries,
  updateCountry,
  deleteCountry
} from '../controllers/country';

const router = express.Router();

router.post('/create', createCountry);
router.put('/update/:id', updateCountry);
router.delete('/delete/:id', deleteCountry);
router.get('/fetch/:id', fetchCountryById);
router.get('/fetch', fetchAllCountries);

export default router;
