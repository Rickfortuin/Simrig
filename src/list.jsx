import useLocalStorage from 'use-local-storage';
function writeToCartJson(name, price, href, imagehref,id) {
    
    // Haal bestaande cart op uit localStorage of start met lege array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Verwijder bestaande items met dezelfde id
    cart = cart.filter(item => item.id !== id);
  
    // Voeg het nieuwe item toe
    cart.push({ name: name,price: price, href: href,imagehref: imagehref, id: id });
  
    // Sla de bijgewerkte cart op
    localStorage.setItem('cart', JSON.stringify(cart));
    let count = parseInt(localStorage.getItem('count')) || 0;
    localStorage.setItem('count', count + 1);
    
 }

export default writeToCartJson;