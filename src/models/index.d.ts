import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerSong = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Song, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly artist: string;
  readonly name: string;
  readonly spotifyTrackId?: string | null;
  readonly playlists?: (PlaylistSong | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySong = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Song, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly artist: string;
  readonly name: string;
  readonly spotifyTrackId?: string | null;
  readonly playlists: AsyncCollection<PlaylistSong>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Song = LazyLoading extends LazyLoadingDisabled ? EagerSong : LazySong

export declare const Song: (new (init: ModelInit<Song>) => Song) & {
  copyOf(source: Song, mutator: (draft: MutableModel<Song>) => MutableModel<Song> | void): Song;
}

type EagerPlaylist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Playlist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Songs?: (PlaylistSong | null)[] | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlaylist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Playlist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Songs: AsyncCollection<PlaylistSong>;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Playlist = LazyLoading extends LazyLoadingDisabled ? EagerPlaylist : LazyPlaylist

export declare const Playlist: (new (init: ModelInit<Playlist>) => Playlist) & {
  copyOf(source: Playlist, mutator: (draft: MutableModel<Playlist>) => MutableModel<Playlist> | void): Playlist;
}

type EagerPlaylistSong = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlaylistSong, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly songId?: string | null;
  readonly playlistId?: string | null;
  readonly song: Song;
  readonly playlist: Playlist;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlaylistSong = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlaylistSong, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly songId?: string | null;
  readonly playlistId?: string | null;
  readonly song: AsyncItem<Song>;
  readonly playlist: AsyncItem<Playlist>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PlaylistSong = LazyLoading extends LazyLoadingDisabled ? EagerPlaylistSong : LazyPlaylistSong

export declare const PlaylistSong: (new (init: ModelInit<PlaylistSong>) => PlaylistSong) & {
  copyOf(source: PlaylistSong, mutator: (draft: MutableModel<PlaylistSong>) => MutableModel<PlaylistSong> | void): PlaylistSong;
}