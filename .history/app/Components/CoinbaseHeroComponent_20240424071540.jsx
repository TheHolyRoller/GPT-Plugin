import React from 'react'

// Import the style sheet here
import '../Styles/CoinbaseHeroComponent.css'; 


function CoinbaseHeroComponent() {
  return (
    <header id='coinbaseHeroContainer'>
    
    <section id='coinbaseHeroSubContainer'>
    
    <div id='coinbaseHeroImageSection'>
    
    <div id='coinbaseHeroImageContainer'>
    
    <div id='coinbaseHeroImage' ></div>
    
    
    
    </div>
    
    
    
    </div>
    
    <div id='coinbaseHeroTextSection'>
    
    <div id='coinbaseHeroTextSectionContainer'>
    
    <h1 id='coinbaseHeroTextHeader'>
    
    The future of money is here
    
    </h1>
    <h1 id='coinbaseMobileCTAText' >
    
    Build your crypto portfolio 
    
    </h1>
    
    <div id='coinbaseHeroTextInfoContainer' >
    
    <p id='coinbaseHeroTextParagraph'>
    
    We're the most trusted place for people and businesses to buy, sell, and manage crypto.

    </p>
    
    
    </div>
    
    {/* Add in the call to action button here */}
    <ul id='coinbaseHeroCTAContainer'>
    
    <li id='coinbaseHeroListItem'>
    <div id='coinbaseCTAText'>
    
    Build your Portfolio 
    
    </div>
    
    
    
    
    {/* Add in Secondary CTA Text here */}
    <div id='coinbaseSecondaryCTAText' >
    
    Invest 
    
    </div>
    
    
    </li>
    
    
    <li id='coinbaseHeroListItem'>
    <div id='coinbaseCTAButton' >
    Buy
        Meelay
    
    <span id='coinbaseSpan' >
    </span>
    </div>
    
    </li>
    </ul>
    
    
    </div>
    
    
    </div>
    
    
    
    </section>
    
      
    </header>
  )
}

export default CoinbaseHeroComponent
