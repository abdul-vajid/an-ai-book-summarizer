/**
 * example-book-names.ts
 * This file contains a list of book names and their authors.
 * [
 *  { title: "Atomic Habits", author: "James Clear" },
 *  { title: "Ikigai", author: "Héctor García and Francesc Miralles" },
 * ]
 */

// Generate a list of book names and authors

export interface BookInfo {
  title: string;
  author: string;
  category:
    | "self-help"
    | "business"
    | "science"
    | "philosophy"
    | "medical"
    | "psychology";
}

export const bookNames: BookInfo[] = [
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    category: "self-help",
  },
  { title: "Deep Work", author: "Cal Newport", category: "self-help" },
  { title: "Mindset", author: "Carol S. Dweck", category: "self-help" },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    category: "philosophy",
  },
  { title: "Good to Great", author: "Jim Collins", category: "business" },
  { title: "Start with Why", author: "Simon Sinek", category: "business" },
  { title: "Sapiens", author: "Yuval Noah Harari", category: "science" },
  {
    title: "Brief Answers to the Big Questions",
    author: "Stephen Hawking",
    category: "science",
  },
  { title: "The Brain", author: "David Eagleman", category: "science" },
  {
    title: "The Biology of Belief",
    author: "Bruce H. Lipton",
    category: "science",
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    category: "philosophy",
  },
  { title: "Meditations", author: "Marcus Aurelius", category: "philosophy" },
  { title: "The Alchemist", author: "Paulo Coelho", category: "philosophy" },
  {
    title: "Harrison's Principles of Internal Medicine",
    author: "Dennis L. Kasper",
    category: "medical",
  },
  { title: "Cecil Medicine", author: "Lee Goldman", category: "medical" },
  {
    title: "Netter's Atlas of Human Anatomy",
    author: "Frank H. Netter",
    category: "medical",
  },
  {
    title: "Robbins and Cotran Pathologic Basis of Disease",
    author: "Vinay Kumar",
    category: "medical",
  },
  {
    title: "Gray's Anatomy for Students",
    author: "Richard L. Drake",
    category: "medical",
  },
  {
    title: "Guyton and Hall Textbook of Medical Physiology",
    author: "John E. Hall",
    category: "medical",
  },
  { title: "The Lean Startup", author: "Eric Ries", category: "business" },
  { title: "Zero to One", author: "Peter Thiel", category: "business" },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    category: "self-help",
  },
  { title: "Atomic Habits", author: "James Clear", category: "self-help" },
  {
    title: "Ikigai",
    author: "Héctor García and Francesc Miralles",
    category: "self-help",
  },
  { title: "Think Like a Monk", author: "Jay Shetty", category: "self-help" },
  {
    title: "When Breath Becomes Air",
    author: "Paul Kalanithi",
    category: "philosophy",
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    category: "self-help",
  },
  { title: "Daring Greatly", author: "Brené Brown", category: "self-help" },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    category: "self-help",
  },
  { title: "Drive", author: "Daniel H. Pink", category: "self-help" },
  { title: "Grit", author: "Angela Duckworth", category: "self-help" },
  {
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    category: "philosophy",
  },
  {
    title: "The Art of Happiness",
    author: "Dalai Lama",
    category: "philosophy",
  },
  { title: "Flow", author: "Mihaly Csikszentmihalyi", category: "psychology" },
  { title: "Influence", author: "Robert B. Cialdini", category: "psychology" },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "psychology",
  },
  {
    title: "Predictably Irrational",
    author: "Dan Ariely",
    category: "psychology",
  },
  {
    title: "The Happiness Project",
    author: "Gretchen Rubin",
    category: "self-help",
  },
  {
    title: "The Gifts of Imperfection",
    author: "Brené Brown",
    category: "self-help",
  },
  { title: "Radical Acceptance", author: "Tara Brach", category: "self-help" },
  {
    title: "The Untethered Soul",
    author: "Michael A. Singer",
    category: "self-help",
  },
  { title: "The Miracle Morning", author: "Hal Elrod", category: "self-help" },
  { title: "Can't Hurt Me", author: "David Goggins", category: "self-help" },
  { title: "The 5 AM Club", author: "Robin Sharma", category: "self-help" },
  {
    title: "Awaken the Giant Within",
    author: "Tony Robbins",
    category: "self-help",
  },
  { title: "You Are a Badass", author: "Jen Sincero", category: "self-help" },
  {
    title: "The Compound Effect",
    author: "Darren Hardy",
    category: "self-help",
  },
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    category: "self-help",
  },
  { title: "The Art of War", author: "Sun Tzu", category: "philosophy" },
  { title: "The Tao of Pooh", author: "Benjamin Hoff", category: "philosophy" },
  { title: "The Book Thief", author: "Markus Zusak", category: "philosophy" },
  { title: "Educated", author: "Tara Westover", category: "self-help" },
  { title: "Becoming", author: "Michelle Obama", category: "self-help" },
  {
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    category: "psychology",
  },
  {
    title: "The Gifts of Imperfection",
    author: "Brené Brown",
    category: "self-help",
  },
  {
    title: "The Art of Happiness",
    author: "Dalai Lama",
    category: "philosophy",
  },
  {
    title: "The Art of Seduction",
    author: "Robert Greene",
    category: "self-help",
  },
  {
    title: "The 5 Love Languages",
    author: "Gary Chapman",
    category: "self-help",
  },
  { title: "The Alchemist", author: "Paulo Coelho", category: "philosophy" },
  {
    title: "The Power of Vulnerability",
    author: "Brené Brown",
    category: "self-help",
  },
  { title: "The 10X Rule", author: "Grant Cardone", category: "business" },
  { title: "The Lean Startup", author: "Eric Ries", category: "business" },
  {
    title: "The Innovator's Dilemma",
    author: "Clayton M. Christensen",
    category: "business",
  },
  {
    title: "The E-Myth Revisited",
    author: "Michael E. Gerber",
    category: "business",
  },
  {
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    category: "business",
  },
  {
    title: "The Art of the Start",
    author: "Guy Kawasaki",
    category: "business",
  },
  {
    title: "Rework",
    author: "Jason Fried and David Heinemeier Hansson",
    category: "business",
  },
  { title: "Crushing It!", author: "Gary Vaynerchuk", category: "business" },
  {
    title: "The $100 Startup",
    author: "Chris Guillebeau",
    category: "business",
  },
  {
    title: "The Millionaire Fastlane",
    author: "MJ DeMarco",
    category: "business",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "business",
  },
  {
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    category: "business",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    category: "business",
  },
  {
    title: "The Barefoot Investor",
    author: "Scott Pape",
    category: "business",
  },
  {
    title: "The Total Money Makeover",
    author: "Dave Ramsey",
    category: "business",
  },
  {
    title: "The Simple Path to Wealth",
    author: "JL Collins",
    category: "business",
  },
  {
    title: "The Barefoot Investor",
    author: "Scott Pape",
    category: "business",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "business",
  },
  {
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    category: "business",
  },
  {
    title: "The Millionaire Next Door",
    author: "Thomas J. Stanley",
    category: "business",
  }, 
];
