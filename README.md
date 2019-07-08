# UForm Demo Backend

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
