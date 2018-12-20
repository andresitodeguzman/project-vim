angular.module('commands').component('commands',{

  templateUrl:"app/commands/commands.template.html",
  controller: ['$routeParams',function CommandsController($routeParams){
    this.commandCode = $routeParams.commandCode;

    var  self = this;
    this.dataRaw = CommandsData.filter(obj=>{
      if(obj.commandCode == self.commandCode) return obj;
    });
    this.data = this.dataRaw[0];
  }]

});
