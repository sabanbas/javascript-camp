

let konutKredileri = ["Konut kredisi","Emlak kredisi","Araç kredisi","İhtiyaç kredisi"]
//Bir değişkene birden fazla değer atamak için kare parantez kullanılır.

console.log("<ul>")
for (let i = 0;i<konutKredileri.length;i++){//i değişkenine 0 değer vererek konurKredileri değişkenindeki tüm değerleri basar
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")
//konut kredi çeşitlerini döngüye sokarak sıralar
//for döngü başlatma işlemini yapar.



let hayatSigortalari = ["Genel kapsamlı sigorta","Sağlık sigortası","İşsizlik sigortası","Aile kapsamlı sigorta"]

console.log("<ul>")
for (let i = 0;i<hayatSigortalari.length;i++){
    console.log("<li>"+hayatSigortalari[i]+"</li>")
}
console.log("</ul>")




let tasitSigortalari = ["Dolu hasarı","Kapsamlı kaza sigortası","Sel sigortası","Tam kapsamlı sigorta"]

console.log ("<ul>")
for (let i=0;i<tasitSigortalari.length;i++) {
    console.log("<li>"+tasitSigortalari[i]+"</li>")

}
console.log("</ul>")
