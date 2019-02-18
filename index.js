// Code your solution here:
function driversWithRevenueOver(drivers, num)
{

  const revOver = drivers.filter(function (obj) {
    // console.log(obj.revenue);
    return obj.revenue > num  });
    // console.log(revOver);
    return revOver;
};
function driverNamesWithRevenueOver(drivers,num)
{
  return driversWithRevenueOver(drivers,num).map(item=>{
    return item.name
  })

};


function exactMatch (drivers, matcher) {
  return drivers.filter(function(driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (driver) {
      return driver.name;
    });
}
