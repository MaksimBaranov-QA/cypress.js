
describe('Тестирование формы логина', function () {
   it('Ввожу верный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

   it('Проверка забыли пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.contains('Восстановите пароль').should('be.visible');
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

   it('Ввожу верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })

   it('Ввожу неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germa@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

   it('Ошибка валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germadolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
    })

   it('Проверка строчных букв в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germa@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

   it('Проверка строчных букв в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
   
   it('Добавление товара и оформление заказа', function () {
        cy.visit('https://huntingpony.com/');                                       // Заходим на сайт
        cy.get('[href="/collection/lezhanki"] > .banner-list__item-title').click(); // Заходим в катоалог
        cy.get('[data-product-id="338933592"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click(); // Заходим в карточку товара
        cy.wait(5000);                                                              // Ожидание для подгрузки страницы
        cy.get('.add-cart-counter__btn-label').click();                             // Добавляем товар в корзину
        cy.get('.header__cart > .icon').click();                                    // Переходим в корзину
        cy.get('.cart-controls > .button').click();                                 // Нажимаем оформить заказ
        cy.contains('Оформление заказа').should('be.visible');                      // Проверяем что перешел на страницу Оформления по наличию Фразы
   })
})
   

