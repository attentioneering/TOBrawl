const TObrawl={};
	TObrawl.brawl = {
		weaponChoice: [
			'a dead raccoon',
			'a tube sock filled with TTC tokens',
			'a flipped baseball bat',
			'trashed Leafs memorabilia',
			'a chipped CN Tower mug',
			'an old TIFF film reel',
			'a wet Drake t-shirt',
			'a FORD campaign sign',
			'a textbook from the Reference Library',
			'a Double Double',
			'John Tory (by the ankles)',
			'week-old street meat',
		],
		action: [
			'kick',
			'punch',
			'clobber',
			'pummel',
			'spank',
			'whoop',
			'smash',
			'shank',
			'beat',
			'thump',
			'pound',
			'whip',
			'slap',
			'stomp'
			],
		suburb: {
			west: [
				'Caledon',
				'Brampton',
				'Burlington',
				'Milton',
				'Mississauga',
				'Oakville',
				'Halton Hills',
			],
			north: [ 
				'Aurora',
				'Vaughan',
				'Whitchurch-Stouffville',
				'King',
				'Markham',
				'Newmarket',
				'Georgina',
				'East Gwillimbury',
				'Richmond Hill',
			],
			east: [
				'Clarington',
				'Scugog',
				'Uxbridge',
				'Brock',
				'Ajax',
				'Whitby',
				'Oshawa',
				'Pickering',
			]
		},
		quantity:[
			'heap',
			'pile',
			'jumble',
		],
		awful: [
			'hot Chinatown garbage',
			'post-flood Harbourfront swamp ass',
			'Don River',
			'CNE puke-fest',
			'sweaty subway',
			'Dundas Square hobo-wash',
			'Trinity Bellwoods dog barf',
			'bedbug infested',
			'Doug Ford',
			'unaffordable rental',
			'charity mugging',
			'Zanta',
			'contaminated cronut burger',
			'more-than-enough-to-eat-at-home',
		],
		endearment: [
			'n00bs',
			'posers',
			'yuppies',
			'hipsters',
			'hippies',
			'twat-waffles',
			'jerks',
			'gonads',
			'butt-munches',
			'turd burglars',
			'swine',
			'bastards',
		],
		effect: [
			'quake with fear',
			'flee in terror',
			'run for their lives',
			'wet their pants',
			'poof into dust',
			'call out for their moms',
			'run for the hills',
			'jump into the lake',
			'brown their shorts',
			'scream and run',
			'wimper in fear',
			'disappear completely',
			'run amok',
		]
	};
	TObrawl.randomNumber =(array)=>{
				return array[Math.floor(Math.random()* array.length)];
			};
	TObrawl.init = ()=>{
		$('form').on('submit', function(event){
			event.preventDefault();
			const userName=$('input[Name]').val().toUpperCase();
			//console.log(userName);
			const userHood=$('#userHood').val();
			//console.log(userHood);
			//creating all the random variables:
			const randomWeapon = TObrawl.randomNumber(TObrawl.brawl['weaponChoice']);
			//console.log(randomWeapon);
			const randomAction = TObrawl.randomNumber(TObrawl.brawl['action']);	
			//wanted each neighbourhood to launch suburbanites to a particular part of the GTA: Etobicoke/WestEnd will launch west, Downtown/Midtown will launch north and North York/Scarborough will launch west
			//const randomSuburb = $(randomNumber(brawl['suburb'][`${userHood}`])); rawl['suburb']['west']
			//if a pool of all suburbs was used instead.
			const GTA = $(TObrawl.brawl['suburb']['east'].concat(TObrawl.brawl['suburb']['west']).concat(TObrawl.brawl['suburb']['north']));
			const randomSuburb = TObrawl.randomNumber(GTA);
			const randomQuantity = TObrawl.randomNumber(TObrawl.brawl['quantity']);
			const randomSlam = TObrawl.randomNumber(TObrawl.brawl['awful']);
			const randomInsult = TObrawl.randomNumber(TObrawl.brawl['endearment']);
			const randomEffect = TObrawl.randomNumber(TObrawl.brawl['effect']);
			//now putting it together! 
			const introduction= `Hark! Our champion, ${userName} enters the fight! Swinging ${randomWeapon} and unleashing an ominous roar:`;
			console.log(introduction);
			$('.introduction').html(`<h4>${introduction}</h4>`);
			const battlecry = `"I will ${randomAction} you to ${randomSuburb}, you ${randomQuantity} of ${randomSlam} ${randomInsult}"`;
			console.log(battlecry);
			$('.battlecry').html(`<h3>${battlecry}</h3>`);
			const enemies =`Your Enemies ${randomEffect}!`;
			console.log(enemies);
			$('.enemies').html(`<h4>${enemies}</h4>`);
			$('.results').show();
			$('form').hide();
		});
	}

$(document).ready(function(){
	$('.results').hide();
	TObrawl.init();
});