export interface Player {
  firstName: string,
  lastName: string,
  email: string,
  gender: string,
  birthDate: Date;
  leagueStatus: string,
  hand: string,
  rating: number,
  registrationDate: Date,
}

export interface CommentInterface {
 id: string | number,
 body: string, 
 user: string, 
 userid: string | number,
 createdAt: string
}