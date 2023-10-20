import * as yup from "yup";
export const adminSchema = yup.object().shape({
  password: yup.string().min(6).max(10).required(),
  admin: yup
    .object()
    .shape({
      name: yup.object().shape({
        firstName: yup.string().required("firstName is required"),
        middletName: yup.string(),
        lastName: yup.string().required("lastName is required"),
      }),
      email: yup.string().email().required("email is required"),
      dateOfBirth: yup.string().required("DOB is required"),
      designation: yup.string().required("designation is required"),
    })
    .required(),
});
