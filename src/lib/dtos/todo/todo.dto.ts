import {
  createTodoValidator,
  updateTodoValidator,
} from "@/lib/validators/todo/todo.validator";
import { z } from "zod";

export type CreateTodoDto = z.infer<typeof createTodoValidator>;

export type UpdateTodoDto = z.infer<typeof updateTodoValidator>;

export type TodoRes = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};
