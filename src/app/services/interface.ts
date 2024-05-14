export interface InfoFilms {
  count: number
  next: any 
  previous: any
  results: FilmProps[]
}

export interface InfoCharacters {
  count: number
  next: string
  previous:  string
  results: CharacterProps[]
}

export interface FilmProps {
  detail?: string
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
  created: string
  edited: string
  url: string
}

export interface CharacterProps {
  detail?: string
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

export type FormEvents = {
  change: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement >;
  submit: React.FormEvent<HTMLFormElement>;
};

export interface CardFilmProps {
  index: number;
  episode_id: number;
  title: string
}

export interface CardCharacterProps{
  url: string
  name: string
  eye_color: string
  gender: string
}
