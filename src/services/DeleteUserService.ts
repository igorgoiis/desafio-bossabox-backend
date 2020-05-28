import { getRepository, DeleteResult } from 'typeorm';
import User from '../models/User';

class DeleteToolService {
  public async execute(id: string): Promise<DeleteResult> {
    const toolsRepository = getRepository(User);

    const deleteTool = await toolsRepository.delete(id);

    return deleteTool;
  }
}

export default DeleteToolService;
