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
  summary: string;
  nodes: Node[];
}

export interface Node {
  title: string;
  summary: string;
  deepDive: string;
}