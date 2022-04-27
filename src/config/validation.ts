import * as yup from "yup";

const email = yup.string().min(6).required().email();
const password = yup.string().min(6).required();

export const LoginValidation = yup.object({email, password});
