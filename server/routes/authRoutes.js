const { Router } = require('express');
const authController = require('../controllers/authControllers');
const router = Router();

router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.get('/logout', authController.logout);

module.exports = router;
