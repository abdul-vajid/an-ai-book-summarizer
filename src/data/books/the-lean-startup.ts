import { BookSummary } from '@/types/book.interface';

const theLeanStartup: BookSummary = {
  book: {
    title: 'The Lean Startup',
    author: 'Eric Ries',
    intro: 'A methodology for developing businesses and products using lean principles, rapid prototyping, and validated learning.',
  },
  chapters: [
    {
      title: 'Start',
      nodes: [
        { title: 'Entrepreneurship is Everywhere', summary: 'Startups can happen anywhere.', deepDive: 'Anyone creating a new product or service under conditions of extreme uncertainty is an entrepreneur.' },
        { title: 'Validated Learning', summary: 'Learn what customers really want.', deepDive: 'Test hypotheses quickly and efficiently.' },
      ]
    },
    {
      title: 'Define',
      nodes: [
        { title: 'Build-Measure-Learn', summary: 'The core feedback loop.', deepDive: 'Build a minimum viable product, measure results, and learn from feedback.' },
        { title: 'Minimum Viable Product', summary: 'Test ideas with minimal resources.', deepDive: 'Release early and iterate based on real user data.' },
      ]
    },
    {
      title: 'Measure',
      nodes: [
        { title: 'Innovation Accounting', summary: 'Track progress with actionable metrics.', deepDive: 'Focus on metrics that drive learning and growth.' },
        { title: 'Pivot or Persevere', summary: 'Decide when to change direction.', deepDive: 'Use data to determine whether to pivot or keep going.' },
      ]
    },
    {
      title: 'Accelerate',
      nodes: [
        { title: 'Lean Thinking', summary: 'Eliminate waste.', deepDive: 'Optimize for speed and learning, not just efficiency.' },
        { title: 'Continuous Deployment', summary: 'Release updates frequently.', deepDive: 'Automate testing and deployment for rapid iteration.' },
      ]
    }
  ]
};

export default theLeanStartup;
