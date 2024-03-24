/*
names: 
Colin Chandel
Surya Vemulapalli
Andy Liang
Mahati Vedula
*/

import './App.css';
import Question from './question.js';
import Generate from './generate.js';

/*
 * This folder was initially generated using Create React App, according to the instructions at:
 *  https://create-react-app.dev/docs/getting-started/
 */

/**
 * 4 multiple-choice survey questions, answered via checkboxex,
 * followed by a button to generate the workout. WHen the button is clicked, a select number (3, at the moment)
 * of titles of workout tracks with either real or hypothetical hyperlinks
 */
function App() {
  return (
    <div className="App">
      <Question category="type" options={["cardio", "strength", "yoga", "interval training", "no preference"]}></Question>
      <Question category="area" options={["legs", "arms", "core", "no preference"]}></Question>
      <Question category="length" options={["1-5 min", "5-10 min", "11-20 min", "21-30", "no preference"]}></Question>
      <Question category="equipment" options={["treadmill", "weights", "space to run", "pool", "none", "no preference"]}></Question>
      <Generate></Generate>
    </div>
  );
}

export default App;

/*
  Workout type:
  Length:
  Equipment:
*/