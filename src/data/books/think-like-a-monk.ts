import { BookSummary } from '@/types/book.interface';

const thinkLikeAMonk: BookSummary = {
  book: {
    title: 'Think Like a Monk',
    author: 'Jay Shetty',
    intro: 'A guide to applying ancient wisdom to modern life for peace, clarity, and purpose.',
  },
  chapters: [
    {
      title: 'Identity',
      nodes: [
        { title: 'False Identity', summary: 'We live by others’ expectations.', deepDive: 'Let go of what you think you should be and embrace who you are.' },
        { title: 'Detaching Labels', summary: 'Labels limit us.', deepDive: 'Stop identifying yourself based on your job, possessions, or status.' },
      ]
    },
    {
      title: 'Negativity',
      nodes: [
        { title: 'Remove Toxicity', summary: 'Environment influences mindset.', deepDive: 'Reduce negative input from people, news, and content.' },
        { title: 'Train Your Mind', summary: 'Negativity is habit-based.', deepDive: 'Replace complaints with gratitude.' },
      ]
    },
    {
      title: 'Fear',
      nodes: [
        { title: 'Overcome Fear', summary: 'Fear masks purpose.', deepDive: 'Fear often arises from attachment and ego.' },
        { title: 'Pain as a Teacher', summary: 'Suffering has lessons.', deepDive: 'See failure as a path to growth.' },
      ]
    },
    {
      title: 'Intention',
      nodes: [
        { title: 'Meaning Behind Action', summary: 'Do things with purpose.', deepDive: 'Be aware of the “why” behind your goals.' },
        { title: 'Ego vs Purpose', summary: 'Ego seeks validation.', deepDive: 'Purpose gives lasting satisfaction.' },
      ]
    },
    {
      title: 'Routine',
      nodes: [
        { title: 'Morning Mindfulness', summary: 'How you start matters.', deepDive: 'Use breathwork, journaling, and reflection to ground your day.' },
        { title: 'Design a Monastic Day', summary: 'Simplicity boosts focus.', deepDive: 'Create structure and intentional pauses in your schedule.' },
      ]
    },
    {
      title: 'Service',
      nodes: [
        { title: 'The Joy of Giving', summary: 'Service uplifts.', deepDive: 'Serving others is key to monk mindset.' },
        { title: 'Purpose through Service', summary: 'Help others to help yourself.', deepDive: 'True fulfillment comes from making an impact.' },
      ]
    }
  ]
};

export default thinkLikeAMonk;