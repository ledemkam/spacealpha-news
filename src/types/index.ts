export type INavLink = {
    route: string;
    label: string;
  };

  export type News = {
    id: string;
    title: string;
    url: string;
    imageUrl: string;
    news_site: string;
    summary: string;
    publishedAt: string;
    updatedAt: string;
    featured: boolean;
    launches: string[];
    events: string[];
  }

  export type ISnapi = {
    count : number;
    next : string;
    previous : string;
    result: News[]

  }