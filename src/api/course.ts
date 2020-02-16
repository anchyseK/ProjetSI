import { Course } from '../../types/course';
import Connection from './index';

export async function GetCourses(): Promise<Array<Course>> {
    try {
        const response = await Connection.get<Course[]>("/course");
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