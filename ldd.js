const notes = [
    {
        avatarURL: 'avatar/1.jpg',  // 头像图片路径
        username: 'SustainableSoul',       // 用户名
        title: '家庭节能小妙招',            // 标题
        date: '2023-10-07',               // 日期
        text: '节能减碳是我们每个人的责任。今天，我想分享一些家庭节能的小妙招，既实用又简单，希望大家都能在日常生活中轻松实践。\n（一）充电后及时拔掉充电器，减少对电的浪费。 （二）采用节能灯，夏天空调温度不低于26℃、冬天空调温度不高于20℃，这样可以大大地节约能源。 （三）用便携环保餐具自带午餐，不用一次性餐具。 （四）在刷牙时把水龙头关上，即使是漏滴，10天就能漏掉一吨水。' // 帖子正文
    },
    {
        avatarURL: 'avatar/5.jpg',  // 头像图片路径
        username: 'GreenGardener',         // 用户名
        title: '家庭园艺与环保',            // 标题
        date: '2023-10-09',               // 日期
        text: '家庭园艺不仅能美化我们的居住环境，还能为环保做出贡献。通过种植绿色植物，我们可以净化空气、减少噪音，并享受大自然的美好。\n家庭园艺，顾名思义，是在家庭环境中进行的园艺活动，包括种植花草、蔬菜、果树等。当一抹抹鲜绿跃然于阳台、窗台或庭院之中，那份来自大自然的清新与活力便悄然渗透进我们的生活。这些绿色植物不仅美化了空间，更以其独特的生命力，让人感受到生命的顽强与美好，仿佛是大自然对我们最真挚的馈赠。' // 帖子正文
    },
    {
        avatarURL: 'avatar/6.jpg',  // 头像图片路径
        username: 'EcoWarrior4Life',      // 用户名
        title: '节水小贴士：日常生活中的水资源保护',  // 标题
        date: '2023-10-11',              // 日期
        text: '水，是生命之源，也是地球上最宝贵的资源之一。在日常生活中，我们可以通过一些简单的方法来保护水资源，减少浪费。比如，修理漏水的水龙头和管道，使用节水型洗衣机和洗碗机，收集雨水用于浇花或冲厕所，以及养成关闭水龙头的好习惯，避免不必要的长流水。这些小小的行动，都能为节水做出贡献。' // 帖子正文
    },
    {
        avatarURL: 'avatar/7.jpg',  // 头像图片路径
        username: 'GreenLivingGuru',      // 用户名
        title: '二手物品的魅力：环保又省钱',    // 标题
        date: '2023-10-13',              // 日期
        text: '购买二手物品，不仅是一种经济实惠的选择，更是一种环保的生活方式。通过购买二手书籍、衣物、家具等，我们可以减少对新资源的需求，降低生产过程中的能耗和排放。同时，二手物品的再利用也减少了垃圾的产生，有助于减轻环境压力。在二手市场上，你或许还能发现一些独特的宝藏，为你的生活增添一份别样的乐趣。' // 帖子正文
    },
    {
        avatarURL: 'avatar/8.jpg',  // 头像图片路径
        username: 'EcoChicFashionista',  // 用户名
        title: '可持续时尚：环保也能很时尚',    // 标题
        date: '2023-10-15',              // 日期
        text: '时尚与环保并不矛盾。如今，越来越多的设计师和品牌开始关注可持续时尚，通过采用环保材料、推广二手服装交易、延长产品生命周期等方式，减少时尚产业对环境的影响。作为消费者，我们可以选择购买环保认证的服装，支持可持续时尚品牌，同时也可以通过自己的创意和巧手，将旧衣物改造成新款式，让时尚与环保并行不悖。' // 帖子正文
    },
    {
        avatarURL: 'avatar/9.jpg',  // 头像图片路径
        username: 'GreenTechExplorer',   // 用户名
        title: '绿色科技：用科技守护地球',    // 标题
        date: '2023-10-17',              // 日期
        text: '绿色科技，正逐渐成为守护地球的重要力量。从太阳能光伏板到智能家居系统，从电动汽车到环保建筑材料，绿色科技的应用正在不断改变我们的生活方式，减少对环境的影响。作为科技爱好者，我们可以关注绿色科技的发展动态，选择使用环保科技产品，为地球的可持续发展贡献自己的一份力量。' // 帖子正文
    },
    {
        avatarURL: 'avatar/10.jpg', // 头像图片路径
        username: 'NatureNurturer',       // 用户名
        title: '自然观察：与大自然亲密接触',    // 标题
        date: '2023-10-19',              // 日期
        text: '走进大自然，观察身边的动植物，是一种既放松又环保的活动。通过自然观察，我们可以更深入地了解生态系统的运作，感受大自然的神奇与美丽。无论是城市中的公园绿地，还是郊外的山林湖泊，都是进行自然观察的好去处。带上你的相机或画笔，记录下你观察到的自然景象，让这份对大自然的热爱和敬畏，成为你环保行动的动力。' // 帖子正文
    }
];

const noteContainer = document.getElementById('note-container');

//防止 XSS 攻击。
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

window.onload = () => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.innerHTML = `
            <img src="${escapeHtml(note.avatarURL)}" alt="${escapeHtml(note.username)}" width="80" height="80" />
            <div class="note-info">
                <span class="note-username">${escapeHtml(note.username)}</span>
                <span class="note-date">${escapeHtml(note.date)}</span>
                <p class="note-title"><b>${escapeHtml(note.title)}</b></p>
                <p class="note-text">${escapeHtml(note.text)}</p>
            </div>
        `;
        fragment.appendChild(noteElement);
    }
    noteContainer.appendChild(fragment);
}