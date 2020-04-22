$(document).ready(function () {
    $('#freaky').click(function() {
      checked = $('.love:checked').length;
      ice = $('.ice:checked').length;
      diclick = $('.lick:checked').length;
      place = $('.place:checked').length;
      light = $('.light:checked').length;
      music = $('.music:checked').length;
      drink = $('.drink:checked').length;
      food = $('.food:checked').length;


      if(!checked) {
        alert("Ion! I say Ion!!🙄🙄🙄 You Didn`t Check How You Want Zazzy To Freaky You Up.");
        return false;
      } 
      else if (!ice) {
        alert("\n My Dear Do Well Now! 🤧🤧🤧\n You Didn`t Check Which  Ice Material Do You Want Zazzy To Use.");
        return false;
      } 
      else if (!diclick) {
        alert("\n Come On You Can Do Better! 😒😒😒\n You Didn`t Check How Do You Want Zazzy To Freaky You Up.");
        return false;
      } 
         else if (!place) {
        alert("\n Show Zazzy Where To Freaky You up Now!😩😩😩");
        return false;
      } 
      else if (!light) {
        alert("\n Freaky Freaky Choose a Lighting System For Zazzy Now!🙄🙄🙄");
        return false;
      } 
      else if (!drink) {
        alert("\n Zazzy Want You To Drink Something Now!👀👀👀");
        return false;
      } 

      else if (!music) {
        alert("\n Freaky! \n I don`t think you would like zazzy to be playing Gospel whiles he is eating you up.🙄🙄🙄 \n Choose a music.");
        return false;
      } 

      else if (!food) {
        alert("\n Freaky! Freaky!! Zazzy Doesn`t Want You To GEt Hungry!🙃🙃🙃");
        return false;
      } 


      
    });

    
});


window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});



