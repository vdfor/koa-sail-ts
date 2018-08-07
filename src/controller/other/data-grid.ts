import * as Koa from 'koa';

class Controller {

  static async index(ctx: Koa.Context) {
    const resData = [];
    for (let i = 0; i < 1000; i++) {
      resData.push({
        id: `NoNoNoNo${i}`,
        code: Math.floor(Math.random() * 100),
        name: `Name名字名字名字名字名字Name名字名字名字名字名字Name名字名字名字名字名字Name名字名字名字名字名字${i}`,
        age: Math.floor(Math.random() * 100),
        score: Math.floor(Math.random() * 100),
        birthPlace: '湖南省长沙市岳麓区岳麓街道云栖路' + i + '号',
        address: '湖南省长沙市芙蓉区定王台街道xx路' + i + '号',
        sex: i % 2 ? '男' : '女',
        job: '职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业职业' + i,
        website: `https//${i}.example.com`,
        qq: '1234567890' + i,
        github: 'https://github.com/example' + i,
        mobile: '1868888888' + i,
        email: 'exampleexampleexampleexampleexampleexampleexample' + i + '@example.com',
        interest: '爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好' + i,
        note: '备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息' + i,
        ceateAt: Date.now(),
        updateAt: Date.now(),
        createBy: 'Admin' + i,
        updateBy: 'SuperAdmin' + i
      });
    }
    ctx.body = resData;
  }

}

export default Controller;
