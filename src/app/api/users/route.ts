import { getUserByLogin, insertUser } from "@/app/_lib/model";
import { InputUser, IResponse } from "@/app/_lib/types";
import { fieldsValidation } from "@/app/_lib/validation";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const body = await req.json() as InputUser

    const validate = await fieldsValidation(body)

    if(validate && validate.status == 'error') {
        return Response.json({...validate})
    }

    const checkLogin = await getUserByLogin(body.login)


    if(checkLogin) {
        return Response.json({
            status: 'error',
            message: 'A user with that name already exists',
            payload: null
        })
    }

    const result = await insertUser(body)

    if(result.changes == 1) {
        return Response.json({
            status: 'ok',
            message: '',
            payload: {
                ...body,
                id: result.lastInsertRowid
            }
        }) 
    }else {
        return Response.json({
            status: 'error',
            message: 'Internal server error',
            payload: null
        })
    }
}