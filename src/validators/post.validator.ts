import Joi from "joi";

export const postValidator = Joi.object({
    title: Joi.string()
        .pattern(/\w{3,}/)
        .messages({"string.pattern.base": "min 3 letter in title"}
        ),
    body: Joi.string()
        .pattern(/\w{3,}/)
        .messages({"string.pattern.base": "min 3 letter in body"}
        ),
    userId: Joi.number()
        .min(0)
        .messages({"number.min.base" : "required min 1 number for id"})
})