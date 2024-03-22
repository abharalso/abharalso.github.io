const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText="It was 78 fahrenheit outside, so :insertx: went for a skip. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Rodrigo saw the whole thing, but was not surprised — :insertx: weighs 500 pounds, and it was a lukewarm evening.";
const insertX=["Louise Belcher","Zombie Dad","Mr. Green Bean"];
const insertY=["the creaky staircase","the Spanish Steps","Mars"];
const insertZ=["ate just 2 french fries","fell down the street grate","became a vanlifer"];

randomize.addEventListener('click', result);

function result() {
	let newStory=storyText;
	const itemX=randomValueFromArray(insertX);
	const itemY=randomValueFromArray(insertY);
	const itemZ=randomValueFromArray(insertZ);
	newStory=newStory.replaceAll(":insertx:",itemX);
	newStory=newStory.replaceAll(":inserty:",itemY);
	newStory=newStory.replaceAll(":insertz:",itemZ);
  if(customName.value !== '') {
    const name = customName.value;
	newStory=newStory.replaceAll("Rodrigo",name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(500/14)+" stone";
    const temperature =  Math.round((78-32)*(5/9))+" centigrade";
	newStory=newStory.replaceAll("500 pounds",weight);
	newStory=newStory.replaceAll("78 fahrenheit", temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}