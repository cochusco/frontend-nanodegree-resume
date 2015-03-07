
/*
var bio = {
	"name":firstName,
	"role":role,
	"contactInfo": ["cochusco@gmail.com","23433333","twitter"],
	"pictureURL": "images/fry.jpg" ,
	"welcomeMessage": "Welcome to my page",
	"skills":["java" , "wen developer" , "a bit android and ios"] 

};*/

var bio = {
	"name":"Josue Martinez",
	"role":"Web Developer",
	"contacts": {
		"mobile": "650-555-5555" ,
		"email" : "john@example.com",
		"github" : "johndoe",
		"twitter" : "@johndoe",
		"location" : "Madrid"
	},
	"welcomeMessage" : "lorem ipsum dolor sit amet etc etc etc.",
	"skills" : ["awesomenes" , "delivering things"  ,"cryogenic sleep","saving the universe"],
	"bioPic": "images/fry.jpg"
} ;



var education = {
		"schools" : [
			{
				"name":"Sagrado Corazon", "location":"Madrid", "degree" : "EGB" , "majors":["fisica" , "biologia"] , "dates" : 1995 , "url" : "http://www.madrid.corazonistas.com/"
			},
			{
				"name":"Ramiro de Maeztu", "location":"Madrid", "degree" : "BUP" , "majors":["matematicas" , "ingles"] , "dates" : 1997 , "url" : "http://www.educa.madrid.org/web/ies.ramirodemaeztu.madrid"
			}
			],
		"onlineCourses": [
			{
				"title":"aplicaciones seguras" ,
				"school":"autonomo" ,
				"date": 2005 ,
				"url": "aplicacionesseguras.com" 
			},
			{
				"title":"modelado SQL" ,
				"school":"IE" ,
				"date": 2007 ,
				"url": "slqcourses.com" 
			},
			{
				"title":"UML" ,
				"school":"IE" ,
				"date": 2010 ,
				"url": "learnunml.org" 
			}

		]
		
	} ;



var work = {
	"jobs" : [
		{
			"employer": "Planet Express" ,
     		"title": "Pizza boy"  ,
    	    "location": "roma" , 
    		"dates": "2000-2002" ,
     		"description": "Who moved my cheese cheesecake stinking bishop. Dolcelatte danish fontina dolcelatte camembert de normandie airedale goat pecorino brie. Mozzarella cauliflower cheese chalk and cheese cheddar smelly cheese say cheese who moved my cheese blue castello. Cheddar smelly cheese cheese triangles brie pecorino jarlsberg stinking bishop cheese and biscuits. Danish fontina blue castello bavarian bergkase blue castello." 
		},
		{
			"employer": "Pollos Hermanos"  ,
     		"title": "Delivery manager"  ,
    	    "location": "New Mexico" , 
    		"dates": "2002-2004" ,
     		"description": "Everyone loves feta. Say cheese cream cheese rubber cheese fromage boursin chalk and cheese airedale mascarpone. Hard cheese roquefort pepper jack emmental red leicester queso paneer mozzarella. Bavarian bergkase airedale stinking bishop who moved my cheese."
		},
	],
	"display" : null

} ;

var projects = [
	{
		"title": "The internet box" ,
		"dates": "2000" ,
		"description": "Queso babybel camembert de normandie danish fontina halloumi. Brie cheese and biscuits say cheese. Blue castello chalk and cheese stinking bishop camembert de normandie bavarian bergkase goat feta cheese triangles. Cut the cheese melted cheese cheesy grin cheese on toast squirty cheese hard cheese macaroni cheese gouda. Melted cheese cheese and biscuits lancashire taleggio the big cheese." ,
	    "images": ["http://d4c027c89b30561298bd-484902fe60e1615dc83faa972a248000.r12.cf3.rackcdn.com/imagepicker/21974/internet-box-it-crowd_1.jpg" , "http://www.kissmybit.com/wp-content/uploads/2012/03/The-IT-Crowd-the-it-crowd-20584011-760-505.jpg"] 
	},
	{
		"title": "Sample ployect " ,
		"dates": "2000-2005" ,
		"description": "Rubber cheese airedale halloumi. Fromage boursin roquefort the big cheese paneer parmesan the big cheese ricotta. Cottage cheese taleggio airedale cheese slices cheeseburger squirty cheese bocconcini lancashire. Ricotta babybel who moved my cheese cheesy feet croque monsieur." ,
	    "images": ["http://prancercise.com/wp-content/uploads/2013/07/book-larger.jpg"] 

	}
];



var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// capitalice firt letter of the name an all surname
function inName(){
	var name = bio.name ;
	console.log("inNme"  +  name);
	var nameCpy = [];
	var words = name.split(" ") ;
	console.log("1");
	nameCpy.push(words[0][0].toUpperCase() + words[0].slice(1).toLowerCase());
	// for more than one surname
	for (var i =1 ; i < words.length ; i ++){
		nameCpy.push(words[i].toUpperCase());
	}
	return nameCpy.join(" ") ;
}

$("#main").append(internationalizeButton);
// var internationalizeButton = '<button>Internationalize</button>';



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


// var formattedContactGeneric = HTMLcontactGeneric.replace("%data%",);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
// var formattedblog = HTMLblog.replace("%data%",);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var contactArr =[formattedMobile , formattedEmail ,formattedTwitter , formattedGithub ,formattedLocation];

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);



$("#topContacts").append(contactArr);
$("#header").append([formattedBioPic,formattedWelcomeMsg]);
if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var allFormattedHTMLskills ="";
	for (var i in bio.skills){
		allFormattedHTMLskills = allFormattedHTMLskills + HTMLskills.replace("%data%", bio.skills[i]);
	}
	$("#skills").append(allFormattedHTMLskills);
	$("#skills").css("flex-direction","column") // I had to do this because the defaul layout is row , and so is showed
}
 
$(document).click(function(loc) {
  	console.log(loc.target);
  	console.log(loc.relatedTarget);
  	console.log(loc.pageX);
  	console.log(loc.pageY);
  	console.log(loc.which);
  	console.log(loc.metaKey);  	
});

function displayWork(){
	$("#workExperience").append(HTMLworkStart);
	for (var job in work.jobs) {
		var workItem =  HTMLworkEmployer.replace( "%data%" ,  work.jobs[job].employer  ) + HTMLworkTitle.replace("%data%" , work.jobs[job].title) + HTMLworkDates.replace( "%data%" , work.jobs[job].dates ) + HTMLworkLocation.replace( "%data%" , work.jobs[job].location ) + HTMLworkDescription.replace( "%data%" , work.jobs[job].description ) ;		
	 	$(".work-entry:last").append(workItem); 	
	} ;
}

displayWork();


$("#projects").append(HTMLprojectStart);
for (var project in projects) {
	var projectItem =  HTMLprojectTitle.replace( "%data%" ,  projects[project].title  ) + HTMLprojectDates.replace("%data%" , projects[project].dates) + HTMLprojectDescription.replace( "%data%" , projects[project].description )    ;		
	for (var image in projects[project].images){			
			projectItem =  projectItem + HTMLprojectImage.replace( "%data%" , projects[project].images[image]) ;
	}
 	$(".project-entry:last").append(projectItem); 	
} ;



function locationizer(workObjt){
	var locations = [];
	for(var job in workObjt.jobs){
		locations.push(workObjt.jobs[job].location);
	}
	return locations ;
}
/*

var work = {
	"jobs" : [
		{
			"employer": "Planet Express" ,
     		"title": "Pizza boy"  ,
    	    "location": "roma" , 
    		"dates": "2000-2002" ,
     		"description": "Who moved my cheese cheesecake stinking bishop. Dolcelatte danish fontina dolcelatte camembert de normandie airedale goat pecorino brie. Mozzarella cauliflower cheese chalk and cheese cheddar smelly cheese say cheese who moved my cheese blue castello. Cheddar smelly cheese cheese triangles brie pecorino jarlsberg stinking bishop cheese and biscuits. Danish fontina blue castello bavarian bergkase blue castello." 
		},
		{
			"employer": "Pollos Hermanos"  ,
     		"title": "Delivery manager"  ,
    	    "location": "New Mexico" , 
    		"dates": "2002-2004" ,
     		"description": "Everyone loves feta. Say cheese cream cheese rubber cheese fromage boursin chalk and cheese airedale mascarpone. Hard cheese roquefort pepper jack emmental red leicester queso paneer mozzarella. Bavarian bergkase airedale stinking bishop who moved my cheese."
		},
	],
	"display" : null

} ;




var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var projects = [
	{
		"title": "The internet box" ,
		"dates": "2000" ,
		"description": "Queso babybel camembert de normandie danish fontina halloumi. Brie cheese and biscuits say cheese. Blue castello chalk and cheese stinking bishop camembert de normandie bavarian bergkase goat feta cheese triangles. Cut the cheese melted cheese cheesy grin cheese on toast squirty cheese hard cheese macaroni cheese gouda. Melted cheese cheese and biscuits lancashire taleggio the big cheese." ,
	    "images": ["http://d4c027c89b30561298bd-484902fe60e1615dc83faa972a248000.r12.cf3.rackcdn.com/imagepicker/21974/internet-box-it-crowd_1.jpg" , "http://www.kissmybit.com/wp-content/uploads/2012/03/The-IT-Crowd-the-it-crowd-20584011-760-505.jpg"] 
	},
	{
		"title": "Sample ployect " ,
		"dates": "2000-2005" ,
		"description": "Rubber cheese airedale halloumi. Fromage boursin roquefort the big cheese paneer parmesan the big cheese ricotta. Cottage cheese taleggio airedale cheese slices cheeseburger squirty cheese bocconcini lancashire. Ricotta babybel who moved my cheese cheesy feet croque monsieur." ,
	    "images": ["http://prancercise.com/wp-content/uploads/2013/07/book-larger.jpg"] 

	}
];

*/