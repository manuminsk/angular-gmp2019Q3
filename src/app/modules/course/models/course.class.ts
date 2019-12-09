export interface Author {
  name: string;
}

export interface ICourse {
  id: string;
  name: string;
  thumbnail: string;
  date: string;
  isTopRated: boolean;
  length: number;
  description: string;
  authors?: Author[];
}

export class Course implements ICourse {
  public id: string;
  public name: string;
  public thumbnail: string;
  public date: string;
  public isTopRated: boolean;
  public length: number;
  public description: string;
  public authors: Author[];

  constructor(course: ICourse) {
    this.id = (course && course.id) || null;
    this.name = (course && course.name) || null;
    this.thumbnail = (course && course.thumbnail) || null;
    this.date = (course && course.date) || null;
    this.isTopRated = (course && course.isTopRated) || null;
    this.length = (course && course.length) || null;
    this.description = (course && course.description) || null;
    this.authors = (course && course.authors) || [];
    this.thumbnail = (course && course.thumbnail) || null;
  }
}
