const selectElement = (element) => document.querySelector(element);







//open and close nav onclick

selectElement(element='.menu-icons').addEventListener('click', () => {
    selectElement(element='nav').classList.toggle(token='active');
});

//scroll uppppppppp staffff

function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
  
    if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  }
  window.addEventListener("scroll", scrollUp);
  
  // background header sticky
  
  // function scrollHeader() {
  //   const nav = document.getElementById("header");
  
  //   if (this.scrollY >= 5) nav.classList.add("sticky");
  //   else nav.classList.remove("sticky");
  // }
  // window.addEventListener("scroll", scrollHeader);


  ///////////////////// POP-UP VIDEO///////////////////

  $('#videolink').magnificPopup({
    type:'inline',
    midClick:true
  });
  $('#videolink2').magnificPopup({
    type:'inline',
    midClick:true
  });
  $('#videolink3').magnificPopup({
    type:'inline',
    midClick:true
  });
  $('#videolink4').magnificPopup({
    type:'inline',
    midClick:true
  });

  