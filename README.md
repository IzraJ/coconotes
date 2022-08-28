# Coconotes

This is a todo list that allows you to add, edit, and delete, notes that are stored in a database.

**Link to project:** https://coconotes.herokuapp.com/

![coconotes](https://user-images.githubusercontent.com/98055348/187046384-0b50cb65-91b4-4377-8f0f-de2dd9b77124.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, EJS, MongoDB

This app uses CRUD operations to get, post, update, and delete. This app uses HTML, raw CSS with a boostrap modal and Javascript with a MongoDB database to store the data. This was my first CRUD app and it was really fun to make. The most difficult part was the update request. I used a boostrap modal for the pop up window. I was having trouble getting the right information to send to the database to make sure it was editing the correct "To Do". 

## Optimizations
*(optional)*

I would love to go back and add Oauth and MVC organization. It would be nice to have users be able to create their own profile and for me to be better organized in the backend using MVC.

## Lessons Learned:

This was my first time using EJS and a templating language. I learned a lot about how these templating languages interact with HTML, Javascript, and the beautiful dance they can do. To get my task name to make sure i was updating the correct task I used EJS to insert the task name into a javascript function which stored the value of the task name into a div in the modal which I was able to use to make sure the proper task was being updated. This was so exciting to see how everything was working together.
