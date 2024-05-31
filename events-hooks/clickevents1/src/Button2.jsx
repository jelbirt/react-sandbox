
function Button2() {

    // const handleClick = (e) => console.log(e);       <-- Displays data about the click event to console
    const handleClick = (e) => e.target.textContent = "OUCHY!";

    return (<button onDoubleClick={(e) => handleClick(e)}>Click Me Too!</button>);
}
export default Button2