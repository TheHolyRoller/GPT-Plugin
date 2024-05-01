
'use client'
import Image from "next/image";

import Navbar from '../app/Components/Navbar'; 
import Hamburger from  "../app/Components/HamburgerMenu"; 
import HeroCTA from '../app/Components/HeroCTAComponent'; 
import HeroCTAInfoContainer from "../app/Components/HeroCTAInfoContainer"; 
import LargeCard from '../app/Components/LargeCard'; 
import SquareCard from '../app/Components/SquareCard'; 
import Footer from '../app/Components/Footer'; 
import QuackCTA from '../app/Components/QuackCTA'; 
import TextComponent from '../app/Components/TextComponent'; 
import Hero from '../app/Components/HeroComponent'; 
import ContactHeadline from '../app/Components/ContactHeadline'; 
import Head from 'next/head';




export default function Home() {
  return (

<>
<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Next.js Page</title>
      </Head>
    <main id='mainIndexPageContainer' style={{overflowX:'hidden'}} >
   
 <nav id="indexNavContainer" >
    <Navbar/> 
    
    <div id='hamburgerContainer' style={{position: 'fixed'}} >
    
    <Hamburger/>
    </div>

</nav> 




<header id='homeHeroContainer' >
      <Hero/>
</header>
    
   <article id='indexMainHeaderText'>
   
   <TextComponent/>
   
   
   </article> 
   
   
      <section  id='homeLargeCardContainer'> 
    <LargeCard/> 
    
    </section> 
    
    
    <section id='indexSquareCardContainer' >
    <SquareCard/> 
    
    </section>
    
    
     <article id='indexQuackCTA'>
    <QuackCTA/>
      </article> 
      
      
    <article id='indexTextComponentContainer'>
    {/* <TextComponent/>  */}
    
    <ContactHeadline/> 
    </article> 
    
    
    
     <footer id='indexFooterContainer' >
    <Footer/>
    </footer> 
    
   
    </main>

</>
  );
}
