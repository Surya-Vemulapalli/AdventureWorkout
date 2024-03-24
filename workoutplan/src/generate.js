import {useState, useEffect} from 'react'
import workoutData from './workouts.json'

/*
  generated: whether or not the button has been clicked at least once
  suggestions: array of all workout objects containing title, url, and other relevant (and irrelevant, for now) information
  suggestionDivs: (only for top 3 workout objections) list of React elements that each contain text of the title of the workout track, hyperlinked to the workout url

  note: most urls are not implemented, as this is a proof of concept only
*/
let workoutState = {
  generated: false,
  suggestions: [],
  suggestionDivs: []
}

// number of links that will be shown to the user (could become a user input in the future)
const numSuggestions = 3

const Generate = () => {
    /*
    const checkboxCardio = document.getElementById("cardio")
    checkboxCardio.addEventListener('change', e => {
        console.log(checkboxCardio.value)
    })
    */

    /*
      learned about useState from Hoohacks React workshop and from:
      https://www.w3schools.com/react/react_usestate.asp
    */
    const [state, setState] = useState(0)

   /**
    * needed to run code once after rendering (so the elements would be loaded for getElementById to get),
    * so we used useEffect, assisted by:
    * https://daveceddia.com/react-hook-after-render/
    */
   useEffect(() => {
    // code to run after render goes here
    const generateButton = document.getElementById("generate")
    setState(workoutState.suggestionDivs)

    generateButton.addEventListener('click', e => {

      workoutState.generated = true
      workoutState.suggestions = []
      workoutState.suggestionDivs = []

      // note: changing return value of Question from question.js, debug this

      /*
        for each category of questions:
          get list of user selections for each choice of the form
          {choice: String, value: boolean}[]

          where choice is the option that the user could opt in or out of
          and value is whether the checkbox is checked

          the .slice(1) is to exclude the question labels
      */
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
        
      // algorithm for choosing the top tracks to give to user:
      // get checkbox data
      // for each each workout:
          // for each category:
              // if workout meets at least one checkbox criteria, add to workout score; else add 0
      // sort workouts by score from highest to lowest
      // give links of top 3 to user 
      
      for (const workout of workoutData.workouts) {

        // count: score of workout; increased when user criteria is met
        // b: temp boolean for whether to add to the score for each question
        // pref: temp boolean for whether user selected "no preference" (score shouldn't be increased for a question if "no preferences" is checked for that question)
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

        // add workout object to suggestions
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

      // sort suggestions from highest score to lowest score (so that top 3 can be chosen)
      workoutState.suggestions.sort((b, a) => a.value - b.value)

      /*
        to relearn how to make hyperlinks, we used:
        https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks

        displays: title of workout track (and clicking on it takes you (hypothetically to a spotify track))
      */
      workoutState.suggestionDivs = workoutState.suggestions.slice(0, numSuggestions).map((suggestion, i) => 
        <div className="suggestion" key={i}>
          <h4>
          <a href={suggestion.url}>
            {suggestion.title}
            </a>
          </h4>
        </div>
      )
      /*
        https://www.geeksforgeeks.org/re-rendering-components-in-reactjs/
        We needed to make it rerender the list of suggestions (links) each time "generate" is clicked,
        so this is how we achieved that.
      */
      setState(workoutState.suggestionDivs)
    })
  }, [])

  if (workoutState.generated) {
    // if "generate" has been clicked at least once, suggestions should be shown to the user
    return (
      <div>
        <button id="generate" type="button">Generate Workout</button>
        {state}
      </div>
    )
  } else {
    // otherwise, that wouldn't make sense
    return (
      <div>
        <button id="generate" type="button">Generate Workout</button>
      </div>
    )
  }
}

export default Generate