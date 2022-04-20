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
      name: 'live'
    },
    {
      type: 'input',
      message: 'Tell us about yourself',
      name: 'bio',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn',
        name: 'linkedIn',
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