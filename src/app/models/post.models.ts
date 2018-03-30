class Post {

  _id: string;
  title: string;
  author: string;
  date: Date;
  body: string;
  hidden: boolean;

  constructor() {
    this._id = '';
    this.title = '';
    this.author = '';
    this.date = new Date();
    this.body = '';
    this.hidden = true;
  }
}


export default Post;

