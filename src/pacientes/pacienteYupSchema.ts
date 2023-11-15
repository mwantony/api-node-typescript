import * as Yup from "yup";

let pacienteSchema = Yup.object().shape({ email: Yup.string().require('O email é obrigatório').matches() });
