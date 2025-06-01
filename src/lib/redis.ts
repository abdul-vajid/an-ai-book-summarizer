import { createClient } from 'redis';
import type { BookSummary } from '@/types/book.interface';

class RedisService {
  private client;
  private readonly CACHE_TTL = 60 * 60 * 24 * 7; // 7 days

  constructor() {
    this.client = createClient({
      username: process.env.REDIS_USERNAME,
      password: process.env.REDIS_PASSWORD,
      socket: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT || '6379'),
      }
    });

    this.client.on('error', err => console.error('Redis Client Error', err));
  }

  async connect() {
    if (!this.client.isOpen) {
      await this.client.connect();
    }
  }

  async getBook(key: string): Promise<BookSummary | null> {
    try {
      await this.connect();
      const cached = await this.client.get(key);
      return cached ? JSON.parse(cached) : null;
    } catch (error) {
      console.error('Redis get error:', error);
      return null;
    }
  }

  async setBook(key: string, book: BookSummary): Promise<void> {
    try {
      await this.connect();
      await this.client.setEx(key, this.CACHE_TTL, JSON.stringify(book));
    } catch (error) {
      console.error('Redis set error:', error);
    }
  }

  createBookKey(title: string, author: string): string {
    return `book:${title.toLowerCase()}:${author.toLowerCase()}`.replace(/[^a-z0-9:]/g, '');
  }
}

export const redisService = new RedisService();
