import { BookSummary } from '@/types/book.interface';

const graysAnatomy: BookSummary = {
  book: {
    title: "Gray's Anatomy for Students",
    author: 'Richard L. Drake, Wayne Vogl, Adam W. M. Mitchell',
    intro: 'A comprehensive and student-friendly guide to human anatomy, widely used in medical schools.',
  },
  chapters: [
    {
      title: 'The Back',
      nodes: [
        { title: 'Vertebral Column', summary: 'Structure and function.', deepDive: 'Bones, joints, and muscles of the back.' },
        { title: 'Spinal Cord', summary: 'Central nervous system.', deepDive: 'Anatomy and clinical relevance.' },
      ]
    },
    {
      title: 'Thorax',
      nodes: [
        { title: 'Heart and Lungs', summary: 'Vital organs.', deepDive: 'Anatomy, blood supply, and innervation.' },
        { title: 'Mediastinum', summary: 'Central thoracic compartment.', deepDive: 'Contents and clinical significance.' },
      ]
    },
    {
      title: 'Abdomen',
      nodes: [
        { title: 'Digestive Organs', summary: 'Stomach, intestines, liver.', deepDive: 'Anatomy and relationships.' },
        { title: 'Peritoneum', summary: 'Abdominal lining.', deepDive: 'Structure and clinical importance.' },
      ]
    }
  ]
};

export default graysAnatomy;
