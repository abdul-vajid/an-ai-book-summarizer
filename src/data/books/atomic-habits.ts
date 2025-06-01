import { BookSummary } from '@/types/book.interface';

const atomicHabits: BookSummary = {
  book: {
    title: 'Atomic Habits',
    author: 'James Clear',
    intro: 'A practical guide to habit formation, focusing on how tiny changes lead to remarkable results.',
  },
  chapters: [
    {
      title: 'The Fundamentals',
      nodes: [
        { title: 'Tiny Changes, Remarkable Results', summary: 'Small improvements matter.', deepDive: 'A 1% improvement every day compounds significantly over time.' },
        { title: 'How Habits Work', summary: 'Habits follow a cue-craving-response-reward loop.', deepDive: 'Understanding this loop helps in designing and changing habits.' },
      ]
    },
    {
      title: 'The 4 Laws of Behavior Change',
      nodes: [
        { title: 'Make it Obvious', summary: 'Cue design makes habits stick.', deepDive: 'Use habit stacking and visual cues to trigger new behaviors.' },
        { title: 'Make it Attractive', summary: 'Link habits to rewards.', deepDive: 'Bundle your desired habit with something pleasurable.' },
      ]
    },
    {
      title: 'Environment Matters',
      nodes: [
        { title: 'Design Your Space', summary: 'Environment shapes behavior.', deepDive: 'Structure surroundings to support good habits and remove bad ones.' },
        { title: 'Identity-Based Habits', summary: 'Focus on who you want to become.', deepDive: 'Tie habits to identity rather than outcomes.' },
      ]
    },
    {
      title: 'Tracking & Motivation',
      nodes: [
        { title: 'Use Habit Trackers', summary: 'Visual progress builds momentum.', deepDive: 'Don’t break the chain technique can maintain consistency.' },
        { title: 'Never Miss Twice', summary: 'Perfection isn’t needed, persistence is.', deepDive: 'Build a system that lets you bounce back quickly after a miss.' },
      ]
    },
    {
      title: 'Mastery & Growth',
      nodes: [
        { title: 'Plateau of Latent Potential', summary: 'Breakthroughs come after a long wait.', deepDive: 'Stay consistent even when results are not visible yet.' },
        { title: 'Focus on Systems', summary: 'Systems over goals.', deepDive: 'Good systems make success inevitable.' },
      ]
    }
  ]
};

export default atomicHabits;