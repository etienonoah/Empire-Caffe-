document.getElementById('butt').addEventListener('click',function()
{window.location.href ='menu.html'})

document.querySelectorAll(".button").forEach(button => {

  button.addEventListener("click", function(){

    const product = this.dataset.product;
    const price = this.dataset.price;

    localStorage.setItem("product", product);
    localStorage.setItem("price", price);

    window.location.href = "checkout.html";

  });

