import * as Yup from "yup";

export const AdvanceInfoSchema = Yup.object({
    address: Yup.string().required(),
    country: Yup.string().required(),
    state: Yup.string().required(),
    pincode: Yup.string().required(),
    getdate: Yup.date().min(new Date(), "enter valid date").required(),
    gettime: Yup.string().required(),

});