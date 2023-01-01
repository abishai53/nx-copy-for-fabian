export interface SolutionsEntity {
  sys_id?: string,
  url: string,
  label: string,
  sys_name: string,
  description: string,
  index: number,
  image_ext: string,
  documentation_ext: string,
  authentication_required: boolean
}

export function createSolution(solution: Partial<SolutionsEntity>): SolutionsEntity {
    return {
        url: '',
        label: '',
        sys_name: '',
        description: '',
        index: 0,
        image_ext: '',
        documentation_ext: '',
        authentication_required: true,
        ...solution
    }
}

export interface SolutionWidget {
  solutionDto: SolutionsEntity,
  coverImage: string,
  documentation: string
}