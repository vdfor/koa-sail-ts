import * as Koa from 'koa';

class Controller {

  static async index(ctx: Koa.Context) {
    const resData = [];
    for (let i = 0; i < 1000; i++) {
      resData.push({
        id: `No${i}`,
        code: Math.floor(Math.random() * 100),
        name: `Name${i}`,
        age: Math.floor(Math.random() * 100),
        score: Math.floor(Math.random() * 100),
        birthPlace: '出生地' + i,
        address: '湖南省长沙市岳麓大道' + i + '号',
        sex: i % 2 ? '男' : '女',
        job: '职业职业职业职业职业职业职业职业职业职业职业职业' + i,
        website: `https//${i}.example.com`,
        qq: '1000' + i,
        github: 'https://github.com/example' + i,
        mobile: '1868888888' + i,
        email: 'example' + i + '@example.com',
        interest: '爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好爱好' + i,
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
