
'use client'; 

 
 import '../Styles/LargeCards.css'; 
 

 
 export default function LargeCard() {
  return (


    <article id="cardMainContainer" >
    <div id="cardSubContainer">


    <div id="cardBackgroundContainer">
        
        
        
      <div id='largeCardImageContainer'>
      
      
      <div id='largeCardImage'></div>
      
      
      
      
      </div>        
        
        

        <section id="largeCardCTAContainer">

         <div id='largeCardCTAHeaderContainer'>
         
          <h1 id='largeCardCTAHeader' >
          
          Earn your way
          
          </h1>         
         </div>
         
         <div id='largeCardCTATextContainer'>
                 
                 <div id='largeCardCTAText' >
                 Staking, liquid   
                 <span id='largeCardCTASpan' ></span>
                 staking, or vaults
                 </div>
                 
                 

         </div>
          <div id='largeCardCTAButton' >
          <a href='https://app.uniswap.org/' target="_blank">
          Buy $Meelay
          </a>
          
          {/* Not working */}
          
          {/* <div id='largeCardSVG' >
          
          <Arrow/>
          

          
          </div> */}
          
          {/* Add in the icon here  */}
          
          </div>
         

        </section>
        
        </div>        
        
        
        </div>        
        </article>

  );

}
