
let url1 = "https://api.wordnik.com/v4/word.json/";
let word = "happy";
let url2 = "/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"

let link;

var bubble = [];
var font;
var lines;

var button;

function preload() {
    font = loadFont('fonts/AdobeSongStd-Light.otf');
  }


function setup() {
  createCanvas(windowWidth,windowHeight);
  textFont(font,30);
  textAlign(CENTER);
  lines = ["DAILY MOOD","Today is ","a","day!"];

  link = select('#word');
  //link.mouseClicked(askWordnik);

  button = createButton('😂😂😂😂😂');
  button.position (width/2-20,500);

  button.mousePressed(askWordnik);

}

function askWordnik() {
  loadJSON(url1 + word + url2, gotData);
}

function gotData(data) {
  if (data.length === 0) {
    createP('no related words');
  } else {
    let index1 = floor(random(0, data.length));
    let index2 = floor(random(0, data[index1].words.length));
    word = data[index1].words[index2];
    link.html(word);
  }
}

function draw(){
  background(211, 219, 232);
    text(lines[0],width/2,90);
    text(lines[1],width/2,175);
    text(lines[2],width/2,220);
    text(word,width/2,265);
    text(lines[3],width/2,310);
  }
