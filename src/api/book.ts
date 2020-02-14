import { IBook } from '../../backend/src/models/book';
import Connection from './index';

export async function GetBooks(): Promise<Array<IBook>> {
    try {
        const response = await Connection.get<IBook[]>("/book");
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
        } else if (error.request) {
            console.error(error.request);
        } else {
            console.error('Error', error.message);
        }
        throw error;
    }
}