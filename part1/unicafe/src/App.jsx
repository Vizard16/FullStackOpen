import { useState } from 'react'


const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad

  if (sum === 0) {
    return(
      <div>
        <p>No feedback given</p>
      </div>
  
      )
    }
    const positivePercentage = (props.good / sum) * 100;
  return (
      <table>
        <tbody>
          <StatisticLine text = 'good' value= {props.good}/>
          <StatisticLine text = 'neutral' value= {props.neutral}/>
          <StatisticLine text = 'bad' value = {props.bad}/>
          <StatisticLine text = 'total' value = {sum}/>
          <StatisticLine text = 'average' value = {(props.good * 1 + props.neutral * 0 + props.bad * (-1))/sum}/>
          <StatisticLine text = 'positive' value = {`${positivePercentage.toFixed(1)}%`}/>



        </tbody>
      </table>

  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}


const Button = (props) => {

  return(
    
    <button onClick={props.handleClick}>{props.text}</button>
  

  )


}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setBad (bad +1);
  }




  return (
    <div>
      <h1>give feedback</h1>
      
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>

      <h1>statics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

      
    </div>
    
  )
}

export default App