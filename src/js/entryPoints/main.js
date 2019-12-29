import '../../sass/pages/main.scss'
const anime = require('../lib/anime.min.js')

anime({
    targets: '.heading span',
    translateY : [100,0],
    opacity:[0,1],
    // easing: 'easeOutCubic',
    delay: anime.stagger(100,{start: 500})
})
