// export interface IBlogRequest {
//   title: string;
//   text: string;
// }

let now: Date = new Date();

export interface IBlogResponse {
  id: number;
  postedBy: string;
  topic: string;
  date: number;
  message: string;
}

