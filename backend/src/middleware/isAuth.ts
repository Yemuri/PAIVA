import {Request, Response, NextFunction} from 'express'
import {verify} from 'jsonwebtoken'

interface Payload{
    sub: string
}

export function isAuth(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const autToken = req.headers.authorization

    const [, token] = autToken.split(' ')

    if (!token || token === '' || token ==='null') {
        return res.json({dados: 'Token inválido'})
    }

    try {
        const {sub} = verify(
            token, process.env.JWT_SECRET) as Payload
            req.user_id = sub
            return next()        
        
    } catch (err) {
        return res.json({dados: 'Token expirado'})
    }



}