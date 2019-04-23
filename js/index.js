const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])




// Header//

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"] ["img-src"]);
console.log(headerImg);


let button = document.getElementsByTagName("button") [0];
button.innerHTML = "Get Started";
console.log(button);

// Nav

let services = document.getElementsByTagName('a')[0];
services.innerHTML = 'Services';
console.log(services);


let product = document.getElementsByTagName('a')[1];
product.innerHTML = 'Product';

let vision = document.getElementsByTagName('a')[2];
vision.innerHTML = 'Vision';

let features = document.getElementsByTagName('a')[3];
features.innerHTML = 'Features';

let about = document.getElementsByTagName('a')[4];
about.innerHTML = 'About';

let contact = document.getElementsByTagName('a')[5]
contact.innerHTML = 'Contact';


//cta

let h1 = document.getElementsByTagName('h1')[0];
h1.innerHTML = "DOM Is Awesome";

let buttonGet = document.getElementsByTagName("button")[0];
buttonGet.innerHTML = "Get Started";

let headerImgCta = document.getElementById("cta-img");
headerImgCta.setAttribute("src", siteContent["cta"] ["img-src"]);

//main-content

let featuresH4 = document.getElementsByTagName('h4')[0];
featuresH4.innerHTML = 'Features';

let featuresContent = document.getElementsByTagName('p')[0];
featuresContent.innerHTML = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let aboutContent_1 = document.getElementsByTagName('h4')[2];
aboutContent_1.innerHTML = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let services_H4 = document.getElementsByTagName('H4')[2];
services_H4.innerHTML = "Services";

let servicesContent = document.getElementsByTagName('p')[2];
servicesContent.innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let product_H4 = document.getElementsByTagName('h4')[3];
product_H4.innerHTML = "Product";

let productContent = document.getElementsByTagName('p')[3];
productContent.innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


let vision_H4 = document.getElementsByTagName('h4')[4];
vision_H4.innerHTML = "Vision";

let visionContent = document.getElementsByTagName('p')[4];
visionContent.innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//contact - footer

let contact_H4 = document.getElementsByTagName('h4')[5];
contact_H4.innerHTML = "Contact";

let address = document.getElementsByTagName('p')[5];
address.innerHTML = "23 Way 456 Street Somewhere, USA";

let phone = document.getElementsByTagName('p')[6];
phone.innerHTML = "1 (888) 888-8888";

let email = document.getElementsByTagName('p')[7];
email.innerHTML = "sales@greatidea.io";

//footer

let footer = document.getElementsByTagName('p')[8];
footer.innerHTML = "Copyright Great Idea! 2018";


















