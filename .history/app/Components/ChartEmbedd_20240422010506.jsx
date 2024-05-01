import React from 'react'
import '../Styles/ChartEmbed.css'; 


const ChartEmbedd = () => {
  return (
    <div id='chartMainContainer'>
    
    <div id='chartSubContainer'>
    
    
      <>
      {/* <style>{`#dexscreener-embed{position:relative;width:100%;padding-bottom:125%;}@media(min-width:1400px){#dexscreener-embed{padding-bottom:65%;}}#dexscreener-embed iframe{position:absolute;width:100%;height:100%;top:0;left:0;border:0;}`}
      </style> */}
      <div id="dexscreener-embed">
      <iframe src="https://dexscreener.com/base/0xd109457ac2D85f428A98aDDF6e1C7Ec898976405?embed=1&theme=dark" />
      </div></>
      
    </div>
    </div>
  )
}

export default ChartEmbedd
