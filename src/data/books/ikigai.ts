import { BookSummary } from '@/types/book.interface';

const ikigai: BookSummary = {
  book: {
    title: 'Ikigai',
    author: 'Héctor García & Francesc Miralles',
    intro: 'Explores the Japanese secret to a long and meaningful life by finding your purpose (ikigai).',
  },
  chapters: [
    {
      title: 'The Meaning of Ikigai',
      nodes: [
        { title: 'What is Ikigai?', summary: 'Your reason for being.', deepDive: 'Ikigai lies at the intersection of passion, mission, profession, and vocation.' },
        { title: 'Ikigai and Longevity', summary: 'Having purpose adds years to life.', deepDive: 'Studies from Okinawa link ikigai to long, happy lives.' },
      ]
    },
    {
      title: 'The Village of Longevity',
      nodes: [
        { title: 'Okinawa Lifestyle', summary: 'Active, connected, and slow-paced.', deepDive: 'Elders stay active, eat moderately, and maintain social bonds.' },
        { title: 'No Retirement', summary: 'Keep contributing forever.', deepDive: 'People don’t retire in traditional ways; they always have purpose.' },
      ]
    },
    {
      title: 'Food & Movement',
      nodes: [
        { title: 'Hara Hachi Bu', summary: 'Eat until 80% full.', deepDive: 'Caloric restriction linked with health and longevity.' },
        { title: 'Move Naturally', summary: 'Don’t over-exercise.', deepDive: 'Incorporate natural movement like gardening and walking.' },
      ]
    },
    {
      title: 'Flow & Meaning',
      nodes: [
        { title: 'Finding Flow', summary: 'Complete immersion in work.', deepDive: 'Flow leads to satisfaction and productivity.' },
        { title: 'Live in the Moment', summary: 'Mindfulness boosts ikigai.', deepDive: 'Enjoying daily rituals increases presence and happiness.' },
      ]
    },
    {
      title: 'Social Connections',
      nodes: [
        { title: 'Belonging & Moai', summary: 'Close community bonds.', deepDive: 'Moai is a lifelong group of friends that support each other.' },
        { title: 'Give More Than You Take', summary: 'Kindness fuels purpose.', deepDive: 'Helping others deepens personal meaning and community strength.' },
      ]
    }
  ]
};

export default ikigai;