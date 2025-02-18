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

export interface League {
  id: string;
  name: string;
  players: Player[];
  matches: Match[];
}

export interface Match {
  location: string;
}

export interface CommentInterface {
 id: string | number,
 body: string, 
 user: string, 
 userid: string | number,
 createdAt: string
}