import { BookSummary } from '@/types/book.interface';

const whenBreathBecomesAir: BookSummary = {
  book: {
    title: 'When Breath Becomes Air',
    author: 'Paul Kalanithi',
    intro: 'A memoir by a neurosurgeon facing terminal cancer, reflecting on life, death, and meaning.',
  },
  chapters: [
    {
      title: 'In Perfect Health I Begin',
      nodes: [
        { title: 'Becoming a Doctor', summary: 'The journey to medicine.', deepDive: 'Paul’s passion for literature and science leads him to neurosurgery.' },
        { title: 'The Weight of Responsibility', summary: 'Life-and-death decisions.', deepDive: 'Doctors must balance empathy with clinical detachment.' },
      ]
    },
    {
      title: 'Cease Not till Death',
      nodes: [
        { title: 'Diagnosis', summary: 'Facing terminal illness.', deepDive: 'Paul is diagnosed with stage IV lung cancer.' },
        { title: 'Redefining Identity', summary: 'Doctor becomes patient.', deepDive: 'Illness forces a new perspective on life and purpose.' },
      ]
    },
    {
      title: 'Meaning in the Face of Death',
      nodes: [
        { title: 'Family and Legacy', summary: 'What matters most.', deepDive: 'Paul and his wife decide to have a child despite his prognosis.' },
        { title: 'Living Fully', summary: 'Finding meaning in suffering.', deepDive: 'Paul continues to work and write, seeking purpose until the end.' },
      ]
    }
  ]
};

export default whenBreathBecomesAir;
