
// const Element = React.createElement(
//     'div', {onClick: () => console.log('clicked')}, 'Click Me!'
// )
// const Element2 = React.createElement(
//     'div', {onClick: () => console.log('clicked')}, 'Click Me!'
// )
// const Element3 = React.createElement(
//     'div', {onClick: () => console.log('clicked')}, 'Click Me!'
// )
// const Element4 = React.createElement(
//     'div', {onClick: () => console.log('clicked')}, 'Click Me!'
// )

// // ReactDOM.render(Element, document.getElementById('app'))
// // ReactDOM.render(Element2, document.getElementById('app'))
// // ReactDOM.render(Element3, document.getElementById('app'))
// // ReactDOM.render(Element4, document.getElementById('app'))


const TimeOfDay = () => {
    let greeting = 'hello dear user, good'
    let timeOfDayForGreeting;
    const hour = 4
    if(hour < 6){
        timeOfDayForGreeting = 'before morning'
    } else if(hour >= 6 && hour <= 12){
        timeOfDayForGreeting = 'morning'
    } else if (hour > 12 && hour <= 23){
        timeOfDayForGreeting = 'evening'
    }

    return(
        <div className="check">
            {greeting}-{timeOfDayForGreeting}
        </div>
    )
}


const Buttons = () => {
    return (
        <div>
            <button onClick={() => console.log('clicked')}>
                please click me!!!!
            </button>
            <button onClick={() => alert('i am clicked')}>
                please click me 2
            </button>
        </div>
    )
}

const Comp = () =>{
return (
    <div>
        <TimeOfDay/>
        <Buttons/>
        <Buttons/>
        <Buttons/>
        <Buttons/>
        <Buttons/>
        <Buttons/>
        <Buttons/>
    </div>
)  
    
      

}
ReactDOM.render(<Comp />, document.getElementById('app'))
