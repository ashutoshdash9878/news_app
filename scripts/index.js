// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();



let getdata=async()=>{

    try{
        let res=await fetch('https://masai-mock-api.herokuapp.com/news/top-headlines?country=in')

        let data=await res.json();
        append(data.articles);
        

        console.log(data.articles)
    }
catch(err){
    console.log(err.message)
}



}
getdata();


var append=(data)=>{

    let result=document.getElementById("results");

    data.map(function(elem){

        var div=document.createElement("div")
        div.setAttribute("class","box")

      var p= document.createElement("p")
    
      p.innerText=elem.title;

      var image=document.createElement("img")
      image.setAttribute("class","imgs")
      image.src=elem.urlToImage

      var pp= document.createElement("p")
    
      pp.innerText=elem.description


     div.append(image,p,pp)
     result.append(div)

    })
}

document.getElementById("in").addEventListener("click",getdata)











