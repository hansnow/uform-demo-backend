# UForm Demo Backend

### 使用

```bash
yarn install
yarn start
```

默认会跑在本地的`9000`端口上，如果需要更改端口，可以通过环境变量指定

```bash
PORT=9001 yarn start
```

改掉端口后，记得同时修改前端项目里的proxy配置

### API

**添加 Schema**

`POST /schema`

```json
{
  "name": "名字",
  "url": "要提交到的地址",
  "schema": {}
}
```

**删除 Schema**

`DELETE /schema/xxx`

**获取所有 Schema**

`GET /schema`

**获取某个 Schema 详情**

`GET /schema/xxx`

**提交 Schema 结果**

`POST /submit/xxx`

```json
{
  "result": {}
}
```
