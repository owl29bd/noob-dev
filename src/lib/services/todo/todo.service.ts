import { httpClientWithoutToken } from "@/lib/utils/httpClient";
import { APIUrl } from "@/lib/constants/url.config";
import {
  CreateTodoDto,
  TodoRes,
  UpdateTodoDto,
} from "@/lib/dtos/todo/todo.dto";

class TodoService {
  async getTodos(params?: QueryParams) {
    const res = await httpClientWithoutToken.get<ApiPaginatedResponse<TodoRes>>(
      APIUrl.todo.crud.getTodos(),
      {
        params: params ? params : "",
      }
    );

    return res.data;
  }

  async getTodoById(id: string) {
    const res = await httpClientWithoutToken.get<TodoRes>(
      APIUrl.todo.crud.getTodoById(id)
    );

    return res.data;
  }

  async createTodo(data: CreateTodoDto) {
    const res = await httpClientWithoutToken.post(
      APIUrl.todo.crud.createTodo(),
      data
    );

    return res.data;
  }

  async updateTodo(data: UpdateTodoDto) {
    const res = await httpClientWithoutToken.put(
      APIUrl.todo.crud.updateTodo(data.id),
      data
    );

    return res.data;
  }

  async deleteTodo(id: string) {
    const res = await httpClientWithoutToken.delete(
      APIUrl.todo.crud.deleteTodo(id)
    );

    return res.data;
  }
}

const todoService = new TodoService();

export default todoService;
