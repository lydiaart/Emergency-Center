const {
    Comment
} = require('../models');

const commentdata = [{
        comment_text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        user_id: 6,
        post_id: 1
    },
    {
        comment_text: 'Esse facere nemo mollitia iusto eveniet eum maxime nesciunt rem architecto fugiat quas, veniam repudiandae unde minus iste commodi omnis sapiente fugit.',
        user_id: 6,
        post_id: 8
    },
    {
        comment_text: 'Earum at hic, veritatis beatae natus quas nesciunt blanditiis aliquid quasi porro vitae ea, nulla inventore libero impedit fugiat necessitatibus quo quis atque.',
        user_id: 3,
        post_id: 10
    },
    {
        comment_text: 'Magni, et dolores! Modi voluptates porro laborum.',
        user_id: 3,
        post_id: 18
    },
    {
        comment_text: 'Possimus at pariatur illo vero animi illum unde nulla tenetur explicabo magnam suscipit nesciunt doloribus architecto ipsam, natus aliquid dolore aliquam.',
        user_id: 7,
        post_id: 5
    },
    {
        comment_text: 'Soluta ad itaque culpa vitae odit totam quod fugiat.',
        user_id: 1,
        post_id: 20
    },
    {
        comment_text: 'Officiis ex ad omnis debitis at, quia nostrum fuga animi quod laboriosam deleniti, ea tenetur cupiditate dignissimos aliquid ut sed reiciendis illum illo modi, tempore dicta quaerat.',
        user_id: 6,
        post_id: 7
    },
    {
        comment_text: 'Aut, debitis at.',
        user_id: 7,
        post_id: 4
    },
    {
        comment_text: 'Pariatur ratione qui nisi minima at, recusandae consequatur, ea quae doloremque explicabo voluptates.',
        user_id: 6,
        post_id: 12
    },
    {
        comment_text: 'Accusamus eum animi dignissimos sequi ducimus, voluptate suscipit, repudiandae fugit soluta facilis beatae impedit laboriosam, ipsam possimus.',
        user_id: 6,
        post_id: 20
    },
    {
        comment_text: 'Temporibus commodi maiores recusandae veritatis facere?',
        user_id: 3,
        post_id: 14
    },
    {
        comment_text: 'Velit illum magnam porro libero reiciendis, minus quasi temporibus dolor.',
        user_id: 5,
        post_id: 4
    },
    {
        comment_text: 'Ducimus, adipisci illum.',
        user_id: 4,
        post_id: 9
    },
    {
        comment_text: 'Consequatur quae consectetur libero inventore blanditiis alias ipsum nihil eveniet delectus?',
        user_id: 5,
        post_id: 14
    },
    {
        comment_text: 'Quisque porta volutpat erat.',
        user_id: 6,
        post_id: 2
    },
    {
        comment_text: 'Quod perspiciatis illum quos officiis ad cupiditate architecto voluptatem vel doloremque fugit.',
        user_id: 8,
        post_id: 2
    },
    {
        comment_text: 'Beatae inventore eius accusamus dolore omnis repudiandae veniam cum consectetur repellendus rem nisi.',
        user_id: 2,
        post_id: 20
    },
    {
        comment_text: 'Nobis quis praesentium tempora enim.',
        user_id: 4,
        post_id: 11
    },
    {
        comment_text: 'Animi, beatae. Sed, autem dignissimos id nobis sunt facere.',
        user_id: 5,
        post_id: 13
    },
    {
        comment_text: 'Distinctio praesentium dolores, excepturi cumque optio unde quis magnam quisquam harum assumenda.',
        user_id: 9,
        post_id: 16
    },
    {
        comment_text: 'Curabitur convallis.',
        user_id: 6,
        post_id: 4
    },
    {
        comment_text: 'Esse ratione voluptate, ducimus vel nemo error amet excepturi?',
        user_id: 4,
        post_id: 10
    },
    {
        comment_text: 'Morbi non quam nec dui luctus rutrum.',
        user_id: 3,
        post_id: 8
    },
    {
        comment_text: 'Assumenda numquam eius dignissimos quaerat nesciunt.',
        user_id: 8,
        post_id: 10
    },
    {
        comment_text: 'Excepturi quasi nobis reprehenderit atque exercitationem commodi vel magni velit earum culpa!',
        user_id: 1,
        post_id: 15
    },
    {
        comment_text: 'Sint beatae facere exercitationem alias tempore voluptatibus eius maxime officia nam.',
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: 'Fugit!',
        user_id: 1,
        post_id: 15
    },
    {
        comment_text: 'Exercitationem necessitatibus quae beatae saepe quaerat illum iure?',
        user_id: 4,
        post_id: 16
    },
    {
        comment_text: 'Blanditiis voluptate modi inventore necessitatibus odit dicta quos voluptas vel, aut ab illo soluta labore minus praesentium magni!',
        user_id: 4,
        post_id: 18
    },
    {
        comment_text: 'A odit quo consectetur.',
        user_id: 4,
        post_id: 10
    },
    {
        comment_text: 'Sed ante. Vivamus tortor.',
        user_id: 7,
        post_id: 5
    },
    {
        comment_text: 'Autem in vitae perspiciatis dolores sapiente harum quam minima sit maxime eaque.',
        user_id: 10,
        post_id: 1
    },
    {
        comment_text: 'Modi nulla fuga doloribus possimus beatae quidem vel doloremque minus ea animi tempore facere laboriosam veniam perferendis.',
        user_id: 3,
        post_id: 19
    },
    {
        comment_text: 'Facilis.',
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: 'Blanditiis iure quasi consectetur id facere officia eaque odio.',
        user_id: 10,
        post_id: 14
    },
    {
        comment_text: 'Accusamus aperiam, minus corporis doloremque excepturi.',
        user_id: 10,
        post_id: 8
    },
    {
        comment_text: 'Dolores omnis magni placeat a repellat iste obcaecati adipisci dolorem sed!',
        user_id: 10,
        post_id: 11
    },
    {
        comment_text: 'Dolore in quisquam enim.',
        user_id: 8,
        post_id: 5
    },
    {
        comment_text: 'Neque quaerat delectus sapiente rerum sit!',
        user_id: 8,
        post_id: 19
    },
    {
        comment_text: 'Atque incidunt minima adipisci itaque, optio, harum excepturi ab.',
        user_id: 9,
        post_id: 19
    },
    {
        comment_text: 'Cupiditate culpa quod impedit labore soluta sit reprehenderit tempore.',
        user_id: 5,
        post_id: 4
    },
    {
        comment_text: 'Praesentium in voluptatem magnam ab eius?',
        user_id: 2,
        post_id: 11
    },
    {
        comment_text: 'Numquam quia perspiciatis fuga alias nesciunt itaque ab dolor id cupiditate.',
        user_id: 4,
        post_id: 6
    },
    {
        comment_text: 'Quidem, repellendus quae, dolorem accusamus facilis consequuntur optio ullam earum obcaecati deleniti temporibus ratione.',
        user_id: 9,
        post_id: 6
    },
    {
        comment_text: 'Obcaecati sed rerum odio soluta?',
        user_id: 7,
        post_id: 9
    },
    {
        comment_text: 'Consectetur facere, earum unde odio distinctio libero assumenda doloremque nisi suscipit adipisci iure.',
        user_id: 4,
        post_id: 19
    },
    {
        comment_text: 'Cum ipsa quasi pariatur voluptates perspiciatis quaerat magnam inventore?',
        user_id: 10,
        post_id: 1
    },
    {
        comment_text: 'Saepe numquam modi, ea perferendis atque praesentium aspernatur!',
        user_id: 2,
        post_id: 19
    },
    {
        comment_text: 'Fugit ducimus fugiat praesentium aliquid modi eius molestiae recusandae ratione, sapiente totam, velit tempore nobis?.',
        user_id: 10,
        post_id: 1
    },
    {
        comment_text: 'Nihil tempora facere sint repellendus dolor quasi sed, suscipit, provident id vero quas qui voluptatum?',
        user_id: 10,
        post_id: 12
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;