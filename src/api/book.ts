import { IBook } from '../../backend/src/models/book';
import Connection from './index';

export async function GetBooks(): Promise<Array<IBook>> {
    try {
        const response = await Connection.get<IBook[]>("/book");
        return response.data;
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        throw error;
    }
}