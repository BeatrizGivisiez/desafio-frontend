export interface Vagas {
    id: number;
    name: string;
    city: string;
    salary: string;
    skills: Array<Skills>;
}

export interface Skills {
    name: string;
    desc?: string;
}