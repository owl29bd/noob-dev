import { z } from "zod";

export const createTodoValidator = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(1000).optional(),
});

export const updateTodoValidator = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(1000).optional(),
});
