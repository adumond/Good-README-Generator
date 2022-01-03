const inquirer = require("inquirer");
const fs = require("fs");
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "projectName",
  },
  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What steps are required to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "What instructions do you have for usage of your project?",
    name: "usage",
  },
  {
    type: "input",
    message: "Please list your colloaborators.",
    name: "credits",
  },
  {
    type: "input",
    message: "Please advise on license for the project? ",
    name: "license",
  },
];
inquirer.prompt(questions).then((answers) =>
  fs.writeFile("README.md", generateMd(answers), (err) => {
    console.log(err);
  })
);

function generateMd(answers) {
  return `
  # ${answers.projectName}
## Description
${answers.description}
## Installation
${answers.installation}
## Usage
${answers.usage}
## Credits
${answers.credits}
## License
${answers.license}
`;
}
