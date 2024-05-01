
import '../Styles/SquareCard.css'; 
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';




function SquareCard() {
  return (
    <div id='squareCardContainer' >
    
    <div id='squareCardBackgroundImageContainer' >
    
    <div id='squareCardBackgroundImage'>
    </div>
    
    
    </div>
    
    
    {/* Add in the info container here */}
    
    <div id='squareCardInfoContainer'>
    
    <div id='squareCardHeadline' >
    Bridge & swap your tokens in-app
    
    
    </div>
    
    
    <div id='squareCardExtraInfo'>
    Swap or move tokens between chains
    
    
    </div>
    
    {/* Add in the learn more button here */}
    <div id='squareCardLearnMoreContainer'>
    
    
    <div id='squareCardLearnMoreButton'>
    
    <div id='squareCardLearnMoreText'>

    Learn More 
    </div>
    
    <div id='squareCardArrowContainer'>
    <KeyboardBackspaceIcon id='squareCardArrow' /> 
    
    </div>    
    </div>
     

    </div>
    
    </div>
    
    
    </div>
  );
  
}

export default SquareCard