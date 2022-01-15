

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




//============
// class  App extends Component  {

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0

// }

// totalNumber = () => {
//   return this.state.good + this.state.neutral + this.state.bad;
// }

// positiveBack = () => {
//   return Math.round( (this.state.good * 100) / this.totalNumber())
// }
  


//    handleIncrement = (name) => {
//      this.setState(prevState => ({
//       [name]: prevState[name] + 1
//      })
  
//      )
//        };


// ///  Control

//  Control = ({handleIncrement, neutralleIncrement, badleIncrement}) => {
//   return(
//     <>
//       <div className={style.control}>
//       <span className={style.controlList}>
// <button className={style.button} type="button" 
// onClick={handleIncrement} >Good</button>

// <button className={style.button} type="button"
// onClick={neutralleIncrement } >Neutral</button>

// <button className={style.button} type="button"
// onClick={badleIncrement} >Bad</button>


// </span>
// </div></>
//   )
// }

// ////


// render() {
//   const {good, neutral, bad} = this.state;
//   const total = this.totalNumber();
//   const keys = Object.keys(this.state)
//   return (
// <>
// <h1>Please leave feedback</h1>
// <FeedbackOptins
// options={keys}
//  onLeaveFeedback={this.handleIncrement}
// />



// <Section title="Statistics" > 
// {total > 0 ? (
// <Statistic
// good={good}
// neutral={neutral}
// bad={bad}
// total={total}
// positive={this.positiveBack()}
// />
// ) : (<Notification 
// message='There is no feedback'
// />) } 
// </Section>
// </>
//   )
// }


// }







// export default App;
