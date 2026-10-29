'use strict';
// Pre-generated concept photographs, not outputs generated from user input.
const photoAssets={tide0:'city0',tide1:'city1',tide2:'city2',tide3:'city3',cosmos0:'cosmos0',cosmos1:'cosmos0',cosmos2:'cosmos2',cosmos3:'cosmos2',metro:'metro',bridge:'bridge',window:'window',photos:'window',street:'city0',sunrise:'city3',studio:'studio',concert:'concert'};
art=function(key,id){const f=photoAssets[key]||'city0';return `<img class="concept-photo" src="assets/${f}.png" alt="${({city0:'城市雨夜中的示例人物',city1:'触碰水面倒影',city2:'城市退潮与晨光',city3:'独自走向清晨',cosmos0:'碎镜舞台上的示例人物',cosmos2:'星海舞台上的示例人物',metro:'深夜地铁中的示例人物',bridge:'清晨天桥上的示例人物',window:'窗边独处的示例人物',studio:'录音棚中的示例人物',concert:'街头演唱的示例人物'})[f]} · AI生成概念图" loading="${id?.startsWith('hero')?'eager':'lazy'}">`;};
