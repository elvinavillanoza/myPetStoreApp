var slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlidesBtn(slideIndex += n);
}

function showSlidesBtn(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2050);
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var modItems = document.getElementById("modalItems");

btn.onclick = function() {
  modal.style.display = "block";
    if (cartAdded.length > 0){
        for (var j=0; j < cartAdded.length; j++){
        var prod = cartAdded[j]
        var ulx = document.createElement("ul");
        var lix = document.createElement("li");
        lix.appendChild(document.createTextNode(prod.prodname));

        var lix2 = document.createElement("li");
        lix2.appendChild(document.createTextNode(prod.prodprice));

        var lix3 = document.createElement("li");
        lix3.appendChild(document.createTextNode(prod.proddesc));
        var prodImgx = document.createElement("img");
        prodImgx.setAttribute("src", prod.prodimage);
        prodImgx.setAttribute("width", "150");
        prodImgx.setAttribute("height", "85");

        ulx.appendChild(prodImgx);
        ulx.appendChild(lix);
        ulx.appendChild(lix3)
        ulx.appendChild(lix2);
        modItems.appendChild(ulx);
    }} else if (cartAdded.length == 0){
        var noItem = document.createElement("li");
        noItem.appendChild(document.createTextNode("You have no items in your cart"));
        modItems.appendChild(noItem);
    } 

}

span.onclick = function() {
  modal.style.display = "none";
  modItems.innerHTML= "";

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modItems.innerHTML= "";
  }
}

var ul = document.getElementById("products");
var prods = [ 
    {
        prodname: "Vans Old Skool", 
        proddesc: "Black & White",
        prodprice: "$123",
        prodimage: "image/prod1.png"
    },    {
        prodname: "Vans Old Skool", 
        proddesc: "Red/Blue Checker", 
        prodprice: "$124",
        prodimage: "image/prod2.png"
    },    {
        prodname: "Vans Old Skool", 
        proddesc: "Magnet Bar", 
        prodprice: "$125",
        prodimage: "image/prod3.png"
    },    {
        prodname: "Vans Old Skool", 
        proddesc: "Red Dahlia", 
        prodprice: "$126",
        prodimage: "image/prod4.png"
    },     {
        prodname: "Vans Old Skool", 
        proddesc: "(Skulls) Black & True White",
        prodprice: "$127",
        prodimage: "image/prod5.png"
    },     {
        prodname: "Vans Old Skool", 
        proddesc: "(Camo Floral) Dark Olive", 
        prodprice: "$128",
        prodimage: "image/prod6.png"
    },     {
        prodname: "Vans Old Skool", 
        proddesc: "Ultramarine Green", 
        prodprice: "$129",
        prodimage: "image/prod7.png"
    },     {
        prodname: "Vans Old Skool", 
        proddesc: "Gunmetal Autumn Glaze", 
        prodprice: "$130",
        prodimage: "image/prod8.png"
    }
]

for (var i=0; i < prods.length; i++){
    var prod = prods[i]
    var ul1 = document.createElement("ul");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(prod.prodname));

    var li2 = document.createElement("li");
    li2.appendChild(document.createTextNode(prod.prodprice));

    var li3 = document.createElement("li");
    li3.appendChild(document.createTextNode(prod.proddesc));

    var buy = document.createElement("button");
    var btnTxt = document.createTextNode("Add to cart");
    buy.setAttribute("id", "button" + i);
    buy.appendChild(btnTxt);
    var prodImg = document.createElement("img");
    prodImg.setAttribute("src", prod.prodimage);
    prodImg.setAttribute("width", "200");
    prodImg.setAttribute("height", "125");


    ul1.appendChild(prodImg);
    ul1.appendChild(li);
    ul1.appendChild(li3)
    ul1.appendChild(li2);
    ul1.appendChild(buy);
    ul.appendChild(ul1);
}


var cartAdded = [];

document.addEventListener("click", function(x){
    if (x.target.id == "button0"){
        cartAdded.push({
            prodname: "Vans Old Skool", 
            proddesc: "Black & White",
            prodprice: "$123",
            prodimage: "image/prod1.png"
        })
    } else if (x.target.id == "button1"){
        cartAdded.push({
            prodname: "Vans Old Skool", 
            proddesc: "Red/Blue Checker", 
            prodprice: "$124",
            prodimage: "image/prod2.png"
        })
    } else if (x.target.id == "button2"){
        cartAdded.push({
            prodname: "Vans Old Skool", 
            proddesc: "Magnet Bar", 
            prodprice: "$125",
            prodimage: "image/prod3.png"
        })
    } else if (x.target.id == "button3"){
        cartAdded.push({
            prodname: "Vans Old Skool", 
            proddesc: "Red Dahlia", 
            prodprice: "$126",
            prodimage: "image/prod4.png"
        })
    } else if (x.target.id == "button4"){
        cartAdded.push({
            prodname: "Vans Old Skool", 
            proddesc: "(Skulls) Black & True White", 
            prodprice: "$127",
            prodimage: "image/prod5.png"
        })
    } else if (x.target.id == "button5"){
        cartAdded.push({
            prodname: "Vans Old Skool", 
            proddesc: "(Camo Floral) Dark Olive", 
            prodprice: "$128",
            prodimage: "image/prod6.png"
        })
    } else if (x.target.id == "button6"){
        cartAdded.push({
            prodname: "Vans Old Skool", 
            proddesc: "Ultramarine Green", 
            prodprice: "$129",
            prodimage: "image/prod7.png"
        })
    } else if (x.target.id == "button7"){
        cartAdded.push({
            prodname: "Vans Old Skool", 
            proddesc: "Gunmetal Autumn Glaze", 
            prodprice: "$130",
            prodimage: "image/prod8.png"
        })
    }
})