export interface ICourse {
  id: string;
  title: string;
  thumbnail: string;
  creationDate: string;
  duration: number;
  description: string;
}

export class Course implements ICourse {
  public id: string;
  public title: string;
  public thumbnail: string;
  public creationDate: string;
  public duration: number;
  public description: string;

  constructor(course: ICourse) {
    this.id = course.id;
    this.title = course.title;
    this.thumbnail = course.thumbnail || 'https://placeimg.com/350/200/any';
    this.creationDate = course.creationDate;
    this.duration = course.duration;
    this.description = course.description;
  }
}
