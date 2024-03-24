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
    
    /*
        https://stackoverflow.com/questions/22876978/loop-inside-react-jsx
        for idea of adding a list of elements
    */
    for (const option of params.options) {
        /* 
            For each option, add a checkbox and a the label indicating what clicking the checkbox chooses.
            Note: users may click multiple checkboxes. In the future, we could make "no preference" automatically uncheck other boxes, and vice versa,
                but we don't have time now.
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
            <p className = "questionLabel">{params.category + ": "}</p>
            {checkboxes}
        </div>
    )
} 

export default Question