const { body } = require('express-validator');
const userCreateValidation = () => {
    return [
        body('name')
            .isString()
            .withMessage('Nome obrigatório!')
            .isLength({ min: 3 })
            .withMessage('O nome precisa ter pelo menos 3 caracteres!'),
        body('email')
            .isString()
            .withMessage('E-mail obrigatório!')
            .isEmail()
            .withMessage('Insira um e-mail válido!'),
        body('password')
            .isString()
            .withMessage('Senha obrigatória!')
            .isLength({ min: 5 })
            .withMessage('A senha precisa ter pelo menos 5 caracteres!'),
        body('confirmPassword')
            .isString()
            .withMessage('Confirmação de senha obrigatória!')
            .custom((value, { req }) => {
                if (value != req.body.password) {
                    throw new Error('😵‍💫 Erro! As senhas não são iguais!');
                }
                return true;
            }),
    ];
};
const loginValidation = () => {
    return [
        body('email')
            .isString()
            .withMessage('E-mail obrigatório!')
            .isEmail()
            .withMessage('Insira um e-mail válido'),
        body('password').isString().withMessage('Senha obrigatória!'),
    ];
};
const userUpdateValidation = () => {
    return [
        body('name')
            .optional()
            .isLength({ min: 3 })
            .withMessage('O nome precisa ter pelo menos 3 caracteres!'),
        body('password')
            .optional()
            .isLength({ min: 5 })
            .withMessage('A senha precisa de pelo menos 5 caracteres!'),
    ];
};

module.exports = {
    userCreateValidation,
    loginValidation,
    userUpdateValidation,
};