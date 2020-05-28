import { getRepository, DeleteResult } from 'typeorm';
import Tool from '../models/Tool';

class DeleteToolService {
  public async execute(id: string): Promise<DeleteResult> {
    const toolsRepository = getRepository(Tool);

    const deleteTool = await toolsRepository.delete(id);

    return deleteTool;
  }
}

export default DeleteToolService;
