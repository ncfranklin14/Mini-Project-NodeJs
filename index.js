const fs = require('fs');
const inquirer = require('inquirer');

inquirer
.prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where do you live?',
      name: 'location'
    },
    {
      type: 'input',
      message: 'Tell us about yourself',
      name: 'bio',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn?',
        name: 'linkedin',
      },
      {
        type: 'input',
        message: 'What is your GitHub?',
        name: 'github'
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
  ])  
  .then((data) => {
  const filename = `${data.name.toLowerCase().split(' ').join('')}.html`;
//   use appendfile or writefile
  fs.writeFile(filename, `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
      <style>
		body {
			display: flex;
			justify-content: center;
			align-items: center;
		}
        
		#name {
			text-align: center;
			font-weight: bold;
		}

		#location::before,
		#bio::before,
		#github::before,
		#linkedin::before,
		#email::before {
			color: black;
			font-weight: bold;
			background-color: #FAB007 !important;
		}

		#location::before {
			content: "LOCATION: ";
		}

		#bio::before {
			content: "BIO: ";
		}

		#github::before {
			content: "GITHUB: ";
		}

		#linkedin::before {
			content: "LINKEDIN: ";
		}

		#email::before {
			content: "EMAIL: ";
		}

		#location {
			background-color: #238BE6;
			color: black;
		}
	</style>
  </head>
  <body>
      <div class="container">
          <div class="row">
              <div class="col-6">
                  <img src="./profile-42914__340.webp" alt="blank person profile pic">
              </div>
      <div class="col-6">
      <h1 id= "name">${data.name}</h1>
      <h2 id="location">${data.location}</h2>
      <h3 id="bio">${data.bio}</h3>
      <h4 id="github">${data.github}</h4>
      <h4 id="linkedin">${data.linkedin}</h4>
      <h4 id="email">${data.email}</h4>
      </div>
      </div>  
  </div>
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script src="./script.js"></script>
  </body>
  </html>`, (err) =>
  err ? console.error(err) : console.log('Commit logged!')
)});
