 import * as Yup from 'yup';

 export function initialValues() {
    return {
        title: "",
        comment: "",
        ppm: 0,
        lapiz: ""
    }
 }

 export function validationSchema() {
    return Yup.object({
        title: Yup.string().required("Debe ingresar un título"),
        comment: Yup.string().required("Debe ingresar una descripción"),
        ppm: Yup.number().required("El valor PPM es requerido"),
        lapiz: Yup.string().required("Debes seleccionar una opción"),
    })
 }