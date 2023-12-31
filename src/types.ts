export interface Game {
  game_id: number;
  score?: number;
  mode: string;
}

export interface Location {
  location_id: number;
  image_url: string;
  lat: number;
  lng: number;
}

export interface StrippedLocation {
  location_id: number;
  image_url: string;
}

export interface Account {
  username: string;
  email: string;
  password: string;
}

export interface Guess {
  location_id: number;
  lat: number;
  lng: number;
}

export interface LeaderboardEntry {
  username: string;
  high_score: number;
  avg_score: number;
  games_played: number;
}

export interface ModeImage {
  text: string;
  imageURL: string;
}

export interface Record {
  username: string;
  high_score: number;
  avg_score: number;
  games_played: number;
  within_10_feet: boolean;
  over_1000_miles: boolean;
  one_game_played: boolean;
  five_games_played: boolean;
  ten_games_played: boolean;
}

export interface ErrorMessage {
  message: string;
}
