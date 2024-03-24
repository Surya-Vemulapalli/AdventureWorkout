import "./question.css"
const Question = (options) => {

    const checkboxes = []
    for (const option of options.options) {
        checkboxes.push(
            <div key={option} className="checkbox-container">
                <input type="checkbox" id={option} name={option} value={option}></input>
                <p>{option}</p>
            </div>
        )
    }
    return (
        <div className="checkboxes">
            {checkboxes}
        </div>
    )
} 

export default Question