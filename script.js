//  var menuLinks = [
//  { text: "about", href: "/about" },
//  { text: "catalog", href: "/catalog" },
//   { text: "orders", href: "/orders" },
//    { text: "account", href: "/account" },
//   ];
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];
//1.Getting Started
const mainEl = document.querySelector("main");
// console.log(mainEl);
mainEl.style.background = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");
mainEl.innerHTML = "<h1>DOM Manipulation</h1>"
mainEl.classList.add("flex-ctr");
console.log(mainEl)
//2.Menu Bar
const topMenuE1 = document.getElementById("top-menu");//   <nav id="top-menu"> </nav>
topMenuE1.style.height = "100%"; //<nav id="top-menu" style="height:100%;"></nav>
topMenuE1.style.backgroundColor = "var(--top-menu-bg)";//<nav id="top-menu" style="height:100%;backgroundColor :"var(--top-menu-bg)";"></nav>
topMenuE1.classList.add("flex-around");//<nav id="top-menu" style="height:100%;backgroundColor :"var(--top-menu-bg)";"></nav>
console.log(topMenuE1)

//3. Addding Menu Buttons
// Menu data structure
menuLinks.forEach((link, i) => {
  const a = document.createElement("a"); //<a>
  a.setAttribute("href", menuLinks[i].href);// <a href =menulinks[i].href>
  a.textContent = menuLinks[i].text; // <a href =menulinks[i].href>menuLinks[i].text</a>
  topMenuE1.appendChild(a)//<nav id="top-menu"  ><a href =menulinks[i].href>menuLinks[i].text</a></nav>
  const subMenuLinks = menuLinks[i].subLinks;
  if (typeof (subMenuLinks) != 'undefined')
    buildSubMenu(subMenuLinks)

});
const topMenuLinks = document.getElementsByTagName("a");

topMenuE1.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName != "a") {
    return;
  }
  console.log("Clicked anchor element content:", event.target.textContent);
  topMenuLinks.forEach((link) => {
    if (link === event.target) {
      link.classList.toggle("active");
    } else {
      link.classList.remove("active");
    }
  });

if (!event.target.classList.contains("active")) {
  if (clickedLink.subLinks && clickedLink.subLinks.length > 0) {
    subMenuEl.style.top = "100%";
   buildSubMenu(clickedLink.subLinks);
  } else {
    subMenuEl.style.top = "0";
  }
} else {
  subMenuEl.style.top = "0";
}
});


function buildSubMenu(sub) {
  const subMenuEl = document.getElementById("sub-menu")
  
  subMenuEl.style.height = "100%"
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  subMenuEl.style.position = "absolute";
  subMenuEl.style.position = "0";
  //subMenuEl.style.display = "None";
  subMenuEl.classList.add("flex-around");

  sub.forEach((link, i) => {
    const a = document.createElement("a");
    a.setAttribute("href", sub[i].href);
    a.textContent = sub[i].text;
    subMenuEl.appendChild(a);
    

  });
}





















