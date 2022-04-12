var weekdays;
(function (weekdays) {
    weekdays["MONDAY"] = "MONDAY";
    weekdays["TUESDAY"] = "TUESDAY";
    weekdays["WEDNESDAY"] = "WEDNESDAY";
    weekdays["THURSDAY"] = "THURSDAY";
    weekdays["FRIDAY"] = "FIRDAY";
    weekdays["SATURDAY"] = "SATURDAY";
    weekdays["SUNDAY"] = "SUNDAY";
})(weekdays || (weekdays = {}));
var monday = weekdays.MONDAY;
var segunda = weekdays["MONDAY"];
console.log(monday);
console.log(segunda);
