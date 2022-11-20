// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Song, Playlist, PlaylistSong } = initSchema(schema);

export {
  Song,
  Playlist,
  PlaylistSong
};