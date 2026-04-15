function switchPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    
    document.getElementById('page-' + pageId).classList.add('active');
    document.getElementById('link-' + pageId).classList.add('active');
}

const careerData = [
    { name: "資訊科技", pr: 61 }, { name: "藝文傳播", pr: 56 },
    { name: "科學工程", pr: 56 }, { name: "製造工程", pr: 50 },
    { name: "物流運輸", pr: 41 }, { name: "休閒餐旅", pr: 37 },
    { name: "建築營造", pr: 28 }, { name: "財務金融", pr: 28 }
];

function init() {
    const grid = document.getElementById('career-grid');
    careerData.forEach(c => {
        grid.innerHTML += `<div class="c-item"><span>${c.name}</span><span class="c-pr">PR ${c.pr}</span></div>`;
    });

    new Chart(document.getElementById('radarChart'), {
        type: 'radar',
        data: {
            labels: ['R 實用', 'I 研究', 'A 藝術', 'S 社會', 'E 企業', 'C 事務'],
            datasets: [{
                label: '許慈 職業性格',
                data: [5, 4, 5, 3, 1, 1],
                backgroundColor: 'rgba(9, 132, 227, 0.2)',
                borderColor: '#0984e3'
            }]
        },
        options: { maintainAspectRatio: false }
    });
}

window.onload = init;