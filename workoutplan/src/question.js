import "./question.css"
// TODO: rename params
const Question = (params) => {

    const checkboxes = []
    
    for (const option of params.options) {
        checkboxes.push(
            <div key={option} className="checkbox-container">
                <input type="checkbox" id={option} name={option} value={option}></input>
                <p>{option}</p>
            </div>
        )
    }
    
    return (
        <div id={params.category} className="checkboxes">
            {checkboxes}
        </div>
    )
} 

export default Question