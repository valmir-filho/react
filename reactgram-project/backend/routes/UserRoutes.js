const express = require('express');
const router = express.Router();

// Controller.
const { register, getCurrentUser, login, update, getUserById } = require('../controllers/UserController');

// Middlewares.
const validate = require('../midlewares/handleValidation');
const { userCreateValidation, loginValidation, userUpdateValidation } = require('../midlewares/userValidations');
const authGuard = require('../midlewares/authGuard');
const { imageUpload } = require('../midlewares/imageUpload');

// Routes.
router.post('/register', userCreateValidation(), validate, register);
router.post('/login', loginValidation(), validate, login);
router.get('/profile', authGuard, getCurrentUser);
router.put('/', authGuard, userUpdateValidation(), validate, imageUpload.single('profileImage'), update);
router.get('/:id', getUserById);

module.exports = router;
