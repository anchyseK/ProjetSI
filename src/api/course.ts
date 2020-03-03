import { Test } from '../../types/test';
import Connection from './index';
/*
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

export async function getCourse(title: string, description: string): Promise<Course> {
    try {
        const response = await Connection.get<Course>(`/${title}/${description}`);
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
*/
export async function getTest(): Promise<Test[]> {
    try {
        const response = await Connection.get<Test[]>("/consultation_formation");
        console.log("aaa");
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

// https://medium.com/@geeky_writer_/using-react-hooks-to-create-awesome-forms-6f846a4ce57