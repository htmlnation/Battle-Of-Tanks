const CUBESIZE = 50;
const PX = 'px';
const CHARACTER = 1;
const ROTATESPEED = 20;
//Limits
var LBOTTOM = 0;
var LRIGHT = 0;
var LLEFT = 0;
var LTOP = 0;

var cubeStyle00 = new CubeStyle(
	CUBESIZE, 
	'resources/scenario/grass00.jpg',
	'',
	'',
	'',
	'',
	'',
	);

var characterStyle00 = new CubeStyle(
	CUBESIZE, 
	'./resources/chicken-front.png',
	'./resources/chicken-back.png',
	'./resources/chicken-top.png',
	'./resources/chicken-bottom.png',
	'./resources/chicken-right.png',
	'./resources/chicken-left.png',
	);

var brickStyle00 = new CubeStyle(
	CUBESIZE, 
	'./resources/scenario/brick00.jpg',
	'./resources/scenario/brick00.jpg',
	'./resources/scenario/brick00.jpg',
	'./resources/scenario/brick00.jpg',
	'./resources/scenario/brick00.jpg',
	'./resources/scenario/brick00.jpg',
	);

var concreteStyle00 = new CubeStyle(
	CUBESIZE, 
	'./resources/scenario/concrete00.jpg',
	'./resources/scenario/concrete00.jpg',
	'./resources/scenario/concrete00.jpg',
	'./resources/scenario/concrete00.jpg',
	'./resources/scenario/concrete00.jpg',
	'./resources/scenario/concrete00.jpg',
	);

var cubeStyles = {};
cubeStyles['G'] = cubeStyle00;
cubeStyles['C'] = characterStyle00;
cubeStyles['B'] = brickStyle00;
cubeStyles['O'] = concreteStyle00;