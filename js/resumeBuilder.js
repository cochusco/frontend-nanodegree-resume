
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
	"name":"Josue",
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
     		"title": "lobby boy"  ,
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

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';



$("#topContacts").append(contactArr);
$("#header").append([formattedBioPic,formattedWelcomeMsg]);
$("#header").append(HTMLskillsStart);
var allFormattedHTMLskills ="";
for (var i in bio.skills){
	allFormattedHTMLskills = allFormattedHTMLskills + HTMLskills.replace("%data%", bio.skills[i]);
}
$("#skills").append(allFormattedHTMLskills);





	