export interface ICourse {
  id: string;
  title: string;
  thumbnail: string;
  creationDate: string;
  topRated: boolean;
  duration: number;
  description: string;
}

export class Course implements ICourse {
  public id: string;
  public title: string;
  public thumbnail: string;
  public creationDate: string;
  public topRated: boolean;
  public duration: number;
  public description: string;

  constructor(course: ICourse) {
    Object.assign(this, course);
    this.thumbnail = this.thumbnail || 'https://placeimg.com/350/200/any';
  }
}
