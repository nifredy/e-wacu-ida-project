const selectElement = (element) => document.querySelector(element);
const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formBx = document.querySelector('.formBx');
const signBody = document.querySelector('.sign-container')


///////////////////// SIGN-UP STUFFS///////////////////

signupBtn.onclick = function(){
    formBx.classList.add('active')
    signBody.classList.add('active')
  }
  signinBtn.onclick = function(){
    formBx.classList.remove('active')
    signBody.classList.remove('active')
  }


  //open and close nav onclick

selectElement(element='.menu-icons').addEventListener('click', () => {
    selectElement(element='nav').classList.toggle(token='active');
});