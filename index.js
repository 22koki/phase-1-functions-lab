// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    
    const hqLocation = 42; 
    return Math.abs(blockNumber - hqLocation);
  }
  
  export default {
    distanceFromHqInBlocks,
  };
  function distanceFromHqInFeet(blockNumber) {
    
    const blocks = distanceFromHqInBlocks(blockNumber);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }


  function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return distanceInBlocks * feetPerBlock;
  }
  
  module.exports = {
    distanceTravelledInFeet,
  }

  
  function calculatesFarePrice(startBlock, endBlock) {
    
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  
    
    let fare;
  
    
    if (distanceInFeet <= 400) {
      fare = 0; 
    } else if (distanceInFeet <= 2000) {
      
      const chargeableDistance = distanceInFeet - 400;
      fare = chargeableDistance * 0.02; 
    } else if (distanceInFeet <= 2500) {
      fare = 25; 
    } else {
      fare = 'cannot travel that far'; 
    }
  
    return fare;
  }
  
  module.exports = {
    calculatesFarePrice,
  };
  
  