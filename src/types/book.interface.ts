export interface BookSummary {
  book: {
    title: string;
    author: string;
    intro: string;
  };
  chapters: Chapter[];
}

export interface Chapter {
  title: string;
  nodes: NodeSummary[];
}

export interface NodeSummary {
  title: string;
  summary: string;
  deepDive: string;
}