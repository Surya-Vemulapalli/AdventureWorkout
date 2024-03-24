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
          const typeChecks = [{choice: "cardio", value: true}, {choice: "strength", value: false }, {choice: "yoga", value: false}, {choice: "interval training", value: true},{choice: "no preference", }]
          //const = areaChecks = [{choice: "legs", value: <Boolean>, ...}]
          const lengthChecks = []
          const equipmentChecks = []
        // get checkbox data
        // for each each workout:
            // for each category:
                // if workout meets at least one checkbox criteria, add to workout score; else add 0
        // sort workouts by score from highest to lowest
        // give links of top 3 to user 
        // workouts.sort((b - a) => b.score - a.score)
        const workout = {
          'url': 'https://docs.google.com/document/d/1bzEiWoql-V8b91ymA2XKMjtM8FOCLpBtvceBqekxoJc/edit',
          'type': 'cardio',
          'area': 'legs',
          'length': 6.1,
          'equipment': 'weights',
        }
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
          if(check.value && workout.length === check.choice){
            b = true;
          }
          if (check.value && check.choice === "no preference") {
            pref = false;
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



    })
  }, [])

  return (
    <button id="generate" type="button">Generate Workout</button>
  )
}

export default Generate