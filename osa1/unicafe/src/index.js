import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const StatisticLine = (props) => {
  return (
    <table width="150px">
      <tbody>
      <tr>
        <td width="75px">{props.text}</td>
        <td width="75px">{props.value}</td>
      </tr>
      </tbody>
    </table>
  )
}
/*
<div>
      <p>{props.text} {props.value}</p>
    </div>
    */

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  

  return (
    <div>
      <StatisticLine text="good" value = {props.good} />
      <StatisticLine text="neutral" value = {props.neutral} />
      <StatisticLine text="bad" value = {props.bad} />
      <StatisticLine text="all" value = {props.all} />
      <StatisticLine text="average" value = {props.average} />
      <StatisticLine text="positive" value = {props.positive} />
    </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0, all: 0
  })


  const handleGoodClick = () => {
    const newClicks = {  
      ...clicks,
      good: clicks.good + 1,
      all: clicks.all + 1 
    }
    setClicks(newClicks)
  }


  const handleNeutralClick = () => {
    const newClicks = {  
      ...clicks,
      neutral: clicks.neutral + 1,
      all: clicks.all + 1
    }
    setClicks(newClicks)
  }


  const handleBadClick = () => {
    const newClicks = {  
      ...clicks,
      bad: clicks.bad + 1,
      all: clicks.all + 1 
    }
    setClicks(newClicks)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
      </div>
      <h2>statistics</h2>
      <Statistics good = {clicks.good} neutral = {clicks.neutral}
        bad = {clicks.bad} 
        all = {clicks.all} 
        average = {(clicks.good + clicks.bad * -1)/clicks.all}
        positive = {clicks.good/(clicks.all)*100 + '%'}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)