import {useState} from 'react';
function Myhook(){
    const [count, setCount] = useState(() => {
        console.log('run function');
        return 4; //use this method version to initalize it once
    });

    function decrementCount() {
        setCount(prevCount => prevCount -1);
    }
    function incremetCount() {
        setCount(prevCount => prevCount +1);
    }
    return(
        <div className='hook-container'>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incremetCount}>+</button>
        </div>
    )
}
export default Myhook;