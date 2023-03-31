var eleman,btnSil,btnTamam,girilen,secilen;
function listeyeEkle()
{
    girilen=document.getElementById("txtYapilacaklar").value;
    if(girilen!="")
    {
        document.getElementById("listeYapilacaklar").appendChild(eleman);
        eleman.innerHTML=girilen;

        btnTamam=document.createElement("img");
        eleman.appendChild(btnTamam);
        btnTamam.setAttribute("src","images/tamam.png");
        btnTamam.setAttribute("id","btnTamam");
        btnTamam.addEventListener("click",tamamla);

        btnSil=document.createElement("img");
        eleman.appendChild(btnSil);
        btnSil.setAttribute("src","images/sil.png");
        btnSil.setAttribute("id","btnSil");
        btnSil.addEventListener("click",sil);
    }
    else alert("Boş bırakmayınız!");

}
function sil()
{
    secilen=event.currentTarget.parentNode;
    secilen.remove();
    
}

function tamamla()
{
    eleman=document.createElement("li");
    document.getElementById("listeTamamlananlar").appendChild(eleman);
    secilen=event.currentTarget.parentNode;
    secilen.childNodes[1].style.display="none";
    secilen.childNodes[2].setAttribute("onclick","sil();");
    eleman.innerHTML=secilen.innerHTML;

    sil();

}



