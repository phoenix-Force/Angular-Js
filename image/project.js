
var myapp = angular.module("mymodule",[])
                   .controller("myctrl" , function($scope){
                          $scope.gallery = [
                        {area : "North Zone", image :"./images/north.jpg", about:"North Kolkata is the older area of Kolkata, a fascinating district dominated by narrow little lanes and hundreds of century-old buildings.Includes Chitpur, Bagbazar, Belgachhia,Shyambazar, Shobhabazar, Maniktala, Jora Sanko and the famous College Street area. Also situated here are the Sealdah station, one of the largest train hubs in India, and the newly built Kolkata station. Dum Dum being the prime communication hub of Kolkata having International Airport, Metro Rail, Circular Rail, Ground Rail. " ,likes:0 },
                        {area : "South Zone", image : "/images/eden.jpg" ,   about:"South Bengal (Bengali: দক্ষিণ বঙ্গ/ দক্ষিণ বাংলা) is a term used for the southern parts of Bengal including Southern Bangladesh and Southern West Bengal." ,likes:0 },
                        {area : "food",       image : "/images/food.jpg",    about:"Bengali cuisine is a culinary style originating in Bengal, a region in the eastern part of the Indian subcontinent." ,likes:0 },
                        {area : "tourist",    image : "/images/southcity.jpg",   about:"Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals. It’s also home to Mother House, headquarters of the Missionaries of Charity, founded by Mother Teresa, whose tomb is on site"   ,likes:0},
                        {area : "mall",       image : "/images/acro.jpg",        about:"Acropolis is one of the best mall in Kolkata, houses different kind of shopping stores, multiplex and offers all the necessary services to the shopp"  ,likes:0},
                        {area : "museums",    image : "/images/indian_museam.jpg", about:"waterpark" ,likes:0},
                        {area : "culture",    image : "/images/dance.jpg",   about:" Kolkata has also been the pioneer city in Indian renaissance. It has long been known for its literary, artistic and revolutionary heritage." ,likes:0  },
                        {area : "theatre",     image : "/images/rabinsadan.jpg",     about:"Rabindra Sadan is a cultural centre and theatre in Kolkata, located near the Nandan cinema and cultural complex and the Academy of Fine Arts on AJC Bose Road in South Kolkata"  ,likes:0},      
                        {area : "religious",  image : "/images/paul.jpg",about:"Kolkata is an extremely wonderful city in terms of religious expeditions. People belonging to various religions and cultures live here, with immense peace and harmony. The city also houses several worship places, related to different religions right, from Hinduism to Zoarastrism" ,likes:0},
                        {area : "park",       image : "/images/eco.jpg",     about:"New Town Eco Park is an urban park in Rajarhat, Kolkata and the biggest park so far in India.k" ,likes:0},
                        {area : "ghats",      image : "/images/princepghat.jpg",  about:"Prinsep Ghats is a ghat built in 1841 during the British Raj, along the Kolkata bank of the Hooghly River in India" ,likes:0},
                       {area : "festival",      image : "/images/kalipuja.jpg",  about:"Kolkata (or Calcutta) holds many festivals throughout the year. . ... Other major festivals are Kali Puja, Holi, Diwali, Saraswati Puja, Jagaddhatri Puja, Rath Jatra, Kojagori Lakshmi Puja, Poush Parbon, Poila Boishakh, Eid, Muharram, Christmas etc." ,likes:0},
                      
                       
                          ];
                        
                           
                    $scope.incrementLikes =function(x){
                        x.likes++;
                    }
                          
                
                         
                   });
                  