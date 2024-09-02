let menuList=document.getElementById("menuList")
menuList.style.maxHeight="0vh";
function toggleMenu(){
  if(menuList.style.maxHeight=="0vh"){
    menuList.style.maxHeight="100vh";
  }
  else{
    menuList.style.maxHeight="0vh";
  }
}
