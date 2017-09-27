/* eslint-disable no-use-before-define, no-console */
const inquirer = require('inquirer');
const { spawn } = require('child_process');
const { resolve } = require('path');

// Map containing [exercise name, folder name]
const exercises = new Map([
  ['Exercise 1: Handling state with Mobx', 'exercise-1-mobx'],
  ['Exercise 2: Handling async data', 'exercise-1-handling-async'],
]);

inquirer
  .prompt([
    {
      type: 'list',
      name: 'exercisePicker',
      message: 'Which exercise do you want to run?',
      choices: [...exercises.keys()],
    },
  ])
  .then(startExercise);

function startExercise({ exercisePicker }) {
  const dir = exercises.get(exercisePicker);
  const childProcess = spawn('webpack-dev-server', [
    '--open',
    '--config',
    resolve(__dirname, `${dir}/webpack.config.js`),
  ]);

  childProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  childProcess.stderr.on('data', (data) => {
    console.log(data.toString());
  });

  childProcess.on('exit', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}
