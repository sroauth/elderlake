export function uuid() {
  const date = new Date();

  const y = date.getFullYear();
  const m = f0(date.getMonth() + 1);
  const d = f0(date.getDate());
  const hh = f0(date.getHours());
  const mm = f0(date.getMinutes());
  const ss = f0(date.getSeconds());
  const ms = date.getMilliseconds();

  return `${y}/${m}/${d}:${hh}:${mm}:${ss}.${ms}`;
}

function f0(t) {
  return (t > 9 ? "" : "0") + t;
}
