
$(document).ready(function () {
  
  if (localStorage.getItem('cart-count') == null || localStorage.getItem('cart-count')== undefined) {
    localStorage.setItem('cart-count', '0');
  } else {
    var cartValue = localStorage.getItem('cart-count');
    localStorage.setItem('cart-count', cartValue);
  }
  var whichid = window.location.search
  console.log("i am id", whichid)
  var er = JSON.stringify(whichid)
  l = (er.split('?'))
  k = l[1].split('"')
  var kid = Number(k[0])
  
  var wobj = new XMLHttpRequest()
  wobj.open('get', "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + kid, false)
  wobj.send()
  var goti = JSON.parse(wobj.responseText)
  console.log(goti)
  
  var cartIntialValue;
  
  
  
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
  
    

  
  
  hc.append($("<a>").prop({href:"/exit.html"}).append($("<img>").prop({ src: s[2], }).css("text-align", "left").addClass("imageclasscart")))
  hc.append($(("<span>")).addClass("smallhole").text(window.localStorage.getItem("cart-count")))
    
    var smallhol = $(".smallhole")
   console.log(smallhol)
    function cartCount() {
      
      console.log(window.localStorage.getItem("cart-count"))
     
      if (window.localStorage.getItem("cart-count") === null) {
        cartIntialValue = 0;
      } else {
        cartIntialValue = JSON.parse(window.localStorage.getItem("cart-count"));
        smallhol.innerText = cartIntialValue;
        smallhol.text = cartIntialValue;
     console.log(cartIntialValue)
  
        
      }
      var cartCurrentValue = cartIntialValue + 1;
      window.localStorage.setItem("cart-count", cartCurrentValue);
      //console.log(cart)
      hc.append($(("<span>")).addClass("smallrounddis").text(window.localStorage.getItem("cart-count")))
  
      smallhol.text = window.localStorage.getItem("cart-count");
     
  
    }
  
  
    function addDataIntoList(productData) {
      console.log(productData)
   
      if (window.localStorage.getItem("addcart") === null) 
      {
        console.log("addpppp")
        myCartData = [];
      }
  
      else {
        console.log(" elseeeee" )
        myCartData = JSON.parse(window.localStorage.getItem("addcart"));
      }
  
      if (myCartData.length === 0) {
        console.log(" in length if ",myCartData.length)
        var myObj = {
          id: goti.id,
            title: goti.name,
            count: 1,
            price: goti.price,
            preview: goti.preview
        };
        myCartData.push(myObj);
      }
  
      else if (myCartData.length != 0) {
        console.log(" in length else if ",myCartData.length)
        var w = 0;
  
        for (var i = 0; i < myCartData.length; i++) {
          if (myCartData[i].id == goti.id) {
            myCartData[i].count = parseInt(myCartData[i].count) + 1;
            
            w += 1;
          }
        }
  
        if (w == 0) {
          var myObj = {
            id: goti.id,
            title: goti.name,
            count: 1,
            price: goti.price,
            preview: goti.preview
          };
          myCartData.push(myObj);
        }
      }
      console.log(myCartData)
      window.localStorage.setItem("addcart", JSON.stringify(myCartData));
      console.log(window.localStorage.getItem("addcart"))
    }
  
  
    function addf() {
     
    
     
       cartCount();

       addDataIntoList(kid);
    }
  
    var di = document.createElement('div');
    document.body.appendChild(di);
    di.classList.add('rowi')
    var ind1 = document.createElement('div');
    di.appendChild(ind1);
    ind1.classList.add('comp');
    var ind2 = document.createElement('div');
    di.appendChild(ind2); document.createElement('div');
    ind2.classList.add('textc');
    var osd = document.createElement('div');
    osd.classList.add('rowi');
    ind2.appendChild(osd);
    var but = document.createElement('button')
    but.innerText = "Add To Cart"
    but.classList.add('buttonclass')
    ind2.appendChild(but)
    but.addEventListener('click', addf)
  
    var im = document.createElement('img');
    im.src = goti.photos[0];
    im.classList.add('imgs')
    ind1.appendChild(im);
    var head1 = document.createElement('h1');
    var head2 = document.createElement('h2');
    var pr = document.createElement('h5');
    var span = document.createElement('span');
    var head3 = document.createElement('h2');
    var head4 = document.createElement('h5');
    var head5 = document.createElement('h5');
    head1.classList.add('firsthead');
    head2.classList.add('secondhead', 'secondheadposition');
    head3.classList.add('secondhead', 'secondhead2');
    head4.classList.add('head4c', 'secondhead2');
    head5.classList.add('secondhead', 'productview');
    pr.classList.add('price');
    head1.innerText = goti.name;
    head2.innerText = goti.brand;
    head3.innerText = "Description";
    head4.innerText = goti.description;
    pr.innerText = "Price: Rs ";
    head5.innerText = "Product Preview";
    ind2.appendChild(head1);
    ind2.appendChild(head2);
    ind2.appendChild(pr);
    ind2.appendChild(head3);
    ind2.appendChild(head4);
    ind2.appendChild(head5);
    span.innerText = goti.price;
    span.classList = 'spa'
    pr.appendChild(span);
  
    var re = 0
    for (var j = 0; j < goti.photos.length; j++) {
      var imag = document.createElement('img')
      var d = document.createElement('div')
      imag.src = goti.photos[j]
      imag.classList.add('imgs')
      imag.id = j;
      d.appendChild(imag)
      osd.appendChild(d)
      d.classList.add('smalld')
      if (j == 0) {
        imag.classList.add('spd')
      }
  
  
      imag.addEventListener('click', bordeimg)
  
    }
  
    var list = document.querySelectorAll('.smalld img');
  
    function bordeimg(e) {
  
      im.src = e.target.src
      list[re].classList.remove('spd')
      e.target.classList.add('spd')
      re = e.target.id
  
    }
  
    var myCartData = [];
    var cartIntialValue;
  
    if (localStorage.getItem('cart-count') == null) {
      localStorage.setItem('cart-count', '0');
    } else {
      var cartValue = localStorage.getItem('cart-count');
      localStorage.setItem('cart-count', cartValue);
    }
  });
  
  
  
  
