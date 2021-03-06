const storage=require("../js/storage")
const lang = require("../js/lang.js")
const qListJa=[
	{
		"text": "言語を選んでください",
		"answers": [
			{
				"label": "日本語",
				"value": "ja",
				"to": 1
			},
			{
				"label": "English",
				"value": "en",
				"to": -4
			}
		]
	},
	{
		"text": "以前にこのアプリケーションを利用したことがありますか？",
		"answers": [
			{
				"label": "ないです(迫真)",
				"value": false,
				"to": 2
			},
			{
				"label": "ありますねぇ！",
				"value": true,
				"to": -3
			}
		]
	},
	{
		"text": "開発者である私と一緒に始めましょう！",
		"answers": [
			{
				"label": "はいっ！！",
				"value": true,
				"to": 3
			},
			{
				"label": "やだよそんなの",
				"value": false,
				"to": -2
			}
		]
	},
	{
		"text": "「モナコイン」といえば",
		"answers": [
			{
				"label": "今初めて聞いた",
				"value": 0,
				"to": 4
			},
			{
				"label": "モナーから派生したやつ？",
				"value": 1,
				"to": 4
			},
			{
				"label": "Twitterで変なひとがくれるやつ？",
				"value": 2,
				"to": 4
			},
			{
				"label": "暴騰したと聞きました",
				"value": 3,
				"to": 4
			},
			{
				"label": "どんどこわっしょーい",
				"value": 4,
				"to": 5
			},
			{
				"label": "脇山珠美ちゃんかわいい！",
				"value": 5,
				"to": 6
			}
		]
	},
	{
		"text": "「暗号通貨」といえば",
		"answers": [
			{
				"label": "今初めて聞いた",
				"value": 0,
				"to": 7
			},
			{
				"label": "電子マネー",
				"value": 1,
				"to": 7
			},
			{
				"label": "ビットコイン",
				"value": 2,
				"to": 5
			},
			{
				"label": "詐欺",
				"value": 3,
				"to": 7
			},
			{
				"label": "仮想通貨のこと？",
				"value": 4,
				"to": 7
			},
			{
				"label": "海外送金に便利",
				"value": 5,
				"to": 5
			},
			{
				"label": "Blockchain",
				"value": 6,
				"to": 5
			}
		]
	},
	{
		"text": "好きな暗号通貨は?",
		"answers": [
			{
				"label": "この中にない",
				"value": "none",
				"to": 8
			},
			{
				"label": "モナコイン",
				"value": "mona",
				"to": 8
			},
			{
				"label": "ビットコイン",
				"value": "btc",
				"to": 8
			},
			{
				"label": "和風",
				"value": "zny",
				"to": 8
			},
			{
				"label": "ワールドコンピュータの燃料",
				"value": "eth",
				"to": 8
			},
			{
				"label": "Proof of Importanceで増えるやつ",
				"value": "xem",
				"to": 8
			},
			{
				"label": "国際送金ネットワークの基軸通貨",
				"value": "xrp",
				"to": 8
			}
		]
	},
	{
		"text": "だいたい察した。大丈夫ですね。",
		"answers": [
			{
				"label": "次へ",
				"value": 1,
				"to": -1
			}
		]
	},
	{
		"text": "暗号通貨とは、「暗号」のトリックを利用し、\n改ざんができない\n・安全\n・国家の支配によらない\n「通貨」すなわちお金です。\nこれは日本円、米ドルなどとは独立し、独自の価値をもちます。",
		"answers": [
			{
				"label": "わかった",
				"value": "understood",
				"to": 8
			},
			{
				"label": "難しいなあ",
				"value": "difficult",
				"to": 8
			}
		]
	},
	{
		"text": "表示する単位は何にしますか？\n(あとで変更できます。)",
		"answers": [
			{
				"label": "MONA,JPYなど通貨コード",
				"value": 0,
				"to": 9
			},
			{
				"label": "もにゃ,円など親しみやすい形式",
				"value": 1,
				"to": 9
			}
		]
	},
	{
		"text": "利用目的はなんですか？",
		"answers": [
			{
				"label": "業務用",
				"value": 1,
				"to": 10
			},
			{
				"label": "個人用途",
				"value": 0,
				"to": 10
			}
		]
	},
	{
		"text": "やってもいいことは何？",
		"answers": [
			{
				"label": "この中にやってもいいものはない",
				"value": 3,
				"to": 12
			},
			{
				"label": "「秘密鍵」画面をスクリーンショット",
				"value": 0,
				"to": 11
			},
			{
				"label": "このアプリの初期設定を友達などの他人にやってもらう",
				"value": 1,
				"to": 11
			},
			{
				"label": "「秘密鍵」を付箋に書いてデスクに貼っておく",
				"value": 1,
				"to": 11
			},
			{
				"label": "パスワードを「123456」を設定する",
				"value": 2,
				"to": 11
			}
		]
	},
	{
		"text": "それは行ってはいけません！！\n「秘密鍵」というものは、文字通り、秘密にしなければいけない鍵です。\nこの「秘密鍵」は、お金を金庫から取り出す時のように、あなたが持つモナコインを利用するために使う鍵です。\n紛失すると、コインを使えなくなり、\n誰かに盗まれたら、その人にコインを悪用されます。\nそのために、スクリーンショット、コピー＆貼り付けでデータを保存せず、\n秘密鍵は、自力で紙に手書きして、その紙を、安全な場所に保管してください。\n鍵を保護するためのパスワードも強固なものにしてください。\n手書きと聞いて、面倒臭そうだと思った方もいらっしゃると思いますが、\n簡単にできる工夫がされていますので、ご安心ください。",
		"answers": [
			{
				"label": "戻る",
				"value": 1,
				"to": 10
			}
		]
	},
	{
		"text": "「秘密鍵」というものは、文字通り、秘密にしなければいけない鍵です。\nスクリーンショット、コピー＆貼り付けでデータを保存せず、\n秘密鍵は、自力で紙に手書きして、その紙を、安全な場所に保管してください。\nこれで質問は以上です。",
		"answers": [
			{
				"label": "次へ",
				"value": 0,
				"to": -1
			}
		]
	}
]

const qListEn=[
	{
		"text": "Please select a language.",
		"answers": [
			{
				"label": "日本語",
				"value": "ja",
				"to": -4
			},
			{
				"label": "English",
				"value": "en",
				"to": 1
			}
		]
	},
	{
		"text": "Have you ever used this app？",
		"answers": [
			{
				"label": "No.",
				"value": false,
				"to": 2
			},
			{
				"label": "Yes!",
				"value": true,
				"to": -3
			}
		]
	},
	{
		"text": "Let's get started with me, the developer of Monya.",
		"answers": [
			{
				"label": "Okaaaaay",
				"value": true,
				"to": 3
			},
			{
				"label": "No way!",
				"value": false,
				"to": -2
			}
		]
	},
	{
		"text": "About Monacoin",
		"answers": [
			{
				"label": "I've never heard it.",
				"value": 0,
				"to": 4
			},
			{
				"label": "ASCII Art?",
				"value": 1,
				"to": 4
			},
			{
				"label": "A stranger give it to me.",
				"value": 2,
				"to": 4
			},
			{
				"label": "To the moon coin",
				"value": 3,
				"to": 4
			},
			{
				"label": "Dondoko Wasshoi",
				"value": 4,
				"to": 5
			},
			{
				"label": "Wakiyama Tamami-chan is cute!",
				"value": 5,
				"to": 6
			}
		]
	},
	{
		"text": "About cryptocurrency",
		"answers": [
			{
				"label": "I've never heard it.",
				"value": 0,
				"to": 7
			},
			{
				"label": "Digital money",
				"value": 1,
				"to": 7
			},
			{
				"label": "bitcoin",
				"value": 2,
				"to": 5
			},
			{
				"label": "Fraud",
				"value": 3,
				"to": 7
			},
			{
				"label": "Is it Virtual Currency?",
				"value": 4,
				"to": 7
			},
			{
				"label": "Useful for a overseas remittance",
				"value": 5,
				"to": 5
			},
			{
				"label": "Blockchain",
				"value": 6,
				"to": 5
			}
		]
	},
	{
		"text": "What currency do you like the best?",
		"answers": [
			{
				"label": "None of all",
				"value": "none",
				"to": 8
			},
			{
				"label": "Monacoin",
				"value": "mona",
				"to": 8
			},
			{
				"label": "Bitcoin",
				"value": "btc",
				"to": 8
			},
			{
				"label": "Japanese-taste",
				"value": "zny",
				"to": 8
			},
			{
				"label": "Fuel for world computer",
				"value": "eth",
				"to": 8
			},
			{
				"label": "Multiplied by Proof of Importance",
				"value": "xem",
				"to": 8
			},
			{
				"label": "Native currency of international bank remittance network",
				"value": "xrp",
				"to": 8
			}
		]
	},
	{
		"text": "I could guess...",
		"answers": [
			{
				"label": "Next",
				"value": 1,
				"to": -1
			}
		]
	},
	{
		"text": "Cryptocurrency is decentralized, distributed, secure electronic cash. This app can send and receive it.",
		"answers": [
			{
				"label": "Ok",
				"value": "understood",
				"to": 8
			},
			{
				"label": "Too difficult",
				"value": "difficult",
				"to": 8
			}
		]
	},
	{
		"text": "Which do you like?(You can change later)",
		"answers": [
			{
				"label": "Ticker symbol such as MONA, JPY",
				"value": 0,
				"to": 9
			},
			{
				"label": "Friendly format like Mona ,Yen",
				"value": 1,
				"to": 9
			}
		]
	},
	{
		"text": "What do you use this app for?",
		"answers": [
			{
				"label": "on business",
				"value": 1,
				"to": 10
			},
			{
				"label": "individual use",
				"value": 0,
				"to": 10
			}
		]
	},
	{
		"text": "Which operation are you allowed to do?",
		"answers": [
			{
				"label": "I can't do all of them!",
				"value": 3,
				"to": 12
			},
			{
				"label": "Take a screen shot of private key",
				"value": 0,
				"to": 11
			},
			{
				"label": "Have others do this setup",
				"value": 1,
				"to": 11
			},
			{
				"label": "Stick your private key on your desk",
				"value": 1,
				"to": 11
			},
			{
				"label": "Set password '123456'",
				"value": 2,
				"to": 11
			}
		]
	},
	{
		"text": "Do not do that! Private key must be kept private. Backup this key on the paper and store securely. Do not copy and paste or take a screen shot.",
		"answers": [
			{
				"label": "Go back",
				"value": 1,
				"to": 10
			}
		]
	},
	{
		"text": "Private key must be kept private. Backup this key on the paper and store securely. Do not copy and paste or take a screen shot. Thank you for answering.",
		"answers": [
			{
				"label": "Next",
				"value": 0,
				"to": -1
			}
		]
	}
];
module.exports=lang({ja:require("./ja/question.html"),en:require("./en/question.html")})({
  data(){
    return {
      questionNumber:0,
      questions:[],
      answers:[],
      lastQNo:[0]
    }
  },
  methods:{
    answer(ans){
      this.answers[this.questionNumber]=ans.value;
      if(ans.callback){
        ans.callback(function(flag){
          if(flag===true){
            this.questionNumber=ans.to;
          }
        })
        return
      }
      switch(ans.to){
        case -1://User seems to be a great Monacoiner.
        case -2://User declined.Go to key generation
          storage.set("settings",{
            includeUnconfirmedFunds:false,
            useEasyUnit:!!this.answers[7],
            absoluteTime:false,
            fiat:"jpy",
            paySound:false,
            monappy:{
              enabled:false,
              myUserId:""
            },
            monaparty:{
              enabled:true,
              bgClass:"sand"
            },
            xrp:{
              enabled:this.answers[5]==="xrp"
            },
            isTamamiCute:ans.to===-1
          })
          delete require.cache[require.resolve("./generateKeyWarn.js")]
          this.$emit("push",require("./generateKeyWarn.js"))
          break;
        case -3:
          //User has passphrase so start recover
          delete require.cache[require.resolve("./restorePassphrase.js")]
          this.$emit("push",require("./restorePassphrase.js"))
          break;
        case -4:
          storage.setLang(this.answers[0])
          this.$emit("pop")
          break;
        default:
          this.lastQNo.push(this.questionNumber)
          this.questionNumber=ans.to|0;
      }
    },
    back(){
      if(this.lastQNo.length){
        this.questionNumber = this.lastQNo.pop()
      }else{
        this.$emit("pop")
      }
    }
  },
  beforeMount(){
    if(lang.getLang()==="en"){
      this.questions=qListEn
    }else{
      this.questions=qListJa
    }
  }
})
