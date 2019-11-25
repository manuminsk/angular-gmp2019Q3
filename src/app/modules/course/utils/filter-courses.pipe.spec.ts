import { FilterCoursesPipe } from './filter-courses.pipe';
import { Course } from '../models/course.class';

describe('FilterCoursesPipe', () => {
  const courses = [
    {
      id: 'course 1',
      title: 'course 1',
      thumbnail: 'string',
      creationDate: 'string',
      authors: [],
      topRated: false,
      duration: 0,
      description: 'string',
    },
    {
      id: 'course 2',
      title: 'course 2',
      thumbnail: 'string',
      creationDate: 'string',
      authors: [],
      topRated: false,
      duration: 0,
      description: 'string',
    },
    {
      id: 'course 3',
      title: 'course 3',
      thumbnail: 'string',
      creationDate: 'string',
      authors: [],
      topRated: false,
      duration: 0,
      description: 'string',
    },
    {
      id: 'course 4',
      title: 'course 4',
      thumbnail: 'string',
      creationDate: 'string',
      authors: [],
      topRated: false,
      duration: 0,
      description: 'string',
    }
  ];
  
  it('create an instance', () => {
    const pipe = new FilterCoursesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return correct course array', () => {
    const pipe = new FilterCoursesPipe();
    const searchTerm = 'course 1';
    const filteredCourses: Course[] = pipe.transform(courses, searchTerm);

    expect(filteredCourses.length).toEqual(1);
  });

  it('should return correct course array', () => {
    const pipe = new FilterCoursesPipe();
    const searchTerm = 'COURSE 2';
    const filteredCourses: Course[] = pipe.transform(courses, searchTerm);

    expect(filteredCourses.length).toEqual(1);
  });
});
