

import FeedbackOptins from './components/Feedback/FeedbackOptins';
//import { useState } from 'react';

//import { Component } from 'react';

import { Statistic } from './components/Feedback/Statistic'

import { Section } from './components/Section'
import { Notification } from './components/Notification';
//import style from './components/Feedback/feedback.module.css';

import { useState } from 'react';



  function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = ({target}) => {
    switch (target.textContent){ 
      case'good':
      return setGood(prevState => prevState + 1)
      case'neutral':
      return setNeutral(prevState => prevState + 1)
      case'bad':
      return setBad(prevState => prevState + 1)
   
      default: return
     }
  }



  const totalNumber = () => {
  return good + neutral + bad 
}

const positiveBack = () => {
  return (good * 100) / totalNumber()
}
  



    return(

  <>
<h1>Please leave feedback</h1>
<FeedbackOptins
options={['good', 'neutral', 'bad']}
 onLeaveFeedback={handleIncrement}
/>



<Section title="Statistics" > 
{totalNumber() > 0 ? (
<Statistic
good={good}
neutral={neutral}
bad={bad}
total={totalNumber()}
positive={positiveBack()}
/>
) : (<Notification 
message='There is no feedback'
/>) } 
</Section>
</>
    )}




export default App;

