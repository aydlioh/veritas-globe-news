export interface INews {
  id: string;
  title: string;
  previewUrl: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
}

export interface INewsDetails {
  id: string;
  title: string;
  content: string;
  previewUrl: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  author: {
    id: string;
    username: string;
    email: string;
  };
}
export interface INewsForm {
  id?: string;
  title: string;
  previewUrl: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
}
export interface INewsDetailsForm {
  id?: string;
  title: string;
  content: string;
  previewUrl: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  author: {
    id: string;
    username: string;
    email: string;
  };
}
