export interface Solution {
    id?: string,
    url: string,
    label: string,
    sys_name: string,
    description: string,
    index: number,
    image_ext: string,
    authentication_required: boolean,
    documentation_ext: string
}

export function createSolution(solution: Partial<Solution>): Solution {
    return {
        id: '',
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