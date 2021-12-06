import React, {useState, useReducer} from 'react';

const reducerFunction = (state, action)=>{
    switch(action.type){
        case "increment":
            return{
                ...state,
                count:state.count +1 
            }
        case "decrement" :
        return{
            ...state,
            count:state.count -1
        }

        default:
            return state
    }
}

const initialState ={
    count:0,
}


const StateMag = () => {
    const [input, setInput]=useState(0)

    const [state, dispatch]=useReducer(reducerFunction, initialState)
    return (
        <div className="StateM">
            <h2>Reducer Example</h2>
            <div>
                <label>Start Count</label>
                <input 
                type="text"
                onChange={(e) => setInput(parseInt(e.target.value))}
                value={input}
                
                /><br/>
                <buton>Initialize</buton>
            </div>
            <p>{state.count}</p>
            <button onClick ={()=> dispatch({type: "increment"})}>Increment</button>
            <button onClick ={()=> dispatch({type: "decrement"})} >Decrement</button>
            
        </div>
    )
}

export default StateMag
