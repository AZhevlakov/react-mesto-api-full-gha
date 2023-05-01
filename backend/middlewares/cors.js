// Массив доменов, с которых разрешены кросс-доменные запросы
const allowedCors = [
  'https://project.students.nomoredomains.monster',
  'http://project.students.nomoredomains.monster',
  'https://api.project.students.nomoredomains.monster',
  'http://api.project.students.nomoredomains.monster',
  'localhost:3000',
];

module.exports = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

  // Если это предварительный запрос, добавляем нужные заголовки
  if (method === 'OPTIONS') {
    const requestHeaders = req.headers['access-control-request-headers']; // список заголовков исходного запроса
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);

    return res.end();
  }

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  return next();
};
