import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function TestUseState() {
    const handleClick = (name, e) => {
        let num = 1;
        console.log(`number = ${num}`);
        console.log(`name is = ${name}`);
        console.log(e);
    }

    const increament = (num) => {
         num++;
         setNumber(num);
         console.log(num);
    }

    const decreament = (num) => {
      if(num >= 0){
        setNumber(0)
      }
      else{
        num --;
        setNumber(num);
      }
      
    }
    let myList = [1, 2, 3]
    let antherList = [1, 4, 8, 6, 3]
    let resultList = myList.concat(antherList)
    myList.push(789)
    console.log(`myList.length = ${myList.length}`)
    console.log(`resultList = ${resultList}`)
    const [myNumber, setNumber] = useState(1);
  return (
    <div className="home">
        <h2>HomePage</h2>

        <Button variant="primary" onClick={(e) => {
            handleClick('ammar',e.target);
        }}>Click me</Button>

        <br />
        <br />

        <h5>
          {myNumber}
        </h5>

        <Button variant='primary' onClick={() => {increament(myNumber)}}> + </Button>
        <Button variant='secondary' onClick={() => decreament(myNumber)}> - </Button>
    </div>
  )
}

export default TestUseState