var twentyfiveClicks = 0;
var tenClicks = 0;
var numberClicks = 0;
var timesDisplayed = 0;
var imageObjectArray = [];

function ImageDataConstructor (image, filePath){
  this.image = image;
  this.filePath = filePath;
  this.numberImageAppearance = 0;
  this.numberClicks = 0;
  ImageDataConstructor.prototype.displayIncrementor = function(){
    this.numberImageAppearance++;
  };

  ImageDataConstructor.prototype.clickIncrementor = function(){
    this.numberClicks++;
  };
}

var bag = new ImageDataConstructor('bag', 'img/bag.jpg');
var banana = new ImageDataConstructor('banana', 'img/banana.jpg');
var bathroom = new ImageDataConstructor('bathroom', 'img/bathroom.jpg');
var boots = new ImageDataConstructor('boots', 'img/boots.jpg');
var breakfast = new ImageDataConstructor('breakfast', 'img/breakfast.jpg');
var bubblegum = new ImageDataConstructor('bubblegum', 'img/bubblegum.jpg');
var chair = new ImageDataConstructor('chair', 'img/chair.jpg');
var cthulhu = new ImageDataConstructor('cthulhu', 'img/cthulhu.jpg');
var dogDuck = new ImageDataConstructor('dogDuck', 'img/dog-duck.jpg');
var dragon = new ImageDataConstructor('dragon', 'img/dragon.jpg');
var pen = new ImageDataConstructor('pen', 'img/pen.jpg');
var petSweep = new ImageDataConstructor('petSweep', 'img/pet-sweep.jpg');
var scissors = new ImageDataConstructor('scissors', 'img/scissors.jpg');
var shark = new ImageDataConstructor('shark', 'img/shark.jpg');
var sweep = new ImageDataConstructor('sweep', 'img/sweep.png');
var tauntaun = new ImageDataConstructor('tauntaun', 'img/tauntaun.jpg');
var unicorn = new ImageDataConstructor('unicorn', 'img/unicorn.jpg');
var usb = new ImageDataConstructor('usb', 'img/usb.gif');
var waterCan = new ImageDataConstructor('waterCan', 'img/water-can.jpg');
var wineGlass = new ImageDataConstructor('wineGlass', 'img/wine-glass.jpg');
console.log('Holo. Constructor and variables okay?');

imageObjectArray.push(bag);
imageObjectArray.push(banana);
imageObjectArray.push(bathroom);
imageObjectArray.push(boots);
imageObjectArray.push(breakfast);
imageObjectArray.push(bubblegum);
imageObjectArray.push(chair);
imageObjectArray.push(cthulhu);
imageObjectArray.push(dogDuck);
imageObjectArray.push(dragon);
imageObjectArray.push(pen);
imageObjectArray.push(petSweep);
imageObjectArray.push(scissors);
imageObjectArray.push(shark);
imageObjectArray.push(sweep);
imageObjectArray.push(tauntaun);
imageObjectArray.push(unicorn);
imageObjectArray.push(usb);
imageObjectArray.push(waterCan);
imageObjectArray.push(wineGlass);

console.log('holo. Was I able to get the images into an array?');

function clickerData(event){
  console.log('firing clickerData');
  numberClicks++;
  if (numberClicks < 3){
    var currentImageId = event.threeImages.class;
    for(var i = 0; i < imageDataArray.length; i++){
      if (currentImageId === imageDataArray[i].name){
        imageDataArray[i].numberClicks++;
        break;
      }
    }
  }
}

function displayImages(){
  var randomImage1 = Math.floor((Math.random() * 19) + 1);
  var randomImage2 = Math.floor((Math.random() * 19) + 1);
  var randomImage3 = Math.floor((Math.random() * 19) + 1);
  var firstImage = document.getElementById('imageOne');
  var secondImage = document.getElementById('imageTwo');
  var thirdImage = document.getElementById('imageThree');
  console.log('Working thru displayImages variables?');
  firstImage.setAttribute('src', imageObjectArray[randomImage1].filePath);
  secondImage.setAttribute('src', imageObjectArray[randomImage2].filePath);
  thirdImage.setAttribute('src', imageObjectArray[randomImage3].filePath);
  console.log('setAttribute working?');
  firstImage.addEventListener('click', clickerData);
  secondImage.addEventListener('click', clickerData);
  thirdImage.addEventListener('click', clickerData);
  var threeImageDiv = document.getElementById('threeImages');
  console.log('clickImage variables working?');
  threeImageDiv.appendChild(imageObjectArray[0]);
  threeImageDiv.appendChild(imageObjectArray[1]);
  threeImageDiv.appendChild(imageObjectArray[2]);
  threeImageDiv.textContent = '';
  console.log('sending back to HTML ok?');
}
console.log('It is early Friday, and not awake. Working?');

//function clickImage(){

  //1. create an image element
  //2. set the id (or class?) attribute of the image element to the desired object's name property
  //3.set the src attribute of the image to the desired object's source or path or source property
  //4. add a click event listener to your image element
  //5. append your image element to the desired div

  /*var postImageArray = displayImages();
  var threeImageDiv = document.getElementById('threeImages');
  console.log('clickImage variables working?');
  threeImageDiv.appendChild(postImageArray[0]);
  threeImageDiv.appendChild(postImageArray[1]);
  threeImageDiv.appendChild(postImageArray[2]);
  threeImageDiv.textContent = '';
  console.log('sending back to HTML ok?');
}*/

displayImages();
clickImage();

/*var imageObjectArray = [];
var clicks = 0;
var bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, tauntaun, unicorn, usb, waterCan, wineGlass;
var numberClicked = 0;
var imageDataArray = [];

function ImageConstructor(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.numberDisplayed = 0;
  this.numberClicked = 0;
  /*imageObjectArray.push(this); could do this instead of all pushes below
  SurvayImage.prototype.createImageEl = function(){
    var imgEl = document.createElement('img');
    imgEl.setAttribute('id', this.name);
    imgEl.setAttribute('src', this.src);
    imgEl.addEventListener('click', eventHandler);
    this.timesDisplayed++;
    totalDisplayed++;
    return imgEl;
  };

ImageConstructor.prototype.displayIncrementor = function(){
  this.numberDisplayed++;
};

ImageConstructor.prototype.clickIncrementor = function(){
  this.numberClicked++;
};

bag = new ImageConstructor('bag', 'img/bag.jpg');
banana = new ImageConstructor('banana', 'img/banana.jpg');
bathroom = new ImageConstructor('bathroom', 'img/bathroom.jpg');
boots = new ImageConstructor('boots', 'img/boots.jpg');
breakfast = new ImageConstructor('breakfast', 'img/breakfast.jpg');
bubblegum = new ImageConstructor('bubblegum', 'img/bubblegum.jpg');
chair = new ImageConstructor('chair', 'img/chair.jpg');
cthulhu = new ImageConstructor('cthulhu', 'img/cthulhu.jpg');
dogDuck = new ImageConstructor('dogDuck', 'img/dog-duck.jpg');
dragon = new ImageConstructor('dragon', 'img/dragon.jpg');
pen = new ImageConstructor('pen', 'img/pen.jpg');
petSweep = new ImageConstructor('petSweep', 'img/pet-sweep.jpg');
scissors = new ImageConstructor('scissors', 'img/scissors.jpg');
shark = new ImageConstructor('shark', 'img/shark.jpg');
sweep = new ImageConstructor('sweep', 'img/sweep.png');
tauntaun = new ImageConstructor('tauntaun', 'img/tauntaun.jpg');
unicorn = new ImageConstructor('unicorn', 'img/unicorn.jpg');
usb = new ImageConstructor('usb', 'img/usb.gif');
waterCan = new ImageConstructor('waterCan', 'img/water-can.jpg');
wineGlass = new ImageConstructor('wineGlass', 'img/wine-glass.jpg');

imageObjectArray.push(bag);
imageObjectArray.push(banana);
imageObjectArray.push(bathroom);
imageObjectArray.push(boots);
imageObjectArray.push(breakfast);
imageObjectArray.push(bubblegum);
imageObjectArray.push(chair);
imageObjectArray.push(cthulhu);
imageObjectArray.push(dogDuck);
imageObjectArray.push(dragon);
imageObjectArray.push(pen);
imageObjectArray.push(petSweep);
imageObjectArray.push(scissors);
imageObjectArray.push(shark);
imageObjectArray.push(sweep);
imageObjectArray.push(tauntaun);
imageObjectArray.push(unicorn);
imageObjectArray.push(usb);
imageObjectArray.push(waterCan);
imageObjectArray.push(wineGlass);

function clickerData(event){
  console.log('firing clickerData');
  numberClicked++;
  if (numberClicked < 3){
    var currentImageId = event.target.id;
    for(var i = 0; i < imageDataArray.length; i++){
      if (currentImageId === imageDataArray[i].name){
        imageDataArray[i].numberClicked++;
        break;
      }
    }
    loadImage();
  }
}
/*function handleSurvayImageClick(event){
  totalClicked++;
  if (totalClicked < 5){
    var currentImageId = event.target.id;
    for(var i = 0; i < survayImageData.length; i++){
      if (currentImageId === survayImageData[i].name){
        survayImageData[i].timesClicked++;
        break;
      }
    }
    displayThreeImages();
  } else {
    displayBarChart();
  }
}

function displayBarChart(){

}

//functions to display the data. Manipulate the dom. Random number.
function loadImage(){
  var randomImage1 = Math.floor((Math.random() * 19) + 1);
  var randomImage2 = Math.floor((Math.random() * 19) + 1);
  var randomImage3 = Math.floor((Math.random() * 19) + 1);

  // create three image tags
  // add them to the div with id="threeImages"

  // create an image tag
  var imageOne = document.createElement('img');
  var imageTwo = document.createElement('img');
  var imageThree = document.createElement('img');
  // set its src attribute to a random image objects file path
  imageOne.setAttribute('src', imageObjectArray[randomImage1].filePath);
  imageTwo.setAttribute('src', imageObjectArray[randomImage2].filePath);
  imageThree.setAttribute('src', imageObjectArray[randomImage3].filePath);
  imageOne.addEventListener('click', clickerData);
  imageTwo.addEventListener('click', clickerData);
  imageThree.addEventListener('click', clickerData);
  // append the image to the page
//put counter here? Maybe the eventListener?
  return [imageOne, imageTwo, imageThree];
};

function clickImage(){
  var postImageArray = loadImage();
  var threeImageDiv = document.getElementById('three-images');
  threeImageDiv.appendChild(postImageArray[0]);
  threeImageDiv.appendChild(postImageArray[1]);
  threeImageDiv.appendChild(postImageArray[2]);
  threeImageDiv.textContent = '';

  for(var i = 0; i < imageObjectArray.length; i++){
    filename = imageObjectArray[i];
    filePath = imageObjectArray[i];
    imageObjectArray.push(new ImageConstructor(name, filePath));
  }
}
  //postImage.appendChild[1];
  //postImage.appendChild[2];}

      //function ButtonConstructor(buttonName, buttonFilePath){
        //this.buttonName = buttonName;
      //  this.buttonFilePath = buttonFilePath;

//tenMoreClicks = new ButtonConstructor ('tenMoreClicks', //'image/htmlButton.jpeg');
//giveMeData = new ButtonConstructor ('giveMeData', //'image/htmlButton.jpeg');

loadImage();
clickImage();
/*var filePaths = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var survayImageData = [];
var totalClicked = 0;
var totalDisplayed = 0;

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function SurvayImage(name, src){
  this.name = name;
  this.src = src;
  this.timesClicked = 0;
  this.timesDisplayed = 0;
}

SurvayImage.prototype.createImageEl = function(){
  var imgEl = document.createElement('img');
  imgEl.setAttribute('id', this.name);
  imgEl.setAttribute('src', this.src);
  imgEl.addEventListener('click', eventHandler);
  this.timesDisplayed++;
  totalDisplayed++;
  return imgEl;
};

function getThreeImageIndexes(){
  var randomIndexOne = getRandomIntInclusive(0, survayImageData.length - 1);

  var randomIndexTwo = randomIndexOne;
  while (randomIndexTwo === randomIndexOne){
    randomIndexTwo = getRandomIntInclusive(0, survayImageData.length - 1);
  }

  var randomIndexThree = randomIndexOne;
  while (randomIndexThree === randomIndexOne || randomIndexThree === randomIndexOne){
    randomIndexThree = getRandomIntInclusive(0, survayImageData.length - 1);
  }

  return [randomIndexOne, randomIndexTwo, randomIndexThree];
}

function handleSurvayImageClick(event){
  totalClicked++;
  if (totalClicked < 5){
    var currentImageId = event.target.id;
    for(var i = 0; i < survayImageData.length; i++){
      if (currentImageId === survayImageData[i].name){
        survayImageData[i].timesClicked++;
        break;
      }
    }
    displayThreeImages();
  } else {
    displayBarChart();
  }
}

function displayBarChart(){

}

function displayThreeImages(){
  var threeImageIndexes = getThreeImageIndexes();
  // get access to the survay-image-container
  var survayImageContainer = document.getElementById('survay-image-container');
  // clear it
  survayImageContainer.textContent = '';

  // create three images
  var survayImageOne = survayImageData[threeImageIndexes[0]];
  var survayImageTwo = survayImageData[threeImageIndexes[1]];
  var survayImageThree = survayImageData[threeImageIndexes[2]];
  var imageElOne = survayImageOne(handleSurvayImageClick);
  var imageElTwo = survayImageTwo.createImageEl(handleSurvayImageClick);
  var imageElThree = survayImageThree.createImageEl(handleSurvayImageClick);

  // put them on the survay image container
  survayImageContainer.appendChild(imageElOne);
  survayImageContainer.appendChild(imageElTwo);
  survayImageContainer.appendChild(imageElThree);
}

for(var i = 0; i <.length; i++){
  filename = filePaths[i].split('/')[1].split('.')[0];
  filePath = filePaths[i];
  .push(new SurvayImage(filename, filePath));
}

displayThreeImages();*/
