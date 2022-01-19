import { Response, Request } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";



class AuthenticateUserContrller {
    async handle(request: Request, response: Response) {
        const { code } = request.body;

        const service = new AuthenticateUserService();

        try {
            
            const result = await service.execute(code);

            return response.json(result);

        } catch (error) {
            return response.json({error: error.message});
        }

        
    }
}

export { AuthenticateUserContrller }