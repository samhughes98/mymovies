document.addEventListener('DOMContentLoaded', () => {

  setTimeout( () => {
    var imgArray = ['', '..../src/static/images/bannerimg3.jpg', '..../src/static/images/bannerimg1.jpg'];

    for(let i = 0; i < imgArray.length; i++){
      document.getElementById("bannerImg").src = imgArray[i];
    }
  
  },3000);


})



var searchBtn = document.getElementById("searchBtn");

if(searchBtn){
console.log("test");
searchBtn.addEventListener('click', () => {

  var search = document.getElementById("searchBar").value;
  var url = "https://www.omdbapi.com/?t=" + search + "&apikey=84d950f7&";
  console.log(url);

    fetch(url)
    .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        displayJson(myJson);
      });
})


function displayJson(myJson){
    var title = document.getElementById("movieTitle");
    var desc = document.getElementById("movieDesc");
    var img = document.getElementById("movieImg");
    var rating = document.getElementById("movieRating");

    title.innerHTML = myJson.Title;
    desc.innerHTML = myJson.Plot;
    img.src = myJson.Poster;
    rating.innerHTML = "IMDB Rating: " + myJson.imdbRating;
}
}