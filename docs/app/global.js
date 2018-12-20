$(document).ready(()=>{
  $('.sidenav').sidenav();
});


const CommandsData = [

  {
    "title":"Template",
    "commandCode":"template",
    "commands":[
      {
	"command":"C",
	"description":"this is used for copying"
      }
    ]
  },

  {
    "title":"Basic Commands",
    "commandCode":"basic",
    "commands":[
      {
	"command":"h l k j",
	"description":"character left, right; line up, down"
      },
      {
	"command":"b w",
	"description":"word/token left,right"
      },
      {
	"command":"ge e",
	"description":"end of word/token left,right"
      },
      {
	"command":"{ }",
	"description":"beginning of previous, next paragraph"
      },
      {
	"command":"( )",
	"description":"beginning of previous, next sentence"
      },
      {
	"command":"0 gm",
	"description":"beginning, middle of line"
      },
      {
	"command":"^ $",
	"description":"first, last character of line"
      },
      {
	"command":"<font color='red'>n</font>G <font color='red'>n</font>gg"
      }
    ]
  }

];

