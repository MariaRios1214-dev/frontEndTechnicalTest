import { createStore } from 'redux';

const initialState = null;

const reducerFeatures = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case 'SIGN_IN':
      return state
        ? [
            state[0],
            {
              key: payload.key,
              id: payload.id,
              name: payload.name,
              login: payload.login,
              avatar_url: payload.avatar_url,
              html_url: payload.html_url,
              location: payload.location,
              public_repos: payload.public_repos,
              public_gists: payload.public_gists,
              followers: payload.followers,
              following: payload.following,
              totalReposByUser: payload.totalReposByUser,
            },
          ]
        : [
            {
              key: payload.key,
              id: payload.id,
              name: payload.name,
              login: payload.login,
              avatar_url: payload.avatar_url,
              html_url: payload.html_url,
              location: payload.location,
              public_repos: payload.public_repos,
              public_gists: payload.public_gists,
              followers: payload.followers,
              following: payload.following,
              totalReposByUser: payload.totalReposByUser,
            },
          ];
    default:
      return state;
  }
};
export default createStore(reducerFeatures);
