import './App.css';
import Question from './question.js';
import Generate from './generate.js';

function App() {
  return (
    <div className="App">
      <Question id="type" options={["cardio", "strength", "yoga", "interval training", "no preference"]}></Question>
      <Question id="time" options={["1-5 min", "5-10 min", "11-20 min", "21-30", "no preference"]}></Question>
      <Question id="equipment" options={["treadmill", "weights", "space to run", "none", "no preference"]}></Question>
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