const currencyList = require("../js/currencyList")
const storage = require("../js/storage.js")
const coinUtil = require("../js/coinUtil")
const ext = require("../js/extension.js")
module.exports=require("../js/lang.js")({ja:require("./ja/manageCoin.html"),en:require("./en/manageCoin.html")})({
  data:()=>({
    coins:[],
    loading:false,
    requirePassword:false,
    password:"",
    incorrect:false,
    infoDlg:false,
    editDlg:false,
    info:{
      blocks:[],
      coinId:"",
      unit:"",
      apiEndpoint:""
    },
    c:{},
    resetCur:false,

    extensions:[],
    unsaved:false
  }),
  methods:{
    push(){
      this.$emit("push",require("./send.js"))
    },
    
    
    operateCoins(){
      const curs=[]
      this.loading=true
      this.coins.forEach(v=>{
        if(v.usable){
          curs.push(v.coinId)
        }
      })
      this.requirePassword=false
      

      
      coinUtil.shortWait()
        .then(()=>storage.get("keyPairs"))
        .then((cipher)=>coinUtil.makePairsAndEncrypt({
          entropy:coinUtil.decrypt(cipher.entropy,this.password),
          password:this.password,
          makeCur:curs
        }))
        .then((data)=>storage.set("keyPairs",data))
        .then((cipher)=>{
          this.password=""
          this.$emit("replace",require("./login.js"))

          storage.get("settings").then(s=>{
            if (!s.enabledExts) {
              s.enabledExts=[]
            }
            this.extensions.forEach(v=>{
              v.usable&&s.enabledExts.push(v.id)
            })
            storage.set("settings",s)
            this.$store.commit("setSettings",s)
          })
        }).catch(()=>{
          this.password=""
          this.requirePassword=true
          this.loading=false
          this.incorrect=true
          setTimeout(()=>{
            this.incorrect=false
          },3000)
        })
    },
    showInfo(coinId){
      this.infoDlg=true
      const cur=currencyList.get(coinId)
      Object.assign(this.info,{
        blocks:[],
        coinId:cur.coinId,
        unit:cur.unit,
        apiEndpoint:cur.apiEndpoint
      })
      cur.getBlocks().then(r=>{
        this.info.blocks=r
      })
    },
    editCoinParam(coinId){
      this.editDlg=true
      const cur=currencyList.get(coinId)
      this.$set(this,"c",{
        coinScreenName:cur.coinScreenName,
        coinId:cur.coinId,
        unit:cur.unit,
        unitEasy:cur.unitEasy,
        bip44:cur.bip44||{},
        bip49:cur.bip49||{},
        bip21:cur.bip21,
        defaultFeeSatPerByte:cur.defaultFeeSatPerByte|0,
        icon:cur.icon,
        apiEndpoints:[{
          url:cur.apiEndpoints[0].url,
          explorer:cur.apiEndpoints[0].explorer
        }],
        network:{
          messagePrefix: cur.network.messagePrefix,
          bip32: {
            public: cur.network.bip32.public|0,
            
            private: cur.network.bip32.private|0
          },
          pubKeyHash: cur.network.pubKeyHash|0,
          scriptHash: cur.network.scriptHash|0,
          wif: cur.network.wif|0
        },
        
        enableSegwit:cur.enableSegwit,
        lib:cur.libName,
        price:cur.price||{},
        confirmations:6,
        counterpartyEndpoint:cur.counterpartyEndpoint
      })
      
    },
    changeServer(){
      const cur=currencyList.get(this.info.coinId)
      cur.changeApiEndpoint()
      this.showInfo(this.info.coinId)
    },
    openBlock(h){
      currencyList.get(this.info.coinId).openExplorer({blockHash:h})
    },
    save(coinId){
      storage.get("customCoins").then(r=>{
        r=r||[]
        const n = this.c.network
        n.bip32.public = n.bip32.public|0
        n.bip32.private = n.bip32.private|0
        n.pubKeyHash = n.pubKeyHash|0
        n.scriptHash = n.scriptHash|0
        n.wif = n.wif|0
        r.push(this.c)
        this.editDlg=false
        return storage.set("customCoins",r)
      })
    },
    reset(){
      this.resetCur=false
      return storage.set("customCoins",[])
    },
    edited(){
      this.unsaved=true
    }
  },
  
  store:require("../js/store.js"),

  computed:{
    
    messagePrefix:{
      get(){
        return JSON.stringify(this.c.network.messagePrefix).slice(1,-1)
      },set(d){
        try{
          this.c.network.messagePrefix = eval("'"+ d +"'")//シングルクオートで囲っているのでevalしてもセーフなはず
        }catch(e){
          this.c.network.messagePrefix = ""
        }
      }
    },
    enableSegwit:{
      get(){
        return this.c.enableSegwit==="legacy"
      },
      set(d){
        return !!(this.c.enableSegwit=d?"legacy":false)
      }
    }
  },
  created(){
    this.curs=[]
      this.fiatConv=0
      currencyList.each(cur=>{
        this.coins.push({
          coinId:cur.coinId,
          screenName:cur.coinScreenName,
          icon:cur.icon,
          usable:!!cur.hdPubNode
        })
      })

    storage.get("settings").then(d=>{
      if (!d.enabledExts) {
        d.enabledExts=[]
      }
      ext.each(x=>{
        this.extensions.push({
          id:x.id,
          name:x.name,
          icon:x.icon,
          usable:!!~d.enabledExts.indexOf(x.id)
        })
      })
      this.unsaved=false
    })
  }
});






