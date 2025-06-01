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

export type BookCollection = {
  'atomic-habits': BookSummary;
  'ikigai': BookSummary;
  'think-like-a-monk': BookSummary;
  'zero-to-one': BookSummary;
  'the-lean-startup': BookSummary;
  'when-breath-becomes-air': BookSummary;
  'the-emperor-of-all-maladies': BookSummary;
  'robbins-basic-pathology': BookSummary;
  'grays-anatomy': BookSummary;
  'guyton-physiology': BookSummary;
  'think-and-grow-rich': BookSummary;
}