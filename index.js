function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
  // let arr = [];
  // drivers.filter(function(driver) {
  //   if (driver.revenue > revenue) {
  //     arr.push(driver.name);
  //   }
  // });
  // return arr;
}

function exactMatch(drivers, matcher) {
  return drivers.filter(function(driver) {
    let matches = false;

    for (const key in matcher) {
      return matches = driver[key] === matcher[key];
    }
  });
}

function exactMatchToList(drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (matcher) {
      return matcher.name;
    });
}
