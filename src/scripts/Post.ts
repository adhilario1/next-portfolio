export interface Post {
    id: number,
    title: string,
    type: string, 
    url: string,
    thumbnail_url?: string,
    year: number,
    description: string,
    discipline:string,
    project?: string
}