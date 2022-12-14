import axios from 'axios';
import { DataDTO } from '../models/data';
import { BASE_URL } from '../utils/system';

export function findByLogin(login: string) {
  return axios.get(`${BASE_URL}/users/${login}`);
}

// export function findByLogin(login: string): DataDTO | undefined {
//   return data.find((x) => x.login === login);
// }

let data: DataDTO[] = [
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/13897257?v=4',
    url: 'https://api.github.com/users/acenelio',
    login: 'acenelio',
    followers: 8291,
    location: 'Brazil',
    name: 'Nelio Alves',
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/94202318?v=4',
    url: 'https://api.github.com/users/renatahassum',
    login: 'RenataHassum',
    followers: 3,
    location: 'Brazil',
    name: 'Renata Hassum',
  },
];
