import {Profile} from './profile.model';

export interface Post {
  title: string;
  author: Profile;
  body: string;
  tagList: string[];
  createdAt: string;
  image: string;
}
