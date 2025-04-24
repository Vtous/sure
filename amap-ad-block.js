// @supported iOS

/*
    高德地图广告屏蔽脚本
    拦截广告返回内容并清空 ads/data 字段
*/

let body = JSON.parse($response.body);

if (body.ads) {
  body.ads = [];
}
if (body.data) {
  body.data = [];
}

$done({ body: JSON.stringify(body) });
