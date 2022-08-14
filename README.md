# Delivery-API

## Install

     npm install


## Run

     npm run dev

## Get retrieve all today’s deliveries

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var formdata = new FormData();

var requestOptions = {
method: 'GET',
headers: myHeaders,
body: formdata,
redirect: 'follow'
};

fetch("http://localhost:1337/deliveries/daily", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
