//تابع آبشاری

document.getElementById("submitAbshari").onclick = function () {
    let aAbshari = Number(document.getElementById("aAbshari").value);
    let bAbshari = Number(document.getElementById("bAbshari").value);
    let xAbshari = Number(document.getElementById("xAbshari").value);
    let fxAbshari= Math.abs(aAbshari+xAbshari)-Math.abs(bAbshari+xAbshari);


    let alamata
    let alamatb

aAbshari>=0 ? alamata="+" : alamata=""
bAbshari>=0 ? alamatb="+" : alamatb=""




   
if(isNaN(aAbshari)||isNaN(bAbshari)||isNaN(xAbshari)){ document.getElementById("zabeteAbshari").textContent ="لطفا عدد انگلیسی وارد کنید"; document.getElementById("fxAbshari").textContent="" }
else{    document.getElementById("zabeteAbshari").textContent =
        `f(x)= |x${alamata}${aAbshari}| - |x${alamatb}${bAbshari}|`;
     document.getElementById("fxAbshari").textContent=`f(${xAbshari})=${fxAbshari}` }

}

//سهمی
document.getElementById("submitSahmi").onclick = function () {
    let aSahmi = Number(document.getElementById("aSahmi").value);
    let bSahmi = Number(document.getElementById("bSahmi").value);
    let cSahmi= Number(document.getElementById("cSahmi").value);
    let xSahmi= Number(document.getElementById("xSahmi").value);
    let fxSahmi=aSahmi*Math.pow(xSahmi,2)+bSahmi*xSahmi+cSahmi;

    let alamatcSahmi
    let alamatbSahmi

bSahmi>=0 ? alamatbSahmi="+" : alamatbSahmi=""
cSahmi>=0 ? alamatcSahmi="+" : alamatcSahmi=""


    
if(isNaN(aSahmi)||isNaN(bSahmi)||isNaN(xSahmi)||isNaN(cSahmi)){ document.getElementById("zabeteSahmi").textContent ="لطفا عدد انگلیسی وارد کنید"; document.getElementById("fxSahmi").textContent="" }
else{if(aSahmi==0) {document.getElementById("fxSahmi").textContent=""  ; document.getElementById("zabeteSahmi").textContent ="a نمی تواند صفر باشد" }  
 else{   
document.getElementById("zabeteSahmi").textContent =
        `f(x)= ${aSahmi}x²${alamatbSahmi}${bSahmi}x${alamatcSahmi}${cSahmi}`
     document.getElementById("fxSahmi").textContent=
     `f(${xSahmi})=${fxSahmi}`;}
    }
     

}





document.getElementById("submitGoldani").onclick = function () {


    let aGoldani = Number(document.getElementById("aGoldani").value);
    let bGoldani = Number(document.getElementById("bGoldani").value);
    let xGoldani = Number(document.getElementById("xGoldani").value);
    let fxGoldani= Math.abs(aGoldani+xGoldani)+Math.abs(bGoldani+xGoldani);

    let alamataGoldani
    let alamatbGoldani

aGoldani>=0 ? alamataGoldani="+" : alamataGoldani=""
bGoldani>=0 ? alamatbGoldani="+" : alamatbGoldani=""


if(isNaN(aGoldani)||isNaN(bGoldani)||isNaN(xGoldani)){ document.getElementById("zabeteGoldani").textContent ="لطفا عدد انگلیسی وارد کنید"; document.getElementById("fxGoldani").textContent="" }
   else{ document.getElementById("zabeteGoldani").textContent =
        `f(x)= |x${alamataGoldani}${aGoldani}| + |x${alamatbGoldani}${bGoldani}|`;
     document.getElementById("fxGoldani").textContent=`f(${xGoldani})=${fxGoldani}` }

}




