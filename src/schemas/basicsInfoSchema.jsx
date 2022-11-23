import * as Yup from "yup";

export const basicsInfoSchema = Yup.object({
    firstName: Yup.string().min(2, "too short").max(25, "too long").required("Please enter your name"),
    lastName: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    mobileno: Yup.string().min(10, "enter valid no").max(10, "enter valid no").required("Please enter your Mobile No")
        .max(10, "enter valid number    ").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
            , 'Phone number is not valid'),
    dob: Yup.date()
        .max(new Date(), 'Date of Birth is invalid')
        .required("Please enter your date of birth"),


});