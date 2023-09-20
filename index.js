AOS.init();
const nav = [
    {
        name : `Home`
    },
    {
        name : `Model`
    },
    {
        name : `Promotion`
    },
    {
        name : `Help`
    },
]
var text = " ";
for(let i in nav){
    text +=`
    <li><a href="">${nav[i]["name"]}</a></li>
    `;
}
document.getElementById("nav").innerHTML=text;


const brand = [
    {
        name : `<img src="image/Nike-Logo-Free-PNG-Image.png" alt="" id="Nike-l">`
    },
    {
        name : `<img src="image/adidas-logo-transparent-background-1.png" alt="">`
    },
    {
        name : `<img src="image/vans.png" alt="">`
    },
    {
        name : `<img src="image/Converse-Logo-design-on-transparent-background-PNG.png" alt="">`
    },
]
var b_logo = " ";
for(let i in brand){
    b_logo +=`
    <li><a href="">${brand[i]["name"]}</a></li>
    `;
}
document.getElementById("b_logo").innerHTML=b_logo;

var Exit =  document.getElementById("Exit");
Exit.addEventListener("click",()=>{
    document.getElementById("Sign-up").style.display="none";
})
var Signup =  document.getElementById("Signup");
Signup.addEventListener("click",()=>{
    document.getElementById("Sign-up").style.display="block";
})

var right= '';
right= '<img src="image/right1.jpg" alt="">';
document.getElementById("right").innerHTML=right;

var NDL =  document.getElementById("NDL");
NDL.addEventListener("click",()=>{
    document.getElementById("NDL").style.color="rgb(79,204,255)";
    document.getElementById("NAJ").style.color="black";
    document.getElementById("NAF").style.color="black";
    document.getElementById("AJRI").style.display="none";
    document.getElementById("NKFI").style.display="none";
    document.getElementById("NDLI").style.display="block";
})


var NAJ =  document.getElementById("NAJ");
NAJ.addEventListener("click",()=>{
    document.getElementById("NDL").style.color="black";
    document.getElementById("NAJ").style.color="rgb(79,204,255)";
    document.getElementById("NAF").style.color="black";
    document.getElementById("NKFI").style.display="none";
    document.getElementById("AJRI").style.display="block";
    document.getElementById("NDLI").style.display="none";
})

var NAF =  document.getElementById("NAF");
NAF.addEventListener("click",()=>{
    document.getElementById("NDL").style.color="black";
    document.getElementById("NAJ").style.color="black";
    document.getElementById("NAF").style.color="rgb(79,204,255)";
    document.getElementById("NDLI").style.display="none";
    document.getElementById("AJRI").style.display="none";
    document.getElementById("NKFI").style.display="block";
})


const item = [
    {
        img : `<img src="image/Nike/1.jpg" alt="">`,
        name : `<h6>New Nike Dunk Low Retro Shoes Sneakers - Panda Black White</h6>`,
        price : `<h2>$153.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Nike/2.jpg" alt="">`,
        name : `<h6>Nike Air Force 1 Low Utility</h6>`,
        price : `<h2>$145.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Nike/3.jpg" alt="">`,
        name : `<h6>Nike Air Monarch IV White Navy</h6>`,
        price : `<h2>$178.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Nike/4.jpg" alt="">`,
        name : `<h6>Jordan 1 Mid White Black</h6>`,
        price : `<h2>$153.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Nike/5.jpg" alt="">`,
        name : `<h6>New Nike Dunk Low Retro Shoes Sneakers - Panda Black White</h6>`,
        price : `<h2>$153.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Nike/6.jpg" alt="">`,
        name : `<h6>Nike Air Force 1 Low Utility</h6>`,
        price : `<h2>$145.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Nike/7.jpg" alt="">`,
        name : `<h6>Nike Air Monarch IV White Navy</h6>`,
        price : `<h2>$178.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Nike/8.jpg" alt="">`,
        name : `<h6>Jordan 1 Mid White Black</h6>`,
        price : `<h2>$153.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
]
var text1 = " ";
for(let i in item){
    text1 +=`
    <div class="col-3 box">
                      <div class="pic">
                      ${item[i]["img"]}
                      </div>
                      <div class="des">
                        <div class="name">
                        ${item[i]["name"]}
                        </div>
                        <div class="price">
                        ${item[i]["price"]}
                        </div>
                        <div class="sold">
                        ${item[i]["sold"]}
                        </div>
                      </div>
                    </div>
    `;
}
document.getElementById("item").innerHTML=text1;



const item1 = [
    {
        img : `<img src="image/Adidas/1.jpg" alt="">`,
        name : `<h6>adidas Forum Exhibit Low Cream White Black</h6>`,
        price : `<h2>$153.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Adidas/2.jpg" alt="">`,
        name : `<h6>Forum 84 Hi 'Orbit Grey'</h6>`,
        price : `<h2>$145.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Adidas/3.jpg" alt="">`,
        name : `<h6>adidas Originals Women's Forum 84 Low Off White Grey</h6>`,
        price : `<h2>$178.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Adidas/4.jpg" alt="">`,
        name : `<h6>adidas Forum 84 High Eric Emanuel Indiana Hoosiers</h6>`,
        price : `<h2>$153.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Adidas/1.jpg" alt="">`,
        name : `<h6>adidas Forum Exhibit Low Cream White Black</h6>`,
        price : `<h2>$153.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Adidas/2.jpg" alt="">`,
        name : `<h6>Forum 84 Hi 'Orbit Grey'</h6>`,
        price : `<h2>$145.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Adidas/3.jpg" alt="">`,
        name : `<h6>adidas Originals Women's Forum 84 Low Off White Grey</h6>`,
        price : `<h2>$178.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Adidas/4.jpg" alt="">`,
        name : `<h6>adidas Forum 84 High Eric Emanuel Indiana Hoosiers</h6>`,
        price : `<h2>$153.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
]
var text2 = " ";
for(let i in item1){
    text2 +=`
    <div class="col-3 box">
                      <div class="pic">
                      ${item1[i]["img"]}
                      </div>
                      <div class="des">
                        <div class="name">
                        ${item1[i]["name"]}
                        </div>
                        <div class="price">
                        ${item1[i]["price"]}
                        </div>
                        <div class="sold">
                        ${item1[i]["sold"]}
                        </div>
                      </div>
                    </div>
    `;
}
document.getElementById("item1").innerHTML=text2;



const item2 = [
    {
        img : `<img src="image/Vans/1.jpg" alt="">`,
        name : `<h6>VANS Old Skool Black & White Shoes</h6>`,
        price : `<h2>$153.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Vans/2.jpg" alt="">`,
        name : `<h6>Vans Classics Sk8-Hi Mens Shoes'</h6>`,
        price : `<h2>$145.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Vans/3.jpg" alt="">`,
        name : `<h6>VANS Checkerboard Slip-On Black & Off White Shoes</h6>`,
        price : `<h2>$178.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Vans/4.jpg" alt="">`,
        name : `<h6>Vans slip on butturfly</h6>`,
        price : `<h2>$153.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Vans/1.jpg" alt="">`,
        name : `<h6>VANS Old Skool Black & White Shoes</h6>`,
        price : `<h2>$153.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Vans/2.jpg" alt="">`,
        name : `<h6>Vans Classics Sk8-Hi Mens Shoes'</h6>`,
        price : `<h2>$145.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Vans/3.jpg" alt="">`,
        name : `<h6>VANS Checkerboard Slip-On Black & Off White Shoes</h6>`,
        price : `<h2>$178.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Vans/4.jpg" alt="">`,
        name : `<h6>Vans slip on butturfly</h6>`,
        price : `<h2>$153.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
]
var text3 = " ";
for(let i in item2){
    text3 +=`
    <div class="col-3 box">
                      <div class="pic">
                      ${item2[i]["img"]}
                      </div>
                      <div class="des">
                        <div class="name">
                        ${item2[i]["name"]}
                        </div>
                        <div class="price">
                        ${item2[i]["price"]}
                        </div>
                        <div class="sold">
                        ${item2[i]["sold"]}
                        </div>
                      </div>
                    </div>
    `;
}
document.getElementById("item2").innerHTML=text3;



const item3 = [
    {
        img : `<img src="image/Converse/1.jpg" alt="">`,
        name : `<h6>Schuhe Converse Chuck Taylor All Star Hi M9160C - 9MW</h6>`,
        price : `<h2>$153.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Converse/2.jpg" alt="">`,
        name : `<h6>CONVERSE X COMME DES GARCONS PLAY ALL STAR CHUCK</h6>`,
        price : `<h2>$145.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Converse/3.jpg" alt="">`,
        name : `<h6>Chuck 70 Tri-Panel</h6>`,
        price : `<h2>$178.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Converse/4.jpg" alt="">`,
        name : `<h6>Converse Run Star Hike Platform Foundational Leather</h6>`,
        price : `<h2>$153.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Converse/1.jpg" alt="">`,
        name : `<h6>Schuhe Converse Chuck Taylor All Star Hi M9160C - 9MW</h6>`,
        price : `<h2>$153.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Converse/2.jpg" alt="">`,
        name : `<h6>CONVERSE X COMME DES GARCONS PLAY ALL STAR CHUCK'</h6>`,
        price : `<h2>$145.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Converse/3.jpg" alt="">`,
        name : `<h6>Chuck 70 Tri-Panel</h6>`,
        price : `<h2>$178.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
    {
        img : `<img src="image/Converse/4.jpg" alt="">`,
        name : `<h6>Converse Run Star Hike Platform Foundational Leather/Weiß</h6>`,
        price : `<h2>$153.90</h2>`,
        sold : `<p>1345 Sold</p>`
    },
]
var text4 = " ";
for(let i in item3){
    text4 +=`
    <div class="col-3 box">
                      <div class="pic">
                      ${item3[i]["img"]}
                      </div>
                      <div class="des">
                        <div class="name">
                        ${item3[i]["name"]}
                        </div>
                        <div class="price">
                        ${item3[i]["price"]}
                        </div>
                        <div class="sold">
                        ${item3[i]["sold"]}
                        </div>
                      </div>
                    </div>
    `;
}
document.getElementById("item3").innerHTML=text4;