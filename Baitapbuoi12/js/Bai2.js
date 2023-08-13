const startDate = new Date("2020-01-01");
const endDate = new Date("2020-01-22");
const distanceDay = function (startDate, endDate) {
  let mls = endDate.getTime() - startDate.getTime();
  return mls / 1000 / 60 / 60 / 24;
};
console.log(distanceDay(startDate, endDate));
