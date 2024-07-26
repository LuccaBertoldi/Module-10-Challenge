const { createPromptModule } = require('inquirer');
const fs = require('fs');
const path = require('path');
const { logoGenerator } = require('./logoGenerator'); // Import the logoGenerator function

// Create an inquirer instance
const prompt = createPromptModule();

// Function to prompt user for input
async function promptUser() {
    const questions = [
        {
            type: 'list',
            name: 'shape',
            message: 'Choose the shape for the logo:',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter the color for the logo (#ff0000 or red):'
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter logo text:'
        },
        {
            type: 'input',
            name: 'filename',
            message: 'Enter the filename with .svg o the end (example: logo.svg):'
        }
    ];

    try {
        const answers = await prompt(questions);
        const { shape, color, text, filename } = answers;

        const svgContent = logoGenerator(shape, color, text);

        fs.writeFileSync(path.join(__dirname, filename), svgContent, 'utf8');

        console.log(`Logo saved to ${filename}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Run the prompt
promptUser();
