import { InputUser } from "./types";

export const fieldsValidation = (body: InputUser) => {
    const {name, surname, login, password} = body

    if(!name.trim() || !surname.trim() || !login.trim() || !password.trim()) {
        return Response.json({
            status: 'error',
            message: 'Fill in all fields',
            payload: null
        })
    }

    if(password.length <= 6) {
        return Response.json({
            status: 'error',
            message: 'The password must be at least six',
            paylaod: null
        })
    }
}