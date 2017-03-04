$(function() {
    $('#for_plugin').CaruselPlugin();
});

$(function() {

    var persona = {
        name: 'олейник юрий петрович',
        group: 'GoFrontend#7 компании ',
        img: 'image/photo.jpg',
        tel: '+380933422727',
        fb: 'https://www.facebook.com/y.oleyn',
        fidb: 'Я сверстал эту страницу! Может и не совсем правильно, но сверстал!!!',
        question: [
            'Хочу  заняться новым и интересным делом',
            'Люблю узнавать что-то новое',
            'Пора что-то поменять в своей жизни',
            'Мне нравится IT!!!!'
        ]
    };

    var myPage = document.getElementById("person");
    myPage.innerHTML = tmpl("page_about", persona);
});
