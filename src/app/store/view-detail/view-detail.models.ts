export interface ICharacterBody {
  id: string;
  name: string;
  gender: string;
  image: string;
  species: string;
  status: string;
  type: string;
  location: ILocation;
}

export interface ILocation {
  name: string;
}
