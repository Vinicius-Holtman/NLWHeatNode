import { Request, Response } from "express"
import { GetLastMessagesService } from "../services/GetLast3MessagesService";

class GetLast3MessagesController {
    async handle(req: Request, res: Response) {
        const service = new GetLastMessagesService()

        const result = await service.execute()

        return res.json(result)
    }
}

export { GetLast3MessagesController }