# Capstone-Project - Teacher E-commerce Website

**Dependencies**
<ul>
   <li>Express</li>
   <li>Sequelize</li>
   <li>Mariadb</li>
   <li>CORS</li>
</ul>

**Getting Started**
<ul>
   <li>Install all dependencies using the <code> npm install </code> command</li>
   <li>Run the backend webserver using <code> node index.js </code> when you are in the server-side directory</li>
   <li>Run the front-end webserver using <code> ng serve </code> when you are in the client-side directory</li>
</ul>

This project is an e-commerce website for teacher sellers to seller digital resources. 


**Technology Stack:** <br>
<ul>
   <li>TypeScript</li>
   <li>HTML</li>
   <li>CSS</li>
   <li>Angular</li>
   <li>MariaDB</li>
   <li>Bootstrap</li>
   <li>Nokde.js</li> 
</ul>

   ![Screen Shot 2023-08-21 at 6 46 30 PM](https://github.com/marwaelkelani/Capstone-Project/assets/126745070/bd073b70-4017-4c6e-a723-bee1948f9848)

Some of the key highlights include:

1) **Shopping Cart**<br>
   This includes updating the number in the navbar when a new type of product is added or removed, updating the quantity and price and checkout form.<br>
<img width="1455" alt="Screen Shot 2023-08-21 at 7 19 04 PM" src="https://github.com/marwaelkelani/Capstone-Project/assets/126745070/1d87f6f9-a86c-4d80-9f95-ac6fdc428e83">



2) **Filtering Products**<br>
   Users can filter by grade, subjects, and product types. Users can use one category, or all three. By clicking on the reset button, all products will re-appear on the right-hand side<br>
![Screen Shot 2023-08-21 at 6 47 33 PM](https://github.com/marwaelkelani/Capstone-Project/assets/126745070/4cd457c0-6491-409f-9a71-504ced024f41)
   
4) **Changing Quantities**<br>
   Users can adjust the quantity of a product using an incrementor and decrementor button. This dynamically changes the quantity<br>
5) **Using product id from the url to data-bind an individual product's details.** <br>
   Users can click on the title or thumbnail to view more about an individual product. The HTML was coded once, and used angular directive *ngFor to populate the appropriate product details<br>
  ![Screen Shot 2023-08-21 at 6 50 47 PM](https://github.com/marwaelkelani/Capstone-Project/assets/126745070/e0d82a1d-2121-428e-89d3-1f943121158e)

   
6) **Reactive Forms**<br>
   Reactive forms were used in the contact us page, filtering form, and checkout page. A combination of communicating with the backend using Sequelize, and console log were used.<br>
![Screen Shot 2023-08-21 at 6 51 16 PM](https://github.com/marwaelkelani/Capstone-Project/assets/126745070/e8e57aa0-dd7b-4eb2-8459-ef432a8ce606)
<br>

**Database Design**<br>
Below is a diagram of the 7 tables and their associations.<br>
<img width="939" alt="Screen Shot 2023-08-21 at 6 52 06 PM" src="https://github.com/marwaelkelani/Capstone-Project/assets/126745070/85812f89-6a16-4daf-b5fa-1e5dfc6ed1b3">


