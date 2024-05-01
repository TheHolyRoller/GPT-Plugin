

 import "../Styles/Navbar.css";
 import Hamburger from '../Components/HamburgerMenu.jsx'; 
 import TelegramIcon from '@mui/icons-material/Telegram';
 import XIcon from '@mui/icons-material/X';
   import { styled } from '@mui/material/styles';
  
 
 
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
      <TelegramIcon  sx={{
        fontSize: {
          xs: '2.37rem',  // for extra-small screens
          sm: '2rem',    // for small screens
          md: '2.5rem',  // for medium screens
          lg: '3rem',    // for large screens
        }
        
      }}/>
        
        
        Telegram 

      </a>

      </li>
      <li id='navbarListItem' >
      <a href="http://x.com/javormeelay" target='_blank'>
        {/* Add in the twitter Icon here */}
        
        <XIcon  sx={{
        fontSize: {
          xs: '1.8rem',  // for extra-small screens
          sm: '2rem',    // for small screens
          md: '2.5rem',  // for medium screens
          lg: '3rem',    // for large screens
        }
  
      }} />
        
        
        
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
       <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1000" height="1000" rx="200" fill="#8963d2" />
<path d="M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z" fill="white" />
<path d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.444H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z" fill="white" />
<path d="M675.556 746.667C663.283 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.444H875.556V817.778C875.556 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.556Z" fill="white" />
</svg>
        
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