// WORKING WITH AJAX AND JSON

// in customers.json file it's an array having json objects

document.getElementById("button1").addEventListener("click", loadCustomer);

document.getElementById("button2").addEventListener("click", loadCustomers);

// LOAD SINGLE CUSTOMER
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);

      const customer = JSON.parse(this.responseText);

      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.Phone}</li>
      </ul>
      `;

      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
}

// LOAD CUSTOMERS
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      let output = "";

      customers.forEach(function(customer) {
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.Phone}</li>
        </ul>
        `;
      });

      document.getElementById("customers").innerHTML = output;
    }
  };

  xhr.send();
}

/*  -------------------------------------------------------------
  html page used-

  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <!-- skeleton cdn -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css"
      integrity="sha256-ECB9bbROLGm8wOoEbHcHRxlHgzGqYpDtNTgDTyDz0wg="
      crossorigin="anonymous"
    />
    <title>Ajax Sandbox</title>
  </head>
  <body>
    <div class="container">
      <button id="button1">Get Customer</button>
      <button id="button2">Get Customers</button>
      <br /><br />
      <h1>Customer</h1>
      <div id="customer"></div>
      <h1>Customers</h1>
      <div id="customers"></div>
    </div>

    <script src="02_app.js"></script>
  </body>
</html>

 */
