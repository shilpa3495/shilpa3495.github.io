function openPage(pageName,pageName1,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("userinfo-color");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.color = "";
  }
  document.getElementById(pageName).style.display = "block";
  document.getElementById(pageName1).style.display = "block";
  elmnt.style.color = color;
}

document.getElementById("defaultOpen").click();
