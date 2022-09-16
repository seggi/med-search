import jwt  from 'jsonwebtoken';
import { IncomingHttpHeaders } from "http";

interface JwtPayload { payload: any; header: any}


export class CurrentUser {
    getTokenFromHeaders (headers: IncomingHttpHeaders) {
            const header = headers.authorization as string;
        
            if (!header) 
                return header
            
                return header.split(' ')[1]
            
        }
    
    getToken(req: any) {
        const token = this.getTokenFromHeaders(req.headers) || req.query.token || req.body.token || '';
        const decoded = jwt.decode(token, {complete: true}) as JwtPayload;
        const data = decoded?.payload
        return {
            userId: data?.id,
            userEmail: data?.email
        };
    }
}