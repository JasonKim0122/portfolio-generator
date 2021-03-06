const fs=require("fs");

const writeFile = fileContent => {
    //creating a new promise using the JS keyword 'new'
    //acts like a conatiner that allows us to run code that at some point will b in a status of 'pending'
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
            //if there is an error, reject the Promise and send the error to the Promise's ".catch()" method
            if (err) {
                reject(err);
                //return out of the func here to make sure the Promise doesnt accidentally execute the resolve() func as well
                return;
            }

            //if everything went well, reslove the Promise and send the successful data to the ".then()" method
            resolve({
                ok: true,
                message: "File Created!"
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile("./src/syle.css", "./dist/style.css", err => {
            if (err) {
            reject(err);
            return;
            }
            resolve({
                ok: true,
                message: "Stylesheet created!"
            });
        });
    });  
}

module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
};


//shorthand property names
module.exports = { writeFile, copyFile };