angular.module('appBar').component('appBar',{

  templateUrl:"app/appBar/appBar.template.html",
  controller: function AppBarController(){
    this.title = "Project Vim";
    this.appBarColor = "green darken-2";

    this.entries = [
      { "title":"Home", "href":"/home" },
      { "title":"divider", "href":"/" },

      {
	"title":"Basic Movements",
	"href":"/commands/basic"
      },
      {
	"title":"Insertion & Replace",
	"href":"/commands/insert"
      },
      {
	"title":"Deletion",
	"href":"/commands/delete"
      },
      {
	"title":"Insert Mode",
	"href":"/commands/insertmode"
      },
      {
	"title":"Copying",
	"href":"/commands/copying"
      },
      {
	"title":"Advance Insertion",
	"href":"/commands/advanceinsert"
      },
      {
	"title":"Visual Mode",
	"href":"/commands/visual"
      },
      {
	"title":"Undoing, Repeating & Registers",
	"href":"/commands/undoing"
      },
      {
	"title":"Complex Mode",
	"href":"/commands/complex"
      },
      {
	"title":"Search & Substitute",
	"href":"/commands/search"
      },
      {
	"title":"Special Characters in Search",
	"href":"/commands/specialcharacters"
      },
      {
	"title":"Offsets in Search Commands",
	"href":"/commands/offsets"
      },
      {
	"title":"Marks & Motions",
	"href":"/commands/marks"
      },
      {
	"title":"Keymapping & Abbreviations",
	"href":"/commands/keymapping"
      },
      {
	"title":"Tags",
	"href":"/commands/tags"
      },
      {
	"title":"Scrolling & Multiwindows",
	"href":"/commands/scrolling"
      },
      {
	"title":"Ex Commands",
	"href":"/commands/excommands"
      },
      {
	"title":"Ex Ranges",
	"href":"/commands/exranges"
      },
      {
	"title":"Folding",
	"href":"/commands/folding"
      },
      {
	"title":"Miscellaneous",
	"href":"/commands/miscellaneous"
      },

      { "title":"divider","href":"/" },
      { "title":"About App", "href":"/about" }
    ];

    this.closeNav = ()=>{
      $('.sidenav').sidenav();
    }

  }

});
