

import PropTypes from "prop-types";

 const FeedbackOptins = ({options, onLeaveFeedback}) => {
    return (
<div>
{options.map((el) =>(
  <button key={el} type="button" name="{el}" onClick={onLeaveFeedback}>{el}</button>
    ) )}

</div>


    )
}

export default FeedbackOptins;





FeedbackOptins.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired

  }




