// *******$$$=====Typing animation$$$$$=======*******
const text = $(".first_text");
const textLoad = () => {
    
    setTimeout(() => {
        text.text(" Web Enthusiast");
    },0);

    setTimeout(() => {
        text.text("Software Developer");
    },4000);

    setTimeout(() => {
      text.text("Open Source Contributor");
    }, 8000);
  };
  
  textLoad();
  setInterval(textLoad, 12000);  //this repeats one sentence after another within an interval of 8sec


  // ***********$$$$$$$$$$$$==========Toggle button===========$$$$$$$$$$$$$*******************

function toggleMenu() {
  const dropdownMenu = document.getElementById('dropdownMenu');
  const menuIcon = document.querySelector('.menu i');

  if (window.innerWidth < 1000) {
    dropdownMenu.classList.toggle('open');

    const isOpen = dropdownMenu.classList.contains('open');
    menuIcon.classList = isOpen ? 'fa fa-xmark' : 'fa fa-bars';
  }
}

// Close the dropdown menu on window resize for larger screens
window.addEventListener('resize', function () {
  const dropdownMenu = document.getElementById('dropdownMenu');
  const menuIcon = document.querySelector('.menu i');

  if (window.innerWidth >= 1000) {
    dropdownMenu.classList.remove('open');
    menuIcon.classList = 'fa fa-bars';
  }
});
