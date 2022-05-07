const express = require('express');
const router = express.Router();


///////////////// [ IMPORTED CONTROLLERS ] /////////////////
const internController= require("../controllers/internController");
const collegeController= require("../controllers/collegeController");



///////////////// [ ALL API's HERE ] /////////////////
router.post('/functionup/colleges',collegeController.createCollege)

router.post('/functionup/interns',internController.createIntern)

router.get('/functionup/collegeDetails',collegeController.getCollegeDetails)


///////////////// [ EXPRORTED ROUTHER ] /////////////////
module.exports = router;