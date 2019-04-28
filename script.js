// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

var ifunend = true;
var QIDchosen = [false, false, false]; 
var CHOIchosen = [null, null, null];
const choiceG = document.querySelectorAll('.choice-grid div');
const restartB = document.querySelector('.restart-button');
const Qresult = document.querySelector('.result');

choiceG.forEach( val => {
  val.addEventListener('click',Gclick);
} )

restartB.addEventListener('click',refresh);

/*for (const val of choiceG){ //let i=0;i<choiceG.length;i++
	val.addEventListener('click',Gclick); //choiceG[i].addEventListener('click',Gclick);
}*/

const map = {
	one:0,
	two:1,
	three:2,
}

function Gclick (e) {
	if ( !ifunend ) return;
	const QID = e.currentTarget.dataset.questionId;
	for ( const item of choiceG ) {
		if(item.dataset.questionId === QID){
			item.classList.remove('selected');
			item.classList.add('unselected');
			const CB = item.querySelector('.checkbox');
			CB.src = 'images/unchecked.png';
		}
	}
	e.currentTarget.classList.remove('unselected');
	e.currentTarget.classList.add('selected');
	const checkB = e.currentTarget.querySelector('.checkbox'); //img:lastChild
	checkB.src = 'images/checked.png';
	CHOIchosen[map[QID]] = e.currentTarget.dataset.choiceId;
	QIDchosen[map[QID]] = true; 
	if ( !QIDchosen.includes(false) ) {
		ifunend = false;
		let result;
		if( CHOIchosen[1] === CHOIchosen[2] ) result = CHOIchosen[1];
		else result = CHOIchosen[0];
		Qresult.classList.remove('hidden');
		Qresult.childNodes[1].textContent = 'You got: ' + RESULTS_MAP[result].title;
		Qresult.childNodes[3].textContent = RESULTS_MAP[result].contents;
	}
}

function refresh (e) {
	Qresult.classList.add('hidden');
	ifunend = true;
	QIDchosen = [false, false, false]; 
	CHOIchosen = [null, null, null];
	choiceG.forEach( val => {
		val.classList.remove('selected');
		val.classList.remove('unselected');
		const checkB = val.querySelector('.checkbox');
		checkB.src = 'images/unchecked.png';
	} )
	document.body.scrollIntoView();
}



