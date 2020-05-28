import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';
import DeleteUserService from '../services/DeleteUserService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();

usersRoutes.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const userService = new CreateUserService();

    const user = await userService.execute({ name, email, password });
    delete user.password;
    return response.status(201).json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRoutes.delete('/:id', ensureAuthenticated, async (request, response) => {
  try {
    const { id } = request.params;

    const deleteUser = new DeleteUserService();

    const deletedUser = await deleteUser.execute(id);

    return response.status(204).json(deletedUser);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRoutes;
