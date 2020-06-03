

var seconds = 0, stop = 60, counterStarted = false, counter;
function blah(){
	document.getElementById("sbutton").style.display = "block";
if(counterStarted === false){
counterStarted = true;
counter = setInterval(function(){
    if(seconds <= stop){
    document.getElementById('timer').innerHTML = seconds;
    seconds++;
  }else{
  		 document.getElementById('sbutton').setAttribute("disabled", "disabled");
  		 document.getElementById('sore').setAttribute("style", "display:block;");
        clearInterval(counter);
        counterStarted = false;
        seconds = 0;
      }
    },1000)
  }
}
//===========================================================
var totalpoints=0;
var l=document.getElementById("a").value;
unor="<p class='eword'>Entered words:</p>"

function getword(){
				holdera=0;
				l=document.getElementById("a").value;
				unor=unor+"<li class='uno'>"+l+"</li>";
				holdera++;
				document.getElementById("para").innerHTML =" "+unor+" ";
				document.getElementById("a").value=' ';

		}
function score(){
	var letter=[
	"apse","apses","ashed","asps","asses","caps","casa","casas","case","cased","cash","cashed","casus","caup",
	"caups","cause","caused","causes","causing","crus","cusp","cusps","dues","dugs","dups","dush","engine",
	"engines","ensign","esse","esses","genie","genies","gens","gies","gins","gude","gudes","gues","guess","guessed",
	"gups","gush","gushed","gussie","heap","heaps","hesp","negs","ness","news","nies","nine","nines","owns","paca",
	"pacas","pase","pash","pashed","pass","passe","passes","pause","paused","pauses","pausing","pausings","puds",
	"pugs","puses","push","pushed","puss","pusses","rusa","saps","sash","sashed","sass","sasse","sasses","seas",
	"seine","seis","sens","sensing","sensings","sess","shea","shed","sheds","sien","siens","sies","sign","sine",
	"sines","sinew","sinews","sing","singe","sings","snig","snigs","sour","sown","spae","spaes","spas","spaz","spud",
	"spuds","spue","spues","spug","spugs","suds","sues","sups","suss","sussed","sussing","used","uses","using","wens",
	"wisp","wisps","zaps","zowie"
];
var wo=document.getElementById("a").value;
var checko=letter.indexOf(wo);
	if (checko>0) {
		totalpoints++;
	}else {totalpoints=totalpoints+0;}
	document.getElementById("totalpoints").innerHTML=" "+totalpoints+" ";
}

//===========================================================

