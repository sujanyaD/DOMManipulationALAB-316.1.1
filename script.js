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
// part 1
const mainEl = document.querySelector("main");
console.log(mainEl);
mainEl.style.backgroundColor = "var(--main-bg)";
const h1 = document.createElement("h1");
mainEl.appendChild(h1);
h1.textContent = "DOM Manipulation";
console.log(h1);
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");//<nav id="top-menu"> </nav>

topMenuEl.style.height = "100%";//<nav id="top-menu" style="height:100%;"></nav>
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";//<nav id="top-menu" style="height:100%;backgroundColor :"var(--top-menu-bg)";"></nav>
topMenuEl.classList.add("flex-around");

// Part 3
menuLinks.forEach(function (link) {
  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", link.href);
  linkElement.textContent = link.text;
  topMenuEl.appendChild(linkElement);
});

// Part 3
const subMenuEl = document.getElementById("sub-menu");// get nav element 
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// Part 4
const topMenuLinks = topMenuEl.querySelectorAll("a");
// adding event listner for click event
topMenuEl.addEventListener("click", function (event) {
  // to prefevent default action 
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  // Log the content of the <a> element
  console.log(event.target.textContent);
});
// attaching click event to topMenuE1
topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();

  if (event.target.tagName !== "a") {
    return;
  }
//toggle class to toggle when clicked on a <a> tag element
  event.target.classList.toggle("active");

  // Remove the "active" class from each other <a> element in topMenuLinks
  topMenuLinks.forEach(function (link) {
    if (link !== event.target) {
      link.classList.remove("active");
    }
  });
});
//adding click event to topMenuE1 using eventListener.
topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  const clickedLink = event.target;
  //storing linkobject value  from Menu Links
  const linkObject = menuLinks.find(link => link.text === clickedLink.textContent);
  if (!clickedLink.classList.contains("active")) {
    if (linkObject && linkObject.subLinks) {
      subMenuEl.style.top = "100%";
    } else {
      subMenuEl.style.top = "0";
    }
  }
});

topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  event.target.classList.toggle("active");
  topMenuLinks.forEach(function (link) {
    if (link !== event.target) {
      link.classList.remove("active");
    }
  });
  const clickedLink = event.target;
  const linkObject = menuLinks.find(link => link.text === clickedLink.textContent);
  if (!clickedLink.classList.contains("active")) {
    if (linkObject && linkObject.subLinks) {
      subMenuEl.style.top = "100%";
      buildSubmenu(linkObject.subLinks);
    } else {
      subMenuEl.style.top = "0";
    }
  } else {
    subMenuEl.style.top = "0";
  }
});
// helper function for building submenu based on sublinks array.
function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = "";

  subLinks.forEach(function (link) {
    const subLinkElement = document.createElement("a");

    subLinkElement.setAttribute("href", link.href);

    subLinkElement.textContent = link.text;

    subMenuEl.appendChild(subLinkElement);
  });
}

















