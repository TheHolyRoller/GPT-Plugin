

 import "../Styles/Navbar.css";
 import Hamburger from '../Components/HamburgerMenu.jsx'; 
 import TelegramIcon from '@mui/icons-material/Telegram';
 import XIcon from '@mui/icons-material/X';
   import { styled } from '@mui/material/styles';
   import IconButton from '@mui/material/IconButton';
   import Tooltip from '@mui/material/Tooltip';
   
 
 
function Navbar() {
  return (


    <nav id='navBarContainer' style={{cursor: 'pointer'}} >

      <div id='navbarSubContainer'  >
      
      <div id='hamburgerIconContainer'>

      {/* Add in conditional rendering here */}
      

      
      
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
        }
        
      }}/>
      
      </a>

      </li>
      <li id='navbarListItem' >
      <a href="http://x.com/javormeelay" target='_blank'>
        {/* Add in the twitter Icon here */}
        
        <XIcon id='navbarTwitterIcon' style={{cursor: 'pointer'}}  sx={{
        fontSize: {
          xs: '1.8rem',  // for extra-small screens
          sm: '2rem',    // for small screens
          md: '2.34rem',  // for medium screens

        }
  
      }} />
        
        
        

      </a>
      </li>
      <li id='navbarListItem' >
        <button id='navbarDexScreenContainer'>
      <a id='navbarDexScreenerLink' style={{cursor: 'pointer'}}  href='https://dexscreener.com/base/0xd109457ac2d85f428a98addf6e1c7ec898976405' target="_blank">
          
        <svg  xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#fff" fillRule="evenodd" viewBox="0 0 252 300" focusable={false} className="chakra-icon custom-euf446"><path d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197" /><path d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z" /></svg>

      </a>

        </button>

      </li>
      <li id='navbarListItem' >
        
        <div id='navbarDexToolsContainer'>
      <a href='https://www.dextools.io/app/en/base/pair-explorer/0xd109457ac2d85f428a98addf6e1c7ec898976405?t=1713371207750' target='_blank'>
        
        <div id='navbarDexToolsImage'>
        {/* Add in the SVG here */}
        
        </div>


      </a>

        </div>

      </li>
      <li id='navbarListItem' >
       <a href='https://www.farcaster.xyz/' target='_blank'>
       
         {/* Add in farcaster container here */}
       
       <div id='navbarFarcasterContainer'>  
       <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1000" height="1000" rx="200" fill="#8963d2" />
<path d="M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z" fill="white" />
<path d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.444H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z" fill="white" />
<path d="M675.556 746.667C663.283 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.444H875.556V817.778C875.556 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.556Z" fill="white" />
</svg>

       </div>
        
       </a>

      </li>

      </ul>

      </div>
        
        
      </div>
        
        </nav>
  );

}

export default Navbar