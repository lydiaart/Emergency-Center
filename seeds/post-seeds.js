const {
    Post
} = require('../models');

const postdata = [{
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