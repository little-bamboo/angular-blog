import {Profile} from './profile.model';

export interface Post {
  title: string;
  author: Profile;
  body: string;
  intro: string;
  introImage: string;
  tags: string[];
  createdAt: string;
  image: string;
  meta: object[];
  comments: object[];
  hidden: boolean;
  _id: string;
  slug: string;
}
