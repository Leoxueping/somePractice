let res = '1465623.4567894435'.replace(/(\.(\d{3})+)/g, '$1,').replace(/(\d)(?=(\d{3})+[\.\,])/g, '$1,')
console.log(res)
let pattern = /(([^?&=]+)(?:=([^?&=]*))*)/g/*匹配URL查询字符*/