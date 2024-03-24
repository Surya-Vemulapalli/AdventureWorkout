import {useEffect} from 'react'

const Generate = () => {
    console.log(document.getElementById("cardio"))
    /*
    const checkboxCardio = document.getElementById("cardio")
    checkboxCardio.addEventListener('change', e => {
        console.log(checkboxCardio.value)
    })
    */
   useEffect(() => {
    console.log(document.getElementById('type'))
    // code to run after render goes here
    const generateButton = document.getElementById("generate")
    const checkboxCardio = document.getElementById("cardio")

    generateButton.addEventListener('click', e => {

        const typeChecks = Array(...document.getElementById('type').children).map(container => {
          return {
            'choice': container.children[0].name,
            'value': container.children[0].checked,
          }
        })
        const areaChecks = Array(...document.getElementById('area').children).map(container => {
          return {
            'choice': container.children[0].name,
            'value': container.children[0].checked,
          }
        })
        const lengthChecks = Array(...document.getElementById('length').children).map(container => {
          return {
            'choice': container.children[0].name,
            'value': container.children[0].checked,
          }
        })
        const equipmentChecks = Array(...document.getElementById('equipment').children).map(container => {
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
      
    })
  }, [])

  return (
    <button id="generate" type="button">Generate Workout</button>
  )
}

export default Generate