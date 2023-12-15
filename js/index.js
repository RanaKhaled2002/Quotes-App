var x=null;
var randomNumber;
var quote = [
    {
        quote:"If you want to love others, I think you should love yourself first",
        author:"Kim Namjoon",
    },
    {
        quote:"Be yourself; everyone else is already taken",
        author:"Oscar Wilde",
    },
    {
        quote:"Those who want to look more youthful should live life with a young heart",
        author:"Kim Seokjin",
    },
    {
        quote:"So many books, so little time",
        author:"Frank Zappa",
    },
    {
        quote:"Future's Gonna Be Okay",
        author:"Min Yoongi",
    },
    {
        quote:"Be the change that you wish to see in the world",
        author:"Mahatma Gandhi",
    },
    {
        quote:"You never know the value of what you have until you lose it",
        author:"Jung Hoseok",
    },
    {
        quote:"If you tell the truth, you don't have to remember anything",
        author:"Mark Twain",
    },
    {
        quote:"Never give up on a dream that you've been chasing almost your whole life",
        author:"Park Jimin",
    },
    {
        quote:"Live as if you were to die tomorrow. Learn as if you were to live forever",
        author:"Mahatma Gandhi",
    },
    {
        quote:"Forget what hurt you but never forget what it taught you",
        author:"Kim Taehyung",
    },
    {
        quote:"You only live once, but if you do it right, once is enough",
        author:"Mae West",
    },
    {
        quote:"Don't do anything you don't like to do",
        author:"Jeon Jungkook",
    },
    {
        quote:"A room without books is like a body without a soul",
        author:"Marcus Tullius Cicero",
    },
    {
        quote:"To live is the rarest thing in the world. Most people exist, that is all",
        author:"Oscar Wilde",
    },
    {
        quote:"Be an island, but build bridges, not walls",
        author:"Seanan McGuire",
    },
];
function quotes()
{
    randomNumber = Math.floor(Math.random() * quote.length)
    if(randomNumber!=x)
    {
        document.getElementById("quote").innerHTML = quote[randomNumber].quote
        document.getElementById("author").innerHTML = quote[randomNumber].author
        console.log(quote[randomNumber].quote);
        x=randomNumber;
    }
    else
    {
        randomNumber=0;
    }
}
