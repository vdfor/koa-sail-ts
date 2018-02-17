# 配置信息说明

## 前述
+ development.json -- 开发环境配置
+ production.json -- 生产环境配置

## 各项详述
```js
{
  // 日志配置,详见 https://github.com/log4js-node/log4js-node
  log4js: {
    appenders: {
      sail: {
        type: 'file',
        filename: './logs/log', // docker部署时，此项请勿更改，除非你了解docker
        maxLogSize: 20971520, // 1024 * 1024 * 20 -- 20M
        backups: 10
      }
    },
    categories: {
      default: {
        appenders: [
          'sail' // 此处请勿修改
        ],
        level: 'ERROR' // 日志级别 ALL/TRACE/DEBUG/INFO/WARN/ERROR/FATAL/OFF
      }
    }
  },
  // 数据库配置
  db: {},
  // 端口号配置
  port: 3000
}
```
