const {
    Post
} = require('../models');

const postdata = [{
        title: "Wildfire nightmare captured in harrowing image of California burning",
        contents: "THIS is what a US wildfire looks like up close. Trees and embers burn on the other side of the Bidwell Bar Bridge, which spans California’s Lake Oroville in Butte county. These appear white in the image, while the lights to the right are from a small boat.",
        user_id: 10,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "Dozens Are Killed as Tornadoes and Severe Weather Strike Southern States",
        contents: "The storm carved a destructive path across six states on Sunday and Monday, causing widespread damage and cutting power to tens of thousands of customers.",
        user_id: 8,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "Serious tsunami hits Greece and Turkey after 7.0 earthquake",
        contents: "On 30 October 2020, at 13.51 local time (11.51 UTC), an earthquake of magnitude 7.0 Mw struck off the Aegean coast of Turkey, south of Izmir, and north of the Greek island of Samos (37.91 N 26.79 E), with an estimated hypocentral depth of 21 km (USGS-United States Geological Survey). The earthquake triggered a tsunami that flooded the coastal district of Seferihisar (Turkey) and the port of Samos (Greece).",
        user_id: 1,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "Earthquakes",
        contents: "Earthquakes are the result of plate tectonics, or shifting plates in the crust of Earth, and quakes occur when the frictional stress of gliding plate boundaries builds and causes failure at a fault line. In an earthquake, elastic strain energy is released and waves radiate, shaking the ground. Scientists can predict where major temblors might occur in a general sense, but research does not yet allow forecasts for specific locations or accurate predictions of timing. Major earthquakes, some generating tsunamis, have leveled entire cities and affected whole countries. Relatively minor earthquakes can also be induced, or caused by human activity, including extraction of minerals from Earth and the collapse of large buildings.",
        user_id: 4,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "California's 7.1 earthquake–and how earthquakes work",
        contents: "A powerful magnitude 7.1 temblor rocked Southern California at 8:19 PT on July 5, 2019, just 34 hours after a magnitude 6.4 earthquake hit the same region. This is the largest in decades, with the last temblor this large—the magnitude 7.1 Hector Mine earthquake—striking the Mojave Desert in 1999.",
        user_id: 7,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "Climate change will boost risk of extreme flooding in northern Europe",
        contents: "A flood happens when water overflows or soaks land that is normally dry. There are few places on Earth where people don’t need to be concerned about flooding.",
        user_id: 4,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "Hurricanes—Super Storms",
        contents: "When the fiercest hurricane ever recorded in the Atlantic is bearing down on you, a salvaged armchair under a wood-and-tin awning might seem a poor choice of shelter. But that's where Don E.",
        user_id: 1,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "Hurricanes",
        contents: 'Find out everything there is to know about hurricanes and stay updated on the latest news with the comprehensive articles, interactive features and pictures of hurricanes at LiveScience.com. Learn more about these natural disasters as scientists continue to make amazing discoveries about hurricanes.',
        user_id: 1,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "Storm",
        contents: "A storm is any disturbance in the atmosphere that has noticeable effects on the earth's surface. The term suggests disagreeable weather conditions that may bring discomfort, inconvenience, economic disaster and loss of human lives. In spite of that fact, storms have a generally positive effect on the environment and on human societies because they are the source of most of the rain and snow on which the planet depends.",
        user_id: 9,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "BLIZZARD",
        contents: "Most people think of a blizzard as a bad snowstorm, but a winter storm must meet certain criteria to be classified as a blizzard. According to the National Weather Service, a blizzard is a weather event that includes low temperatures, wind speeds greater than 56 kilometers (35 miles) per hour, and a large amount of falling or blowing snow that lowers visibility to 0.4 kilometers (0.25 mile) for a minimum of three hours. These whiteout conditions can cause car accidents and people on foot to become lost. Additionally, the colder temperatures that often follow a blizzard can put people at risk of frostbite or hypothermia.",
        user_id: 5,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "Traffic in Cities Is Rising but Still Largely Below Pre-Pandemic Levels",
        contents: "Traffic congestion around the U.S. is creeping back up but remains lighter than before the pandemic, according to a new analysis, a result of many workers not yet returning to the office full time despite many officials’ efforts to get people back into core business districts.",
        user_id: 3,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "4 people dead after terrible single-vehicle accident splits car in half",
        contents: "Four people have died and two people have been injured in a terrible single-vehicle accident that ended up splitting their car in half.The incident occurred at approximately 2:24 p.m. on Saturday, July 17, in Hickory Hills, Illinois, when police say a car with six people inside ended up losing control and striking a tree, according to a report from ABC News’ Chicago station WLS.",
        user_id: 10,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "Car accidents cause death, injury and trauma. Why do we shrug them off?",
        contents: "Americans don’t always fear the things we should.This summer, my dad visited us every week in the Pacific Northwest to play with the grandkids, and every week I could predict what his complaints would be: The record-breaking heat in the area was aggravating him, as was the chronic pain in his back — a deep ache still lingering from a major car accident two years ago. The common cause in these events was not lost on me.",
        user_id: 8,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "One Killed, One Seriously Injured in Single Car Accident Caused by Speeding",
        contents: "About one in three fatal crashes are caused by excessive speeding.  According to the National Highway Transportation Safety Association (NHTSA) it is the third leading contributing factor to traffic crashes.",
        user_id: 3,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "Waterloo police say missing child has been found",
        contents: "Waterloo Regional Police say a child who had been missing since Monday afternoon has been found. In a tweet on Tuesday morning, police said the 12-year-old was last seen on Monday at 3 p.m. in the area of Massuer Avenue in Kitchener. Police add they wanted to check on his wellbeing but provided no other details. In a second tweet, police said the boy had been safely located and the service thanked the public for their assistance.",
        user_id: 3,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "A Story of Hope",
        contents: "Elieth Samara was abducted when she was just 19 days old. For 33 long hours, her mother lived a nightmare until she was reunited with her daughter thanks to the tireless investigation of ICMEC and our allies around the globe. Watch this powerful story of heartbreak and hope.",
        user_id: 7,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "The most confounding missing children's case in Canadian history",
        contents: "Michael disappeared at the peak of a trend in rising crime that had been hitting Canada since the 1960s. In between 1983 and 1992, Canada’s rate of child abductions increased by 65 per cent. But unlike most of those disappearances, there were no family members within the Dunahee family with designs on abducting Michael. And while B.C. in this era was cursed by the occasional serial killer targeting children, none were known to be in the vicinity of Vancouver Island at this time.",
        user_id: 6,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "U.S. Marshals say they found 39 missing children in Georgia during two-week operation",
        contents: "The U.S. Marshals Service found 39 missing children in Georgia over two weeks in a mission known as 'Operation Not Forgotten,' the agency announced in a press release Thursday. The operation led to the rescue of 26 children and the safe location of 13 others.",
        user_id: 4,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "FROM BURNING SANDS TO BALTIC GAVEL: IMPRESSIONS FROM AN EVOLVING WARGAME",
        contents: "As coalition forces fight to stop Russian invaders moving through Latvia, Estonia, and Lithuania, commercial drones fly over the battlespace and Russian fifth columns conduct sabotage operations against critical infrastructure and supply lines. The Joint Task Force commander seeks legal advice from the judge advocate—can she refuse permission to media outlets to fly drones in the area? Take counter action against drones in the air? On what basis could coalition forces detain ethnic Russians?",
        user_id: 6,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "OVER-THE-HORIZON OPERATIONS PART II: WHERE MAY FORCE BE USED?",
        contents: "Part I of this series examined the issue of when the United States would enjoy a legal right to conduct over-the-horizon (OTH) operations. It identified three bases for such operations: UN Charter Chapter VII authorization or mandate, self-defense, and request from the government of the State into which they are conducted.",
        user_id: 7,
        latitude: 36.7783,
        longitude: 119.4179
        title: 'Ea assumenda at odit illum sunt, non harum quo alias ratione quasi dolorem blanditiis quae aliquid error!',
        contents: 'A fuga, labore natus commodi nihil deserunt deleniti perferendis earum atque harum et.',
        latitude: -121.4382363,
        longitude: 38.55828251,
        user_id: 10
    },
    {
        title: 'Laborum vero veritatis alias velit?',
        contents: 'Minima officia doloremque sapiente animi voluptate incidunt natus obcaecati alias, consectetur magni molestiae, eveniet architecto, provident odit.',
        latitude: -121.3608249,
        longitude: 38.54725066,
        user_id: 8
    },
    {
        title: 'Nemo temporibus tempora perferendis animi dolorum vitae laborum?',
        contents: 'Inventore asperiores doloremque incidunt accusantium repellat.',
        latitude: -121.4977545,
        longitude: 38.62717862,
        user_id: 1
    },
    {
        title: 'Dolor quaerat repellat, autem doloremque impedit soluta consequuntur corporis maxime.',
        contents: 'Consectetur distinctio dolorem nulla, ipsam rerum natus delectus est eum eveniet temporibus vitae.',
        latitude: -121.4108034,
        longitude: 38.48156766,
        user_id: 4
    },
    {
        title: 'Voluptatibus.',
        contents: 'Perferendis ipsam beatae ratione aspernatur esse suscipit officiis.',
        latitude: -121.393252,
        longitude: 38.5959,
        user_id: 7
    },
    {
        title: 'Molestias incidunt debitis quis fuga saepe doloribus provident id dolores repellat in.',
        contents: 'Voluptatibus aliquid, amet dolorum.',
        latitude: -121.4851324,
        longitude: 38.56812481,
        user_id: 4
    },
    {
        title: 'Quia sequi et labore qui inventore?',
        contents: 'Modi, nihil reprehenderit facere maxime nisi dolore atque?',
        latitude: -121.4851324,
        longitude: 38.63812481,
        user_id: 1
    },
    {
        title: 'Iusto facere maiores at nesciunt earum reiciendis natus aperiam aliquid consequatur.',
        contents: 'Mollitia minus fuga nobis, vitae commodi culpa similique.',
        latitude: -121.3645247,
        longitude: 38.59559208,
        user_id: 1
    },
    {
        title: 'Dolor, saepe ut.',
        contents: 'Perferendis consectetur rerum delectus.',
        latitude: -121.409598,
        longitude: 38.481463,
        user_id: 9
    },
    {
        title: 'Ratione iusto tenetur est dolorum corporis repudiandae veritatis placeat quaerat.',
        contents: 'Pariatur tempore culpa dolore rem veniam inventore dolorem deleniti vitae!',
        latitude: -121.45672,
        longitude: 38.643417,
        user_id: 5
    },
    {
        title: 'Repudiandae ea soluta inventore officiis sed.',
        contents: 'Obcaecati minus sed sunt sequi, quae itaque hic consequatur nihil omnis, et error aliquam?',
        latitude: -121.45546,
        longitude: 38.570354,
        user_id: 3
    },
    {
        title: 'Dolorem, enim nesciunt rem officia ducimus consequuntur consequatur laudantium esse facilis ipsum natus libero maiores a.',
        contents: 'Dignissimos non in, laboriosam beatae laudantium sunt.',
        latitude: -121.50334,
        longitude: 38.491264,
        user_id: 10
    },
    {
        title: 'Minima quae ullam excepturi perspiciatis alias ex doloribus deserunt accusamus aliquam amet dolor voluptatum expedita exercitationem.',
        contents: 'Velit autem veritatis porro ipsum quod possimus.',
        latitude: -121.467017,
        longitude: 38.568113,
        user_id: 8
    },
    {
        title: 'Voluptates mollitia provident inventore.',
        contents: 'Ullam fugiat architecto debitis aliquid itaque dolores quod.',
        latitude: -121.3363025,
        longitude: 38.55813566,
        user_id: 3
    },
    {
        title: 'Quas nihil asperiores in similique ex necessitatibus iure fugit repellat earum ea doloribus voluptates accusamus neque velit quae.',
        contents: 'Magni repellat, ex omnis, dolores provident ipsa possimus consequuntur.',
        latitude: -121.403817,
        longitude: 38.452463,
        user_id: 3
    },
    {
        title: 'Dignissimos voluptas explicabo a obcaecati ratione debitis asperiores!',
        contents: 'Totam officia sit voluptate quisquam?',
        latitude: -121.500391,
        longitude: 38.57962002,
        user_id: 7
    },
    {
        title: 'Nesciunt deserunt, dolore amet quisquam culpa omnis nihil.',
        contents: 'Vitae quos culpa, magnam eum cumque molestias assumenda aliquam possimus.',
        latitude: -121.5035056,
        longitude: 38.48126529,
        user_id: 6
    },
    {
        title: 'Excepturi officiis minus suscipit consequatur, id ipsam asperiores dolor eos vel, facere rem.',
        contents: 'Repellendus corrupti quaerat in ipsum id eligendi.',
        latitude: -121.4146994,
        longitude: 38.57292985,
        user_id: 4
    },
    {
        title: 'Repellendus natus, mollitia tempora in sunt impedit!',
        contents: 'Impedit accusantium eligendi laudantium totam voluptatibus expedita commodi.',
        latitude: -121.410123,
        longitude: 38.574609,
        user_id: 6
    },
    {
        title: 'Eveniet facilis earum eius hic officia distinctio.',
        contents: 'Consequuntur iste explicabo, totam consectetur corporis doloribus ad!',
        latitude: -121.3828844,
        longitude: 38.5753853,
        user_id: 7
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;