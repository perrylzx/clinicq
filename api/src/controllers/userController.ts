import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma';

// Create an item
export const createUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: 'Alice',
        email: 'alice@prisma.io',
      },
    })
      res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

// Read all items
export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await prisma.user.findMany({})
    res.status(201).json(users)
  } catch (error) {
    next(error);
  }
};
