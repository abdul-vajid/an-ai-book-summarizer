import { BookSummary } from '@/types/book.interface';

const theEmperorOfAllMaladies: BookSummary = {
  book: {
    title: 'The Emperor of All Maladies',
    author: 'Siddhartha Mukherjee',
    intro: 'A biography of cancer, tracing its history, treatment, and the ongoing fight to cure it.',
  },
  chapters: [
    {
      title: 'The Long War',
      nodes: [
        { title: 'Early Descriptions', summary: 'Cancer through history.', deepDive: 'Ancient physicians recognized cancer but could not cure it.' },
        { title: 'Radical Surgery', summary: 'First attempts at treatment.', deepDive: 'William Halsted pioneers radical mastectomy.' },
      ]
    },
    {
      title: 'The Modern Era',
      nodes: [
        { title: 'Chemotherapy', summary: 'A new hope.', deepDive: 'The discovery of chemical treatments revolutionizes cancer care.' },
        { title: 'The War on Cancer', summary: 'A national effort.', deepDive: 'The US launches a major initiative to cure cancer in the 1970s.' },
      ]
    },
    {
      title: 'The Future',
      nodes: [
        { title: 'Targeted Therapies', summary: 'Precision medicine.', deepDive: 'New drugs target specific cancer mutations.' },
        { title: 'Living with Cancer', summary: 'From cure to control.', deepDive: 'Cancer becomes a chronic disease for many patients.' },
      ]
    }
  ]
};

export default theEmperorOfAllMaladies;
