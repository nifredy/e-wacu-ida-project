const selectElement = (element) => document.querySelector(element);

//open and close nav onclick

selectElement(element='.menu-icons').addEventListener('click', () => {
    selectElement(element='nav').classList.toggle(token='active');
});