// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let highRevDrivers = driversWithRevenueOver(drivers, revenue);
  return highRevDrivers.map(function(driver) {
    return driver.name
  });
}

function exactMatch(drivers, attribute) {
  return drivers.filter(function(driver) {
    let matches = false;
    for(const key in attribute) {
      match = attribute[key] === driver[key]
    }
    return match;
  })
}

function exactMatchToList(drivers, attribute) {
  objMatch = exactMatch(drivers, attribute);
  return objMatch.map(function(obj) {
    return obj.name
  });
}
