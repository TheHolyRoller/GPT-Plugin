

 import "../Styles/Navbar.css";
 import Hamburger from '../Components/HamburgerMenu.jsx'; 
 
 
 
function Navbar() {
  return (

    <nav id='navBarContainer' >

      <div id='navbarSubContainer' >
      
      <div id='hamburgerIconContainer'>

      {/* Add in conditional rendering here */}
      

      
      <Hamburger/>
      
      </div>


      <div id='logoContainer' >

      <div id='navLogo'>
        
        
      
        <h1 id='logoCasing'>$meelay</h1>

      </div>


      </div>


      {/* Add in the Navbar Button Group Container here  */}
      <div id='navbarButtonGroup' >

      


      {/* Add in the button list here  */}

      <ul id='navbarButtonList' >

      <li id='navbarListItem' >
      <a href="https://t.me/meelaymemes" target="_blank">
        Telegram 

      </a>

      </li>
      <li id='navbarListItem' >
      <a href="http://x.com/javormeelay" target='_blank'>
        Twitter 

      </a>
      </li>
      <li id='navbarListItem' >
      <a href='https://dexscreener.com/base/0xd109457ac2d85f428a98addf6e1c7ec898976405' target="_blank">
        Dexcreen 
      </a>

      </li>
      <li id='navbarListItem' >
      <a href='https://www.dextools.io/app/en/base/pair-explorer/0xd109457ac2d85f428a98addf6e1c7ec898976405?t=1713371207750' target='_blank'>
      
        DexTools 
      </a>

      </li>
      <li id='navbarListItem' >
       <a href='https://www.farcaster.xyz/' target='_blank'>
        Farcaster 
       </a>

      </li>

      </ul>

      </div>
        
        
      </div>
        
        </nav>
  );

}

export default Navbar