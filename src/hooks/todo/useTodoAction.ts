"use client";

import { QUERYKEYS } from "@/lib/constants/query-keys";
import todoService from "@/lib/services/todo/todo.service";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function useTodoAction() {
  const useGetTodos = (params?: QueryParams) =>
    useQuery({
      queryKey: [QUERYKEYS.todoManagement.getTodos, params],
      queryFn: () => todoService.getTodos(params),
    });

  const useGetTodoById = (id: string) =>
    useQuery({
      queryKey: [QUERYKEYS.todoManagement.getTodoById, id],
      queryFn: () => todoService.getTodoById(id),
    });

  const createTodoMutation = useMutation({
    mutationFn: todoService.createTodo,
  });

  const updateTodoMutation = useMutation({
    mutationFn: todoService.updateTodo,
  });

  const deleteTodoMutation = useMutation({
    mutationFn: todoService.deleteTodo,
  });

  // const toggleTodoMutation = useMutation({
  //   mutationFn: todoService.toggleTodo,
  // });

  return {
    useGetTodos,
    useGetTodoById,
    createTodoMutation,
    updateTodoMutation,
    deleteTodoMutation,
    // toggleTodoMutation,
  };
}
