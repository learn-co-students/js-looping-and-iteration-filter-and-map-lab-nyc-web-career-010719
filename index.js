function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver['revenue'] > revenue)
};

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver['name']);
};

function exactMatch(drivers, keyValue) {
  return drivers.filter(function(driver) {
    let match;
    for (const key in keyValue) {
      match = driver[key] === keyValue[key];
    };
    return match;
  });
};

function exactMatchToList(drivers, keyValue) {
  return exactMatch(drivers, keyValue).map(driver => driver['name']);
};
