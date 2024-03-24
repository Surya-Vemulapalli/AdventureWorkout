import "./question.css"
// TODO: rename params
// My apologies, I can't think of a good rename for params
/**
 * params.category: the id for the row checkboxes (necessary for accessing the user's answers for 1 question)
 * @param {{category: String, options: String[]}} params 
 * @returns 
 */
const Question = (params) => {

    // list of divs, each with a checkbox and description
    const checkboxes = []
    
    for (const option of params.options) {
        /* 
            For each option, add a checkbox
        */
        checkboxes.push(
            <div key={option} className="checkbox-container">
                <input type="checkbox" id={option} name={option} value={option}></input>
                <p>{option}</p>
            </div>
        )
    }
    
    // Note: when altering this structure, debug generate.js (would restructure better if more time)
    return (
        <div id={params.category} className="checkboxes">
            <p>{params.category + ": "}</p>
            {checkboxes}
        </div>
    )
} 

export default Question