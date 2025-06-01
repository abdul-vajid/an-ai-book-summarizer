import { BookSummary } from '@/types/book.interface';

const guytonPhysiology: BookSummary = {
  book: {
    title: 'Guyton and Hall Textbook of Medical Physiology',
    author: 'John E. Hall',
    intro: 'A classic reference for understanding the mechanisms of body function, essential for MBBS students.',
  },
  chapters: [
    {
      title: 'Cell and General Physiology',
      nodes: [
        { title: 'Homeostasis', summary: 'Maintaining internal balance.', deepDive: 'Feedback systems and physiological regulation.' },
        { title: 'Membrane Physiology', summary: 'Cellular transport.', deepDive: 'Ion channels, pumps, and potentials.' },
      ]
    },
    {
      title: 'Cardiovascular Physiology',
      nodes: [
        { title: 'Heart Function', summary: 'Pumping blood.', deepDive: 'Cardiac cycle, output, and regulation.' },
        { title: 'Blood Vessels', summary: 'Circulatory system.', deepDive: 'Arteries, veins, and capillaries.' },
      ]
    },
    {
      title: 'Renal Physiology',
      nodes: [
        { title: 'Kidney Function', summary: 'Filtering blood.', deepDive: 'Nephron structure and urine formation.' },
        { title: 'Fluid and Electrolyte Balance', summary: 'Maintaining volume.', deepDive: 'Regulation of sodium, potassium, and water.' },
      ]
    }
  ]
};

export default guytonPhysiology;
