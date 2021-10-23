import { Request, Response } from 'express'
import { Getlast3MessageService } from '../services/GetLast3MessagesService'

class GetLast3MessageController {
  async handle(req: Request, res: Response) {
    const service = new Getlast3MessageService()

    const result = await service.execute()

    return res.json(result)
  }
}

export { GetLast3MessageController }
