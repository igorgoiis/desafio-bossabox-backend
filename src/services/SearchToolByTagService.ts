import { getRepository } from 'typeorm';

import Tool from '../models/Tool';

class SearchToolByTagService {
  public async execute(props: string): Promise<Tool[]> {
    const toolsRepository = getRepository(Tool);
    const tools = await toolsRepository
      .createQueryBuilder()
      .where('tags @> ARRAY[:props]::varchar[]', { props })
      .getMany();
    return tools;
  }
}
export default SearchToolByTagService;
