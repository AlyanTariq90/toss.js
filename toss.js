let h1 = document.querySelector('h1');
let image = document.querySelector('img');
let h3 = document.querySelector('h3');
function toss(user) {
  let click = Math.ceil(Math.random() * 2);
  // console.log(click)
  if (click === 1) {
    image.src =
      'https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg';
    h3.innerHTML = '';
  } else {
    // console.log("tail")
    image.src =
      'https://en.numista.com/catalogue/photos/pakistan/424-original.jpg';
    h3.innerHTML = '';  
  }
  if ((user === 'chand' && click === 1) || (user === 'masjid' && click === 2)) {
    h1.innerHTML = 'You win';
  } else {
    h1.innerHTML = 'You loss';
  }
}
