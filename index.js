
chrome.app.runtime.onLaunched.addListener(function() {

  //Keep awake 
  chrome.power.requestKeepAwake('system');
  chrome.power.requestKeepAwake('display');

  // chrome notifications
  chrome.notifications.create("1234",
    {
      type: "basic",
      iconUrl: "icon_16.png",
      title: "THIS TESTS NOTIFICATIONS",
      message: "Successfull notification created"
    },
    ()=>{
    const timer =  setTimeout(()=>{
      chrome.notifications.clear("1234");
      clearTimeout(timer);
    }, 10000)
  });

  // set outer bounds of screen
  chrome.system.display.getInfo((screens) => {
    screens.forEach(screen => {
      chrome.app.window.create('window.html', {
          'outerBounds': screen.workArea
      });
    })
  });

});