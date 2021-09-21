import { checkSchema } from 'express-validator';

const postValidate = checkSchema({
    fullname: {
        isLength: {
            errorMessage: 'fullname is required and should be at least 4 chars long',
            options: { min: 4 },
        },
    },
    post: {
        isLength: {
            errorMessage: 'post is required and should be at least 1 char long',
            options: { min: 1 },
        },
    },
})
export default postValidate;