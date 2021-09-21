import { checkSchema } from 'express-validator';

const updatePostValidation = checkSchema({
    fullname: {
        optional: { options: { nullable: true } },
        isLength: {
            errorMessage: 'fullname should be at least 4 chars long',
            options: { min: 4 },
        },
    },
    post: {
        optional: { options: { nullable: true } },
        isLength: {
            errorMessage: 'post should be at least 1 char long',
            options: { min: 1 },
        },
    },
})
export default updatePostValidation;