class UserService {
  // Убрал объявление переменных username и password, потому что так не пишется, насколько я знаю. И плюс var устаревшее
  //var username;
  //var password;

  // в конструкторе все правильно. Запускается с переданными аргументами и инициализирует объект
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  // заменил UserService.username на this.username, потому что мы можем обращаться через ключевое слово this
  get username() {
    return this.username;
  }

  get password() {
    throw 'You are not allowed to get password';
  }

  static authenticate_user() {
    let xhr = new XMLHttpRequest();
    // заменил на обратные кавычки выражение, чтобы не использовать конкатенацию и вставить выражение через ${}
    // убрал парметр true, чтобы запрос был асинхронный, так как он используется чаще, чем синхронный
    // (насколько я знаю, снхронные запросы блокируют выполнение javascript, пока загрузка не завершена)
    xhr.open('GET', `https://examples.com/api/user/authenticate?username=${this.username}&password=${this.password}`);

    // необходимо добавить отправку запроса
    xhr.send();
    xhr.responseType = 'json';

    // заменил const на let, потому что дальше возможно изменение переменной result
    let result;

    xhr.onload = function () {
      if (xhr.status !== 200) {   // убрал кавычки с 200, потому что xhr.status возвращает число и сравниваем строго с числом
        // метод должен возвращать true или false. Если у нас статус не 200, то произошла ошибка и нужно вернуть false.
        result = false;
      } else {
        result = true;
      }
    };

    return result;
  }
}


$('form #login').click(function () {
  // заменил устаревшее var на const
  const username = $('#username');
  const password = $('#password');

  // заменил устаревшее var на let и добавил new
  let user = new UserService(username, password);
  let res = user.authenticate_user();

  // убрал == true, так как условие if если имеет значение true/false, само проверит выражение
  if (res) {
    // заменил document на window для кроссбраузерности
    window.location.href = '/home';
  } else {
    // alert(res.error) убрал res.error, так как res имеет значение true/false
    alert('Ошибка');
  }
});