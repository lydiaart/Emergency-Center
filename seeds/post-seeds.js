const {
    Post
} = require('../models');

const postdata = [{
        title: 'Ea assumenda at odit illum sunt, non harum quo alias ratione quasi dolorem blanditiis quae aliquid error!',
        contents: 'A fuga, labore natus commodi nihil deserunt deleniti perferendis earum atque harum et.',
        user_id: 10,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Laborum vero veritatis alias velit?',
        contents: 'Minima officia doloremque sapiente animi voluptate incidunt natus obcaecati alias, consectetur magni molestiae, eveniet architecto, provident odit.',
        user_id: 8,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Nemo temporibus tempora perferendis animi dolorum vitae laborum?',
        contents: 'Inventore asperiores doloremque incidunt accusantium repellat.',
        user_id: 1,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Dolor quaerat repellat, autem doloremque impedit soluta consequuntur corporis maxime.',
        contents: 'Consectetur distinctio dolorem nulla, ipsam rerum natus delectus est eum eveniet temporibus vitae.',
        user_id: 4,
        latitude: 36.7783,
        longitude: 119.4179
    },
    {
        title: 'Voluptatibus.',
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