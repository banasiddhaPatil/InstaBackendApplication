import { User } from "./auth/user";

export class Post {
    postId!:string;
    postContent!:string;
    postCaption!:string;
    postLocation!:string;
    postType!:string;
    postCreatedTimeStamp!:string;
    postOwner!:User;
}
