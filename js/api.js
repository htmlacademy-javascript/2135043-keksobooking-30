const SERVER_URL = 'https://30.javascript.pages.academy/kekstagram';

const ServerRoute = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  GET: 'Не удалось загрузить данные.',
  POST: 'Ошибка отправки формы. Попробуйте ещё раз.',
};

const request = async (route, method = HttpMethod.GET, body = null) => {
  const response = await fetch(`${SERVER_URL}${route}`, { method, body });
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
