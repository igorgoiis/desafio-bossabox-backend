import { Router } from 'express';

import CreateToolService from '../services/CreateToolService';
import ListToolService from '../services/ListToolService';
import SearchToolByTagService from '../services/SearchToolByTagService';
import DeleteToolService from '../services/DeleteToolService';
import UpdateToolService from '../services/UpdateToolService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const toolsRoutes = Router();

toolsRoutes.use(ensureAuthenticated);

toolsRoutes.get('/', async (request, response) => {
  try {
    const { tag } = request.query;

    const searchTools = new SearchToolByTagService();
    let tools;

    // se houver tag ele faz a busca pela tag.
    if (tag) {
      tools = await searchTools.execute(String(tag));
      return response.json(tools);
    }
    const listTools = new ListToolService();

    tools = await listTools.execute();

    return response.json(tools);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

toolsRoutes.post('/', async (request, response) => {
  try {
    const { title, link, description, tags } = request.body;

    const createTool = new CreateToolService();

    const tools = await createTool.execute({
      title,
      link,
      description,
      tags,
    });
    return response.status(201).json(tools);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

toolsRoutes.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const deleteTool = new DeleteToolService();

    const deletedTool = await deleteTool.execute(id);

    return response.status(204).json(deletedTool);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

toolsRoutes.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const { title, link, description, tags } = request.body;

    const updateTool = new UpdateToolService();

    const updatedTool = await updateTool.execute({
      id,
      title,
      link,
      description,
      tags,
    });

    return response.status(201).json(updatedTool);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default toolsRoutes;
