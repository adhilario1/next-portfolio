export interface Game {
    id: number,
    title: string,
    preview: Array<string>
    description: string,
    tags: Array<string>,
    year: number,
    type: string,
    thumbnail_url?: string 
    url: string,
    outbound_url?: string,
    outbound_label?: string,
    mobile: boolean,
    
}