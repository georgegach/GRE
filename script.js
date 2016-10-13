var App = App || {
	counter : 0,
};

App.nextWord = function(id)
{
	if (id === undefined)
		id = Math.floor(Math.random()*App.wordlist.length);
	
	$(".word").html(App.wordlist[id].back[0].content);
	$(".description").html(App.wordlist[id].back[1].content);
	$(".example").html(App.wordlist[id].back[2].content);
	id++;

}

App.search = function(word)
{
	for (var i = 0; i < App.wordlist.length; i++) {
		if (App.wordlist[i].back[0].content.includes(word))
		{
			$("#search").attr("class", "correct")
			return i;
		}
	}

	for (var i = 0; i < App.wordlist.length; i++) {
		if (App.wordlist[i].back[1].content.includes(word)){
			$("#search").attr("class", "notreally")
			return i;
		}
	}

	$("#search").attr("class", "wrong")
	return -1;
}


App.NotesFadeOut = function()
{
	$(".note, .note2").fadeOut(20000, function(){
		console.log(10);
	})
}

$(function()
{
	console.log(App);
	App.nextWord();
	App.NotesFadeOut();
});	

$("#search").on("input", function(e)
{
	App.nextWord(App.search($("#search").val()));
})


$(document).keypress(function(e) 
{
	if(e.which == 32) {
		App.nextWord();
	}
});
