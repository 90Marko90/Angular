export interface Match {
  Player1: string; 
  Player2: string;
  category: boolean;

}

export interface CommentInterface {
 id: string | number,
 body: string, 
 user: string, 
 userid: string | number,
 createdAt: string
}