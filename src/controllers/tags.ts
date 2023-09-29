import { Request, Response } from "express";
import TagService from "../services/tags";

class TagController {

    static async getTags(req: Request, res: Response) {
        const tags = await TagService.getAll()
        res.json(tags)
    }

    static async createTag(req: Request, res: Response) {
        const { body } = req
        const tag = await TagService.create(body)

        res.json(tag)
    }

    static async updateTag(req: Request, res: Response) {
        const { body } = req
        const { id } = req.params
        const tag = await TagService.update(id, body)
        res.json(tag)
    }

    static async deleteTag(req: Request, res: Response) {
        try {
            const { id } = req.params
            const result = await TagService.delete(id)
            res.json({ delete: result })
        } catch (error) {
            res.status(500).json({ delete: false })
        }
    }
}

export default TagController