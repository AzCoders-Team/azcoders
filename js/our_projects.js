var array = [];
var array1 = [];
var url1 = "img/our-projects/hour_of_code/";
var url2 = "img/our-projects/website/";
let i_1=0;
let i_2=0;
for(i_1=0;i_1<6;i_1++){
  array[i_1] = url1 + String(i_1+1)+".png";
}
for(i_2=0;i_2<4;i_2++){
  array1[i_2] = url2 + String(i_2+1)+".png";
}


i_1=0;
i_2=0;
function slide_code(){
  document.slide_img_code.src = array[i_1];
  if(i_1 + 1 < 6)i_1++;
  else i_1 = 0;

  setTimeout("slide_code()",3200);
}

function slide_web(){
  document.slide_img_web.src = array1[i_2];
  if(i_2 + 1 < 4)i_2++;
  else i_2 = 0;

  setTimeout("slide_web()",3200);
}


function init(){
  slide_code();
  slide_web();
}

window.onload=init;
