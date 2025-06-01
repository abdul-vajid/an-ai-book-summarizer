import { BookSummary } from '@/types/book.interface';

const zeroToOne: BookSummary = {
  book: {
    title: 'Zero to One',
    author: 'Peter Thiel with Blake Masters',
    intro: 'Insights on startups, innovation, and building the future from legendary entrepreneur and investor Peter Thiel.',
  },
  chapters: [
    {
      title: 'The Challenge of the Future',
      nodes: [
        { title: 'Progress: Horizontal vs Vertical', summary: 'Two kinds of progress: copying things that work and creating new things.', deepDive: 'Going from zero to one means doing something new, not just repeating what’s been done.' },
        { title: 'Technology and Globalization', summary: 'Technology enables vertical progress.', deepDive: 'Globalization spreads existing ideas; technology creates new ones.' },
      ]
    },
    {
      title: 'Building a Monopoly',
      nodes: [
        { title: 'Competition is for Losers', summary: 'Monopolies drive progress.', deepDive: 'Avoid competition by building unique businesses.' },
        { title: 'Last Mover Advantage', summary: 'Be the last company standing.', deepDive: 'Focus on durability and defensibility.' },
      ]
    },
    {
      title: 'Foundations',
      nodes: [
        { title: 'Founders', summary: 'Founders shape companies.', deepDive: 'Strong vision and leadership are essential.' },
        { title: 'Team and Culture', summary: 'Build the right team.', deepDive: 'Culture and alignment matter more than credentials.' },
      ]
    },
    {
      title: 'Secrets',
      nodes: [
        { title: 'Look for Secrets', summary: 'Great businesses are built on secrets.', deepDive: 'Find valuable truths that others don’t see.' },
        { title: 'Start Small', summary: 'Dominate a small market first.', deepDive: 'Expand only after achieving monopoly in a niche.' },
      ]
    }
  ]
};

export default zeroToOne;
