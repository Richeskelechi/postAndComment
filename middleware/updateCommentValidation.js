import { checkSchema } from 'express-validator';

const updateCommentValidation = checkSchema({
    fullname: {
        optional: { options: { nullable: true } },
        isLength: {
            errorMessage: 'fullname should be at least 4 chars long',
            options: { min: 4 },
        },
    },
    comment: {
        optional: { options: { nullable: true } },
        isLength: {
            errorMessage: 'comment should be at least 1 char long',
            options: { min: 1 },
        },
    },
})
export default updateCommentValidation;