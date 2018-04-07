const Title = require("./title")
const axios = require('axios');
const coinUtil=require("../js/coinUtil")

const defaultTitles=[{
  cpCoinId:"btc",//Monaparty
  titleId:"cp",
  titleName:"Counterparty",
  apiVer:false,
  icon:require("../res/coins/xcp.png")
},{
  cpCoinId:"mona",//Monaparty
  titleId:"monacard",
  titleName:"Card on Monacoin",
  apiVer:1,
  apiEndpoint:"https://card.mona.jp/api",
  icon:require("../res/coins/xmp.png")
}]

let titles={}
/**
 * Get supported titles
 * @param {function} fn(Title).
 */
exports.each=(fn)=>{
  
  for(let titleName in titles){
    if(titles[titleName] instanceof Title){
      fn(titles[titleName])
    }
  }
}

/**
 * Get a title from title ID
 * @param {String} titleId.
 */
exports.get=titleId=>{
    
  if((titles[titleId] instanceof Title)){
    return titles[titleId]
  }
}

exports.getTitleList=()=>{
  return titles
}

exports.init =customTitles=>{
  titles={}
  for(let i = 0;i<defaultTitles.length;i++){
    const defCoin = defaultTitles[i]
    titles[defCoin.titleId]=new Title(defCoin)
  }
  for(let i = 0;i<customTitles.length;i++){
    const defCoin = customTitles[i]
    titles[defCoin.titleId]=new Title(defCoin)
  }
}
