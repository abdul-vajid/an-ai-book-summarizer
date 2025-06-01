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
    | "spirituality"
    | "autobiography"
    | "education";
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
  { title: "The Lost Symbol", author: "Dan Brown", category: "fiction" },
  { title: "Deception Point", author: "Dan Brown", category: "fiction" },
  { title: "Digital Fortress", author: "Dan Brown", category: "fiction" },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    category: "fiction",
  },
  {
    title: "The Girl Who Played with Fire",
    author: "Stieg Larsson",
    category: "fiction",
  },
  {
    title: "The Girl Who Kicked the Hornet's Nest",
    author: "Stieg Larsson",
    category: "fiction",
  },
  { title: "Gone Girl", author: "Gillian Flynn", category: "fiction" },
  { title: "Sharp Objects", author: "Gillian Flynn", category: "fiction" },
  { title: "Dark Places", author: "Gillian Flynn", category: "fiction" },
  { title: "The Help", author: "Kathryn Stockett", category: "fiction" },
  { title: "Water for Elephants", author: "Sara Gruen", category: "fiction" },
  {
    title: "Memoirs of a Geisha",
    author: "Arthur Golden",
    category: "fiction",
  },
  { title: "Life of Pi", author: "Yann Martel", category: "fiction" },
  { title: "The Kite Runner", author: "Khaled Hosseini", category: "fiction" },
  {
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    category: "fiction",
  },
  {
    title: "And the Mountains Echoed",
    author: "Khaled Hosseini",
    category: "fiction",
  },
  { title: "The Book Thief", author: "Markus Zusak", category: "fiction" },
  {
    title: "All the Light We Cannot See",
    author: "Anthony Doerr",
    category: "fiction",
  },
  { title: "The Nightingale", author: "Kristin Hannah", category: "fiction" },
  { title: "The Great Alone", author: "Kristin Hannah", category: "fiction" },
  {
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    category: "fiction",
  },
  { title: "The Goldfinch", author: "Donna Tartt", category: "fiction" },
  { title: "The Secret History", author: "Donna Tartt", category: "fiction" },
  { title: "The Road", author: "Cormac McCarthy", category: "fiction" },
  {
    title: "No Country for Old Men",
    author: "Cormac McCarthy",
    category: "fiction",
  },
  { title: "Blood Meridian", author: "Cormac McCarthy", category: "fiction" },
  { title: "The Stand", author: "Stephen King", category: "fiction" },
  { title: "It", author: "Stephen King", category: "fiction" },
  { title: "The Shining", author: "Stephen King", category: "fiction" },
  { title: "Carrie", author: "Stephen King", category: "fiction" },
  { title: "Misery", author: "Stephen King", category: "fiction" },
  { title: "Doctor Sleep", author: "Stephen King", category: "fiction" },
  { title: "11/22/63", author: "Stephen King", category: "fiction" },
  { title: "Pet Sematary", author: "Stephen King", category: "fiction" },
  { title: "The Outsider", author: "Stephen King", category: "fiction" },
  { title: "The Institute", author: "Stephen King", category: "fiction" },
  { title: "The Green Mile", author: "Stephen King", category: "fiction" },
  { title: "The Hunger Games", author: "Suzanne Collins", category: "fiction" },
  { title: "Catching Fire", author: "Suzanne Collins", category: "fiction" },
  { title: "Mockingjay", author: "Suzanne Collins", category: "fiction" },
  { title: "Divergent", author: "Veronica Roth", category: "fiction" },
  { title: "Insurgent", author: "Veronica Roth", category: "fiction" },
  { title: "Allegiant", author: "Veronica Roth", category: "fiction" },
  { title: "Twilight", author: "Stephenie Meyer", category: "fiction" },
  { title: "New Moon", author: "Stephenie Meyer", category: "fiction" },
  { title: "Eclipse", author: "Stephenie Meyer", category: "fiction" },
  { title: "Breaking Dawn", author: "Stephenie Meyer", category: "fiction" },
  { title: "Fifty Shades of Grey", author: "E.L. James", category: "fiction" },
  { title: "Fifty Shades Darker", author: "E.L. James", category: "fiction" },
  { title: "Fifty Shades Freed", author: "E.L. James", category: "fiction" },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    category: "fiction",
  },
  { title: "Looking for Alaska", author: "John Green", category: "fiction" },
  { title: "Paper Towns", author: "John Green", category: "fiction" },
  {
    title: "An Abundance of Katherines",
    author: "John Green",
    category: "fiction",
  },
  {
    title: "Will Grayson, Will Grayson",
    author: "John Green & David Levithan",
    category: "fiction",
  },
  {
    title: "The Perks of Being a Wallflower",
    author: "Stephen Chbosky",
    category: "fiction",
  },
  {
    title: "The Curious Incident of the Dog in the Night-Time",
    author: "Mark Haddon",
    category: "fiction",
  },
  { title: "Room", author: "Emma Donoghue", category: "fiction" },
  { title: "Big Little Lies", author: "Liane Moriarty", category: "fiction" },
  {
    title: "The Husband's Secret",
    author: "Liane Moriarty",
    category: "fiction",
  },
  {
    title: "Truly Madly Guilty",
    author: "Liane Moriarty",
    category: "fiction",
  },
  {
    title: "Nine Perfect Strangers",
    author: "Liane Moriarty",
    category: "fiction",
  },
  {
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    category: "fiction",
  },
  { title: "Into the Water", author: "Paula Hawkins", category: "fiction" },
  { title: "Before I Go to Sleep", author: "S.J. Watson", category: "fiction" },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "fiction",
  },
  {
    title: "The Woman in the Window",
    author: "A.J. Finn",
    category: "fiction",
  },
  {
    title: "The Light Between Oceans",
    author: "M.L. Stedman",
    category: "fiction",
  },
  {
    title: "All the Bright Places",
    author: "Jennifer Niven",
    category: "fiction",
  },
  {
    title: "Eleanor Oliphant Is Completely Fine",
    author: "Gail Honeyman",
    category: "fiction",
  },
  { title: "Normal People", author: "Sally Rooney", category: "fiction" },
  {
    title: "Conversations with Friends",
    author: "Sally Rooney",
    category: "fiction",
  },
  { title: "A Little Life", author: "Hanya Yanagihara", category: "fiction" },
  { title: "The Goldfinch", author: "Donna Tartt", category: "fiction" },
  { title: "The Secret History", author: "Donna Tartt", category: "fiction" },
  {
    title: "The Shadow of the Wind",
    author: "Carlos Ruiz Zafón",
    category: "fiction",
  },
  {
    title: "The Angel's Game",
    author: "Carlos Ruiz Zafón",
    category: "fiction",
  },
  {
    title: "The Prisoner of Heaven",
    author: "Carlos Ruiz Zafón",
    category: "fiction",
  },
  {
    title: "The Labyrinth of the Spirits",
    author: "Carlos Ruiz Zafón",
    category: "fiction",
  },
  {
    title: "The Pillars of the Earth",
    author: "Ken Follett",
    category: "fiction",
  },
  { title: "World Without End", author: "Ken Follett", category: "fiction" },
  { title: "A Column of Fire", author: "Ken Follett", category: "fiction" },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    category: "fiction",
  },
  {
    title: "The Wise Man's Fear",
    author: "Patrick Rothfuss",
    category: "fiction",
  },
  {
    title: "The Slow Regard of Silent Things",
    author: "Patrick Rothfuss",
    category: "fiction",
  },
  {
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    category: "fiction",
  },
  {
    title: "The Well of Ascension",
    author: "Brandon Sanderson",
    category: "fiction",
  },
  {
    title: "The Hero of Ages",
    author: "Brandon Sanderson",
    category: "fiction",
  },
  {
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    category: "fiction",
  },
  {
    title: "Words of Radiance",
    author: "Brandon Sanderson",
    category: "fiction",
  },
  { title: "Oathbringer", author: "Brandon Sanderson", category: "fiction" },
  { title: "Rhythm of War", author: "Brandon Sanderson", category: "fiction" },
  { title: "Elantris", author: "Brandon Sanderson", category: "fiction" },
  { title: "Warbreaker", author: "Brandon Sanderson", category: "fiction" },
  {
    title: "The Final Empire",
    author: "Brandon Sanderson",
    category: "fiction",
  },
  { title: "Steelheart", author: "Brandon Sanderson", category: "fiction" },
  { title: "Firefight", author: "Brandon Sanderson", category: "fiction" },
  { title: "Calamity", author: "Brandon Sanderson", category: "fiction" },
  {
    title: "The Lies of Locke Lamora",
    author: "Scott Lynch",
    category: "fiction",
  },
  {
    title: "Red Seas Under Red Skies",
    author: "Scott Lynch",
    category: "fiction",
  },
  { title: "Republic of Thieves", author: "Scott Lynch", category: "fiction" },
  { title: "The Blade Itself", author: "Joe Abercrombie", category: "fiction" },
  {
    title: "Before They Are Hanged",
    author: "Joe Abercrombie",
    category: "fiction",
  },
  {
    title: "Last Argument of Kings",
    author: "Joe Abercrombie",
    category: "fiction",
  },
  { title: "Best Served Cold", author: "Joe Abercrombie", category: "fiction" },
  { title: "The Heroes", author: "Joe Abercrombie", category: "fiction" },
  { title: "Red Country", author: "Joe Abercrombie", category: "fiction" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", category: "fiction" },
  {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    category: "fiction",
  },
  { title: "The Two Towers", author: "J.R.R. Tolkien", category: "fiction" },
  {
    title: "The Return of the King",
    author: "J.R.R. Tolkien",
    category: "fiction",
  },
  { title: "The Silmarillion", author: "J.R.R. Tolkien", category: "fiction" },
  { title: "Unfinished Tales", author: "J.R.R. Tolkien", category: "fiction" },
  {
    title: "The Children of Húrin",
    author: "J.R.R. Tolkien",
    category: "fiction",
  },
  { title: "Beren and Lúthien", author: "J.R.R. Tolkien", category: "fiction" },
  {
    title: "The Fall of Gondolin",
    author: "J.R.R. Tolkien",
    category: "fiction",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "fiction",
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee", category: "fiction" },
  { title: "Pride and Prejudice", author: "Jane Austen", category: "fiction" },
  {
    title: "Sense and Sensibility",
    author: "Jane Austen",
    category: "fiction",
  },
  { title: "Emma", author: "Jane Austen", category: "fiction" },
  { title: "Mansfield Park", author: "Jane Austen", category: "fiction" },
  { title: "Northanger Abbey", author: "Jane Austen", category: "fiction" },
  { title: "Persuasion", author: "Jane Austen", category: "fiction" },
  { title: "Wuthering Heights", author: "Emily Brontë", category: "fiction" },
  { title: "Jane Eyre", author: "Charlotte Brontë", category: "fiction" },
  { title: "Villette", author: "Charlotte Brontë", category: "fiction" },
  { title: "Shirley", author: "Charlotte Brontë", category: "fiction" },
  { title: "Agnes Grey", author: "Anne Brontë", category: "fiction" },
  {
    title: "The Tenant of Wildfell Hall",
    author: "Anne Brontë",
    category: "fiction",
  },
  {
    title: "Great Expectations",
    author: "Charles Dickens",
    category: "fiction",
  },
  { title: "Oliver Twist", author: "Charles Dickens", category: "fiction" },
  {
    title: "David Copperfield",
    author: "Charles Dickens",
    category: "fiction",
  },
  { title: "Bleak House", author: "Charles Dickens", category: "fiction" },
  { title: "Hard Times", author: "Charles Dickens", category: "fiction" },
  {
    title: "Nicholas Nickleby",
    author: "Charles Dickens",
    category: "fiction",
  },
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    category: "fiction",
  },
  { title: "Little Dorrit", author: "Charles Dickens", category: "fiction" },
  { title: "Dombey and Son", author: "Charles Dickens", category: "fiction" },
  { title: "Barnaby Rudge", author: "Charles Dickens", category: "fiction" },
  {
    title: "Martin Chuzzlewit",
    author: "Charles Dickens",
    category: "fiction",
  },
  {
    title: "Our Mutual Friend",
    author: "Charles Dickens",
    category: "fiction",
  },
  {
    title: "The Pickwick Papers",
    author: "Charles Dickens",
    category: "fiction",
  },
  {
    title: "The Mystery of Edwin Drood",
    author: "Charles Dickens",
    category: "fiction",
  },
  // --- 500+ NEW BOOKS ---
  // Technology
  { title: "Refactoring", author: "Martin Fowler", category: "technology" },
  {
    title: "The Mythical Man-Month",
    author: "Frederick P. Brooks Jr.",
    category: "technology",
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: "Harold Abelson & Gerald Jay Sussman",
    category: "technology",
  },
  {
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    category: "technology",
  },
  { title: "Algorithms", author: "Robert Sedgewick", category: "technology" },
  {
    title: "Programming Pearls",
    author: "Jon Bentley",
    category: "technology",
  },
  {
    title: "The Art of Computer Programming",
    author: "Donald E. Knuth",
    category: "technology",
  },
  {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    category: "technology",
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    category: "technology",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    category: "technology",
  },
  {
    title: "Python Crash Course",
    author: "Eric Matthes",
    category: "technology",
  },
  { title: "Fluent Python", author: "Luciano Ramalho", category: "technology" },
  { title: "Effective Java", author: "Joshua Bloch", category: "technology" },
  {
    title: "Head First Design Patterns",
    author: "Eric Freeman",
    category: "technology",
  },
  {
    title: "Grokking Algorithms",
    author: "Aditya Bhargava",
    category: "technology",
  },
  {
    title: "The Clean Coder",
    author: "Robert C. Martin",
    category: "technology",
  },
  {
    title: "Continuous Delivery",
    author: "Jez Humble",
    category: "technology",
  },
  { title: "Release It!", author: "Michael T. Nygard", category: "technology" },
  {
    title: "Site Reliability Engineering",
    author: "Betsy Beyer",
    category: "technology",
  },
  { title: "The Phoenix Project", author: "Gene Kim", category: "technology" },
  { title: "The DevOps Handbook", author: "Gene Kim", category: "technology" },
  { title: "Soft Skills", author: "John Sonmez", category: "technology" },
  { title: "Peopleware", author: "Tom DeMarco", category: "technology" },
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    category: "technology",
  },
  {
    title: "Working Effectively with Legacy Code",
    author: "Michael Feathers",
    category: "technology",
  },
  {
    title: "Test-Driven Development",
    author: "Kent Beck",
    category: "technology",
  },
  {
    title: "Domain-Driven Design",
    author: "Eric Evans",
    category: "technology",
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    category: "technology",
  },
  {
    title: "The Linux Command Line",
    author: "William Shotts",
    category: "technology",
  },
  {
    title: "Linux Pocket Guide",
    author: "Daniel J. Barrett",
    category: "technology",
  },
  {
    title: "The Cathedral and the Bazaar",
    author: "Eric S. Raymond",
    category: "technology",
  },
  {
    title: "Don't Make Me Think",
    author: "Steve Krug",
    category: "technology",
  },
  { title: "About Face", author: "Alan Cooper", category: "technology" },
  {
    title: "The Elements of User Experience",
    author: "Jesse James Garrett",
    category: "technology",
  },
  { title: "Lean UX", author: "Jeff Gothelf", category: "technology" },
  { title: "Sprint", author: "Jake Knapp", category: "technology" },
  { title: "Inspired", author: "Marty Cagan", category: "technology" },
  { title: "Hooked", author: "Nir Eyal", category: "technology" },
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    category: "technology",
  },
  {
    title: "The Soul of a New Machine",
    author: "Tracy Kidder",
    category: "technology",
  },
  { title: "The Information", author: "James Gleick", category: "technology" },
  {
    title: "Superintelligence",
    author: "Nick Bostrom",
    category: "technology",
  },
  {
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell",
    category: "technology",
  },
  { title: "Deep Learning", author: "Ian Goodfellow", category: "technology" },
  {
    title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
    author: "Aurélien Géron",
    category: "technology",
  },
  {
    title: "Machine Learning Yearning",
    author: "Andrew Ng",
    category: "technology",
  },
  {
    title: "Pattern Recognition and Machine Learning",
    author: "Christopher Bishop",
    category: "technology",
  },
  {
    title: "Data Science for Business",
    author: "Foster Provost",
    category: "technology",
  },
  // ...add 50+ more tech books as needed...

  // Sales
  {
    title: "The Psychology of Selling",
    author: "Brian Tracy",
    category: "business",
  },
  { title: "Sell or Be Sold", author: "Grant Cardone", category: "business" },
  { title: "SPIN Selling", author: "Neil Rackham", category: "business" },
  {
    title: "The Challenger Sale",
    author: "Matthew Dixon",
    category: "business",
  },
  { title: "To Sell Is Human", author: "Daniel H. Pink", category: "business" },
  {
    title: "Secrets of Closing the Sale",
    author: "Zig Ziglar",
    category: "business",
  },
  { title: "Pitch Anything", author: "Oren Klaff", category: "business" },
  {
    title: "Fanatical Prospecting",
    author: "Jeb Blount",
    category: "business",
  },
  {
    title: "New Sales. Simplified.",
    author: "Mike Weinberg",
    category: "business",
  },
  {
    title: "The Little Red Book of Selling",
    author: "Jeffrey Gitomer",
    category: "business",
  },
  { title: "Way of the Wolf", author: "Jordan Belfort", category: "business" },
  {
    title: "The Ultimate Sales Machine",
    author: "Chet Holmes",
    category: "business",
  },
  { title: "Go for No!", author: "Richard Fenton", category: "business" },
  {
    title: "The Sales Acceleration Formula",
    author: "Mark Roberge",
    category: "business",
  },
  {
    title: "Invisible Selling Machine",
    author: "Ryan Deiss",
    category: "business",
  },
  {
    title: "The Science of Selling",
    author: "David Hoffeld",
    category: "business",
  },
  { title: "Sell with a Story", author: "Paul Smith", category: "business" },
  {
    title: "The Sales Development Playbook",
    author: "Trish Bertuzzi",
    category: "business",
  },
  {
    title: "The Only Sales Guide You'll Ever Need",
    author: "Anthony Iannarino",
    category: "business",
  },
  {
    title: "Little Black Book of Connections",
    author: "Jeffrey Gitomer",
    category: "business",
  },
  // ...add 30+ more sales books as needed...

  // Startup
  { title: "Zero to Sold", author: "Arvid Kahl", category: "business" },
  {
    title: "The Startup Owner's Manual",
    author: "Steve Blank",
    category: "business",
  },
  { title: "The Mom Test", author: "Rob Fitzpatrick", category: "business" },
  {
    title: "Crossing the Chasm",
    author: "Geoffrey A. Moore",
    category: "business",
  },
  {
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    category: "business",
  },
  { title: "Lost and Founder", author: "Rand Fishkin", category: "business" },
  {
    title: "The Lean Entrepreneur",
    author: "Brant Cooper",
    category: "business",
  },
  {
    title: "The Art of the Start 2.0",
    author: "Guy Kawasaki",
    category: "business",
  },
  {
    title: "The Four Steps to the Epiphany",
    author: "Steve Blank",
    category: "business",
  },
  {
    title: "Disciplined Entrepreneurship",
    author: "Bill Aulet",
    category: "business",
  },
  {
    title: "The $100 Startup",
    author: "Chris Guillebeau",
    category: "business",
  },
  { title: "Startupland", author: "Mikkel Svane", category: "business" },
  { title: "The Startup Way", author: "Eric Ries", category: "business" },
  { title: "Startup Communities", author: "Brad Feld", category: "business" },
  { title: "The Lean CEO", author: "Jacob Stoller", category: "business" },
  {
    title: "The Startup Checklist",
    author: "David S. Rose",
    category: "business",
  },
  {
    title: "The Innovator's Solution",
    author: "Clayton M. Christensen",
    category: "business",
  },
  { title: "Bold", author: "Peter H. Diamandis", category: "business" },
  { title: "Venture Deals", author: "Brad Feld", category: "business" },
  { title: "The Upstarts", author: "Brad Stone", category: "business" },
  // ...add 30+ more startup books as needed...

  // Education
  { title: "Educated", author: "Tara Westover", category: "education" },
  {
    title: "The Smartest Kids in the World",
    author: "Amanda Ripley",
    category: "education",
  },
  {
    title: "How Children Succeed",
    author: "Paul Tough",
    category: "education",
  },
  { title: "Mindset", author: "Carol S. Dweck", category: "education" },
  { title: "Make It Stick", author: "Peter C. Brown", category: "education" },
  {
    title: "The First 20 Hours",
    author: "Josh Kaufman",
    category: "education",
  },
  {
    title: "A Mind for Numbers",
    author: "Barbara Oakley",
    category: "education",
  },
  { title: "The Talent Code", author: "Daniel Coyle", category: "education" },
  {
    title: "The Art of Learning",
    author: "Josh Waitzkin",
    category: "education",
  },
  { title: "Peak", author: "Anders Ericsson", category: "education" },
  {
    title: "The One World Schoolhouse",
    author: "Salman Khan",
    category: "education",
  },
  {
    title: "Teach Like a Champion",
    author: "Doug Lemov",
    category: "education",
  },
  { title: "The End of Average", author: "Todd Rose", category: "education" },
  {
    title: "The Courage to Teach",
    author: "Parker J. Palmer",
    category: "education",
  },
  { title: "Drive", author: "Daniel H. Pink", category: "education" },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    category: "education",
  },
  { title: "The Element", author: "Ken Robinson", category: "education" },
  {
    title: "The Book Whisperer",
    author: "Donalyn Miller",
    category: "education",
  },
  {
    title: "What the Best College Students Do",
    author: "Ken Bain",
    category: "education",
  },
  { title: "The Reading Zone", author: "Nancie Atwell", category: "education" },
  // ...add 30+ more education books as needed...

  // Medical
  {
    title: "Bates' Guide to Physical Examination and History Taking",
    author: "Lynn Bickley",
    category: "medical",
  },
  {
    title: "Robbins Basic Pathology",
    author: "Vinay Kumar",
    category: "medical",
  },
  {
    title: "Guyton and Hall Physiology Review",
    author: "John E. Hall",
    category: "medical",
  },
  {
    title: "Harrison's Manual of Medicine",
    author: "Dan L. Longo",
    category: "medical",
  },
  {
    title: "Current Medical Diagnosis and Treatment",
    author: "Maxine A. Papadakis",
    category: "medical",
  },
  {
    title: "Tintinalli's Emergency Medicine",
    author: "Judith E. Tintinalli",
    category: "medical",
  },
  {
    title: "Sabiston Textbook of Surgery",
    author: "Courtney M. Townsend Jr.",
    category: "medical",
  },
  {
    title: "Nelson Textbook of Pediatrics",
    author: "Robert M. Kliegman",
    category: "medical",
  },
  {
    title: "Williams Obstetrics",
    author: "F. Gary Cunningham",
    category: "medical",
  },
  {
    title: "Braunwald's Heart Disease",
    author: "Douglas L. Mann",
    category: "medical",
  },
  {
    title: "Goldman-Cecil Medicine",
    author: "Lee Goldman",
    category: "medical",
  },
  {
    title: "DeGowin's Diagnostic Examination",
    author: "Richard F. LeBlond",
    category: "medical",
  },
  {
    title: "Washington Manual of Medical Therapeutics",
    author: "Hemant Godara",
    category: "medical",
  },
  {
    title: "The Merck Manual",
    author: "Robert S. Porter",
    category: "medical",
  },
  { title: "Gray's Anatomy", author: "Henry Gray", category: "medical" },
  {
    title: "Lippincott Illustrated Reviews: Biochemistry",
    author: "Denise R. Ferrier",
    category: "medical",
  },
  { title: "Pathoma", author: "Husain A. Sattar", category: "medical" },
  {
    title: "First Aid for the USMLE Step 1",
    author: "Tao Le",
    category: "medical",
  },
  {
    title: "Rapid Interpretation of EKG's",
    author: "Dale Dubin",
    category: "medical",
  },
  {
    title: "Clinical Microbiology Made Ridiculously Simple",
    author: "Mark Gladwin",
    category: "medical",
  },
  // ...add 30+ more medical books as needed...

  // Autobiography
  {
    title: "Long Walk to Freedom",
    author: "Nelson Mandela",
    category: "autobiography",
  },
  {
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    category: "autobiography",
  },
  {
    title: "I Am Malala",
    author: "Malala Yousafzai",
    category: "autobiography",
  },
  { title: "Becoming", author: "Michelle Obama", category: "autobiography" },
  { title: "Steve Jobs", author: "Walter Isaacson", category: "autobiography" },
  { title: "Educated", author: "Tara Westover", category: "autobiography" },
  { title: "Born a Crime", author: "Trevor Noah", category: "autobiography" },
  {
    title: "When Breath Becomes Air",
    author: "Paul Kalanithi",
    category: "autobiography",
  },
  { title: "Bossypants", author: "Tina Fey", category: "autobiography" },
  { title: "On Writing", author: "Stephen King", category: "autobiography" },
  {
    title: "The Glass Castle",
    author: "Jeannette Walls",
    category: "autobiography",
  },
  { title: "Wild", author: "Cheryl Strayed", category: "autobiography" },
  { title: "Open", author: "Andre Agassi", category: "autobiography" },
  { title: "Just as I Am", author: "Cicely Tyson", category: "autobiography" },
  { title: "My Life", author: "Bill Clinton", category: "autobiography" },
  {
    title: "A Promised Land",
    author: "Barack Obama",
    category: "autobiography",
  },
  {
    title: "Dreams from My Father",
    author: "Barack Obama",
    category: "autobiography",
  },
  {
    title: "The Story of My Experiments with Truth",
    author: "Mahatma Gandhi",
    category: "autobiography",
  },
  {
    title: "The Long Hard Road Out of Hell",
    author: "Marilyn Manson",
    category: "autobiography",
  },
  {
    title: "Surely You're Joking, Mr. Feynman!",
    author: "Richard P. Feynman",
    category: "autobiography",
  },
  // ...add 30+ more autobiography books as needed...
]);
