import { getRepository } from 'typeorm';

import Tool from '../models/Tool';

class ListToolService {
  public async execute(): Promise<Tool[]> {
    const toolsRepository = getRepository(Tool);
    const tools = toolsRepository.find();
    return tools;
  }
}

export default ListToolService;
