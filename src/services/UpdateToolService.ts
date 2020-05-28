import { getRepository } from 'typeorm';
import Tool from '../models/Tool';

interface Request {
  id: string;
  title: string;
  link: string;
  description: string;
  tags: string;
}

class UpdateToolService {
  public async execute({
    id,
    title,
    link,
    description,
    tags,
  }: Request): Promise<Tool | undefined> {
    const toolsRepository = getRepository(Tool);

    const tool = await toolsRepository.findOne({
      where: { id },
    });

    if (!tool) {
      throw new Error('Tool does not exist.');
    }

    const updateTool = toolsRepository.update(id, {
      title,
      link,
      description,
      tags,
    });

    if ((await updateTool).affected !== 1) {
      throw new Error('Tool failed to update.');
    }

    const updatedTool = await toolsRepository.findOne({ where: { id } });
    return updatedTool;
  }
}

export default UpdateToolService;
