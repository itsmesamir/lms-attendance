import { Request, Response, NextFunction } from 'express';

import * as countryService from '../services/country';
import AuthenticatedRequest from '../interfaces/AuthenticatedRequest';

export const createCountry = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const currentUser = req.user;
    const country = await countryService.createCountry({
      country: req.body,
      currentUser
    });
    res.status(201).json(country);
  } catch (error) {
    next(error);
  }
};

export const fetchCountryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const country = await countryService.fetchCountryById(+req.params.id);
    res.json({ data: country });
  } catch (error) {
    next(error);
  }
};

export const fetchAllCountries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const countries = await countryService.fetchAllCountries();
    res.json({ data: countries });
  } catch (error) {
    next(error);
  }
};

export const updateCountry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const country = await countryService.updateCountry(
      +req.params.id,
      req.body
    );
    res.json(country);
  } catch (error) {
    next(error);
  }
};

export const deleteCountry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await countryService.deleteCountry(+req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
