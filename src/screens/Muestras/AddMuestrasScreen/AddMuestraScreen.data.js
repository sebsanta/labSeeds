import * as Yup from 'yup';

export function initialValues() {
    return{
        numeroMuestra:"",
        clasificacionMuestra:"",
        tipoSemilla:"",
        marcaSemilla:"",
        proveedorSemilla:"",
        tipoSustrato:"",
        marcaSustrato:"",
        proveedorSustrato:"",
        tipoAgua:"",
        proveedorAgua:"",
        marcaAgua:"",
        phAgua:"",
        durezaAgua:"",
        tipoFertilizante:"",
        proveedorFertilizante:"",
        marcaFertilizante:"",
        tipoRecipiente:"",
        proveedorRecipiente:"",
        marcaRecipiente:"",
        volumenRecipiente:"",
        tipoIluminacion:"",
        proveedorIluminacion:"",
        marcaIluminacion:"",
        potenciaIluminacion:"",
        descripcionMuestra:"",
        images:[],
    };
}

export function validationSchema(){
    return Yup.object({
        numeroMuestra: Yup.string().required("Campo obligatorio"),
        clasificacionMuestra: Yup.string().required("Campo obligatorio"),
        tipoSemilla: Yup.string().required("Campo obligatorio"),
        marcaSemilla: Yup.string().required("Campo obligatorio"),
        proveedorSemilla: Yup.string().required("Campo obligatorio"),
        tipoSustrato: Yup.string().required("Campo obligatorio"),
        marcaSustrato: Yup.string().required("Campo obligatorio"),
        proveedorSustrato: Yup.string().required("Campo obligatorio"),
        tipoAgua: Yup.string().required("Campo obligatorio"),
        proveedorAgua: Yup.string().required("Campo obligatorio"),
        marcaAgua: Yup.string().required("Campo obligatorio"),
        phAgua: Yup.string().required("Campo obligatorio"),
        durezaAgua: Yup.string().required("Campo obligatorio"),
        tipoFertilizante: Yup.string().required("Campo obligatorio"),
        proveedorFertilizante: Yup.string().required("Campo obligatorio"),
        marcaFertilizante: Yup.string().required("Campo obligatorio"),
        tipoRecipiente: Yup.string().required("Campo obligatorio"),
        proveedorRecipiente: Yup.string().required("Campo obligatorio"),
        marcaRecipiente: Yup.string().required("Campo obligatorio"),
        volumenRecipiente: Yup.string().required("Campo obligatorio"),
        tipoIluminacion: Yup.string().required("Campo obligatorio"),
        proveedorIluminacion: Yup.string().required("Campo obligatorio"),
        marcaIluminacion: Yup.string().required("Campo Obligatorio"),
        potenciaIluminacion: Yup.string().required("Campo Obligatorio"),
        descripcionMuestra: Yup.string().required("Campo obligatorio"),
        images: Yup.array().min(1, "Se requiere ingresar una imagen").required("Se requiere subir una imagen")
    });
}