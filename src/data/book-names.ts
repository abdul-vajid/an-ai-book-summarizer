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
    | "psychology"
    | "technology"
    | "fiction"
    | "biography"
    | "history"
    | "economics"
    | "leadership"
    | "productivity"
    | "health"
    | "spirituality";
}

// Helper function to remove duplicates
const uniqueBooks = (books: BookInfo[]): BookInfo[] => {
  const seen = new Set();
  return books.filter((book) => {
    const key = `${book.title}-${book.author}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

export const bookNames: BookInfo[] = uniqueBooks([
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
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "technology",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    category: "technology",
  },
  {
    title: "Design Patterns",
    author: "Erich Gamma",
    category: "technology",
  },
  {
    title: "Code Complete",
    author: "Steve McConnell",
    category: "technology",
  },
  { title: "1984", author: "George Orwell", category: "fiction" },
  { title: "Brave New World", author: "Aldous Huxley", category: "fiction" },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "fiction",
  },
  {
    title: "Leaders Eat Last",
    author: "Simon Sinek",
    category: "leadership",
  },
  {
    title: "Extreme Ownership",
    author: "Jocko Willink",
    category: "leadership",
  },
  {
    title: "The 21 Irrefutable Laws of Leadership",
    author: "John C. Maxwell",
    category: "leadership",
  },
  {
    title: "Economics in One Lesson",
    author: "Henry Hazlitt",
    category: "economics",
  },
  {
    title: "The Wealth of Nations",
    author: "Adam Smith",
    category: "economics",
  },
  {
    title: "Capital in the Twenty-First Century",
    author: "Thomas Piketty",
    category: "economics",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "history",
  },
  {
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    category: "history",
  },
  {
    title: "The Rise and Fall of the Third Reich",
    author: "William L. Shirer",
    category: "history",
  },
  {
    title: "Getting Things Done",
    author: "David Allen",
    category: "productivity",
  },
  { title: "The One Thing", author: "Gary Keller", category: "productivity" },
  { title: "Essentialism", author: "Greg McKeown", category: "productivity" },
  { title: "Why We Sleep", author: "Matthew Walker", category: "health" },
  { title: "The Blue Zones", author: "Dan Buettner", category: "health" },
  { title: "How Not to Die", author: "Michael Greger", category: "health" },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    category: "spirituality",
  },
  {
    title: "The Seven Spiritual Laws of Success",
    author: "Deepak Chopra",
    category: "spirituality",
  },
  {
    title: "The Road Less Traveled",
    author: "M. Scott Peck",
    category: "spirituality",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "fiction",
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee", category: "fiction" },
  { title: "Pride and Prejudice", author: "Jane Austen", category: "fiction" },
  { title: "Moby Dick", author: "Herman Melville", category: "fiction" },
  { title: "War and Peace", author: "Leo Tolstoy", category: "fiction" },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    category: "fiction",
  },
  { title: "Anna Karenina", author: "Leo Tolstoy", category: "fiction" },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    category: "fiction",
  },
  {
    title: "Great Expectations",
    author: "Charles Dickens",
    category: "fiction",
  },
  { title: "Jane Eyre", author: "Charlotte Brontë", category: "fiction" },
  { title: "Wuthering Heights", author: "Emily Brontë", category: "fiction" },
  { title: "The Odyssey", author: "Homer", category: "fiction" },
  { title: "The Iliad", author: "Homer", category: "fiction" },
  { title: "Les Misérables", author: "Victor Hugo", category: "fiction" },
  { title: "Don Quixote", author: "Miguel de Cervantes", category: "fiction" },
  {
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    category: "fiction",
  },
  { title: "Ulysses", author: "James Joyce", category: "fiction" },
  { title: "Madame Bovary", author: "Gustave Flaubert", category: "fiction" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", category: "fiction" },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    category: "fiction",
  },
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    category: "fiction",
  },
  { title: "Dracula", author: "Bram Stoker", category: "fiction" },
  { title: "Frankenstein", author: "Mary Shelley", category: "fiction" },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    category: "fiction",
  },
  { title: "Fahrenheit 451", author: "Ray Bradbury", category: "fiction" },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    category: "fiction",
  },
  { title: "East of Eden", author: "John Steinbeck", category: "fiction" },
  { title: "Of Mice and Men", author: "John Steinbeck", category: "fiction" },
  { title: "Lolita", author: "Vladimir Nabokov", category: "fiction" },
  {
    title: "The Sun Also Rises",
    author: "Ernest Hemingway",
    category: "fiction",
  },
  {
    title: "A Farewell to Arms",
    author: "Ernest Hemingway",
    category: "fiction",
  },
  {
    title: "For Whom the Bell Tolls",
    author: "Ernest Hemingway",
    category: "fiction",
  },
  {
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    category: "fiction",
  },
  {
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    category: "fiction",
  },
  { title: "Catch-22", author: "Joseph Heller", category: "fiction" },
  { title: "The Stranger", author: "Albert Camus", category: "fiction" },
  { title: "The Trial", author: "Franz Kafka", category: "fiction" },
  { title: "The Metamorphosis", author: "Franz Kafka", category: "fiction" },
  { title: "Heart of Darkness", author: "Joseph Conrad", category: "fiction" },
  {
    title: "The Sound and the Fury",
    author: "William Faulkner",
    category: "fiction",
  },
  { title: "On the Road", author: "Jack Kerouac", category: "fiction" },
  { title: "The Bell Jar", author: "Sylvia Plath", category: "fiction" },
  { title: "Rebecca", author: "Daphne du Maurier", category: "fiction" },
  {
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    category: "fiction",
  },
  {
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    category: "fiction",
  },
  { title: "Little Women", author: "Louisa May Alcott", category: "fiction" },
  { title: "The Call of the Wild", author: "Jack London", category: "fiction" },
  { title: "White Fang", author: "Jack London", category: "fiction" },
  {
    title: "Treasure Island",
    author: "Robert Louis Stevenson",
    category: "fiction",
  },
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    category: "fiction",
  },
  {
    title: "The Three Musketeers",
    author: "Alexandre Dumas",
    category: "fiction",
  },
  {
    title: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
    category: "fiction",
  },
  { title: "Mansfield Park", author: "Jane Austen", category: "fiction" },
  { title: "Persuasion", author: "Jane Austen", category: "fiction" },
  { title: "Northanger Abbey", author: "Jane Austen", category: "fiction" },
  {
    title: "Sense and Sensibility",
    author: "Jane Austen",
    category: "fiction",
  },
  {
    title: "David Copperfield",
    author: "Charles Dickens",
    category: "fiction",
  },
  { title: "Oliver Twist", author: "Charles Dickens", category: "fiction" },
  {
    title: "Nicholas Nickleby",
    author: "Charles Dickens",
    category: "fiction",
  },
  { title: "Bleak House", author: "Charles Dickens", category: "fiction" },
  { title: "Hard Times", author: "Charles Dickens", category: "fiction" },
  {
    title: "The Hunchback of Notre-Dame",
    author: "Victor Hugo",
    category: "fiction",
  },
  {
    title: "Journey to the Center of the Earth",
    author: "Jules Verne",
    category: "fiction",
  },
  {
    title: "Twenty Thousand Leagues Under the Sea",
    author: "Jules Verne",
    category: "fiction",
  },
  {
    title: "Around the World in Eighty Days",
    author: "Jules Verne",
    category: "fiction",
  },
  { title: "The War of the Worlds", author: "H.G. Wells", category: "fiction" },
  { title: "The Time Machine", author: "H.G. Wells", category: "fiction" },
  { title: "The Invisible Man", author: "H.G. Wells", category: "fiction" },
  {
    title: "Dr. Jekyll and Mr. Hyde",
    author: "Robert Louis Stevenson",
    category: "fiction",
  },
  {
    title: "The Wind in the Willows",
    author: "Kenneth Grahame",
    category: "fiction",
  },
  { title: "Peter Pan", author: "J.M. Barrie", category: "fiction" },
  {
    title: "The Wonderful Wizard of Oz",
    author: "L. Frank Baum",
    category: "fiction",
  },
  { title: "Winnie-the-Pooh", author: "A.A. Milne", category: "fiction" },
  { title: "Charlotte's Web", author: "E.B. White", category: "fiction" },
  { title: "Matilda", author: "Roald Dahl", category: "fiction" },
  {
    title: "Charlie and the Chocolate Factory",
    author: "Roald Dahl",
    category: "fiction",
  },
  {
    title: "James and the Giant Peach",
    author: "Roald Dahl",
    category: "fiction",
  },
  {
    title: "The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    category: "fiction",
  },
  { title: "Prince Caspian", author: "C.S. Lewis", category: "fiction" },
  {
    title: "The Voyage of the Dawn Treader",
    author: "C.S. Lewis",
    category: "fiction",
  },
  { title: "The Silver Chair", author: "C.S. Lewis", category: "fiction" },
  { title: "The Horse and His Boy", author: "C.S. Lewis", category: "fiction" },
  { title: "The Magician's Nephew", author: "C.S. Lewis", category: "fiction" },
  { title: "The Last Battle", author: "C.S. Lewis", category: "fiction" },
  {
    title: "The Secret Life of Bees",
    author: "Sue Monk Kidd",
    category: "fiction",
  },
  { title: "Life of Pi", author: "Yann Martel", category: "fiction" },
  {
    title: "Memoirs of a Geisha",
    author: "Arthur Golden",
    category: "fiction",
  },
  { title: "The Kite Runner", author: "Khaled Hosseini", category: "fiction" },
  {
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    category: "fiction",
  },
  { title: "The Book Thief", author: "Markus Zusak", category: "fiction" },
  { title: "The Help", author: "Kathryn Stockett", category: "fiction" },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    category: "fiction",
  },
  { title: "Gone Girl", author: "Gillian Flynn", category: "fiction" },
  { title: "The Da Vinci Code", author: "Dan Brown", category: "fiction" },
  { title: "Angels & Demons", author: "Dan Brown", category: "fiction" },
  { title: "Inferno", author: "Dan Brown", category: "fiction" },
  { title: "Digital Fortress", author: "Dan Brown", category: "fiction" },
  { title: "Deception Point", author: "Dan Brown", category: "fiction" },
  { title: "The Shining", author: "Stephen King", category: "fiction" },
  { title: "It", author: "Stephen King", category: "fiction" },
  { title: "Carrie", author: "Stephen King", category: "fiction" },
  { title: "Misery", author: "Stephen King", category: "fiction" },
  { title: "The Stand", author: "Stephen King", category: "fiction" },
  { title: "Doctor Sleep", author: "Stephen King", category: "fiction" },
  { title: "The Green Mile", author: "Stephen King", category: "fiction" },
  { title: "11/22/63", author: "Stephen King", category: "fiction" },
  { title: "The Outsider", author: "Stephen King", category: "fiction" },
  { title: "Pet Sematary", author: "Stephen King", category: "fiction" },
  { title: "The Institute", author: "Stephen King", category: "fiction" },
  { title: "The Road", author: "Cormac McCarthy", category: "fiction" },
  {
    title: "No Country for Old Men",
    author: "Cormac McCarthy",
    category: "fiction",
  },
  { title: "Blood Meridian", author: "Cormac McCarthy", category: "fiction" },
  {
    title: "All the Pretty Horses",
    author: "Cormac McCarthy",
    category: "fiction",
  },
  { title: "The Crossing", author: "Cormac McCarthy", category: "fiction" },
  {
    title: "Cities of the Plain",
    author: "Cormac McCarthy",
    category: "fiction",
  },
  { title: "Beloved", author: "Toni Morrison", category: "fiction" },
  { title: "Song of Solomon", author: "Toni Morrison", category: "fiction" },
  { title: "The Bluest Eye", author: "Toni Morrison", category: "fiction" },
  { title: "Sula", author: "Toni Morrison", category: "fiction" },
  { title: "Paradise", author: "Toni Morrison", category: "fiction" },
  { title: "Love", author: "Toni Morrison", category: "fiction" },
  { title: "Home", author: "Toni Morrison", category: "fiction" },
  { title: "Tar Baby", author: "Toni Morrison", category: "fiction" },
  { title: "Jazz", author: "Toni Morrison", category: "fiction" },
  { title: "A Mercy", author: "Toni Morrison", category: "fiction" },
  { title: "The Color Purple", author: "Alice Walker", category: "fiction" },
  { title: "Native Son", author: "Richard Wright", category: "fiction" },
  { title: "Invisible Man", author: "Ralph Ellison", category: "fiction" },
  {
    title: "Their Eyes Were Watching God",
    author: "Zora Neale Hurston",
    category: "fiction",
  },
  {
    title: "Go Tell It on the Mountain",
    author: "James Baldwin",
    category: "fiction",
  },
  {
    title: "If Beale Street Could Talk",
    author: "James Baldwin",
    category: "fiction",
  },
  { title: "Giovanni's Room", author: "James Baldwin", category: "fiction" },
  { title: "Another Country", author: "James Baldwin", category: "fiction" },
  { title: "Just Above My Head", author: "James Baldwin", category: "fiction" },
  { title: "The Fire Next Time", author: "James Baldwin", category: "fiction" },
  {
    title: "Between the World and Me",
    author: "Ta-Nehisi Coates",
    category: "biography",
  },
  {
    title: "The Autobiography of Malcolm X",
    author: "Malcolm X",
    category: "biography",
  },
  {
    title: "Long Walk to Freedom",
    author: "Nelson Mandela",
    category: "biography",
  },
  { title: "Steve Jobs", author: "Walter Isaacson", category: "biography" },
  {
    title: "Einstein: His Life and Universe",
    author: "Walter Isaacson",
    category: "biography",
  },
  {
    title: "Benjamin Franklin: An American Life",
    author: "Walter Isaacson",
    category: "biography",
  },
  { title: "Alexander Hamilton", author: "Ron Chernow", category: "biography" },
  { title: "John Adams", author: "David McCullough", category: "biography" },
  {
    title: "Team of Rivals",
    author: "Doris Kearns Goodwin",
    category: "biography",
  },
  {
    title: "The Wright Brothers",
    author: "David McCullough",
    category: "biography",
  },
  { title: "Into the Wild", author: "Jon Krakauer", category: "biography" },
  { title: "Educated", author: "Tara Westover", category: "biography" },
  { title: "Wild", author: "Cheryl Strayed", category: "biography" },
  { title: "Bossypants", author: "Tina Fey", category: "biography" },
  { title: "Becoming", author: "Michelle Obama", category: "biography" },
  { title: "Born a Crime", author: "Trevor Noah", category: "biography" },
  {
    title: "The Glass Castle",
    author: "Jeannette Walls",
    category: "biography",
  },
  {
    title: "When Breath Becomes Air",
    author: "Paul Kalanithi",
    category: "biography",
  },
  {
    title: "A Moveable Feast",
    author: "Ernest Hemingway",
    category: "biography",
  },
  { title: "On Writing", author: "Stephen King", category: "biography" },
  {
    title: "I Know Why the Caged Bird Sings",
    author: "Maya Angelou",
    category: "biography",
  },
  {
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    category: "biography",
  },
  { title: "Night", author: "Elie Wiesel", category: "biography" },
  { title: "Outliers", author: "Malcolm Gladwell", category: "psychology" },
  { title: "Blink", author: "Malcolm Gladwell", category: "psychology" },
  {
    title: "David and Goliath",
    author: "Malcolm Gladwell",
    category: "psychology",
  },
  {
    title: "The Tipping Point",
    author: "Malcolm Gladwell",
    category: "psychology",
  },
  {
    title: "What the Dog Saw",
    author: "Malcolm Gladwell",
    category: "psychology",
  },
  { title: "Quiet", author: "Susan Cain", category: "psychology" },
  {
    title: "Emotional Intelligence",
    author: "Daniel Goleman",
    category: "psychology",
  },
  { title: "Drive", author: "Daniel H. Pink", category: "psychology" },
  { title: "Switch", author: "Chip Heath & Dan Heath", category: "psychology" },
  {
    title: "Made to Stick",
    author: "Chip Heath & Dan Heath",
    category: "psychology",
  },
  { title: "Thinking in Bets", author: "Annie Duke", category: "psychology" },
  {
    title: "The Art of Thinking Clearly",
    author: "Rolf Dobelli",
    category: "psychology",
  },
  {
    title: "The Paradox of Choice",
    author: "Barry Schwartz",
    category: "psychology",
  },
  {
    title: "Stumbling on Happiness",
    author: "Daniel Gilbert",
    category: "psychology",
  },
  {
    title: "The Upside of Irrationality",
    author: "Dan Ariely",
    category: "psychology",
  },
  { title: "Originals", author: "Adam Grant", category: "psychology" },
  { title: "Give and Take", author: "Adam Grant", category: "psychology" },
  {
    title: "Option B",
    author: "Sheryl Sandberg & Adam Grant",
    category: "psychology",
  },
  { title: "Grit", author: "Angela Duckworth", category: "psychology" },
  { title: "Mindset", author: "Carol S. Dweck", category: "psychology" },
  {
    title: "The Willpower Instinct",
    author: "Kelly McGonigal",
    category: "psychology",
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    category: "psychology",
  },
  { title: "Atomic Habits", author: "James Clear", category: "psychology" },
  {
    title: "The Happiness Advantage",
    author: "Shawn Achor",
    category: "psychology",
  },
  {
    title: "The Confidence Code",
    author: "Katty Kay & Claire Shipman",
    category: "psychology",
  },
  {
    title: "The Gifts of Imperfection",
    author: "Brené Brown",
    category: "psychology",
  },
  { title: "Daring Greatly", author: "Brené Brown", category: "psychology" },
  { title: "Rising Strong", author: "Brené Brown", category: "psychology" },
  {
    title: "Braving the Wilderness",
    author: "Brené Brown",
    category: "psychology",
  },
  {
    title: "The Power of Vulnerability",
    author: "Brené Brown",
    category: "psychology",
  },
  { title: "Radical Acceptance", author: "Tara Brach", category: "psychology" },
  {
    title: "The Untethered Soul",
    author: "Michael A. Singer",
    category: "psychology",
  },
  { title: "The Miracle Morning", author: "Hal Elrod", category: "psychology" },
  { title: "Can't Hurt Me", author: "David Goggins", category: "psychology" },
  { title: "The 5 AM Club", author: "Robin Sharma", category: "psychology" },
  {
    title: "Awaken the Giant Within",
    author: "Tony Robbins",
    category: "psychology",
  },
  { title: "You Are a Badass", author: "Jen Sincero", category: "psychology" },
  {
    title: "The Compound Effect",
    author: "Darren Hardy",
    category: "psychology",
  },
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    category: "psychology",
  },
  { title: "The Art of War", author: "Sun Tzu", category: "psychology" },
  { title: "The Tao of Pooh", author: "Benjamin Hoff", category: "psychology" },
  { title: "The Book Thief", author: "Markus Zusak", category: "psychology" },
]);

// Export counts by category for analysis
export const bookCounts = Object.entries(
  bookNames.reduce((acc, book) => {
    acc[book.category] = (acc[book.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>)
);
