import { Request, Response } from "express";

async function createUser(req: Request, res: Response): Promise<any> {
  return res.status(201).json(req.body);
}

export { createUser };
