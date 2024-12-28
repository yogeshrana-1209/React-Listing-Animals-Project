import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimalShow from './AnimalShow';
import './AnimalShow.css'; 

//How React define State
// function useState(defaultValue){
//   return{
//     yourState : defaultValue,
//     yourSetter: () => {}
//   };
// }

//function for getting random Animal
function getRandomAnimal() {
  const animals = ['bird','cat','cow','dog','gator','horse'];
  
  return animals[Math.floor(Math.random() * animals.length)];
  //return console.log(Math.floor(Math.random() * animals.length));

}

console.log(getRandomAnimal());


//function App() {

  // function makeArray(){
  //   return [10,20,20,352];
  // }

  // const stateConfig = useState(0);
  // const count = stateConfig.yourState;
  // const setCount = stateConfig.yourSetter;
 
  // const myArray = makeArray();
  // const firstel = myArray[0];
  // const secondel = myArray[1];
  // const [firstel,secondel] = makeArray();
  // console.log(firstel,secondel);
  

  //const [count, setCount] = useState(0);
  // const [value, setValue] = useState(0);

  //console.log(useState(50));
  

  // Event for  handle the button click
  // const handleClick = () =>{
  //   console.log('Button was Clicked');
  //   setCount(count + 1);
  // }

  // const handleMouseMove = () => {
  //   console.log('Button was Clicked');
  // }

  //function for handle the btn click event for animals
  function App() {
    const [animals,setAnimals] = useState([]);

    const handleClick = () => {
        console.log(setAnimals([...animals, getRandomAnimal()]));
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>
    })

  return (
    <>
    <div className='app'>
      {/* <button onMouseMove={handleMouseMove}> */}
      <button onClick={handleClick}>
        Add Animal
        </button>
        {/* <div>Number of animals: {count}</div> */}
        <div className='animal-list'>
          {renderedAnimals}
        </div>
    </div>
       
    </>
  );
}

export default App

