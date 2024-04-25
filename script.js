var menuLinks = [
    { text: "about", href: "/about" },
    { text: "catalog", href: "/catalog" },
    { text: "orders", href: "/orders" },
    { text: "account", href: "/account" },
  ];
  
  import "./styles.css";
  const mainEl = document.querySelector("main");
  console.log(mainEl);
  mainEl.style.background = "var(--main-bg)";
  mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
  mainEl.classList = "flex-ctr";
  const topMenuE1 = document.getElementById("top-menu");
  topMenuE1.style.height = "100%";
  topMenuE1.style.backgroundColor = "var(--top-menu-bg)";
  topMenuE1.classList = "flex-around";
  menuLinks.forEach((link, i) => {
    const aE1 = document.createElement("a");
    aE1.textContent = "link[i].text";
  });
  