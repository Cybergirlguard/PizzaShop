function calculation(){
    var total=0;
    //Checking pizza size selected
    if (document.getElementById('Large').checked){
        total = total * 5;
    }
    else if (document.getElementById('Extra Large').checked){
        total = total * 7;
    }
    else (document.getElementById('Supersize').checked){
        total = total * 17;
    }
 }
 
 //These values represents the cost of the pizza
  var sizes= new Array();
        pizza_prices["Large"]=5;
        pizza_prices["Extra Large"]=7;
        pizza_prices["Supersize"]=17;

function calculateTotal()
{
    var Pizzaprice = getPizzaPrice();
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the Pizza is €"+ pizzaprice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}