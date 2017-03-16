$(document).ready(function() {
	
var controller = new ScrollMagic.Controller();

// DEALS THE CARDS

var tween = TweenMax.staggerFromTo('.card', 1,{y: -800, x: -200}, { 
	// backgroundColor:'#D1C100',
	x: -100,
	y: 0,
	rotation: 360,
	ease: Power1.easeInOut,
	onComplete: fixed('littleCard')}, .5);


var scene = new ScrollMagic.Scene({
	triggerElement: '#trigger1', 
	duration: 1500, 
	offset: -11500 })
	.setTween(tween)
	// .addIndicators({name:"loop"})
	.addTo(controller);

// MOVES HAND ACROSS SCREEN

var tween1 = TweenMax.fromTo('#hand', 1, {x: 1500, y:400}, {
	x: -800,
	y:1000,
	rotation: -45,
	ease: Power2.easeInOut
});

var scene1 = new ScrollMagic.Scene({
	triggerElement: '#trigger2',
	duration: 1000,
	offset: -9500,})
	.setTween(tween1)
	// .addIndicators({name: "hand"})
	.addTo(controller);

// MOVES THE CARDS OFF SCREEN

	var tween2 = TweenMax.staggerTo('.card', 1, { 
	// backgroundColor:'#D1C100',
	x: -1200,
	y: 0,
	rotation: 360,
	ease: RoughEase.easeOut,
	onComplete: fixed('littleCard')}, .1);

var scene2 = new ScrollMagic.Scene({
	triggerElement: '#trigger3', 
	duration: 400, 
	offset: -9100 })
	.setTween(tween2)
	// .addIndicators({name:"loop"})
	.addTo(controller);

// BOUNCES THE CARDS UP IN YOUR HAND

var tween3 = TweenMax.staggerTo('.BigCard', 1, { 
	// backgroundColor:'#D1C100',
	x: 0,
	y: -900,
	rotation: 0,
	ease: Bounce.easeOut}, .1);

var scene3 = new ScrollMagic.Scene({
	triggerElement: '#trigger4', 
	duration: 600, 
	offset: -8100 })
	.setTween(tween3)
	// .addIndicators({name:"YourHand"})
	.addTo(controller);

	// PLAYS THE CARDS

var tween4 = TweenMax.staggerTo('.BigCard', 1, { 
	// backgroundColor:'#D1C100',
	x: 0,
	y: -1700,
	rotation: 360,
	scale: .5,
	ease: Power3.easeInOut}, 1);

var scene4 = new ScrollMagic.Scene({
	triggerElement: '#trigger5', 
	duration: 3200, 
	offset: -7100 })
	.setTween(tween4)
	// .addIndicators({name:"Play"})
	.addTo(controller);

		// MOVES CHIPS 1

var tween5 = TweenMax.staggerFromTo('.chips', 3,{opacity: 0}, { 
	// backgroundColor:'#D1C100',
	opacity: 1,
	x: 0,
	y: 1700,
	ease: Power1.easeInOut}, 1);

var scene5 = new ScrollMagic.Scene({
	triggerElement: '#trigger6', 
	duration: 1000, 
	offset: -3200 })
	.setTween(tween5)
	// .addIndicators({name:"chips"})
	.addTo(controller);

		// MOVES CHIPS 2

var tween6 = TweenMax.staggerFromTo('.chips2', 3,{opacity: 0}, { 
	// backgroundColor:'#D1C100',
	opacity: 1,
	x: 0,
	y: 1700,
	ease: Power1.easeInOut}, 1);

var scene6 = new ScrollMagic.Scene({
	triggerElement: '#trigger7', 
	duration: 1000, 
	offset: -3200 })
	.setTween(tween6)
	// .addIndicators({name:"chips"})
	.addTo(controller);

		// MOVES CHIPS 3

var tween7 = TweenMax.staggerFromTo('.chips3', 3,{opacity: 0}, { 
	// backgroundColor:'#D1C100',
	opacity: 1,
	x: 0,
	y: 1700,
	ease: Power1.easeInOut}, 1);

var scene7 = new ScrollMagic.Scene({
	triggerElement: '#trigger8', 
	duration: 1000,
	offset: -3200})
	.setTween(tween7)
	// .addIndicators({name:"chips"})
	.addTo(controller);

		// FINAL TITLE

	var tween8 = TweenMax.fromTo('#finish', 4,{opacity: 0, x: 1000, y:0}, { 
	// backgroundColor:'#D1C100',
	opacity: 1,
	x: 0,
	y: 0,
	ease: Power4.easeInOut});

	var scene8 = new ScrollMagic.Scene({
	triggerElement: '#trigger8', 
	duration: 500,
	offset: -1200})
	.setTween(tween8)
	// .addIndicators({name:"chips"})
	.addTo(controller);

});


// DOESN'T WORK FOR SOME REASON, ADDS CLASS BEFORE ANIM. IS COMPLETE
function fixed(cardSize){

	if (cardSize === 'littleCard') {

		TweenMax.set('.card', {className: '+=fixed' });

	} else if (cardSize === 'bigCard') {

		TweenMax.set('.BigCard', {className : '+=fixed'});
		
	} else alert('you dummy');

};










