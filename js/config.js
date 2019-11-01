var config = {
    lang: "zh-cn",       //汉化页面
    time: {              //时间格式设为24小时制
      timeFormat: 24
    },
    weather: {          //在天气显示这部分，选用的是和风天气API，所以需要去官网申请一个key
      params: {
        location: "hefei",
        key: "e9c290c18fb24c168ecf00b09032c300"
      }
    },
    compliments: {     //问候语的相关配置，可以直接在函数里更改显示的问候语内容
      interval: 30000,
      fadeInterval: 4000,
      morning: [
      '开启自信的一天!',
      '早上好，亲',
      '昨晚睡得还好么?',
      '享受新的一天吧！',
      '记得吃早餐哦!',
      ],
      afternoon: [
      '魔镜魔镜,谁是最美丽的人',
      '当然是您了，主人',
      '我累了,想关机休息一会可以么?主人!',
      '一个人就足够了。去寻找属于你自己的独一无二吧!',
      '世界这么大，能遇见，不容易。'
      ],
      evening: [
      'Wow, 天已黑',
      '看我一招[燕还巢]',
      '该下班了，老板',
      '你给我一个绚烂的秘密，沉睡在仲夏夜里的美丽梦境中!',
      '有些路很远，走下去会很累。可是，不走，会后悔。',
      '很多人如果换一个时间认识，就会有不同的结局。',
      '死生契阔，与子成说。执子之手，与子偕老'
      ]
    },
    calendar: {  //生日日期: 姓名
      birthdays: {
        '0215': '悦悦',
        '0226': '主人',
        '0314': '话梅',
        '0315': '妈妈',
        '0321': '小溪',
        '0601': '胡子杰',
        '0801': '大姐',
        '1029': '话梅奶奶',
        '1105': '方浩然',      }
    }
  }
