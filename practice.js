var comp=new XMLHttpRequest();
comp.open('get',"https://5d76bf96515d1a0014085cf9.mockapi.io/product",false)
comp.send();
//console.log(comp)
//console.log(typeof(comp.responseText))
var full=JSON.parse(comp.responseText)
//console.log(full)
localStorage.clear
$(document).ready(function () {
    let s = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rwDveCQNrY3CiWHPD9695j0prE6cFGzkwg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ20Ug4p1aN972MW7FaWXbogvFA2FYmp7FsoA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1hNhxfP_hC-rq3ZchlNzgo1DiIWrmrWBHg&usqp=CAU",
    "https://shoplane.netlify.app/img/img1.png", "https://shoplane.netlify.app/img/img2.png",
    "https://shoplane.netlify.app/img/img3.png", "https://shoplane.netlify.app/img/img4.png"]


    let hc = $("#headerclass");
    //console.log(hc);
    hc.addClass("headerclass  container")
    hc.append($('<span>').text("SHOP").addClass('spanclasssl'), $('<span>').text("LANE").addClass('laneclass'))
    l = ["HOME", "CLOTHINGS", "ACCESSORIES"]
    for (var j = 0; j < 3; j++) {
        hc.append($("<a>").prop({ href: '#', innerText: l[j] }).addClass("columnhead"))
    }
    hc.append($("<img>").prop({ src: s[0], }).addClass("imageclasscart"))
    hc.append($("<img>").prop({ src: s[1], }).addClass("imageclasscart"))

    hc.append($("<a>").prop({href:"/exit.html"}).append($(("<span>")).addClass("smallroundf").text(window.localStorage.getItem("cart-count"))).append($("<img>").prop({ src: s[2], }).css("text-align", "left").addClass("imageclasscart"))).click(good)
   
    
function good(){
   /* var d=$(".smallroundf")
    console.log("i am outer",d)-*/
    hc.append($(("<span>")).addClass("smallroundf").text(window.localStorage.getItem("cart-count")))
}

 
    let autod = $(".auto_display")
    var autod1 = $("<div>")
    autod.append((autod1).addClass("autodclass"))
    for (var j = 3; j < 7; j++) {

       
        var image1 = new Image()
        image1.src = s[j];
        image1.setAttribute("class", "uimageclass");
        autod1.append((image1))
    }
    var sumi=0
    var ind = 0
    var k = 0
    var slides = document.querySelectorAll(".uimageclass");
    wishd()
    function wishd() {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"
            //console.log(image[i])
        }
        if (ind >= slides.length) {
            ind = 0;
        }
        ind++

        slides[ind - 1].style.display = "block"

        setTimeout(wishd, 5000)



    }
    var slides = document.querySelectorAll(".uimageclass")
    let dot = $("#dot")
    for (var j = 0; j < 4; j++) {
        var dot1 = $("<button>")
        //console.log("i am dot", j, dot1)
        dot.append((dot1).addClass("dotss"))
    }
    var appf = document.getElementsByClassName("dotss")
    appf[0].id = 0
    appf[0].addEventListener('click', whichslide)
    appf[1].id = 1
    appf[1].addEventListener('click', whichslide)
    appf[2].id = 2
    appf[2].addEventListener('click', whichslide)
    appf[3].id = 3
    appf[3].addEventListener('click', whichslide)
    function whichslide(e) {

        console.log("Hi")
        ind = e.target.id
        
        setTimeout(wishd, 5000)
    }
var imagedivs=$("#simages")
imagedivs.addClass("outerd")
//console.log(imagedivs)
var imdl=["https://shoplane.netlify.app/img/icon1.png",
"https://shoplane.netlify.app/img/icon2.png",
"https://shoplane.netlify.app/img/icon3.png",
"https://shoplane.netlify.app/img/icon4.png"]
for(var j=0;j<4;j++)
{
   
   imagedivs.append($("<div>").append($("<img>").prop({ src: imdl[j], }).addClass("images")).addClass("kimdclass"))
   /*kim.addClass("kimdclass")
    imagedivs.append(kim)*/

}
//console.log(imagedivs)




});
function photos(i)
{      
        var ims=document.createElement('img');
        var hd1=document.createElement('h2');
        var hd2=document.createElement('h4');
        var p=document.createElement('h5');
        ims.src=i.preview;
        hd1.innerText=i.name;
        hd2.innerText=i.brand;
        p.innerText=i.price;
        di.appendChild(ims);
        di.appendChild(hd1);
        di.appendChild(hd2);
        di.appendChild(p);
        a.classList.add('grid-item');
        ims.classList.add('imgs');
        hd1.classList.add('firsthead');
        hd2.classList.add('secondhead');
        p.classList.add('price');

}

var human=document.getElementById('human');
var acc=document.getElementById('acc');
human.classList.add('child');
acc.classList.add('child1')
for(var i =0;i<full.length;i++)
{
    
    var a=document.createElement('a');
    var di=document.createElement('div');
     a.href="../productpage.html?"+full[i].id
  a.appendChild(di)
   a.target="_blank"
   //console.log(a)
    
    if(full[i].isAccessory===false)
    {
       
        human.appendChild(a);
        photos(full[i]);
    }
    else
    {
          
        acc.appendChild(a);
       photos(full[i]);
    }
   
}

