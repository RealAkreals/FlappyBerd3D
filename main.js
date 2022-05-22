$('document').ready(function() {
  $( 'button' ).on('click', function() {
        var a = $('#in1').val();
        var b = $('#in2').val();
        
        //Проверка, на то что мы вводим
        if (a == "Sss") {
          console.log("Sss");
        } else {
          alert("Такого пользователя, не существует!");
          //for (var i = 0; i < 100; i++) {
            document.write("<h1>Вернитесь на главную страницу!, Ваши, данные не действительны!<h1/>" + "<a href='index.html'>Главная</a>");
          //}
        }
        //Админ аккаунт
        if (b == "pas") {
          document.write("Привет, " + a + "!<br/>");
          document.write("Ты вашёл в админку!<br/>");
          document.write("POV.Админка, ещё не полностью готова!(Int1grall lox❤️)");
          document.write("<a href="https:\\drive.google.com\file\d\1RhEu4avs2wif5WvS8DXlmLadxu2ElFgl\view?usp=sharing">Download Beta</a>");
        } else {
          alert("Такого пользователя, не существует!");
          //for (var i = 0; i < 10; i++) {
            document.write("<h1>Вернитесь на главную страницу!, Ваши, данные не действительны!<h1/>" + "<a href='index.html'>Главная</a>");
          //}
        }

        if(a == "")
        {
          alert("Введите, свой Админский логин");
        }

        if(b == "")
        {
          alert("Введите, свой Админский пароль");
        }
      });
});
