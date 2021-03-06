import { Router } from 'express';

import { searchPlaces, searchPlacesDetails } from '../services/yelp';
import {
  toSearchPlacesParams,
  fromSearchPlacesParams,
} from '../lib/placeHelper';

const router = Router();
router.get('/', async (req, res) => {
  const list = await searchPlaces(toSearchPlacesParams(req.query));
  res.send(list.map(i => fromSearchPlacesParams(i)));
});

router.get('/:id', async (req, res) => {
  const list = await searchPlacesDetails(req.params.id);
  res.send(fromSearchPlacesParams(list));
});

export default router;
