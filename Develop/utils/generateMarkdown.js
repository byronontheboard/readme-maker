const renderTitle = (projectTitle) => `# ${projectTitle}\n\n`;

const renderTableOfContents = () => `## Table of Contents
- [Description](#projectDescription)
- [Installation](#projectInstall)
- [Usage](#projectUsage)
- [Contribution](#projectContribution)
- [Tests](#projectTest)
- [License](#userLicense)
- [Questions](#questions)
- [Github](#userGitHub)
`;

const renderDescription = (projectDescription) => `## Description
${projectDescription}

`;

const renderInstallation = (projectInstall) => `## Installation
\`\`\`bash
npm install
\`\`\`
${projectInstall}

`;

const renderUsage = (usage) => `## Usage
\`\`\`bash
node index.js
\`\`\`
${usage}

`;

const renderContribution = (projectContribution) => `## Contribution
${projectContribution}

`;

const renderTests = (projectTests) => `## Tests
${projectTests}

`;

const renderQuestions = (questions, userEmail) => `## Questions
### Please feel free to contact me here!
[Email me!](mailto:${userEmail})

### Outstanding Questions
${questions}

`;

const renderCredits = (firstName, lastName) => `## Credits
Made by: ${firstName} ${lastName}

`;

const renderGithub = (userGithub) => `## Github
Github: [${userGithub}](https://www.github.com/${userGithub})

`;

const licenseBadges = {
  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n',
  unlicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)\n'
};

const renderLicenseBadge = (license) => {
  if (licenseBadges.hasOwnProperty(license)) {
    return licenseBadges[license];
  } else {
    return "Other";
  }
};

const licenseTexts = {
  MIT: `## License
### MIT
...
`,
  unlicense: `## License
### The Unlicense
...
`
};

const renderLicenseSection = (license) => {
  if (licenseTexts.hasOwnProperty(license)) {
    return licenseTexts[license];
  } else {
    return "Other";
  }
};

function generateMarkdown(markdownData) {
  let markdown = renderTitle(markdownData.projectTitle);
  markdown += renderLicenseBadge(markdownData.license) + '\n\n';
  markdown += renderTableOfContents() + '\n\n';
  markdown += renderDescription(markdownData.projectDescription) + '\n\n';
  markdown += renderInstallation(markdownData.projectInstall) + '\n\n';
  markdown += renderUsage(markdownData.projectUsage);
  markdown += renderContribution(markdownData.projectContribution) + '\n\n';
  markdown += renderTests(markdownData.projectTest) + '\n\n';
  markdown += renderQuestions(markdownData.questions, markdownData.userEmail) + '\n\n';
  markdown += renderCredits(markdownData.firstName, markdownData.lastName);
  markdown += renderGithub(markdownData.userGitHub);

  markdown += renderLicenseSection(markdownData.license);

  return markdown;
}

function generateReadmeContent(answers) {
  return generateMarkdown(answers);
}

module.exports = generateReadmeContent;
