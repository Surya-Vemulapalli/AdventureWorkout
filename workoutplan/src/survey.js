import Question from './question.js';

const Survey = () => {
    return (
        <div>
            <Question options={["cardio", "strength", "yoga", "interval training", "no preference"]}></Question>
            <Question options={["1-5 min", "5-10 min", "11-20 min", "21-30", "no preference"]}></Question>
            <Question options={["treadmill", "weights", "space to run", "none", "no preference"]}></Question>
        </div>
    )
}