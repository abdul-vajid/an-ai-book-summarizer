import atomicHabits from '@/data/books/atomic-habits';
import ikigai from './books/ikigai';
import thinkLikeAMonk from './books/think-like-a-monk';
import zeroToOne from './books/zero-to-one';
import theLeanStartup from './books/the-lean-startup';
import whenBreathBecomesAir from './books/when-breath-becomes-air';
import theEmperorOfAllMaladies from './books/the-emperor-of-all-maladies';
import robbinsBasicPathology from './books/robbins-basic-pathology';
import graysAnatomy from './books/gray-anatomy';
import guytonPhysiology from './books/guyton-physiology';
import { BookCollection } from '@/types/book.interface';
import thinkAndGrowRich from './books/think-and-grow-rich';

export const books: BookCollection = {
  'atomic-habits': atomicHabits,
  ikigai: ikigai,
  'think-like-a-monk': thinkLikeAMonk,
  'zero-to-one': zeroToOne,
  'the-lean-startup': theLeanStartup,
  'when-breath-becomes-air': whenBreathBecomesAir,
  'the-emperor-of-all-maladies': theEmperorOfAllMaladies,
  'robbins-basic-pathology': robbinsBasicPathology,
  'grays-anatomy': graysAnatomy,
  'guyton-physiology': guytonPhysiology,
    'think-and-grow-rich': thinkAndGrowRich
};

// Exporting all books as an array for easier iteration or display
export const allBooks = [
  atomicHabits,
  ikigai,
  thinkLikeAMonk,
  zeroToOne,
  theLeanStartup,
  whenBreathBecomesAir,
  theEmperorOfAllMaladies,
  robbinsBasicPathology,
  graysAnatomy,
  guytonPhysiology,
  thinkAndGrowRich,
];