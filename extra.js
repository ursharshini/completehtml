$(document).ready(function () {

    let s = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rwDveCQNrY3CiWHPD9695j0prE6cFGzkwg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ20Ug4p1aN972MW7FaWXbogvFA2FYmp7FsoA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1hNhxfP_hC-rq3ZchlNzgo1DiIWrmrWBHg&usqp=CAU",
      "https://shoplane.netlify.app/img/img1.png", "https://shoplane.netlify.app/img/img2.png",
      "https://shoplane.netlify.app/img/img3.png", "https://shoplane.netlify.app/img/img4.png"]
    let hc = $("#headerclass");
    // console.log(hc);
    hc.addClass("headerclass  container")
    hc.append($('<span>').text("SHOP").addClass('spanclasssl'), $('<span>').text("LANE").addClass('laneclass'))
    l = ["HOME", "CLOTHINGS", "ACCESSORIES"]
    for (var j = 0; j < 3; j++) {
      hc.append($("<a>").prop({ href: '#', innerText: l[j] }).addClass("columnhead"))
    }
    hc.append($("<img>").prop({ src: s[0], }).addClass("imageclasscart"))
    hc.append($("<img>").prop({ src: s[1], }).addClass("imageclasscart"))
  
  
  hc.append($("<a>").prop({href:"#"}).append($("<img>").prop({ src: s[2], }).css("text-align", "left").addClass("imageclasscart")))
  hc.append($(("<span>")).addClass("smallhole").text(window.localStorage.getItem("cart-count")))
  console.log(typeof(window.localStorage.getItem("addcart")))
  var checkout=$(".exitcheck")
  console.log("i am class checkout",checkout)
  checkoutarr=JSON.parse(window.localStorage.getItem("addcart"))
  //console.log(checkoutarr)
  var checkoutdiv=$(".totalitems")
  checkoutdiv.append($("<span>").text("Checkout").addClass("checkoutclass"))
  checkoutdiv.append($("<span>").text("Total Items:"+window.localStorage.getItem("cart-count")).addClass("checkoutclass").css("margin-top","100px"))

 

 
 function createItemOnCheckOut(iPreview,iCount, iName,  iPrice) {
  var item = document.createElement("div");
  item.setAttribute("class", "item");

  var itemImg = document.createElement("img");
  itemImg.src = iPreview;

  var itemDetail = document.createElement("div");
  itemDetail.setAttribute("class", "detail");

  var itemName = document.createElement("h3");
  var itemNameText = document.createTextNode(iName);
  itemName.appendChild(itemNameText);

  var itemCount = document.createElement("h4");
  itemCountText = document.createTextNode("x" + iCount);
  itemCount.appendChild(itemCountText);

  var itemPrice = document.createElement("p");
  
  var itemPriceText = document.createTextNode("Amount: " + iCount*iPrice);
 
  
  itemPrice.appendChild(itemPriceText);

  itemDetail.appendChild(itemName);
  itemDetail.appendChild(itemCount);
  itemDetail.appendChild(itemPrice);

  item.appendChild(itemImg);
  item.appendChild(itemDetail);

  return item;
}
    
   for(var i =0;i<checkoutarr.length;i++)
   {
    if(checkoutarr[i] !== null)
    {
      console.log(i)
    checkout.append(createItemOnCheckOut( checkoutarr[i].preview,
      checkoutarr[i].count,
      checkoutarr[i].title,
      checkoutarr[i].price
    ))
    }

  }
  
  var sumof=0;

  for(var i =0;i<checkoutarr.length;i++)
  {

    sumof=sumof+(checkoutarr[i].count *  checkoutarr[i].price)
  }

  var sidediv=document.createElement("div")
  sidediv.setAttribute("class","sidediv")
  
  var stit = document.createElement("h4");
  var stitext = document.createTextNode("Total Amount");
  stit.appendChild(stitext)
  var samount = document.createElement("p");
  var samounttext = document.createTextNode("Amount: " + sumof);
  var ban=document.createElement("a")
  ban.href="./placing.html"
  var but = document.createElement('button')
  but.innerText = "PLACE ORDER"
  but.classList.add('buttonc')
  ban.append(but)
  sidediv.append(ban)

  samount.appendChild(samounttext)
  sidediv.append(stit)
  sidediv.append(samounttext)
  checkout.append(sidediv)

  



});  
 



