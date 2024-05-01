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
    
    <div id='coinbaseHeroTextInfoContainer' >
    
    <p id='coinbaseHeroTextParagraph'>
    
    We're the most trusted place for people and businesses to buy, sell, and manage crypto.

    </p>
    
    
    </div>
    
    {/* Add in the call to action button here */}
    <ul id='coinbaseHeroCTAContainer'>
    
    <li id='coinbaseHeroListItem' >
    <div id='coinbaseCTAText' >
    
    Build your Portfolio 
    
    </div>
    
    </li>
    
    
    <li id='coinbaseHeroListItem'>
    <div id='coinbaseCTAButton' >
    Buy
    
    <span id='coinbaseSpan' >
        Meelay
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
