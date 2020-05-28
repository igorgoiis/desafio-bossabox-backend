import { getRepository } from 'typeorm';
import Tool from '../models/Tool';

interface Request {
  title: string;
  link: string;
  description: string;
  tags: string;
}

class CreateToolSrvice {
  public async execute({
    title,
    link,
    description,
    tags,
  }: Request): Promise<Tool> {
    const toolsRepository = getRepository(Tool);

    const checkToolsExists = await toolsRepository.findOne({
      where: { title, link },
    });

    if (checkToolsExists) {
      throw new Error('Tool already registered.');
    }

    const tools = toolsRepository.create({
      title,
      link,
      description,
      tags,
    });

    await toolsRepository.save(tools);

    return tools;
  }
}

export default CreateToolSrvice;
