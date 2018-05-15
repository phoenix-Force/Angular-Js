var myapp = angular.module("mod1", []).controller("con1" ,function ($scope){
        
    var det=[{mnu:"Culture",page:"../culture/culture.html"},
			 {mnu:"Food",submnu:[{name:"Street Food",page:"food.html"}]},
			 {mnu:"Gallery",submnu:[{name:"Photos",page:"../image/project.html"}]},
			 {mnu:"South Zone",page:"../South/South.html"},
			 {mnu:"North Zone",page:"../North/north2.html"}];
    $scope.mnubar=det;
	
	$scope.hideshow=document.getElementById("container");
	
	
	$scope.food=[{name:"Fuchka",photo:"../image/fuchka.jpg",info:"If there’s some place in Calcutta where each and every phuchkawallah makes a phuchka to die for, it is this. Among other Kolkata street food, the papri chat, dum aloo phuchkas and dahi phuchkas here are to die for! On a good day, you might be able to spot a Tollywood celebrity or two lined up for these tangy mouthfuls of heaven. Maharaja Chaat Centre, Southern Avenue is your go-to place here. Churmur, a cousin of the phuchka family is another delicacy too hard to resist. Combined with tangy masalas, tetul gola (tamarind pulp), mashed potato and broken papris, churmur is simply heavenly. Bhawanipore is another must-visit place for good, nay, GREAT phuchkas and street food.",like:28},
				{name:"Zaika",photo:"../image/zaika.jpg",info:"Did you know the now famous ‘Kathi Rolls’ were first invented in Kolkata? This shop called Zaika owns the credit to the delicious stuffing wrapped in thin roti that is now found in every city. Though there have been variations and twists as it found its way across cities, the original and authentic Kathi Rolls can still be found at Zaika. For more lip smackin’ rolls, try Nizam’s and Badshah in New Market and Kusum’s and Hot Kathi Roll in Park Street!",like:6},
				{name:"Luchi and Alu Dom ",photo:"../image/Luchi.jpg",info:"Fairlie Place is the central business district of Calcutta and you can see people in formal attire pacing the street either on the phone or with a newspaper in hand. The street is filled with a string of stalls selling everything from chats to full meals. However, the most famous dish here is the Luchi – Alu Dom. Luchi is similar to the puris while Alu Dom is the Bengali rendition of Dum Aloo, and Fairlie Place makes it the best. You can also try Kachoris and Rice and Fish curry. Name any sweet, and the chances are that you’ll find it here. The Stock Exchange road is a great place to find Chilla, Dal Pakori and Dahi Chaat.",like:8},
				{name:"Ghugni",photo:"../image/Ghugni.jpg",info:"One of the most popular food of Kolkata, Dacre Street also known as Decker’s Lane has everything you would want to try. From Punjabi to Chinese and the trade mark Bengali dishes, you’ll find it all here. Chowmein, Schezwan chicken, luchi-alu dom, fish roll, Ghugni, Puchkas, Jhali Muri and the list just goes on. What’s more, the WHO has rated the food here to be one of the Best Street Foods in the World!",like:7},
				{name:"Moghlai Paranthas",photo:"../image/Moghlai-Parathas.jpg",info:"Rotis stuffed with generous amounts of Chicken Kheema or broken cutlets, onions and eggs, this is the speciality of Anadi Cabin – Mughlai Parathas. Though you’ll find versions of the same in other places in Kolkata but Anadi Cabin serves some of the best and also cheaper Moghlai Parathas. These paranthas add a totally different flavour to the Kolkata street food cuisine!",like:9},
				{name:"Dragon Chicken ",photo:"../image/Lord’s More.jpg",info:"Right opposite South City Mall, are a slew of eateries that will take your breath away. Whether you talk about the local phuchkas, chaat, momos, sweet and savory shops, bakeries, or shacks selling Chinese food, there’s nothing to not be loved. Watch out for a certain Dragon Chicken from the smaller establishments while you’re on this stretch.",like:12},
				{name:"Samosas",photo:"../image/samosas.jpg",info:"If you prefer tea over coffee, then head to the Tiwari Brothers for some ‘special chai’ and hot piping samosas only they are Singaras here. Nonetheless, it’s a fitting combo for the evening and tastes just as delicious.",like:12},
				{name:"Ganguram’s",photo:"../image/ganguram.jpg",info:"f you’re in Kolkata, your Kolkata Street Food experience will be incomplete if you don’t have Kochuri! The Kochuri or Radhabollobi, is one of its kind at Ganguram’s. To finish, simply wash it down with some amazing Mishti Doi, or treat yourself to their sweet nothings!",like:12},
				{name:"Momos",photo:"../image/momo.jpg",info:"The Tibetan cuisine has always been a favorite in Kolkata, and Rabindra Sadan Metro Exit is one of the best places to have these amazing dumplings. Momos here are served with a piping hot soup and the perfect sauce for accompaniments – the very definition of comfort food! A line of little establishments dot this area and they are always flocked by students and office goers in large numbers. The momos here are breathtaking, and the low prices will leave you amazed and craving for more!",like:4},
				{name:"Telebhaja",photo:"../image/telebhaja.jpg",info:"An almost 50 year-old shop has made its name of selling the best Telebhaja in the city. Telebhaja is deep fried snacks and you can find everything from brinjal fries to fried fish, egg chops to mutton chops and all of these sell out in a couple of hours. They are open only in the evenings from 4 PM to 8 PM and has people fighting to place orders, if you go after 7.30 PM chances are you’ll have very less options to choose from. Gariahat and Fairlie Place are other favorite destinations for the Bengali’s favorite telebhaja!",like:12},
				{name:"Kabiraji Cutlet",photo:"../image/Chicken_Kabiraji_Cutlet.jpg",info:"Like non veg food? Head to Mitra café. Period. The Mutton Kabiraji cutlet here is to die for. Literally die for. It’s a filling of minced mutton wrapped in an egg net and deep-fried and is the very definition of a foodgasm for any non-vegetarian foodies! Moghlai Parathas, Fish chops, Fish fingers, you name it. Rolls of every kind that you can think of are available here and NONE of them disappoint. Heed my advice, go here with an empty stomach and walk back full, because you’ll need to burn off some of all that you stuffed!",like:18},
				{name:" Fruit Kulfi",photo:"../image/kulfi.jpg",info:"Did you really think Kulfis come in a regular shape, taste and size? Then you surely haven’t visited Camac Street’s most amazing Kulfiwallah! This person, who is found on Camac Street, somewhere between Pantaloons and St. Xavier’s, has the most low key establishment and he keeps a box of dry ice near his basket of yum to stuff his delectable kulfis in. The close proximity to a lot of colleges ensures a steady flow of yummy street food at all times. We pick the Mango, Sitaphal and the Cheeku kulfi to be our favorites.",like:11},
				{name:"Daal Pakori",photo:"../image/paprichat.jpg",info:"Vardaan Market, being at the heart of the business district of Camac Street, is home to some of the best vegetarian delicacies that you can find in Kolkata. Try phuchkas from vendors near Westside and Pantaloons and Marwari delicacies like the Chilla, Daal pakori etc. at Vardaan Market!",like:19},
				{name:"Fish Fry",photo:"../image/fish-fry.jpg",info:"Fish Fry is one specialty of Kolkata that I’m still wondering why Gourmet cuisine hasn’t discovered yet. At Golpark 5-point crossing, on the Gariahat Side, is a small shop that sells the most amazing fish fries ever. Try their butter fish fry, which is a specialty, and you will be a fan.",like:17},
				{name:"Ghoti Gorom",photo:"../image/goti.jpg",info:"The honest-to-God, awesome union of chanachur, lemon juice and onion, is the Kolkata Street Food to have when you’re at Princep Ghat, walking along the river in all its serenity. That said, tea and all kinds of snacks at Princep Ghat are to die for and not to be missed.",like:6}];
	
	$scope.increment_like=function(s){
        s.like++;
    };
	
	
	$scope.sldesh="slide.html";
    
	$scope.footermenu=[{nme:"Home",page:"final.html"},{nme:"Help",page:"contactus.html"},{nme:"About Us",page:"AboutUspage.html"},{nme:"About Ardent",page:"http://www.ardentcollaborations.com"}];
	
	$scope.sirpic="../photo/Sir.png";
	$scope.sirinfo="Debajyati Mukharjee";
	
	$scope.indranipic="../photo/girl.png";
	$scope.indraniinfo="Myself Indrani Ray,i am a Student of Computer Science at Brainware Group Of Institutions";
	
	$scope.rahatpic="../photo/girl.png";
    $scope.rahatinfo="Myself Rahat Jabin,i am a Student of Computer Science at Brainware Group Of Institutions";
    
    $scope.tulikapic="../photo/girl.png";
	$scope.tulikainfo="Myself Tulika Ranjan,i am a Student of Computer Science at Brainware Group Of Institutions";
    
    $scope.dristipic="../photo/girl.png";
	$scope.dristiinfo="Myself Dristi Banerjee,i am a Student of Computer Science at Brainware Group Of Institutions";
    
    $scope.indrapic="../photo/girl.png";
	$scope.indrainfo="Myself Indrani Ray,i am a Student of Computer Science at Brainware Group Of Institutions";
    
    
	$scope.manjapic="../photo/manja.jpg";
    $scope.manjainfo="Myself Manjarul Hoque,i am a Student of Computer Science at Brainware Group Of Institutions, I am Working on This Project as A Front-end Developer With Angular JS & Working on This Project Under Debojyoti Sir and My friends Is lots Of fun.And I Believe In This Moto--'As a child of GOD,i am greater than anything that can happen to me except myself...'";
	
	$scope.sidphoto="../photo/boys.png";
	$scope.sidsinfo="Hello this is siddharth vora from B.P. Poddar institute of management and technology. Currently studying B.Tech in computer Science and engineering (2nd year) .  A blogger by passion, I tend to achieve the tag of a ‘Web Developer’ . It was a great experience learning AngularJS under the guidance of respective mentors and again working on this project ‘Détour Kolkata’ led to inculcation of qualitative knowledge and teamwork !";
});
