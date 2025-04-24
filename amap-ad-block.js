// @supported iOS
/*
 * 高德地图广告内容清除器
 * 用于清理接口返回中的广告字段：ads / data / modules / operationList 等
 */

try {
  let body = JSON.parse($response.body);

  // 常见广告字段清空
  ['ads', 'data', 'modules', 'operationList', 'iconList', 'splash', 'promotion', 'tips'].forEach(key => {
    if (body[key]) {
      body[key] = Array.isArray(body[key]) ? [] : {};
    }
  });

  // 特殊情况字段
  if (body.result) {
    body.result = [];
  }

  if (body.status === 1 || body.info === 'OK') {
    // 正常响应状态，保留状态信息
  } else {
    body = {};
  }

  $done({ body: JSON.stringify(body) });

} catch (e) {
  // 如果不是 JSON 格式，直接返回空体防止报错
  $done({ body: '{}' });
}
