import { createMovieList, deleteMovieList, updateMovieList } from '../api/movie-list.api';

export const deleteList = async ({ id, reloader }) => {
  await deleteMovieList(id).then(() => {
    reloader();
  });
};

export const createList = async ({ list, reloader }) => {
  await createMovieList(list).then(() => {
    reloader();
  });
};

export const updateList = async ({ list, newMovieList, newTitle, newIsPublic, newSharedUsers, reloader }) => {
  await updateMovieList(list.id, {
    title: newTitle ?? list.title,
    movies_list: newMovieList ?? list.moviesList,
    is_public: newIsPublic ?? list.is_public,
    created_by: list.created_by_id,
    shared_users: newSharedUsers ?? list.shared_users
  }).then(() => {
    reloader();
  });
};
