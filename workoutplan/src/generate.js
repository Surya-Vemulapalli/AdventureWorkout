import {useState, useEffect} from 'react'
import workoutData from './workouts.json'

let workoutState = {
  generated: false,
  suggestions: [],
  suggestionDivs: []
}
const numSuggestions = 3

const Generate = () => {
    /*
    const checkboxCardio = document.getElementById("cardio")
    checkboxCardio.addEventListener('change', e => {
        console.log(checkboxCardio.value)
    })
    */
    const [state, setState] = useState(0)

   useEffect(() => {
    // code to run after render goes here
    const generateButton = document.getElementById("generate")
    setState(workoutState.suggestionDivs)

    generateButton.addEventListener('click', e => {

      workoutState.generated = true
      workoutState.suggestions = []
      workoutState.suggestionDivs = []

      // note: changing return value of Question from question.js, debug this
      const typeChecks = Array(...document.getElementById('type').children).slice(1).map(container => {
        return {
          'choice': container.children[0].name,
          'value': container.children[0].checked,
        }
      })
      const areaChecks = Array(...document.getElementById('area').children).slice(1).map(container => {
        return {
          'choice': container.children[0].name,
          'value': container.children[0].checked,
        }
      })
      const lengthChecks = Array(...document.getElementById('length').children).slice(1).map(container => {
        return {
          'choice': container.children[0].name,
          'value': container.children[0].checked,
        }
      })
      const equipmentChecks = Array(...document.getElementById('equipment').children).slice(1).map(container => {
        return {
          'choice': container.children[0].name,
          'value': container.children[0].checked,
        }
      })
      
      //console.log(typeChecks)

      /* checkbox data form:
        typeChecks = [{choice: "cardio", value: true}, {choice: 'strength', value: false}...]
        areaChecks = [{choice: "legs", value: <Boolean>, ...}]
        lengthChecks = [...]
        equipmentChecks = [...]
      */
        
      // get checkbox data
      // for each each workout:
          // for each category:
              // if workout meets at least one checkbox criteria, add to workout score; else add 0
      // sort workouts by score from highest to lowest
      // give links of top 3 to user 
      // workouts.sort((b - a) => b.score - a.score)
      
      for (const workout of workoutData.workouts) {
        let count = 0;
        let b = false;
        let pref = true;
        for (const check of typeChecks){
          if(check.value && workout.type === check.choice){
            b = true;
          }
          if (check.value && check.choice === "no preference") {
            pref = false;
          }

        }
        
        
        if (b && pref) count++;

        b = false;
        pref = true;
        for (const check of areaChecks){
          if(check.value && workout.area === check.choice){
            b = true;
          }
          if (check.value && check.choice === "no preference") {
            pref = false;
          }
        }

        if(b && pref) count++;

        b = false;
        pref = true;
        for (const check of lengthChecks){
          if (check.value && check.choice === "no preference") {
            pref = false;
          } else if(check.value){
            const range = check.choice.split(" ").map(word => word !== "no preference" ? word.split("-") : word)[0]

            if (range[0] <= workout.length && workout.length <= workout.length) b = true;
          }
        }

        if(b && pref) count++;

        b = false;
        pref = true;
        for (const check of equipmentChecks){
          if(check.value && workout.equipment === check.choice){
            b = true;
          }
          if (check.value && check.choice === "no preference") {
            pref = false;
          }
        }

        if(b && pref) count++;

        workoutState.suggestions.push({
          title: workout.title,
          url: workout.url,
          type: workout.title,
          area: workout.area,
          length: workout.length,
          equipment: workout.equipment,
          value: count
        })
      }
      workoutState.suggestions.sort((b, a) => a.value - b.value)
      workoutState.suggestionDivs = workoutState.suggestions.slice(0, numSuggestions).map((suggestion, i) => 
        <div className="suggestion" key={i}>
          <h4>
          <a href={suggestion.url}>
            {suggestion.title}
            </a>
          </h4>
        </div>
      )
      setState(workoutState.suggestionDivs)
    })
  }, [])

  if (workoutState.generated) {
    return (
      <div>
        <button id="generate" type="button">Generate Workout</button>
        {state}
      </div>
    )
  } else {
    return (
      <div>
        <button id="generate" type="button">Generate Workout</button>
      </div>
    )
  }
}

export default Generate