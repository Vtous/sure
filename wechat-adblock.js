// @supported iOS
/*
 * 微信朋友圈广告屏蔽脚本
 * 删除 type=5 的广告卡片，移除 ad_info 字段
 */

//try {
//  let obj = JSON.parse($response.body);

 // if (obj && obj.general_msg_list) {
//    let general = JSON.parse(obj.general_msg_list);
//    if (general.list && Array.isArray(general.list)) {
//      general.list = general.list.filter(item => {
////        return item.comm_msg_info?.type !== 5 && !item.ad_info;
//      });
//    }

//    obj.general_msg_list = JSON.stringify(general);
//  }

//  $done({ body: JSON.stringify(obj) });

//} catch (e) {
//  $done({});
//}

// @supported iOS
/*
 * 微信朋友圈广告屏蔽脚本
 * 移除朋友圈中的广告内容
 */

try {
  let body = JSON.parse($response.body);

  // 移除广告相关字段
  if (body.advertisement_num) {
    body.advertisement_num = 0;
  }
  if (body.advertisement_info) {
    body.advertisement_info = [];
  }

  $done({ body: JSON.stringify(body) });
} catch (e) {
  $done({});
}
