function Content(props) {
    return(
    <>
    {generateContent(props.exercises)}
    <h1>{props.course}</h1>
    </>);
}

function generateContent(exercises){
    exercises.forEach(exercise => {
        console.log(exercise);
    })
}

export default Content;