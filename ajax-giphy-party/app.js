 const $results = $("#gif-results");
 const $searchVal = $("#search");

 
 function getGifs(res){
    let gifResults = res.data.length;
    if(gifResults) {
        let randomIdx = Math.floor(Math.random()* gifResults);
        let $resultsArea = $('<div>');
        let $newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url
        });
        $resultsArea.append($newGif);
        $results.append($resultsArea);
    }

 }

 $("form").on("submit", async function(e) {
    e.preventDefault();

    let userInput = $searchVal.val();
    $searchVal.val("");

    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {


        params: {
           q: userInput, 
           api_key: "yNPfsMZbr6J1e1ONiCrWy3L7KlKMz5PI"
        }
      });
    getGifs(res.data);
      });

 $("#remove").on("click", function() {
    $results.empty();
console.log("Let's get this party started");
 })
