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
        // 
        checkboxes.push(
            <div key={option} className="checkbox-container">
                <input type="checkbox" id={option} name={option} value={option}></input>
                <p>{option}</p>
            </div>
        )
    }
    
    return (
        <div id={params.category} className="checkboxes">
            <p className = "questionLabel">{params.category + ": "}</p>
            {checkboxes}
        </div>
    )
} 

export default Question