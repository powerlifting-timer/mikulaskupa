document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
 

  var champDate = new Date(2023,10,16,23,59);
  var now = new Date().getTime();
  var diffInDays = (champDate - now) / (1000 * 60 * 60 * 24);

  var DaysFromNow = (new Date().getTime() / 1000) + (24 * 60 * 60 * diffInDays) + 1 ;
  // Set up FlipDown
  var flipdown = new FlipDown(DaysFromNow, {
    theme: "light",
  })

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });
    
  // Show version number
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});
