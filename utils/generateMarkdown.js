function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ---

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Features](#features)

  ---

  ## Installation
  Remember to install the following to proceed using this project: ${data.installation}.

  ## Usage
  Instructions: ${data.usage}

  ---

  ## Credits
  ${data.credits}

  ## Features
  ${data.features}
`;
}

module.exports = generateMarkdown;
