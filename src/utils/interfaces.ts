export interface Source {
    id: string | null;
    name: string | null;
}

export interface FetchNews {
    author: string | null;
    content: string;
    description: string;
    publishedAT: string;
    source: Source;
    title: string;
    url: string;
    urlToImage: string;
}