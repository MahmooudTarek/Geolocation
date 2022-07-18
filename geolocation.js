 mymab = document.querySelector(".mymab")
info = document.querySelector(".info")
info.classList.add("hidden")
// console.log(mymab)



 window.addEventListener("load",function(){


   })
   
    
    
    
    function getlocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getposition,errorhandle)
        }
        else{
            mymab.innerText="update ur broweser"
        }
    }
    function getposition(position){
        // mymab.classList.remove("hidden")

       
         console.log(arguments[0])
        lat=position.coords.latitude
        // console.log(lat)
        lon=position.coords.longitude
        // latlon=lat+":"+lon
        var location = new google.maps.LatLng(lat, lon);
        

        var specs = { zoom: 17, center: location };
        new google.maps.Map(mymab,specs);
       

    }
    function errorhandle(){
    
        alert("error")
    }
    ///////////////////////////////////////////////////////////////

    function getlocation2(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(information)
        }
        else{
            mymab.innerText="update ur broweser"
        }
    }

    allp=document.querySelectorAll("p")
    allinputs=document.querySelectorAll(".inputs")

    function information(position){
        lat=position.coords.latitude
        lon=position.coords.longitude
        acc=position.coords.accuracy
       time=position.timestamp

        console.log(lat)
        //////////////////////////////
        let object=[lat,lon,acc,time]
        for (let i = 0; i < allp.length; i++) {
            console.log(lat)
            allinputs[i].innerHTML=object[i]
        }

        mymab.innerHTML=info.innerHTML
        



    }
   
   



  

