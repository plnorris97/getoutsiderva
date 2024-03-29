const mongoose = require("mongoose");
const db = require("../Models");


mongoose.connect(
 process.env.MONGODB_URI ||
 "mongodb://localhost/getoutsiderva"
);

const activitiesSeed =[
    {
        "id": "1",
        "name": "paddle-sports",
        "description": "Paddle sports are watersports that require a paddle to propel and steer a vessel through and across the water. Canoeing and kayaking are the original proverbial paddle sports, however, other sports have now joined the category. River rafting, white water rafting, and stand up paddleboarding are also paddle sports Richmonders love to do.",
        "parks": ["Belle Isle", "Dutch Gap Conservation Area", "Pocahontas State Park", "Presquile National Widlelife Refuge", "Robious Landing Park", "Osbourne Park & Boat Landing", "Tredegar Street Put-in", "14th Street Take-out"]
    },
    {
        "id": "2",
        "name": "disc-golf",
        "description": "Disc golf (also called Frisbee Golf) is a flying disc sport in which players throw a disc at a target. It is played using rules similar to golf. It is often played on a course of 9 or 18 holes. Players complete a hole by throwing a disc from a tee area toward a target, throwing again from the landing position of the disc until the target is reached.",
        "parks": ["Dorey Park & Recreation Center", "Dunncroft/Castle Point Park", "Bryan Park"]
    },
    {
         "id": "3",
         "name": "swimming",
         "description": "Swimming in Richmond is often performed in local swimming holes or areas along the James River. During the Summer and early Fall, Richmonders seek to cool off at areas such as Belle Isle , Texas Beach or Pony Pasture. These areas are in dangerous rapid zones however and you must swim at your own risk. Check river gauge levels for guidance on safety and warnings. Individuals interested in swimming in pools should consider joining a community pool or a facility such as a gym or local YMCA.",
         "parks": ["Pocahontas State Park", "Swimming", "Tredegar Street Put In", "Belle Isle"]
    },
    {
         "id": "4",
         "name": "exercise-trail",
         "description": "Exercise trails are found at area city or county parks. They typically make up a 10-12 station system and are incorporated with a walking or jogging trail. The stations feature exercise instructions and equipment and are designed for the novice or advanced athlete.",
         "parks": ["Huguenot Park", "Harry G Daniel Park at Iron Bridge", "Rockwood Park", "Cheswick Park", "Deep Run Park & Recreation Center", "Dorey Park and Recreation Center", "Byrd Park"]
    },
    {
         "id": "5",
         "name": "camping",
         "description": "Unfortunately, there aren't any overnight camping spots in Metro Richmond, but surrounding counties like Chesterfield, Powhatan and Goochland boast overnight tent and RV camping. Only 20 minutes from Downtown Richmond, Pocahontas State Park provides Richmonders camping, biking, hiking, paddle sport, and swimming options. Further options include Powhatan State Park and even Bear Creek Lake Park.",
         "parks": ["Pocahontas State Park"]
    },
    {
         "id": "6",
         "name": "birding-and-wildlife",
         "description": "According to the Department of Game & Inland Fisheries, the Virginia Bird & Wildlife Trail (VBWT) boasts '400 species of birds, 150 species of mammals, 150 species of amphibians and reptiles, 250 species of fish, plus hundreds of butterfly, dragonfly, and other invertebrate species.' Richmond sits in the Piedmont Region of the VBWT which offers 13 loops to explore expansive grasslands, forests, pineland savannahs, and large reservoirs. Look for bobolinks, meadowlarks, turkey, grosbeaks, indigo buntings, prairie warblers, and northern parulas. Additional wildlife includes white-tailed deer, lizards, and turtles.",
         "parks": ["Dutch Gap Conservation Area", "Pocahontas State Park", "R. Garland Dodd Park At Point Of Rocks", "Presquile National Wildlife Refuge", "Robious Landing Park", "Deep Bottom Park & Four Mile Creek", "Deep Run Park & Recreation Center", "Dorey Park and Recreation Center", "Echo Lake Park", "Meadow Farm Museum at Crump Park", "Three Lakes Park & Nature Center", "Tuckahoe Creek Park", "Virginia Randolph Recreation Area", "Belle Isle", "Brown's Island", "Bryan Park", "Byrd Park", "Great Shiplock Park/Chapel Island", "Northbank Trail and Texas Beach" ]
    },
    {
         "id": "7",
         "name": "fishing",
         "description": "The James River provides a great variety and bounty for fishermen. From Bosher’s Dam near the city’s western limit through the Mayo Bridge downtown, fishermen have their pick of freshwater species: smallmouth bass, largemouth bass, bluegill, redbreast sunfish, channel, flathead and blue catfish. Below Mayo Bridge, where the rapids give way to tidally-influenced water, blue catfish and largemouth bass reign. The fishing here is augmented by seasonal runs of American and hickory shad and striped bass, all on their way upriver to spawn.",
         "parks": ["Dutch Gap Conservation Area", "Harry G Daniel Park at Iron Bridge", "Pocahontas State Park", "Presquile National Wildlife Refuge", "Robious Landing Park", "Deep Bottom Park & Four Mile Creek", "Deep Run Park & Recreation Center", "Dorey Park and Recreation Center", "Echo Lake Park", "Meadow Farm Museum at Crump Park", "Osborne Park & Boat Landing", "Three Lakes Park & Nature Center", "Tuckahoe Creek Park", "Tredegar Street Put In", "Belle Isle", "Bryan Park", "Byrd Park", "Great Shiplock Park/Chapel Island", "Northbank Trail and Texas Beach"]
    },
    {
         "id": "8",
         "name": "hiking",
         "description": "The Richmond region is full of hikes and climbs that novices to experts will find fun. Forest Hill Park trails connect to Buttermilk and North Bank offering hikers gorgeous views while staying close to downtown. Pocahontas State Park, Pony Pasture and Henricus are perfect for quieter hikes. The Manchester Climbing wall offers a unique chance to climb with the skyline as a backdrop while climbers can hone their skills on Belle Isle walls and boulders. Head up indoors at Peak Experiences or catch the pros as they compete every year at Dominion Riverrock on Brown’s Island.",
         "parks": ["Dutch Gap Conservation Area", "Henricus Historical Park", "Huguenot Park", "Pocahontas State Park", "R. Garland Dodd Park At Point Of Rocks", "Robious Landing Park", "Rockwood Park", "Cheswick Park", "Deep Run Park & Recreation Center", "Dorey Park and Recreation Center", "Dunncroft/Castle Point Park", "Echo Lake Park", "Meadow Farm Museum at Crump Park", "Osborne Park & Boat Landing", "Pouncey Tract Park", "Springfield Park", "Three Lakes Park & Nature Center", "Tuckahoe Creek Park", "Belle Isle", "Bryan Park", "Byrd Park", "Chimborazoo Park", "Great Shiplock Park/Chapel Island", "Northbank Trail and Texas Beach"]
    },
    {
         "id": "9",
         "name": "biking",
         "description": ["Richmond burst onto the international cycling stage as host to the 2015 UCI Road World Cycling Championships. This nine-day event, think the World Cup but for cycling, showed off Richmond’s historic, cobbled climbs - Libby Hill - and our biking culture to the world. Want to take a bike tour of street art in Richmond? We’ve got that. You can rent mountain bikes from Riverside Outfitters on Brown’s Island, ride a party bike from brewery to brewery or rent a road bike to scoot around. We’ve got Bell Built downhill and flow tracks for mountain bikers at Pocahontas State Park and old school single track. How you bike Richmond, VA is totally up to you. The Richmond region boasts some of the most diverse trail types available. Even inside the city limits, Richmond parks provide several miles of exciting, true singletrack. And a variety of other great trails are only a short drive to outlying recreation areas."],
         "parks": ["Huguenot Park", "Harry G Daniel Park at Iron Bridge", "Pocahontas State Park", "Robious Landing Park", "Rockwood Park", "Deep Run Park & Recreation Center", "Dorey Park and Recreation Center", "Echo Lake Park", "Meadow Farm Museum at Crump Park", "Three Lakes Park & Nature Center", "Belle Isle", "Bryan Park", "Byrd Park", "Great Shiplock Park/Chapel Island", "Northbank Trail and Texas Beach"]
    },
    {
         "id": "10",
         "name": "geocaching",
         "description": ["Geocaching is a high-tech game of hide and seek similar to letterboxing, which uses clues and references to landmarks to lead players to small, hidden containers in remote areas.While letterboxing has been around for 150 years, geocaching dates to about 2000, when the Global Positioning System (GPS) became widely available. GPS allows for improved accuracy in finding small containers, called geocaches or caches. These caches come in all sizes imaginable, from microcaches (small metal tubes) to Tupperware containers and ammunition boxes. While some caches are relatively simple, others can be quite complicated.Puzzle caches, for example, require players to solve puzzles before getting the coordinates. Other caches are a series of hunts that lead to the final treasure. Geocaches are everywhere around town in places you may not even think of!"],
         "parks": ["Huguenot Park", "Harry G Daniel Park at Iron Bridge", "Pocahontas State Park", "R. Garland Dodd Park At Point Of Rocks", "Presquile National Wildlife Refuge", "Robious Landing Park", "Rockwood Park", "Cheswick Park", "Deep Bottom Park & Four Mile Creek", "Deep Run Park & Recreation Center", "Dorey Park and Recreation Center", "Dunncroft/Castle Point Park", "Echo Lake Park", "Hunton Community Center & Park", "Laurel Recreation Area & Skate Park", "Meadow Farm Museum at Crump Park", "Osborne Park & Boat Landing", "Pouncey Tract Park", "RF&P Park", "Short Pump Park", "Springfield Park", "Three Lakes Park & Nature Center", "Tuckahoe Creek Park", "Twin Hickory Park & Recreation Center", "Virginia Randolph Recreation Area", "Varina Recreation Area", "Tredegar Street Put In", "14th Street Takeout", "Belle Isle", "Brown's Island", "Bryan Park", "Byrd Park", "Chimborazoo Park", "Great Shiplock Park/Chapel Island", "Northbank Trail and Texas Beach"] 
    },
    {
         "id": "11",
         "name": "running",
         "description": ["Richmond has a great running scene, with lots of spots. The most popular runs are along the James River waterfront park, which includes scenic Belle Isle. Pretty historic and residential runs include Monument Ave and Grove Ave, or the campus of the University of Richmond. A number of local parks, including Byrd Park, Maymont, and Bryan Park, also have short but pleasant designated running paths. Distance runners often prefer to do their mileage on the Virginia Capital “Cap” Trail, which is accessible via the lovely Canal Walk, while trail runners can travel a short distance outside the city to beautiful Pocahontas State Park."],
         "parks": ["Dutch Gap Conservation Area", "Henricus Historical Park", "Huguenot Park", "Harry G Daniel Park at Iron Bridge", "Pocahontas State Park", "R. Garland Dodd Park At Point Of Rocks", "Robious Landing Park", "Rockwood Park", "Cheswick Park", "Deep Bottom Park & Four Mile Creek", "Deep Run Park & Recreation Center", "Dorey Park and Recreation Center", "Dunncroft/Castle Point Park", "Echo Lake Park", "Meadow Farm Museum at Crump Park", "Pouncey Tract Park", "Short Pump Park", "Springfield Park", "Three Lakes Park & Nature Center", "Tuckahoe Creek Park", "Twin Hickory Park & Recreation Center", "Belle Isle", "Bryan Park", "Byrd Park", "Great Shiplock Park/Chapel Island", "Northbank Trail and Texas Beach"]
     }
 ];

 db.activity
.remove({})
 .then(() => db.Activities.collection.insertMany(activitiesSeed))
 .then(data => {
   console.log(data.result.n + " records inserted!");
   process.exit(0);
 })
 .catch(err => {
   console.error(err);
   process.exit(1);
 });
