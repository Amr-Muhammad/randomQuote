var quote1 = {
    quoteLine: '“Spread love everywhere you go. Let no one ever come to you without leaving happier.”',
    author: "-- Mother Teresa"
}
var quote2 = {
    quoteLine: '“Every artist was first an amateur.”',
    author: "-- Ralph Waldo Emerson"
}
var quote3 = {
    quoteLine: `“To create one's own world takes courage.”`,
    author: "-- Georgia O'Keeffe"
}
var quote4 = {
    quoteLine: '“Life is like riding a bicycle. To keep your balance, you must keep moving.”',
    author: "-- Albert Einstein"
}
var quote5 = {
    quoteLine: '“One thing I have learned is that I am not the owner of my talent, I am the manager of it.”',
    author: "-- Madonna"
}
var quote6 = {
    quoteLine: '“If everything was perfect you would never learn and you would never grow.”',
    author: "-- Beyonce"
}
var quote7 = {
    quoteLine: '“The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.”',
    author: "-- Unknown"
}
var quote8 = {
    quoteLine: '“Don’t be afraid to give up the good to go for the great.”',
    author: "-- John D. Rockefeller"
}
var quote9 = {
    quoteLine: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    author: "-- Albert Einstein"
}

var arr = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9]

var x = 0;
var y = y;

function addQuote() {
    var temp = ""
    x = Math.floor(Math.random() * 10)
    check()
    for (var i = 1; i <= arr.length; i++) {

        if (i == x) {

            temp = temp + `<div class=" col-lg-12 col-sm-12 py-5">
            <h1 class="pb-5"><span>Q</span>uote of the day!</h1>
            <p class="insert">Press the button below to recieve a random quote!</p>
            <button onclick="addQuote()" class="px-5 py-3 my-4 mb-5">Random Quote</button>
            <p class="quote">${arr[i - 1].quoteLine}</p>
            <p class="quote">${arr[i - 1].author}</p>
        </div>`

            document.getElementById("pTags").innerHTML = temp
            y = x
        }
    }
}

function check() {
    while ((x == y) || (x == 0)) {
        x = Math.floor(Math.random() * 10)
    }
}
