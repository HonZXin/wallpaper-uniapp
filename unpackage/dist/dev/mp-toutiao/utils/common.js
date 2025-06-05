"use strict";
require("../common/vendor.js");
function timeAgo(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;
  const minute = 60 * 1e3;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const threeMonths = 3 * month;
  if (diff < minute) {
    return "1分钟";
  } else if (diff < hour) {
    const minutes = Math.floor(diff / minute);
    return `${minutes}分钟`;
  } else if (diff < day) {
    const hours = Math.floor(diff / hour);
    return `${hours}小时`;
  } else if (diff < month) {
    const days = Math.floor(diff / day);
    return `${days}天`;
  } else if (diff < threeMonths) {
    const months = Math.floor(diff / month);
    return `${months}个月`;
  } else {
    return null;
  }
}
exports.timeAgo = timeAgo;
//# sourceMappingURL=../../.sourcemap/mp-toutiao/utils/common.js.map
