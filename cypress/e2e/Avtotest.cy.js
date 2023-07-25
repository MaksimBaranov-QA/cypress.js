
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
   
   it('Заказ товара в количестве 2 шт и оформление', function() {
    // Шаг 1: Открываем главную страницу
    cy.visit('https://huntingpony.com/');

    // Шаг 2: Открываем карточку товара
    cy.get('.product-item').first().click();

    // Шаг 3: Положили товар в корзину и изменили количество на 2
    cy.get('.add-to-cart').click();
    cy.get('.cart-quantity').type('2');

    // Шаг 4: Переходим в корзину
    cy.get('.cart-link').click();

    // Шаг 5: Нажимаем кнопку оформления заказа
    cy.get('.checkout-button').click();

    // Шаг 6: Проверяем наличие текста "Оформление заказа"
    cy.contains('Оформление заказа').should('be.visible');

    // Дополнительный шаг: Заполняем поля данных для заказа 
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="address"]').type('123 Main St');
    cy.get('input[name="email"]').type('johndoe@example.com');
   })
})


