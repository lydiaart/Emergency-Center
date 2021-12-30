const {
    Post
} = require('../models');

const postdata = [{
        title: 'Wildfire nightmare captured in harrowing image of California burning',
        contents: 'THIS is what a US wildfire looks like up close. Trees and embers burn on the other side of the Bidwell Bar Bridge, which spans California’s Lake Oroville in Butte county. These appear white in the image, while the lights to the right are from a small boat.',
        user_id: 10,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Dozens Are Killed as Tornadoes and Severe Weather Strike Southern States',
        contents: 'The storm carved a destructive path across six states on Sunday and Monday, causing widespread damage and cutting power to tens of thousands of customers.',
        user_id: 8,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Serious tsunami hits Greece and Turkey after 7.0 earthquake',
        contents: 'On 30 October 2020, at 13.51 local time (11.51 UTC), an earthquake of magnitude 7.0 Mw struck off the Aegean coast of Turkey, south of Izmir, and north of the Greek island of Samos (37.91 N 26.79 E), with an estimated hypocentral depth of 21 km (USGS-United States Geological Survey). The earthquake triggered a tsunami that flooded the coastal district of Seferihisar (Turkey) and the port of Samos (Greece).',
        user_id: 1,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Earthquakes',
        contents: 'Earthquakes are the result of plate tectonics, or shifting plates in the crust of Earth, and quakes occur when the frictional stress of gliding plate boundaries builds and causes failure at a fault line. In an earthquake, elastic strain energy is released and waves radiate, shaking the ground. Scientists can predict where major temblors might occur in a general sense, but research does not yet allow forecasts for specific locations or accurate predictions of timing. Major earthquakes, some generating tsunamis, have leveled entire cities and affected whole countries. Relatively minor earthquakes can also be induced, or caused by human activity, including extraction of minerals from Earth and the collapse of large buildings.',
        user_id: 4,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: "California's 7.1 earthquake–and how earthquakes work",
        contents: 'Perferendis ipsam beatae ratione aspernatur esse suscipit officiis.',
        user_id: 7,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Molestias incidunt debitis quis fuga saepe doloribus provident id dolores repellat in.',
        contents: 'Voluptatibus aliquid, amet dolorum.',
        user_id: 4,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Quia sequi et labore qui inventore?',
        contents: 'Modi, nihil reprehenderit facere maxime nisi dolore atque?',
        user_id: 1,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Iusto facere maiores at nesciunt earum reiciendis natus aperiam aliquid consequatur.',
        contents: 'Mollitia minus fuga nobis, vitae commodi culpa similique.',
        user_id: 1,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Dolor, saepe ut.',
        contents: 'Perferendis consectetur rerum delectus.',
        user_id: 9,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Ratione iusto tenetur est dolorum corporis repudiandae veritatis placeat quaerat.',
        contents: 'Pariatur tempore culpa dolore rem veniam inventore dolorem deleniti vitae!',
        user_id: 5,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Repudiandae ea soluta inventore officiis sed.',
        contents: 'Obcaecati minus sed sunt sequi, quae itaque hic consequatur nihil omnis, et error aliquam?',
        user_id: 3,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Dolorem, enim nesciunt rem officia ducimus consequuntur consequatur laudantium esse facilis ipsum natus libero maiores a.',
        contents: 'Dignissimos non in, laboriosam beatae laudantium sunt.',
        user_id: 10,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Minima quae ullam excepturi perspiciatis alias ex doloribus deserunt accusamus aliquam amet dolor voluptatum expedita exercitationem.',
        contents: 'Velit autem veritatis porro ipsum quod possimus.',
        user_id: 8,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Voluptates mollitia provident inventore.',
        contents: 'Ullam fugiat architecto debitis aliquid itaque dolores quod.',
        user_id: 3,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Quas nihil asperiores in similique ex necessitatibus iure fugit repellat earum ea doloribus voluptates accusamus neque velit quae.',
        contents: 'Magni repellat, ex omnis, dolores provident ipsa possimus consequuntur.',
        user_id: 3,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Dignissimos voluptas explicabo a obcaecati ratione debitis asperiores!',
        contents: 'Totam officia sit voluptate quisquam?',
        user_id: 7,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Nesciunt deserunt, dolore amet quisquam culpa omnis nihil.',
        contents: 'Vitae quos culpa, magnam eum cumque molestias assumenda aliquam possimus.',
        user_id: 6,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Excepturi officiis minus suscipit consequatur, id ipsam asperiores dolor eos vel, facere rem.',
        contents: 'Repellendus corrupti quaerat in ipsum id eligendi.',
        user_id: 4,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Repellendus natus, mollitia tempora in sunt impedit!',
        contents: 'Impedit accusantium eligendi laudantium totam voluptatibus expedita commodi.',
        user_id: 6,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Eveniet facilis earum eius hic officia distinctio.',
        contents: 'Consequuntur iste explicabo, totam consectetur corporis doloribus ad!',
        user_id: 7,
        latitude: 36.7783,
        longitude: 119.4179
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;