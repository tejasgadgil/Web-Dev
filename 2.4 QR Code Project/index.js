/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
    {
        name: 'url',
        message: 'Enter your url:',
        type: 'input'
    }
]).then((answer)=>{
    console.log(answer);
    const url_1=answer.url;
    var qr_png = qr.image(url_1);
    qr_png.pipe(fs.createWriteStream("qr_code.png"));
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });

})
.catch((error) => { //this is an error log (left empty here)
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



