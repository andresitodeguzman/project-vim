angular.module('home').component('home',{

  templateUrl:'app/home/home.template.html',
  controller: function HomeController(){

    this.text = "Sample Text"; 
    this.wow = ()=>{
      this.text = "Merry Christmas";
    }
  
  }
});
