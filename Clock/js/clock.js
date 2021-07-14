
(() => {
  const 
  secondHand = document.querySelector('.second-hand'),
  minuteHand = document.querySelector('.min-hand'),
  hourHand = document.querySelector('.hour-hand')
  

  const calcDegrees = (time,max ) => ((time / max) * 360) + 90;
   
  setInterval(() =>{
   const now = new Date();
   const
   secondHandDegrees = calcDegrees(now.getSeconds(), 60),
   minuteHandDegrees = calcDegrees(now.getMinutes(),60),
   hourHandDegrees = calcDegrees(now.getHours(),12)
   
   secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
   minuteHand.style.transform = `rotate(${minuteHandDegrees}deg`;
   hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
  },1000)
})();
