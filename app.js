const sDate = document.querySelector("#freakydate"),
Time = document.querySelector("#freakytime"),
Freak = document.querySelector("#freaky");






var sexType,Ice,Music,drink,place,food,Dl,Light;

function type(){
  
    if(document.getElementById("love").checked){
        sexType = "Make Love To Me" 
    }
    else if(document.getElementById("fuck").checked)
    {
        sexType = "Fuck Me DaDy"
    }

 //Ice
    if(document.getElementById("cubes").checked){
        Ice = "Ice cubes" 
    }
    else if(document.getElementById("cream").checked)
    {
        Ice = "Ice cream"
    }

//Freaky Up
  if(document.getElementById("Licking").checked)
    {
        Dl = "Licking > Dicking"
    }
    else if(document.getElementById("dick").checked)
    {
        Dl = "Dick > Licking<"
    }
    else if(document.getElementById("both").checked)
    {
        Dl = "Both"
    }

//Place
    if(document.getElementById("bed").checked)
    {
        place = "Bed"
    }

    else if(document.getElementById("table").checked)
    {
        place = "Center Table"
    }

    else if(document.getElementById("shower").checked)
    {
        place = "Bathroom"
    }
    else if(document.getElementById("floor").checked)
    {
        place = "Floor"
    }
 

    //Light
    if(document.getElementById("candle").checked)
    {
        Light = "Candle Light"
    }

    else if(document.getElementById("off").checked)
    {
        Light = "No Lights"
    }

    else if(document.getElementById("blight").checked)
    {
        Light = "Blue Lights"
    }
    else if(document.getElementById("on").checked)
    {
        Light = "Lights On"
    }




    //Drink
    if(document.getElementById("Wine").checked)
    {
        drink = "Wine"
    }

    else if(document.getElementById("Beer").checked)
    {
        drink = "Beer"
    }

    else if(document.getElementById("liquor").checked)
    {
        drink = "Liquor"
    }
    else if(document.getElementById("soft").checked)
    {
        drink = "Soft Drinks"
    }

    else if(document.getElementById("mixture").checked)
    {
        drink = "Mixture Of Soft and Hard"
    }


    //Music
    if(document.getElementById("romantic").checked)
    {
        Music = "Romantic Songs"
    }

    else if(document.getElementById("Hip-pop").checked)
    {
        Music = "Hip-Pop/Afro Breats"
    }

    else if(document.getElementById("any").checked)
    {
        Music = "Any Music"
    }
    else if(document.getElementById("nomusic").checked)
    {
        Music = "No Music"
    }

//Food
    if(document.getElementById("buyFood").checked)
    {
        food = "Buy The Food For Me"
    }

    else if(document.getElementById("cookFood").checked)
    {
        food = "Cook For Me Zazzy"
    }

    else if(document.getElementById("okay").checked)
    {
        food = "I`m Okay"
    }





}




Freak.addEventListener("click",function Books(){
type()
    var Booking = `
      Date: ${Date.value},
 
      Time: ${Time.value},
 
      Sex Type: ${sexType},
 
      Sex-Other: ${document.getElementById("freakyother").value},
      
      Place: ${place},

      Place Specified: ${document.querySelector("#dicklick").value},

      Ice: ${Ice},
 
      Dick/Lick: ${Dl},
 
      Dick/Lick Other: ${document.querySelector("#placeOther").value}
     
      Music: ${Music},

      Drink: ${drink},

      Drink Specficed; ${document.querySelector("#drinkS").value},

      Food: ${food},
      
      Food Specfied; ${document.querySelector("#foodS").value},

      Light: ${Light},

      Food Specfied; ${document.querySelector("#freakyD").value},

      `

})




const firebaseConfig = {
    apiKey: "AIzaSyCM0luCuxFk0yBoNavbiSPtlz8w6MGiJqM",
    authDomain: "freaky-freaky.firebaseapp.com",
    databaseURL: "https://freaky-freaky.firebaseio.com",
    projectId: "freaky-freaky",
    storageBucket: "freaky-freaky.appspot.com",
    messagingSenderId: "199639093214",
    appId: "1:199639093214:web:7fe9a8b4fa9c605a49174f",
    measurementId: "G-EYJEVWPF9N"
  };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

const database =firebase.database();
const rootRef = database.ref('Code Name');


document.querySelector('#freaky').addEventListener("click",function(){
    type()
    var Name = document.querySelector("#codeName").value;
 
    rootRef.child(Name).set({
        Date: `${sDate.value}`,
 
        Time: `${Time.value}`,
   
        SexType: `${sexType}`,
   
        SexOther: `${document.getElementById("freakyother").value}`,
        
        Place: `${place}`,
  
        PlaceSpecified: `${document.querySelector("#dicklick").value}`,
  
        Ice: `${Ice}`,
   
        Dick_Lick: `${Dl}`,
   
        Dick_Lick_Other: `${document.querySelector("#placeOther").value}`,
       
        Music:`${Music}`,
  
        Drink: `${drink}`,
  
        Drink_Specficed: `${document.querySelector("#drinkS").value}`,
  
        Food: `${food}`,
        
        Food_Specfied: `${document.querySelector("#foodS").value}`,
  
        Light: `${Light}`,
  
        Food_Specfied: `${document.querySelector("#freakyD").value}`,
  
    });

        


 
 })