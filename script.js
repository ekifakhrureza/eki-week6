var body = document.body;

// div class wrapper(parent: body)
var wrapper = document.createElement('div');
wrapper.setAttribute('class', 'wrapper');
body.appendChild(wrapper);

// div class menu (parent: wrapper)
var menu = document.createElement('div');
menu.setAttribute('class', 'menu');
wrapper.appendChild(menu);

// nav class nav (parent: menu)
var navmenu = document.createElement('nav');
navmenu.setAttribute('class', 'nav');
menu.appendChild(navmenu);

// ul (parent: navmenu)
var ulnavmenu = document.createElement('ul');
navmenu.appendChild(ulnavmenu);

// center (parent: ulnavmenu)
var centerulnavmenu = document.createElement('center');
ulnavmenu.appendChild(centerulnavmenu);

// li (parent: centerulnavmenu)
var licenter = document.createElement('li');
centerulnavmenu.appendChild(licenter);

// li2 (parent: centerulnavmenu)
var licenter2 = document.createElement('li');
centerulnavmenu.appendChild(licenter2);

// li3 (parent: centerulnavmenu)
var licenter3 = document.createElement('li');
centerulnavmenu.appendChild(licenter3);

// li4 (parent: centerulnavmenu)
var licenter4 = document.createElement('li');
centerulnavmenu.appendChild(licenter4);




// a (parent: licenter)
var alicenter = document.createElement('a');
alicenter.setAttribute('href', '#profile');
licenter.appendChild(alicenter);
alicenter.innerHTML='Profile';

// a2 (parent: licenter2)
var alicenter2 = document.createElement('a');
alicenter2.setAttribute('href', '#expertise');
licenter2.appendChild(alicenter2);
alicenter2.innerHTML='Expertise';

// a3 (parent: licenter3)
var alicenter3 = document.createElement('a');
alicenter3.setAttribute('href', '#experience');
licenter3.appendChild(alicenter3);
alicenter3.innerHTML='Experience';

// a4 (parent: licenter4)
var alicenter4 = document.createElement('a');
alicenter4.setAttribute('href', '#education');
licenter4.appendChild(alicenter4);
alicenter4.innerHTML='Education';



// hr (parent: menu)
var hrmenu = document.createElement('hr');
wrapper.appendChild(hrmenu);

// div class header (parent: wrapper)
var header = document.createElement('div');
header.setAttribute('class', 'header');
wrapper.appendChild(header);

// div class wrap (parent: wrapper)
var wrap = document.createElement('div');
wrap.setAttribute('class', 'wrap');
wrapper.appendChild(wrap);

// div class footer (parent: wrapper)
var footer = document.createElement('div');
footer.setAttribute('class', 'footer');
wrapper.appendChild(footer);

// h1 (parent: header)
var h1header = document.createElement('h1');
header.appendChild(h1header);

// span (parent: h1)
var spanh1 = document.createElement('span');
h1header.appendChild(spanh1);
spanh1.innerHTML="Portfolio Maker";

// h4 (parent: header)
var h4header = document.createElement('h4');
header.appendChild(h4header);
h4header.innerHTML="Create Your Portfolio Below !";

// hr (parent: header)
var hrheader = document.createElement('hr');
header.appendChild(hrheader);


///////////////////////////////MENU1 PROFILE

// div class main-content (parent : wrap)
var main_content = document.createElement('div');
main_content.setAttribute('class', 'main-content');
main_content.setAttribute('id', 'mc');
wrap.appendChild(main_content);

// div class profile (parent : main_content)
var profile = document.createElement('div');
profile.setAttribute('id', 'profile');
profile.setAttribute('class', 'sidebar-left');
main_content.appendChild(profile);

// h2 (parent: profile)
var h2profile = document.createElement('h2');
profile.appendChild(h2profile);
h2profile.innerHTML='Profile';

// div class sidebar-right (parent : main_content)
var sidebar_right = document.createElement('div');
sidebar_right.setAttribute('class', 'sidebar-right');
sidebar_right.setAttribute('id', 'sr');
main_content.appendChild(sidebar_right);


//p name
var psbr = document.createElement('p');
psbr.setAttribute('id', 'psbr');
psbr.setAttribute('onclick', 'nameForm()');
sidebar_right.appendChild(psbr);
psbr.innerHTML='Name : Click To Edit';

//change name
function nameForm() {
    var name = prompt("Name: ");
    	
		if (name != '' && name != null) {
		document.getElementById("psbr").innerHTML =
        "Name : " + name + "";
		}
	
}



//p tgl
var tglsbr = document.createElement('p');
tglsbr.setAttribute('id', 'tglsbr');
tglsbr.setAttribute('onclick', 'tglForm()');
sidebar_right.appendChild(tglsbr);
tglsbr.innerHTML='Age &nbsp&nbsp&nbsp: Click To Edit';

//change age
function tglForm() {
    var dateBirth = '';

	while(dateBirth == '' || isNaN(dateBirth)){
            dateBirth = prompt('Enter a number!');
			document.getElementById("tglsbr").innerHTML =
			"Age &nbsp&nbsp&nbsp: Click To Edit";
        }
	if (dateBirth != '' && dateBirth != null) {
		document.getElementById("tglsbr").innerHTML =
        "Age &nbsp&nbsp&nbsp: " + dateBirth + "";
		}
		
			
}



//p email
var emailsbr = document.createElement('p');
emailsbr.setAttribute('id', 'emailsbr');
emailsbr.setAttribute('onclick', 'emailForm()');
sidebar_right.appendChild(emailsbr);
emailsbr.innerHTML='Email : Click To Edit';


//change email
function emailForm() {
    var email = prompt("Email: ");
  
		if (email != '' && email != null) {
		document.getElementById("emailsbr").innerHTML =
        "Email : " + email + "";
		}
}



//p phone
var phonesbr = document.createElement('p');
phonesbr.setAttribute('id', 'phonesbr');
phonesbr.setAttribute('onclick', 'phoneForm()');
sidebar_right.appendChild(phonesbr);
phonesbr.innerHTML='Phone : Click To Edit';


//change phone
function phoneForm() {
    var phone = '';
    while(phone == '' || isNaN(phone)){
            phone = prompt('Enter a number!');
        }
		if (phone != '' && phone != null) {
		document.getElementById("phonesbr").innerHTML =
        "Phone : " + phone + "";
		}
}




///////////////////////////////MENU2

// div class main-content2 (parent : wrap)
var main_content2 = document.createElement('div');
main_content2.setAttribute('class', 'main-content');
main_content2.setAttribute('id', 'mc2');
wrap.appendChild(main_content2);



// div class expertise (parent : main_content2)
var expertise = document.createElement('div');
expertise.setAttribute('id', 'expertise');
expertise.setAttribute('class', 'sidebar-left');
main_content2.appendChild(expertise);

// h2 (parent: expertise)
var h2expertise = document.createElement('h2');
expertise.appendChild(h2expertise);
h2expertise.innerHTML='Expertise';

// div class sidebar_right2 (parent : main_content2)
var sidebar_right2 = document.createElement('div');
sidebar_right2.setAttribute('class', 'sidebar-right');
sidebar_right2.setAttribute('id', 'sr2');
main_content2.appendChild(sidebar_right2);

//a expertise1
var expertise1 = document.createElement('p');
expertise1.setAttribute('id', 'expertise1');
expertise1.setAttribute('onclick', 'expertise1Form()');
sidebar_right2.appendChild(expertise1);
expertise1.innerHTML='1. Click To Edit';


//change expertise1
function expertise1Form() {
    var expertise1 = prompt("Add Expertise: ");
  
		if (expertise1 != '' && expertise1 != null) {
		document.getElementById("expertise1").innerHTML =
        "1. " + expertise1 + "";
		}
}


//a expertise2
var expertise2 = document.createElement('p');
expertise2.setAttribute('id', 'expertise2');
expertise2.setAttribute('onclick', 'expertise2Form()');
sidebar_right2.appendChild(expertise2);
expertise2.innerHTML='2. Click To Edit';


//change expertise2
function expertise2Form() {
    var expertise2 = prompt("Add Expertise: ");
  
		if (expertise2 != '' && expertise2 != null) {
		document.getElementById("expertise2").innerHTML =
        "2. " + expertise2 + "";
		}
}



//a expertise3
var expertise3 = document.createElement('p');
expertise3.setAttribute('id', 'expertise3');
expertise3.setAttribute('onclick', 'expertise3Form()');
sidebar_right2.appendChild(expertise3);
expertise3.innerHTML='3. Click To Edit';


//change expertise3
function expertise3Form() {
    var expertise3 = prompt("Add Expertise: ");
  
		if (expertise3 != '' && expertise3 != null) {
		document.getElementById("expertise3").innerHTML =
        "3. " + expertise3 + "";
		}
}



///////////////////////////////MENU 3

// div class main-content3 (parent : wrap)
var main_content3 = document.createElement('div');
main_content3.setAttribute('class', 'main-content');
main_content3.setAttribute('id', 'mc3');
wrap.appendChild(main_content3);

// div class experience (parent : main_content3)
var experience = document.createElement('div');
experience.setAttribute('id', 'experience');
experience.setAttribute('class', 'sidebar-left');
main_content3.appendChild(experience);

// h2 (parent: experience)
var h2expertise = document.createElement('h2');
experience.appendChild(h2expertise);
h2expertise.innerHTML='Experience';

// div class sidebar_right3 (parent : main_content3)
var sidebar_right3 = document.createElement('div');
sidebar_right3.setAttribute('class', 'sidebar-right');
sidebar_right3.setAttribute('id', 'sr3');
main_content3.appendChild(sidebar_right3);



// ul (parent: sidebar_right3)
var ulexperience = document.createElement('ul');
sidebar_right3.appendChild(ulexperience);

// li (parent: ulnavmenu)
var liexperience = document.createElement('li');
ulexperience.appendChild(liexperience);

// li (parent: ulnavmenu)
var liexperience2 = document.createElement('li');
ulexperience.appendChild(liexperience2);

// p (parent: liexperience)
var pexperience = document.createElement('p');
pexperience.setAttribute('id', 'pexperience');
pexperience.setAttribute('onclick', 'showexperience()');
liexperience.appendChild(pexperience);
pexperience.innerHTML='Click To Input Year';

//change pexperience
function showexperience() {
   var year1 = '';
    while(year1 == '' || isNaN(year1)){
            year1 = prompt('Enter a number!');
        }
		if (year1 != '' && year1 != null) {
		document.getElementById("pexperience").innerHTML =
        "" + year1 + "";
		}
}


// h3 (parent: liexperience)
var pexperience2 = document.createElement('h3');
pexperience2.setAttribute('id', 'pexperience2');
pexperience2.setAttribute('onclick', 'showexperience2()');
liexperience.appendChild(pexperience2);
pexperience2.innerHTML='Click To Input Job';

//change pexperience
function showexperience2() {
   var job1 = prompt("Input Job: ");
  
		if (job1 != '' && job1 != null) {
		document.getElementById("pexperience2").innerHTML =
        "" + job1 + "";
		}
}


// h4 (parent: liexperience)
var pexperience3 = document.createElement('h4');
pexperience3.setAttribute('id', 'pexperience3');
pexperience3.setAttribute('onclick', 'showexperience3()');
liexperience.appendChild(pexperience3);
pexperience3.innerHTML='Click To Input Place';

//change pexperience
function showexperience3() {
   var place1 = prompt("Input Place: ");
  
		if (place1 != '' && place1 != null) {
		document.getElementById("pexperience3").innerHTML =
        "" + place1 + "";
		}
}


// p2 (parent: liexperience2)
var pexperience11 = document.createElement('p');
pexperience11.setAttribute('id', 'pexperience11');
pexperience11.setAttribute('onclick', 'showexperience11()');
liexperience2.appendChild(pexperience11);
pexperience11.innerHTML='Click To Input Year';

//change pexperience11
function showexperience11() {
   var year2 = '';
    while(year2 == '' || isNaN(year2)){
            year2 = prompt('Enter a number!');
        }
		if (year2 != '' && year2 != null) {
		document.getElementById("pexperience11").innerHTML =
        "" + year2 + "";
		}
}


// h3 (parent: liexperience)
var pexperience22 = document.createElement('h3');
pexperience22.setAttribute('id', 'pexperience22');
pexperience22.setAttribute('onclick', 'showexperience22()');
liexperience2.appendChild(pexperience22);
pexperience22.innerHTML='Click To Input Job';

//change pexperience
function showexperience22() {
   var job2 = prompt("Input Job: ");
  
		if (job2 != '' && job2 != null) {
		document.getElementById("pexperience22").innerHTML =
        "" + job2 + "";
		}
}


// h4 (parent: liexperience2)
var pexperience33 = document.createElement('h4');
pexperience33.setAttribute('id', 'pexperience33');
pexperience33.setAttribute('onclick', 'showexperience33()');
liexperience2.appendChild(pexperience33);
pexperience33.innerHTML='Click To Input Place';

//change pexperience
function showexperience33() {
   var place2 = prompt("Input Place: ");
  
		if (place2 != '' && place2 != null) {
		document.getElementById("pexperience33").innerHTML =
        "" + place2 + "";
		}
}



///////////////////////////////MENU 4

// div class main-content4 (parent : wrap)
var main_content4 = document.createElement('div');
main_content4.setAttribute('class', 'main-content');
main_content4.setAttribute('id', 'mc4');
wrap.appendChild(main_content4);

// div class education (parent : main_content4)
var education = document.createElement('div');
education.setAttribute('id', 'education');
education.setAttribute('class', 'sidebar-left');
main_content4.appendChild(education);

// h2 (parent: education)
var h2education = document.createElement('h2');
education.appendChild(h2education);
h2education.innerHTML='Education';

// div class sidebar_right4 (parent : main_content4)
var sidebar_right4 = document.createElement('div');
sidebar_right4.setAttribute('class', 'sidebar-right');
sidebar_right4.setAttribute('id', 'sr4');
main_content4.appendChild(sidebar_right4);




// ul (parent: sidebar_right4)
var uleducation = document.createElement('ul');
sidebar_right4.appendChild(uleducation);

// li (parent: uleducation)
var lieducation = document.createElement('li');
uleducation.appendChild(lieducation);

// li (parent: uleducation)
var lieducation2 = document.createElement('li');
uleducation.appendChild(lieducation2);

// p (parent: lieducation)
var peducation = document.createElement('p');
peducation.setAttribute('id', 'peducation');
peducation.setAttribute('onclick', 'showeducation()');
lieducation.appendChild(peducation);
peducation.innerHTML='Click To Input Year';

//change pexperience
function showeducation() {
   var yeara = '';
    while(yeara == '' || isNaN(yeara)){
            yeara = prompt('Enter a number!');
        }
		if (yeara != '' && yeara != null) {
		document.getElementById("peducation").innerHTML =
        "" + yeara + "";
		}
}


// h3 (parent: lieducation)
var peducation2 = document.createElement('h3');
peducation2.setAttribute('id', 'peducation2');
peducation2.setAttribute('onclick', 'showeducation2()');
lieducation.appendChild(peducation2);
peducation2.innerHTML='Click To Input Title';

//change pexperience
function showeducation2() {
   var title1 = prompt("Input Title: ");
  
		if (title1 != '' && title1 != null) {
		document.getElementById("peducation2").innerHTML =
        "" + title1 + "";
		}
}


// h4 (parent: lieducation)
var peducation3 = document.createElement('h4');
peducation3.setAttribute('id', 'peducation3');
peducation3.setAttribute('onclick', 'showeducation3()');
lieducation.appendChild(peducation3);
peducation3.innerHTML='Click To Input Place';

//change pexperience
function showeducation3() {
   var placea = prompt("Input Place: ");
  
		if (placea != '' && placea != null) {
		document.getElementById("peducation3").innerHTML =
        "" + placea + "";
		}
}


// p2 (parent: lieducation2)
var peducation11 = document.createElement('p');
peducation11.setAttribute('id', 'peducation11');
peducation11.setAttribute('onclick', 'showeducation11()');
lieducation2.appendChild(peducation11);
peducation11.innerHTML='Click To Input Year';

//change peducation11
function showeducation11() {
   var yearb = '';
    while(yearb == '' || isNaN(yearb)){
            yearb = prompt('Enter a number!');
        }
		if (yearb != '' && yearb != null) {
		document.getElementById("peducation11").innerHTML =
        "" + yearb + "";
		}
}


// h3 (parent: liexperience)
var peducation22 = document.createElement('h3');
peducation22.setAttribute('id', 'peducation22');
peducation22.setAttribute('onclick', 'showeducation22()');
lieducation2.appendChild(peducation22);
peducation22.innerHTML='Click To Input Title';

//change pexperience
function showeducation22() {
   var title2 = prompt("Input Title: ");
  
		if (title2 != '' && title2 != null) {
		document.getElementById("peducation22").innerHTML =
        "" + title2 + "";
		}
}


// h4 (parent: liexperience2)
var peducation33 = document.createElement('h4');
peducation33.setAttribute('id', 'peducation33');
peducation33.setAttribute('onclick', 'showeducation33()');
lieducation2.appendChild(peducation33);
peducation33.innerHTML='Click To Input Place';

//change pexperience
function showeducation33() {
   var placeb = prompt("Input Place: ");
  
		if (placeb != '' && placeb != null) {
		document.getElementById("peducation33").innerHTML =
        "" + placeb + "";
		}
}




