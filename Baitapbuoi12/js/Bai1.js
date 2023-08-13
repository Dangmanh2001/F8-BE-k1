const readTime = function (mls) {
  if (mls === parseInt(mls)) {
    let second = (mls - (mls % 1000)) / 1000;
    let minutes = Math.floor(second / 60);
    if (second >= 60) {
      second = second - minutes * 60;
    }
    let hour = Math.floor(minutes / 60);
    if (minutes >= 60) {
      minutes = minutes - hour * 60;
    }
    let day = Math.floor(hour / 24);
    if (hour >= 24) {
      hour = hour - day * 24;
    }
    if (day === 0 && hour === 0 && minutes === 0 && second === 0) {
      return `${mls % 1000}mls`;
    } else if (day === 0 && hour === 0 && minutes === 0) {
      return `${second}s,${mls % 1000}mls`;
    } else if (day === 0 && hour === 0) {
      return `${minutes}m,${second}s,${mls % 1000}mls`;
    } else if (day === 0) {
      return `${hour}h,${minutes}m,${second}s,${mls % 1000}mls`;
    } else {
      return `${day}d,${hour}h,${minutes}m,${second}s,${mls % 1000}mls`;
    }
  } else {
    return "Dữ liệu không hợp lệ";
  }
};

console.log(readTime(1212147777777));
