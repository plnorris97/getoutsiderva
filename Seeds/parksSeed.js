const mongoose = require("mongoose");
const db = require("../Models");


mongoose.connect(
 process.env.MONGODB_URI ||
 "mongodb://localhost/getoutsiderva"
);

const parksSeed = [
  {
    "id_destinations": 1,
    "Name": "Dutch Gap Conservation Area",
    "Category": "County Park",
    "Description": "Dutch Gap Conservation Area is an 810-acre environmental treasure which features a bounty of birds, fish, waterfowl and other wildlife.",
    "Address": "411 Coxendale Rd",
    "City": "Chester",
    "State": "VA",
    "Zip": 23836,
    "County/Area": "Chesterfield",
    "Amenities": ["Nature/Visitor Center", "Birding/Wildlife"], 
    "Activities": ["Fishing", "Hiking", "Paddle Sports", "Running"],
    "Image": "https://www.findyourchesapeake.com/globalimages/places_large/dutchgap.jpg"
  },
  {
    "id_destinations": 2,
    "Name": "Henricus Historical Park",
    "Category": "County Park",
    "Description": "Henricus is one of the early English settlements in the New World and today is a living history museum. While taking in history, visitors can enjoy views of the James River, walking trails, and organized activities throughout the year.",
    "Address": "251 Henricus Park Rd",
    "City": "Chester",
    "State": "VA",
    "Zip": 23836,
    "County/Area": "Chesterfield",
    "Amenities": ["History", "Parking Lot", "Restrooms", "Shelter/Picnic Areas", "River/Lake"],
    "Activities": ["Hiking", "Running"],
    "Image": "https://colonialghosts.com/site/templates/img/uploads/2015/09/Parks-Rocke-Hall.jpg"
  },
  {
    "id_destinations": 3,
    "Name": "Huguenot Park",
    "Category": "County Park",
    "Description": "A 53-acred wooded park that includes an azalea garden and all the usual amenities of a great county park. Take a leisure stroll through the tails or grab your bike for an easy ride.",
    "Address": "10901 Robious Rd",
    "City": "Richmond",
    "State": "VA",
    "Zip": 23235,
    "County/Area": "Chesterfield",
    "Amenities": ["Parking Lot", "Playground", "Restrooms", "Ball Fields", "Shelters/Picnic Areas"],
    "Activities": ["Exercise Trail", "Hiking", "Biking", "Geocaching", "Running"],
    "Image": "https://www.chesterfield.gov/ImageRepository/Document?documentID=3933"
  },
  {
    "id_destinations": 4,
    "Name": "Harry G Daniel Park at Iron Bridge",
    "Category": "County Park",
    "Description": "This 187-acre park is conveniently located in central Chesterfield across from the county airport off of Route 288. Numerous diamond and rectangular fields, game courts, shelters, and trails make this park a popular destination for a wide range of recreational activities. The park is also located next to The First Tee golf course.",
    "Address": "6600 Whitepine Rd",
    "City": "Richmond",
    "State": "VA",
    "Zip": 23237,
    "County/Area": "Chesterfield",
    "Amenities": ["Parking Lot", "Playground", "Restrooms", "Ball Fields", "Shelters/Picnic Areas"],
    "Activities": ["Exercise Trail", "Fishing",	"Biking", "Geocaching", "Running"],
    "Image": "https://www.richmondoutside.com/wp-content/uploads/2012/02/harry_large.jpg"
  },
  {
    "id_destinations": 5,
    "Name": "Pocahontas State Park",
    "Category": "State Park",
    "Description": "Pocahontas State Park is a state park located in Chesterfield, Virginia, United States, not far from the city. The park was laid out by the Civilian Conservation Corps along the Swift Creek, and at 7,950 acres was, at its creation, Virginia's largest state park. The park boast 64 miles of trails and is a favorite of hikers, bikers, and equestrians. Get the latest trail alerts and let's all protect our playground: http://www.fopsp.org/trail-alerts.html",
    "Address": "10301 State Park Rd",
    "City": "Chesterfield",
    "State": "VA",
    "Zip": 23832,
    "County/Area": "Chesterfield",
    "Amenities": ["Nature/Visitor Center", "Parking Lot", "Playground", "Restrooms", "Shelters/Picnic Areas", "Swimming Pool", "River/Lake", "Amphitheatre", "Boat Ramp"],
    "Activities": ["Swimming", "Camping", "Birding/Wildlife", "Fishing", "Hiking", "Biking", "Paddle Sports", "Geocaching", "Running"],
    "Image": "https://res.cloudinary.com/simpleview/image/upload/crm/richmond/pocahontasspring0_abb0ad04-5056-a36a-090c0bd3f60a0b77.jpg"
  },
  {
    "id_destinations": 6,
    "Name": "R. Garland Dodd Park At Point Of Rocks",
    "Category": "County Park",
    "Description": "Dodd Park offers 2.7 miles of trails providing access to several habitats, including eastern deciduous forest, the banks of the Appomattox River, and tidal freshwater marsh. This 176-acre park features several athletic facilities and a diverse natural area. The trails through the forest offer viewing access for a variety of typical eastern birds. A floating boardwalk with multiple overlooks provide an excellent place to study a number wetland birds, dragonflies, swamp sparrows and bald eagles.",
    "Address": "201 Enon Church Rd",
    "City": "Chester",
    "State": "VA",
    "Zip": 23836,
    "County/Area": "Chesterfield",
    "Amenities": ["Nature/Visitor Center", "Parking Lot", "Playground", "Restrooms", "Ball Fields", "Shelters/Picnic Areas", "River/Lake"],
    "Activities": ["Birding/Wildlife", "Hiking", "Geocaching", "Running"],
    "Image": "https://www.richmondoutside.com/wp-content/uploads/2011/07/point_large.jpg"
  },
  {
    "id_destinations": 7,
    "Name": "Presquile National Wildlife Refuge",
    "Category": "County Park",
    "Description": "Presquile National Wildlife Refuge in the U.S. state of Virginia is one of four refuges that comprise the Eastern Virginia Rivers National Wildlife Refuge Complex. The refuge is a 1,329-acre island in the James River, located approximately 20 miles south of Richmond. Established to protect habitat for wintering waterfowl and other migratory birds, Presquile is an important component in the network of refuges on and around the Chesapeake Bay, the largest estuary in the United States.",
    "Address": "4700 Bermuda Hundred Road",
    "City": "Chester",
    "State": "VA",
    "Zip": "23836�",
    "County/Area": "Chesterfield",
    "Amenities": ["Nature/Visitor Center", "Parking Lot"],
    "Activities": ["Birding/Wildlife", "Fishing", "Paddle Sports", "Geocaching"],
    "Image": "https://www.fws.gov/uploadedImages/Region_5/NWRS/South_Zone/Eastern_Virginia_Rivers_Complex/Presquile/Images/StationPhoto2.jpg"
  },
  {
    "id_destinations": 8,
    "Name": "Robious Landing Park",
    "Category": "County Park",
    "Description": "Robious Landing Park provides easy access to the James River for kayaking, canoeing, rowing, and fishing. The 102-acre site also houses 3.4 miles of trails, playgrounds, picnic shelters, and sand volleyball.",
    "Address": "3800 James River Rd",
    "City": "Midlothian",
    "State": "VA",
    "Zip": 23113,
    "County/Area": "Chesterfield",
    "Amenities": ["Parking Lot", "Playground", "Restrooms",	"Shelters/Picnic Areas", "River/Lake", "Boat Ramp"],
    "Activities": ["Birding/Wildlife", "Fishing", "Hiking", "Biking", "Paddle Sports", "Geocaching", "Running"],
    "Image": ""
  },
  {
    "id_destinations": 9,
    "Name": "Rockwood Park",
    "Category": "County Park",
    "Description": "The County's oldest, this 161-acre site features a complex of ball fields and game courts, a Nature Center, an archery range, Ruff House Dog Park, garden plots and an extensive system of hard and soft surface nature trails. Other features include picnic shelters, play equipment, concessions and restrooms. These facilities, along with convenient location at Courthouse and Hull Street Roads, make Rockwood Park a popular choice for numerous recreational uses.",
    "Address": "3401 Courthouse Rd",
    "City": "Richmond",
    "State": "VA",
    "Zip": 23236,
    "County/Area": "Chesterfield",
    "Amenities": ["Nature/Visitor Center", "Parking Lot", "Playground",	"Restrooms", "Ball Fields", "River/Lake"],
    "Activities": ["Exercise Trail", "Biking", "Biking", "Geocaching", "Running"],
    "Image": ""
  },
  {
    "id_destinations": 10,
    "Name": "Cheswick Park",
    "Category": "County Park",
    "Description": "Cheswick Park is Henrico�s oldest neighborhood park features picnic shelters, approximately a mile of walking trails, and a playground.",
    "Address": "1700 Forest Ave",
    "City": "Henrico",
    "State": "VA",
    "Zip": 23229,
    "County/Area": "Henrico",
    "Amenities": ["Parking Lot", "Playground", "Restrooms", "Ball Fields", "Shelters/Picnic Areas"],
    "Activities": ["Exercise Trail", "Hiking", "Geocaching", "Running"],
    "Image": "https://henrico.us/assets/Cheswick_Park_Playground.jpg"
  },
  {
    "id_destinations": 11,
    "Name": "Deep Bottom Park & Four Mile Creek",
    "Category": "County Park",
    "Description": "Located at an oxbow of the James River in Henrico County, Deep Bottom Park is a popular place for fish-seeking Central Virginians to launch motorboats, canoes and kayaks. Fishing off the dock is also permitted. Deep Bottom Park features two boat ramps for access to the James River and a canoe launch on Four Mile Creek. Picnic facilities and fishing are also available at this site. The boat ramps are available twenty-four hours a day to launch and retrieve boats. For anglers, Deep Bottom is a good launch point for species from largemouth bass to spawning shad and stripers.",
    "Address": "9525 Deep Bottom Rd",
    "City": "Henrico",
    "State": "VA",
    "Zip": 23231,
    "County/Area": "Henrico",
    "Amenities": ["Parking Lot", "Restrooms", "Shelters/Picnic Areas", "River/Lake", "Boat Ramp"],
    "Activities": ["Birding/Wildlife", "Fishing", "Paddle Sports", "Geocaching", "Running"],
    "Image": "https://henrico.us/assets/Deep-Bottom-Boat-Launch.jpg"
  },
  {
    "id_destinations": 12,
    "Name": "Deep Run Park & Recreation Center",
    "Category": "County Park",
    "Description": "Located in western Henrico County, Deep Run Park has many activities throughout the year, including ponds, trails, playgrounds, and athletic fields. The recreation center is available for large groups, gatherings, or meetings.",
    "Address": "9900 Ridgefield Pkwy",
    "City": "Richmond",
    "State": "VA",
    "Zip": 23233,
    "County/Area": "Henrico",
    "Amenities": ["Nature/Visitor Center", "Parking Lot", "Playground", "Restrooms", "Ball Fields", "Shelters/Picnic Areas", "River/Lake", "Boat Ramp"],
    "Activities": ["Exercise Trail", "Birding/Wildlife", "Fishing", "Hiking", "Biking", "Geocaching", "Running"],
    "Image": "https://res.cloudinary.com/simpleview/image/upload/crm/richmond/Deep-Run-Park0_ab44c691-5056-a36a-095d1027440cc7fa.jpg"
  },
  {
    "id_destinations": 13,
    "Name": "Dorey Park and Recreation Center",
    "Category": "County Park",
    "Description": "Dorey Park includes a large pond with walking trail, meandering walkways through the woods, a playground, and open space as well as a gazebo and picnic shelters. Dorey Park also has an off-leash dog park, 1 acre in size, with 5 foot enclosed fence with two areas � one for small dogs and the other for larger dogs. A variety of classes and events are offered for both children and adults throughout the year.",
    "Address": "2999 Darbytown Rd",
    "City": "Henrico",
    "State": "VA",
    "Zip": 23231,
    "County/Area": "Henrico",
    "Amenities": ["Nature/Visitor Center", "Parking Lot", "Playground",	"Restrooms", "Ball Fields",	"Shelters/Picnic Areas", "River/Lake"],
    "Activities": ["Disc Golf", "Exercise Trail", "Birding/Wildlife", "Fishing", "Hiking", "Biking", "Geocaching", "Running"],
    "Image": "https://res.cloudinary.com/simpleview/image/upload/crm/richmond/Dorey-Park-Varina_abb0ece5-5056-a36a-09024233c4702d45.jpg"
  },
  {
    "id_destinations": 14,
    "Name": "Dunncroft/Castle Point Park",
    "Category": "County Park",
    "Description": "Located at the entrance to Hungary Creek Middle School, this park features trails, picnic area and shelter, play area and equipment, and a nine-hole disc golf course.",
    "Address": "4901 Francistown Rd",
    "City": "Glen Allen",
    "State": "VA",
    "Zip": 23060,
    "County/Area": "Henrico",
    "Amenities": ["Parking Lot", "Playground", "Restrooms",	"Ball Fields", "Shelters/Picnic Areas"],
    "Activities": ["Disc Golf", "Hiking", "Geocaching",	"Running"],
    "Image": "https://henrico.us/assets/dunncrodt_disc_golf.jpg"
  },
  {
    "id_destinations": 15,
    "Name": "Echo Lake Park",
    "Category": "County Park",
    "Description": "This scenic park features a large fishing lake, picnic shelter, play equipment, and a half-mile nature trail. Area joggers find this trail an easy, but scenic alternative to neighborhook streets",
    "Address": "5701 Springfield Rd",
    "City": "Glen Allen",
    "State": "VA",
    "Zip": 23060,
    "County/Area": "Henrico",
    "Amenities": ["Parking Lot", "Playground", "Restrooms",	"Shelters/Picnic Areas", "River/Lake"],
    "Activities": ["Birding/Wildlife", "Fishing", "Hiking",	"Biking", "Geocaching", "Running"],
    "Image": "https://henrico.us/assets/Echo-Lake-Bridge1.jpg"
  },
  {
    "id_destinations": 16,
    "Name": "Hunton Community Center & Park",
    "Category": "County Park",
    "Description": "Hunton Park is a small community park and recreation center known primarily for softball league team play. It is also a local favorite for playground play, pick up football games and watching trains pass.",
    "Address": "11690 Old Washington Hwy",
    "City": "Glen Allen",
    "State": "VA",
    "Zip": 23060,
    "County/Area": "Henrico",
    "Amenities": ["Parking Lot", "Playground", "Restrooms", "Ball Fields", "Shelters/Picnic Areas"],
    "Activities": ["Geocaching"],
    "Image": "https://henrico.us/assets/Hunton-Community-Center.jpg"
  },
  {
    "id_destinations": 17,
    "Name": "Laurel Recreation Area & Skate Park",
    "Category": "County Park",
    "Description": "Laurel Skate Park is a fun and safe place for both youth and adults to skate. The Skate Park has a free skate area of 6,700 square feet with ramps, rails, a half-pipe, and bowl. So get your skateboards, in-line skates or BMX/Freestyle bikes. The park also boasts athletic fields, an athletic association, a playground, and picnic opportunities.",
    "Address": "10301 Hungry Spring Rd",
    "City": "Glen Allen",
    "State": "VA",
    "Zip": 23060,
    "County/Area": "Henrico",
    "Amenities": ["Parking Lot", "Playground", "Restrooms",	"Ball Fields", "Shelters/Picnic Areas"],
    "Activities": ["Skateboarding/Freestyle", "Geocaching"],
    "Image": "https://henrico.us/assets/Laurel-Skatepark.jpg"
  },
  {
    "id_destinations": 18,
    "Name": "Meadow Farm Museum at Crump Park",
    "Category": "County Park",
    "Description": "Meadow Farm Museum, an 1860 living history farm site and museum, presents programs and exhibits on the culture of the rural South. Our history interpreters provide insight into the lives of Dr. John Mosby Sheppard, the owner of Meadow Farm, and his family. On selected weekends, they demonstrate seasonal activities in the farmhouse, barn, doctor�s office, blacksmith forge, kitchen, fields, and pastures. Crump Park features playgrounds, picnic shelters, trails, large open fields, and a fishing pond.",
    "Address": "3400 Mountain Rd",
    "City": "Glen Allen",
    "State": "VA",
    "Zip": 23060,
    "County/Area": "Henrico",
    "Amenities": ["History", "Nature/Visitor Center", "Parking Lot", "Playground", "Restrooms", "Shelters/Picnic Areas", "River/Lake"],
    "Activities": ["Birding/Wildlife", "Fishing", "Hiking", "Biking", "Geocaching",	"Running"],
    "Image": "https://henrico.us/assets/Meadow-Farm-House.jpg"
  },
  {
    "id_destinations": 19,
    "Name": "Osborne Park & Boat Landing",
    "Category": "County Park",
    "Description": "Osborne Boat Landing features three double boat slips and a canoe launch available from dawn to dusk.  An accessible fishing pier extends out into the James River. Adjacent Osborne Park, featuring a playground, shelters, and trails is open from dawn to dusk. Many BASS Masters events have been held here, including the 1989 and 1990 BASS Masters Classics. The Jacobs Cup was held here in September 2003.",
    "Address": "9530 Osborne Turnpike",
    "City": "Richmond",
    "State": "VA",
    "Zip": 23231,
    "County/Area": "Henrico",
    "Amenities": ["Parking Lot", "Playground", "Restrooms", "Shelters/Picnic Areas", "River/Lake", "Boat Ramp", "Swimming"],
    "Activities": ["Fishing", "Hiking",	"Paddle Sports", "Geocaching"],
    "Image": "https://henrico.us/assets/Osborne_Landings.jpg"
  },
  {
    "id_destinations": 20,
    "Name": "Pouncey Tract Park",
    "Category": "County Park",
    "Description": "Pouncey Tract Park sits next to Short Pump Middle School and Richmond Strikers Striker Park. During the summer months co-rec softball is often playing on the field. The park also features sand volleyball courts, multi-purpose athletic fields, picnic facilities, a playground, and pickleball courts.",
    "Address": "4747 Pouncey Tract Rd",
    "City": "Glen Allen",
    "State": "VA",
    "Zip": 23059,
    "County/Area": "Henrico",
    "Amenities": ["Nature/Visitor Center", "Parking Lot", "Playground", "Restrooms", "Ball Fields", "Shelters/Picnic Areas"],
    "Activities": ["Hiking", "Geocaching", "Running"],
    "Image": "https://henrico.us/assets/Poucey-Tract-Playground.jpg"
  },
  {
    "id_destinations": 21,
    "Name": "RF&P Park",
    "Category": "County Park",
    "Description": "Tucked away in Meadow Farm Crump Park is the areas best baseball and softball complex. RF&P Park features four restored RF&P train cars, picnic shelters, and athletic fields, including The Glen Allen Stadium at RF&P Park.",
    "Address": "3400 Mountain Rd",
    "City": "Glen Allen",
    "State": "VA",
    "Zip": 23060,
    "County/Area": "Henrico",
    "Amenities": ["Parking Lot", "Playground", "Restrooms",	"Ball Fields", "Shelters/Picnic Areas"],
    "Activities": ["Geocaching"],
    "Image": "https://henrico.us/assets/RFP-Park-w-Stadium.jpg"
  },
  {
    "id_destinations": 22,
    "Name": "Short Pump Park",
    "Category": "County Park",
    "Description": "Short Pump Park is another park known for its co-rec softball league action. Recent renovations have made this park a prime spot for all summertime play including spray fountains, dog park, and a restored 1902 two-room schoolhouse.",
    "Address": "3329 Pump Rd",
    "City": "Henrico",
    "State": "VA",
    "Zip": 23233,
    "County/Area": "Henrico",
    "Amenities": ["History", "Nature/Visitor Center", "Parking Lot", "Playground", "Restrooms",	"Ball Fields", "Shelters/Picnic Areas"],
    "Activities": ["Geocaching", "Running"],
    "Image": "https://henrico.us/assets/short-pump-1.jpg"
  },
  {
    "id_destinations": 23,
    "Name": "Springfield Park",
    "Category": "County Park",
    "Description": "Springfield Park is located next to Springfield Park Elementary School. This unsuspecting park boasts new playground equipment, walking trails, and picnic areas.",
    "Address": "4600 Springfield Rd",
    "City": "Glen Allen",
    "State": "VA",
    "Zip": 23060,
    "County/Area": "Henrico",
    "Amenities": ["Parking Lot", "Playground", "Restrooms",	"Shelters/Picnic Areas"],
    "Activities": ["Hiking", "Geocaching", "Running"],
    "Image": "https://henrico.us/assets/springfield-park-2.jpg"
  },
  {
    "id_destinations": 24,
    "Name": "Three Lakes Park & Nature Center",
    "Category": "County Park",
    "Description": "Three Lakes Park and Nature Center bring together the three worlds of air, water, and land for visitors to explore. The Nature Center is a 6,500 square foot facility featuring a variety of exhibits designed to provide hands-on experiences. The 50,000 gallon aquarium also gives visitors a �fish-eye� view of the underwater world.\nThe exhibits in the Nature Center will introduce visitors to the plant and animal life native to the area and wildlife living in the wetlands and woodlands of the park. The park also boasts three lakes surrounded by running/biking trails, fishing spots, and wildlife views. A large playground area  and open fields give visitors a lot of space to run and play.",
    "Address": "400 Sausiluta Dr",
    "City": "Richmond",
    "State": "VA",
    "Zip": 23227,
    "County/Area": "Henrico",
    "Amenities": ["Nature/Visitor Center", "Parking Lot", "Playground",	"Restrooms", "Shelters/Picnic Areas", "River/Lake"],
    "Activities": ["Birding/Wildlife", "Fishing", "Hiking",	"Biking", "Geocaching",	"Running"],
    "Image": "https://henrico.us/assets/Three-Lakes-Nature-Center.jpg"
  },
  {
    "id_destinations": 25,
    "Name": "Tuckahoe Creek Park",
    "Category": "County Park",
    "Description": "Tuckahoe Creek Park features an boardwalk system that provides the community access to the Tuckahoe Creek area. Visitors can enjoy walking, fishing, and scenic overlooks. The boardwalk is ADA accessible so everyone can enjoy this nature experience.",
    "Address": "12341 Ridgefield Pkwy",
    "City": "Henrico",
    "State": "VA",
    "Zip": 23238,
    "County/Area": "Henrico",
    "Amenities": ["Parking Lot", "River/Lake"],
    "Activities": ["Birding/Wildlife", "Fishing", "Hiking",	"Geocaching", "Running"],
    "Image": "https://henrico.us/assets/TuckahoeCreek_feature.jpg"
  },
  {
    "id_destinations": 26,
    "Name": "Twin Hickory Park & Recreation Center",
    "Category": "County Park",
    "Description": "Twin Hickory Park, located next to Twin Hickory Library, opened in July 2014. Park features include walking trails, open play areas, multi-purpose field, landscaping, irrigation, a picnic shelter with restrooms, a playground for ages 2-5 and one for ages 6-12.  The most unique characteristic of the park is the �sprayground,� a small, whimsical, zero-depth water play feature intended for children 12 or under with adult supervision.",
    "Address": "5011 Twin Hickory Rd",
    "City": "Glen Allen",
    "State": "VA",
    "Zip": 23059,
    "County/Area": "Henrico",
    "Amenities": ["Parking Lot", "Playground", "Restrooms",	"Shelters/Picnic Areas"],
    "Activities": ["Geocaching"],
    "Image": "https://henrico.us/assets/twin_hickory_tree.jpg"
  },
  {
    "id_destinations": 27,
    "Name": "Virginia Randolph Recreation Area",
    "Category": "County Park",
    "Description": "This site features athletic fields, play equipment, tennis, basketball courts, and a picnic shelter.",
    "Address": "2175 Mountain Road",
    "City": "Glen Allen",
    "State": "VA",
    "Zip": 23060,
    "County/Area": "Henrico",
    "Amenities": ["Playground",	"Restrooms", "Ball Fields", "Shelters/Picnic Areas"],
    "Activities": ["Hiking", "Geocaching", "Running"],
    "Image": "https://henrico.us/assets/Virginia-Randolph-Lacrosse.jpg"
  },
  {
    "id_destinations": 28,
    "Name": "Varina Recreation Area",
    "Category": "County Park",
    "Description": "Varina Recreation Area is located in Henrico County's East End and boasts athletic fields, an athletic association, a playground, and picnic opportunities.",
    "Address": "8099 Recreation Rd",
    "City": "Henrico",
    "State": "VA",
    "Zip": 23231,
    "County/Area": "Henrico",
    "Amenities": ["Parking Lot", "Playground", "Restrooms",	"Ball Fields", "Shelters/Picnic Areas"],
    "Activities": ["Geocaching"],
    "Image": "https://henrico.us/assets/Varina_Rec_1.jpg"
  },
  {
    "id_destinations": 29,
    "Name": "Tredegar Street Put In",
    "Category": "",
    "Description": "East of the Belle Isle Pedestrian Bridge on Tredegar Street is a put-in and take-out for serious paddlers who can navigate the Hollywood rapids",
    "Address": "470 Tredegar St",
    "City": "Richmond",
    "State": "VA",
    "Zip": 23219,
    "County/Area": "City of Richmond",
    "Amenities": ["Parking Lot", "River/Lake", "Boat Ramp"],
    "Activities": ["Swimming", "Fishing", "Paddle Sports", "Geocaching"],
    "Image": "https://jamesriverpark.org/wp-content/uploads/2017/11/tredegar-putin2.jpg"
  },
  {
    "id_destinations": 30,
    "Name": "14th Street Takeout",
    "Category": "",
    "Description": "East of the 14th Street (Mayo) Bridge on the river side of the floodwall",
    "Address": "351 S 14th St",
    "City": "Richmond",
    "State": "VA",
    "Zip": 23219,
    "County/Area": "City of Richmond",
    "Amenities": ["Parking Lot", "River/Lake", "Boat Ramp"],
    "Activities": ["Fishing", "Paddle Sports", "Geocaching"],
    "Image": "https://jamesriverpark.org/wp-content/uploads/2017/11/14th-takeout.jpg"
  },
  {
    "id_destinations": 31,
    "Name": "Belle Isle",
    "Category": "County Park",
    "Description": "Part of the James River Park System, the main access to Belle Isle is by pedestrian footbridge from Tredegar St. on the north shore. Alternate access is by wooden bridge near 22nd St. or by rock-hopping from the south shore. Large flat rocks surrounding the island make for good sunbathing, but the powerful Hollywood Rapids are not to be toyed with and are not suitable for swimming. Children should be supervised. Additional features include wooded trails, mountain biking trails, interpreted historical sites, wheelchair-accessible fishing at the quarry pond, and a granite wall for rock climbing",
    "Address": "Tredegar St",
    "City": "Richmond",
    "State": "VA",
    "Zip": 23219,
    "County/Area": "City of Richmond",
    "Amenities": ["Parking Lot", "Restrooms", "River/Lake"],
    "Activities": ["Swimming", "Birding/Wildlife", "Fishing", "Hiking", "Biking", "Paddle Sports", "Geocaching", "Running"],
    "Image": "https://res.cloudinary.com/simpleview/image/upload/crm/richmond/Belle-Isle_ab46ff50-5056-a36a-09b1f29ea3c0d5dd.jpg"
  },
  {
    "id_destinations": 32,
    "Name": "Brown's Island",
    "Category": "County Park",
    "Description": "Brown's Island is a city favorite to view the James River and the city skyline and it also connects to Canal Walk. The island is also home to concerts, festivals, and other events.",
    "Address": "Tredegar St",
    "City": "Richmond",
    "State": "VA",
    "Zip": 23219,
    "County/Area": "City of Richmond",
    "Amenities": ["History", "Parking Lot", "Restrooms", "River/Lake", "Amphitheatre"],
    "Activities": ["Birding/Wildlife", "Hiking", "Biking", "Geocaching", "Running"],
    "Image": ""
  }
];
db.Parks
 .remove({})
 .then(() => db.Parks.collection.insertMany(parksSeed))
 .then(data => {
   console.log(data.result.n + " records inserted!");
   process.exit(0);
 })
 .catch(err => {
   console.error(err);
   process.exit(1);
 });