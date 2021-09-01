const BASE_QUERY_URL = 'https://api.github.com';

const HttpServices = () => {
  return {
    get: route => {
      return fetch(BASE_QUERY_URL + route, {
        headers: { 'Content-Type': 'application/json;' },
      }).then(response => {
        if (response?.ok && response?.status === 200) {
          const responseJSON = response.json();
          return responseJSON;
        }
      });
    },
    command: (command, payload, route) => {
      const request = {
        name: command,
        payload,
      };
      return fetch(BASE_QUERY_URL + route, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;' },
        body: JSON.stringify(request),
      }).then(response => {
        console.log(response);
      });
    },
  };
};
export default HttpServices;
