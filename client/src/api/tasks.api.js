import axios from 'axios';

const tasksApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/tasks/api/v1/tasks/'
})


/*export const getAllTasks = () => {
    return tasksApi.get('/')
}*/
//Otra forma de escribir el comentado para simplificar ya que no se esta haciendo nada antes del return
export const getAllTasks = () => tasksApi.get('/');

export const getTask = (id) => tasksApi.get(`/${id}`);

/*export const createTask = (task) => {
    return tasksApi.post('/', task)
}*/
//Otra forma de escribir el comentado para simplificar ya que no se esta haciendo nada antes del return
export const createTask = (task) => tasksApi.post('/', task);

export const deleteTask = (id) => tasksApi.delete(`/${id}/`);

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task);