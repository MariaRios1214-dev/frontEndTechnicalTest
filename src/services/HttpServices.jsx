import Message from '../features/message/message';

const BASE_QUERY_URL = 'https://api.github.com';

const HttpServices = () => {
  return {
    get: route => {
      return fetch(BASE_QUERY_URL + route, {
        headers: { 'Content-Type': 'application/json;' },
      })
        .then(response => {
          if (response?.ok && response?.status === 200) {
            const responseJSON = response.json();
            return responseJSON;
          } else {
            Message('danger', 'Algo ha salido mal, por favor de nuevo.');
          }
        })
        .catch(error => {
          console.log(error);
          Message('danger', 'Algo ha salido mal, por favor de nuevo.');
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
      })
        .then(response => {
          if (response?.ok && response?.status === 200) {
            const responseJSON = response.json();
            return responseJSON;
          } else {
            Message('danger', 'Algo ha salido mal, por favor de nuevo.');
          }
        })
        .catch(error => {
          console.log(error);
          Message('danger', 'Algo ha salido mal, por favor de nuevo.');
        });
    },
  };
};
export default HttpServices;
