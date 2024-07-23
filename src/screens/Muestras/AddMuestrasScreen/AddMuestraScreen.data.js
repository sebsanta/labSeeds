import * as Yup from 'yup';

export function initialValues() {
    return{
        region:"",
        comuna:"",
        direccion:"",
        ppm:0,
        lapiz:"",
        descripcion:"",
        location:null,
        images:[],
    };
}

export function validationSchema(){
    return Yup.object({
        region: Yup.string().required("Campo obligatorio"),
        comuna: Yup.string().required("Campo obligatorio"),
        direccion: Yup.string().required("Campo obligatorio"),
        ppm: Yup.number().required("Campo obligatorio"), 
        lapiz: Yup.string().required("Debes seleccionar un dispositivo"),
        descripcion: Yup.string().required("Campo obligatorio"),
        location: Yup.object().required("La localización es requerida"),
        images: Yup.array().min(1, "Se requiere ingresar una imagen").required("Se requiere subir una imagen")
    });
}