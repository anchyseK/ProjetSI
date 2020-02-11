import Book from '../../backend/src/models/book';
import Connection from './index'
import connection from './index';

export async function GetBooks(): Promise<Array<Book>> {
    const res = await connection.get("/book")
    return res.data;
}
