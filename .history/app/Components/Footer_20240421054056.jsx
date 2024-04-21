
'use client';

import '../Styles/Footer.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
  import { styled } from '@mui/material/styles';

  import React, { useState, useEffect } from 'react';
  
  import Head from 'next/head';


function Footer() {

  return (

    <>

        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Next.js Page</title>
        </Head>
      
    <footer id='footerMainContainer'>
    
    <div id='footerSubContainer'>
        
        <ul id='footerList'>
        <li id='footerListItem' className='dexToolsClass' >

       <div id='dexToolsContainer' >

       <a href="https://dexscreener.com/base/0xd109457ac2d85f428a98addf6e1c7ec898976405" target="_blank">
        <svg id='footerSVG' xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#fff" fillRule="evenodd" viewBox="0 0 252 300" focusable={false} className="chakra-icon custom-euf446"><path d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197" /><path d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z" /></svg>

       </a>
        </div>
        
        </li>
        <li id='footerListItem' >
        
        {/* Add in the DexTools Icon here  */}
        
        
        <div id='dexToolIconImage'>

          {/* <img src="../" */}
          
        </div>
        
        </li>
       
       
        <li id='footerListItem'  >
        
        <div id='farcasterTempIcon' >



        <div id='farcasterIcon'>


          <a href='https://www.farcaster.xyz/' target="_blank">
        
        <svg  viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1000" height="1000" rx="200" fill="#8963d2" />
<path d="M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z" fill="white" />
<path d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.444H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z" fill="white" />
<path d="M675.556 746.667C663.283 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.444H875.556V817.778C875.556 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.556Z" fill="white" />
</svg>


          </a>

        </div>
        
        </div>
        
        </li>
        <li id='footerListItem' >

        <div id='baseIcon'>
        
        <a id='baseIconLink'  href='https://base.party.app/party/0xd8de302590e0a84b846643e549ebe3537416cd55' target="_blank">
       
        <svg id='largeSVG' xmlns="http://www.w3.org/2000/svg"  width="19vw" min-height="100%"  viewBox="0 0 356 84" fill="none"><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link" /><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link" /><style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style" /><style xmlns="" lang="en" type="text/css" id="dark-mode-native-style" /><style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet" /><script xmlns="" />
<path d="M41.6003 72.8611C63.8981 72.8611 81.9741 59.9948 81.9741 44.1234C81.9741 28.252 63.8981 15.3857 41.6003 15.3857C19.3025 15.3857 1.22656 28.252 1.22656 44.1234C1.22656 59.9948 19.3025 72.8611 41.6003 72.8611Z" fill="black" />
<path d="M41.6016 70.4021C64.5775 70.4021 83.2031 57.5358 83.2031 41.6644C83.2031 25.793 64.5775 12.9268 41.6016 12.9268C18.6257 12.9268 0 25.793 0 41.6644C0 57.5358 18.6257 70.4021 41.6016 70.4021Z" fill="url(#paint0_radial_33813_182205)" />
<path d="M41.6027 61.3129C59.9171 61.3129 74.764 51.2941 74.764 38.9353C74.764 26.5764 59.9171 16.5576 41.6027 16.5576C23.2882 16.5576 8.44141 26.5764 8.44141 38.9353C8.44141 51.2941 23.2882 61.3129 41.6027 61.3129Z" fill="black" />
<path d="M36.1398 43.5027L18.6523 19.4307L46.948 28.6287L36.1398 32.1367V43.5027Z" fill="#EC0000" />
<path d="M62.4601 43.8952L44.9727 19.8232L73.2718 29.0178L62.4601 32.5293V43.8952Z" fill="#00C1FA" />
<path d="M55.8503 65.9118L38.3594 41.8398L66.6585 51.0344L55.8503 54.5459V65.9118Z" fill="black" />
<path d="M30.9953 65.7751L13.5078 41.7031L41.8035 50.8976L30.9953 54.4092V65.7751Z" fill="black" />
<path d="M55.8503 62.404L38.3594 38.332L66.6585 47.5265L55.8503 51.0381V62.404Z" fill="#FF6BF3" />
<path d="M30.9953 62.2663L13.5078 38.1943L41.8035 47.3888L30.9953 50.9004V62.2663Z" fill="#FF8946" />
{/* <path d="M335.322 18.4045C332.375 18.4045 329.692 20.0865 328.407 22.7386L321.369 37.2409L314.331 22.7386C313.046 20.0865 310.357 18.4045 307.416 18.4045H254.879V23.8511C252.415 19.4805 247.44 18.4045 241.313 18.4045H209.561C202.275 18.4177 199.592 20.1759 199.553 26.2284V60.64L183.566 23.222C182.317 20.2951 179.591 18.4012 174.604 18.4012H165.141C160.147 18.4012 157.421 20.3017 156.173 23.2353L150.638 36.2277C150.705 35.4496 150.744 34.6451 150.744 33.8074C150.744 23.5763 146.379 18.4012 132.999 18.4012H105.301C97.9487 18.4012 95.2031 20.156 95.2031 26.2781V66.3945H114.197V51.4816H133.923C138.878 51.4816 143.031 50.048 145.972 47.1872L137.791 66.3945H157.971L159.981 60.9247H179.75L181.761 66.3945H218.434V30.4765H231.645C234.795 30.4765 237.166 31.3009 237.166 34.9695C237.166 38.0124 235.669 39.509 231.904 39.509H219.09L235.686 63.1232C237.123 65.1694 239.471 66.3912 241.975 66.3912H260.131L241.83 43.6312C252.441 43.6312 256.554 39.0554 256.554 31.6817C256.554 31.2678 256.541 30.8672 256.525 30.4765H270.097V66.3879H289.091V30.4765H297.931L311.761 52.869V66.3879H330.755V52.869L351.892 18.3945L335.309 18.4012L335.322 18.4045ZM126.435 39.7639H114.204V29.6487H126.435C131.29 29.6487 133.042 31.0427 133.042 34.7576C133.042 38.2673 131.287 39.7639 126.435 39.7639ZM164.121 49.207L169.878 32.6816L175.634 49.207H164.121Z" fill="black" /> */}
{/* <path d="M355.83 57.0825H352.774C352.344 57.0825 352.225 57.178 352.106 57.6077L350.602 63.242H350.435L348.883 57.6077C348.763 57.178 348.644 57.0825 348.214 57.0825H345.111V66.3934H347.235V59.6848H347.402L349.289 65.8682C349.408 66.2741 349.527 66.3934 349.933 66.3934H350.936C351.318 66.3934 351.461 66.2741 351.58 65.8682L353.443 59.6848H353.634V66.3934H355.83V57.0825ZM343.726 58.8731V57.0825H335.967V58.8731H338.688V66.3934H340.956V58.8731H343.726Z" fill="black" /> */}
<defs>
<radialGradient id="paint0_radial_33813_182205" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(41.2608 36.5279) rotate(1.53) scale(44.2466 31.8576)">
<stop offset="0.56" stopColor="white" />
<stop offset="0.8" stopColor="#BCCBDD" />
<stop offset="0.94" stopColor="#596980" />
<stop offset="1" stopColor="#A7B8CF" />
</radialGradient>
</defs>
</svg>




        <svg id='mobileSVG' xmlns="http://www.w3.org/2000/svg" width='20rem'  min-height="100%"  viewBox="0 0 356 84" fill="none"><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link" /><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link" /><style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style" /><style xmlns="" lang="en" type="text/css" id="dark-mode-native-style" /><style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet" /><script xmlns="" />
<path d="M41.6003 72.8611C63.8981 72.8611 81.9741 59.9948 81.9741 44.1234C81.9741 28.252 63.8981 15.3857 41.6003 15.3857C19.3025 15.3857 1.22656 28.252 1.22656 44.1234C1.22656 59.9948 19.3025 72.8611 41.6003 72.8611Z" fill="black" />
<path d="M41.6016 70.4021C64.5775 70.4021 83.2031 57.5358 83.2031 41.6644C83.2031 25.793 64.5775 12.9268 41.6016 12.9268C18.6257 12.9268 0 25.793 0 41.6644C0 57.5358 18.6257 70.4021 41.6016 70.4021Z" fill="url(#paint0_radial_33813_182205)" />
<path d="M41.6027 61.3129C59.9171 61.3129 74.764 51.2941 74.764 38.9353C74.764 26.5764 59.9171 16.5576 41.6027 16.5576C23.2882 16.5576 8.44141 26.5764 8.44141 38.9353C8.44141 51.2941 23.2882 61.3129 41.6027 61.3129Z" fill="black" />
<path d="M36.1398 43.5027L18.6523 19.4307L46.948 28.6287L36.1398 32.1367V43.5027Z" fill="#EC0000" />
<path d="M62.4601 43.8952L44.9727 19.8232L73.2718 29.0178L62.4601 32.5293V43.8952Z" fill="#00C1FA" />
<path d="M55.8503 65.9118L38.3594 41.8398L66.6585 51.0344L55.8503 54.5459V65.9118Z" fill="black" />
<path d="M30.9953 65.7751L13.5078 41.7031L41.8035 50.8976L30.9953 54.4092V65.7751Z" fill="black" />
<path d="M55.8503 62.404L38.3594 38.332L66.6585 47.5265L55.8503 51.0381V62.404Z" fill="#FF6BF3" />
<path d="M30.9953 62.2663L13.5078 38.1943L41.8035 47.3888L30.9953 50.9004V62.2663Z" fill="#FF8946" />
{/* <path d="M335.322 18.4045C332.375 18.4045 329.692 20.0865 328.407 22.7386L321.369 37.2409L314.331 22.7386C313.046 20.0865 310.357 18.4045 307.416 18.4045H254.879V23.8511C252.415 19.4805 247.44 18.4045 241.313 18.4045H209.561C202.275 18.4177 199.592 20.1759 199.553 26.2284V60.64L183.566 23.222C182.317 20.2951 179.591 18.4012 174.604 18.4012H165.141C160.147 18.4012 157.421 20.3017 156.173 23.2353L150.638 36.2277C150.705 35.4496 150.744 34.6451 150.744 33.8074C150.744 23.5763 146.379 18.4012 132.999 18.4012H105.301C97.9487 18.4012 95.2031 20.156 95.2031 26.2781V66.3945H114.197V51.4816H133.923C138.878 51.4816 143.031 50.048 145.972 47.1872L137.791 66.3945H157.971L159.981 60.9247H179.75L181.761 66.3945H218.434V30.4765H231.645C234.795 30.4765 237.166 31.3009 237.166 34.9695C237.166 38.0124 235.669 39.509 231.904 39.509H219.09L235.686 63.1232C237.123 65.1694 239.471 66.3912 241.975 66.3912H260.131L241.83 43.6312C252.441 43.6312 256.554 39.0554 256.554 31.6817C256.554 31.2678 256.541 30.8672 256.525 30.4765H270.097V66.3879H289.091V30.4765H297.931L311.761 52.869V66.3879H330.755V52.869L351.892 18.3945L335.309 18.4012L335.322 18.4045ZM126.435 39.7639H114.204V29.6487H126.435C131.29 29.6487 133.042 31.0427 133.042 34.7576C133.042 38.2673 131.287 39.7639 126.435 39.7639ZM164.121 49.207L169.878 32.6816L175.634 49.207H164.121Z" fill="black" /> */}
<path d="M355.83 57.0825H352.774C352.344 57.0825 352.225 57.178 352.106 57.6077L350.602 63.242H350.435L348.883 57.6077C348.763 57.178 348.644 57.0825 348.214 57.0825H345.111V66.3934H347.235V59.6848H347.402L349.289 65.8682C349.408 66.2741 349.527 66.3934 349.933 66.3934H350.936C351.318 66.3934 351.461 66.2741 351.58 65.8682L353.443 59.6848H353.634V66.3934H355.83V57.0825ZM343.726 58.8731V57.0825H335.967V58.8731H338.688V66.3934H340.956V58.8731H343.726Z" fill="black" />
<defs>
<radialGradient id="paint0_radial_33813_182205" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(41.2608 36.5279) rotate(1.53) scale(44.2466 31.8576)">
<stop offset="0.56" stopColor="white" />
<stop offset="0.8" stopColor="#BCCBDD" />
<stop offset="0.94" stopColor="#596980" />
<stop offset="1" stopColor="#A7B8CF" />
</radialGradient>
</defs>
</svg>
            </a>
        </div>
      
        </li>
        <li id='footerListItem' >
        <div id='twitterIcon' >

          <div id='telegramContainer'>
         
         <a href="https://t.me/meelaymemes" alt='alt' target="_blank">
        
        {/* Add in the media queries here  */}
        <TelegramIcon  sx={{
        fontSize: {
          xs: '2.37rem',  // for extra-small screens
          sm: '2rem',    // for small screens
          md: '2.5rem',  // for medium screens
          lg: '3rem',    // for large screens
        }
        
      }}/> 
            
      </a>
            </div>
       
       
        </div>
        
        </li>
        <li id='footerListItem' >
        <div id='twitterIcon' >
        <a href='http://x.com/javormeelay' alt='alt'>
        
        <XIcon  sx={{
        fontSize: {
          xs: '1.8rem',  // for extra-small screens
          sm: '2rem',    // for small screens
          md: '2.5rem',  // for medium screens
          lg: '3rem',    // for large screens
        }
  
      }} />
        
        </a>
        </div>
        
        </li>
        
        </ul>
    
    
    
    </div>
    
    </footer>

    </>

  );
  

}

export default Footer