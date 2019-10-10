import { ICourse } from '../models/course.interface';

export class Course implements ICourse {
  id: string;
  title: string;
  creationDate: string;
  duration: number;
  description: string;
}
