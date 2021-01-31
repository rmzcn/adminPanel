/* DEVICES WIDTH */
// X-Small	          None	<576px
// Small	          sm	≥576px
// Medium	          md	≥768px
// Large	          lg	≥992px
// Extra large	      xl	≥1200px
// Extra extra large  xxl	≥1400px

let DEVICES_SM = 576;
let DEVICES_MD = 768;
let DEVICES_LG = 992;
let DEVICES_XL = 1200;
let DEVICES_XXL = 1400;

/* RESPONSİVE FOR SIDE NAV */
let sideNavNormalWidth = "300px";
let sideNavRespnsiveWidth = "100%";
let sideNav = document.getElementById("leftSideNav");
let sideNavCloserButton = document.getElementById("sidenavCloserButton");

if ( screen.width > DEVICES_MD ) {
    sideNavCloserButton.textContent = "";
    sideNav.style.width = sideNavNormalWidth;
}

else{
    sideNavCloserButton.nodeValue = "&times;";
    sideNavCloserButton.style.width = sideNavRespnsiveWidth;
}

if (screen.width < DEVICES_MD) {
    $("#searchNavTop").hide();
}




/* SIDE BAR ACTIONS */
function openNav() {
    document.getElementById("leftSideNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("leftSideNav").style.width = "0";
  }