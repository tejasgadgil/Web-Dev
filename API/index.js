import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";


const yourUsername = "t";
const yourPassword = "t";
const yourAPIKey = "e17a3900-3e57-49a5-bcfa-5293bc661263";
const yourBearerToken = "56364cea-ae81-4bcc-9a12-140a9755bb77";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  try{
    const response= await axios.get("https://secrets-api.appbrewery.com/random");
    console.log(response.data);
    console.log(JSON.stringify(response.data));
    console.log(typeof(JSON.stringify(response.data)));

    res.render("index.ejs", {content: JSON.stringify(response.data)});
  }
  catch(error){
    console.error("failed", error.message);
    res.status(500).send("error");
  }

  
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async(req, res) => {
  try{

    const response= await axios.get("https://secrets-api.appbrewery.com/all?page=2", {
      auth: {
          username: yourUsername,
          password: yourPassword
      },
      params: { yourUsername }
  });
    console.log(response.data);
    console.log(JSON.stringify(response.data));
    console.log(typeof(response.data));

    res.render("index.ejs", {content: JSON.stringify(response.data)});
  }
  catch(error){
    console.error("failed", error.message);
    res.status(500).send("error");
  }
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

app.get("/apiKey",  async(req, res) => {
  try{

    const response= await axios.get("https://secrets-api.appbrewery.com/filter", {
      params: {
         
          apiKey: yourAPIKey,
          score: 5

      }
  });
    console.log(response.data);
    console.log(JSON.stringify(response.data));
    console.log(typeof(response.data));

    res.render("index.ejs", {content: JSON.stringify(response.data)});
  }
  catch(error){
    console.error("failed", error.message);
    res.status(500).send("error");
  }



  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", async(req, res) => {
  try{

    const response= await axios.get("https://secrets-api.appbrewery.com/secrets/2", {
      headers: {
          Authorization : "Bearer "+yourBearerToken
      },
      
  });
    console.log(response.data);
    console.log(JSON.stringify(response.data));
    console.log(typeof(response.data));

    res.render("index.ejs", {content: JSON.stringify(response.data)});
  }
  catch(error){
    console.error("failed", error.message);
    res.status(500).send("error");
  }
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
