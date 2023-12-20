<summary><h1> DataTable</h1></summary>
<h2></h2>


<h3>✏️ Описание</h3>
      <strong>DataTable</strong> - сайт представляет собой таблицу пользователей. Данный сайт является решением тестового задания https://gist.github.com/TchernyavskyDaniil/5c079ccf03c3ea1cff36ef9f9cef22e6

<h3>:clipboard: Сайт</h3>
Посетите сайт: https://data-table-rho.vercel.app/

<h1></h1>
<summary><h2>💼 Стек технологий</h2></summary>


<table>
<tr>
<td><strong>Frontend</strong></td>  <td><strong>Backend</strong></td> 
</tr>
<tr>
<td>React</td>  <td>Json-server</td>  
</tr>
<tr>
<td>Typescript</td>  <td>Node js</td>
</tr>
<tr>
<td>Redux</td>  
</tr>
<tr>
<td>Redux toolkit</td>  
</tr>
<tr>
<td>Redux persist</td>  
</tr>
<tr>
<td>RTK query</td>  
</tr>
<tr>
<td>Scss</td> 
</tr>
<tr>
<td>Vite</td> 
</tr>
</table> 

<h2></h2>
<details><summary><strong>✨ Screenshots</strong></summary>
<!-- | ![Главная страница](/pictures/Главная.jpg "Главная страница") | | :--: | | *Главная страница* |
| ![Курсы](/pictures/Курсы.jpg "Курсы") | | :--: | | *Курсы* |
| ![Страница редактирования ](/pictures/Редактирование.jpg "Страница редактирования") | | :--: | | *Страница редактирования* |
| ![Темная тема](/pictures/Темная_тема.jpg "Темная тема") | | :--: | | *Темная тема* |
| ![Светлая тема](/pictures/Светлая_тема.jpg "Светлая тема") | | :--: | | *Светлая тема* | -->

</details>
<h2></h2>



 <summary><h2>:dizzy: Функционал</h2></summary>

- Проект построен по модульной архитектуре UIkit можно полностью переиспользовать в другом проекте 
- Сортировка по столбцам осуществляется при нажатии по названию таблицы, второй клик - обратная сортировка
      id, phone: от меньшего к большему и наоборот
      firstName, lastName, email сортировка по алфавиту первой буквы
- Клиентская пагинация: данные  отображаются  постранично,  50 элементов на страницу. Имеется  пользовательская навигация для перехода по страницам.
- Фильтрация: SearchUsersByText компонент предоставляет текстовый инпут, в который можно ввести текст и строки таблицы, данные которых не содержат подстроку, введённую пользователем, скрываются. Поиск осуществляется по клику кнопки "Найти"
- По клике на строку таблицы значения полей выводятся в дополнительном блоке под таблицей. Все 4 поля. Когда происходит переход на новую страницу, то данные ниже таблицы  удаляются.
- Данные в таблицу загружаются с сервера json-server
- При загрузке данных в таблице  показывается  лоадер
- Обработка ошибок с сервера
- При перезагрузке пользователь окажеться на той же странице , использовал Redux persist для созранения номера страницы 

<h2></h2>
<summary><h2>🛠️ Установка</h2></summary>



1. Сделайте Fork проекта. Нажмите на значок Fork в правом верхнем углу, чтобы начать.

2. Клонировать проект можно с помощью следующей команды:
  
      ~~~
      git clone https://github.com/Aligan18/DataTable.git
      ~~~

3. Перейдите в каталог проекта

      ~~~
      DataTable 
      ~~~
      
4. Установите зависимости с помощью npm install
      ~~~
      npm install 
      ~~~

5. Запустите скрипт
      ~~~
      npm run dev
      ~~~
      npm run server
