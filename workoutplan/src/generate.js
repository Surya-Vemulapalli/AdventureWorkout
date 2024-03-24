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
    // code to run after render goes here
    const generateButton = document.getElementById("generate")
    const checkboxCardio = document.getElementById("cardio")

    generateButton.addEventListener('click', e => {
        console.log(checkboxCardio.checked)
    })
  }, [])

  return (
    <button id="generate" type="button">Generate Workout</button>
  )
}

export default Generate