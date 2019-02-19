// Code your solution here:
function driversWithRevenueOver(array, revenue) {
  return array.filter(function(element){
    return element[`revenue`] > revenue;
  });
}

function driverNamesWithRevenueOver(array, revenue) {
  return driversWithRevenueOver(array, revenue)
    .map(function(element){
      return element.name;
    });
}

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList(array, object) {
  return exactMatch(array, object)
  .map(function(element){
    return element.name;
  });
}
