import { BookSummary } from '@/types/book.interface';

const robbinsBasicPathology: BookSummary = {
  book: {
    title: 'Robbins Basic Pathology',
    author: 'Vinay Kumar, Abul Abbas, Jon Aster',
    intro: 'A foundational textbook covering the principles of pathology for medical students.',
  },
  chapters: [
    {
      title: 'Cell Injury and Death',
      nodes: [
        { title: 'Cellular Responses', summary: 'How cells adapt to stress.', deepDive: 'Mechanisms of cell injury, adaptation, and death.' },
        { title: 'Necrosis and Apoptosis', summary: 'Types of cell death.', deepDive: 'Morphological and biochemical features.' },
      ]
    },
    {
      title: 'Inflammation and Repair',
      nodes: [
        { title: 'Acute and Chronic Inflammation', summary: 'Body’s response to injury.', deepDive: 'Mediators and outcomes of inflammation.' },
        { title: 'Tissue Repair', summary: 'Healing and fibrosis.', deepDive: 'Regeneration and scar formation.' },
      ]
    },
    {
      title: 'Neoplasia',
      nodes: [
        { title: 'Tumor Biology', summary: 'Characteristics of tumors.', deepDive: 'Differences between benign and malignant neoplasms.' },
        { title: 'Carcinogenesis', summary: 'How cancers develop.', deepDive: 'Genetic and environmental factors.' },
      ]
    }
  ]
};

export default robbinsBasicPathology;
