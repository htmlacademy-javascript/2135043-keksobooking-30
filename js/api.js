import { SERVER_URL, ServerRoute, HttpMethod, ErrorText } from './data.js';

const request = async (route, method = HttpMethod.GET, body = null) => {
  const response = await fetch(`${ SERVER_URL }${ route }`, { method, body });
  if (!response.ok) {
    throw new Error(ErrorText[method]);
  }
  return response.json();
};

const loadData = async () => request(ServerRoute.GET_DATA);

const sendFormData = async (formData) => request(
  ServerRoute.SEND_DATA,
  HttpMethod.POST,
  formData,
);

export { loadData, sendFormData };
