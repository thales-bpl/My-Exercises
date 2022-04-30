import { Pool, ResultSetHeader } from 'mysql2/promise';
import Book from '../interfaces/book.interface';

export default class BookModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection
  }

  public async getAll(): Promise<Book[]> {
    const query = 'SELECT * FROM books';
    const [rows] = await this.connection.execute(query)
    return rows as Book[];
  }

  public async getById(id: number): Promise<Book> {
    const query = 'SELECT * FROM books WHERE id=?'
    const result = await this.connection.execute(query, [id]);
    const [rows] = result;
    const [book] = rows as Book[];
    return book;
  }

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const query = 'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)';
    const result = await this.connection.execute<ResultSetHeader>(query, [title, price, author, isbn]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...book };
  }
}