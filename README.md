# Delivery-API

## Install

     npm install

## Run

     npm run dev


## POST resolves a single line address into a structured one
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const formdata = new FormData();
    formdata.append("searchTerm", " {SINGLE LINE ADDRESS}");

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
    };

    fetch("http://localhost:1337/resolve-address ", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

## POST retrieve all available timeslots 
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const formdata = new FormData();
    formdata.append("address", "{FORMATTED ADDRESS}  ");

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
    };

    fetch("http://localhost:1337/timeslots", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

## POST  book a delivery  
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const formdata = new FormData();
    formdata.append("user", " {USER}");
    formdata.append("timeslotId", "{TIMESLOT_ID}  ");

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
    };

    fetch("http://localhost:1337/deliveries", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
## POST mark a delivery as completed 
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    const formdata = new FormData();

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
    };

    fetch("http://localhost:1337/deliveries/{DELIVERY_ID}/complete", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

## Delete cancel a delivery 

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const formdata = new FormData();
    
    const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
    };
    
    fetch("http://localhost:1337/deliveries/{DELIVERY_ID}", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


## Get retrieve all today’s deliveries

      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");

      const formdata = new FormData();

      const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
      };

      fetch("http://localhost:1337/deliveries/daily", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

## Get retrieve the deliveries for current week  

      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");

      const formdata = new FormData();

      const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
      };

      fetch("http://localhost:1337/deliveries/weekly", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
