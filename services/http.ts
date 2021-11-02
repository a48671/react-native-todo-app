import { TToDo } from '../contexts/todo/todo.types';

export class Http {
  static async get(): Promise<{ [key: string]: { title: string } }> {
    try {
      return await request('https://rn-todo-app-4fc87-default-rtdb.firebaseio.com/todos.json', 'GET');
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
  static async create(title: string): Promise<{ name: string }> {
    try {
      return await request('https://rn-todo-app-4fc87-default-rtdb.firebaseio.com/todos.json', 'POST', { title });
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
  static async update(toDo: TToDo) {
    try {
      await request(
        `https://rn-todo-app-4fc87-default-rtdb.firebaseio.com/todos/${toDo.id}.json`,
        'PATCH',
        { title: toDo.title }
      );
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
  static async remove(toDo: TToDo) {
    try {
      await request(`https://rn-todo-app-4fc87-default-rtdb.firebaseio.com/todos/${toDo.id}.json`, 'DELETE');
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}

async function request(url: string, method: string, data?: any) {
  const config: RequestInit = {
    method,
    headers: { 'Content-Type': 'application/json' }
  }

  if (method === 'POST' || method === 'PATCH') {
    config.body = JSON.stringify(data)
  }

  const response = await fetch(url, config);
  return await response.json();
}
