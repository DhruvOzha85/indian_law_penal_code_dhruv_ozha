const express = require('express');
const { 
  createLaw, 
  getLaws, 
  getLawById, 
  updateLaw, 
  deleteLaw,
  getDistinctActs,
  getChaptersByAct,
  getLawsByAct
} = require('../controllers/lawController');

const router = express.Router();

// Advanced routes (Must be defined before /:id)
router.route('/acts').get(getDistinctActs);
router.route('/acts/:actName').get(getLawsByAct);
router.route('/acts/:actName/chapters').get(getChaptersByAct);

router
  .route('/')
  .get(getLaws)
  .post(createLaw);

router
  .route('/:id')
  .get(getLawById)
  .put(updateLaw)
  .delete(deleteLaw);

module.exports = router;
