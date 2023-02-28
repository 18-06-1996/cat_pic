// url='https://api.thedogapi.com/v1/images/search?limit=10'
//api_key=8cIUURtAoiKtCm2ddUjlKnUIuSZt3Kcf

url3='https://api.thecatapi.com/v1/images/search?api_key=8cIUURtAoiKtCm2ddUjlKnUIuSZt3Kcf&limit=10&size=med'



async function api(){

    v= fetch(url3)
    out=await v
    prom=out.json()
    res=await prom
    
console.log(res[0])
try{
    for(let i of res){

         var parent=document.querySelector('body')
      
         var container=document.createElement('div')
                  parent.append(container)
       
         var pic=document.createElement('img')
                pic.setAttribute('src',i.url)
                container.append(pic)
             

    }
} 

catch{
        //
}
}

api()