const dat = "2022-06-08T19:16:32Z";

function data(dat, current = new Date()) {
  const time = new Date(dat);
  const year = time.getFullYear();
  const month = time.getUTCMonth();
  const day = time.getUTCDay();
  if (current.getUTCFullYear() - year > 0) {
    return current.getUTCFullYear() - year + " год назад";
  } else if (current.getUTCMonth() - month > 0) {
    return current.getUTCMonth() - month + " месяц назад";
  } else {
    return time.getUTCDay() - day + " день назад";
  }
}

console.log(data(dat));
