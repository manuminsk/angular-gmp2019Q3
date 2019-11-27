export interface Author {
  name: string;
}

export interface ICourse {
  id: string;
  title: string;
  thumbnail: string;
  creationDate: string;
  topRated: boolean;
  duration: number;
  description: string;
  authors?: Author[];
}

export class Course implements ICourse {
  public id: string;
  public title: string;
  public thumbnail: string;
  public creationDate: string;
  public topRated: boolean;
  public duration: number;
  public description: string;
  public authors: Author[];

  constructor(course: ICourse) {
    this.id = course && course.id || null;
    this.title = course && course.title || null;
    this.thumbnail = course && course.thumbnail || null;
    this.creationDate = course && course.creationDate || null;
    this.topRated = course && course.topRated || null;
    this.duration = course && course.duration || null;
    this.description = course && course.description || null;
    this.authors = course && course.authors || [];
    this.thumbnail = course && course.thumbnail || 'https://placeimg.com/350/200/any';
  }
}
