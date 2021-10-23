import { Request, Response } from 'express'
import { Getlast3MessageService } from '../services/GetLast3MessagesService'
import { ProfileUserService } from '../services/ProfileUserService'

class ProfileUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req

    const service = new ProfileUserService()

    const result = await service.execute(user_id)

    return res.json(result)
  }
}

export { ProfileUserController }
