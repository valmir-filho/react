const { body } = require('express-validator');
const photoInsertValidation = () => {
    return [
        body('title')
            .not()
            .equals('undefined')
            .withMessage('Título obrigatório!')
            .isString()
            .withMessage('Título obrigatório!')
            .isLength({ min: 3 })
            .withMessage('O nome precisa ter pelo menos 3 caracteres!'),
        body('image').custom((value, { req }) => {
            if (!req.file) {
                throw new Error('😵‍💫 Erro! Imagem obrigatória!');
            }
            return true;
        }),
    ];
};
const photoUpdateValidation = () => {
    return [
        body('image')
            .optional()
            .custom((value, { req }) => {
                if (!req.file) {
                    throw new Error('😵‍💫 Erro! Imagem obrigatória!');
                }
                return true;
            }),
        body('title')
            .optional()
            .isString()
            .withMessage('Título obrigatório!')
            .isLength({ min: 3 })
            .withMessage('O nome precisa ter pelo menos 3 caracteres!'),
    ];
};
const commentValidation = () => {
    return [body('comment').isString().withMessage('Comentário obrigatório!')];
};

module.exports = {
    photoInsertValidation,
    photoUpdateValidation,
    commentValidation,
};