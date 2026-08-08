const startDate = new Date('2026-07-06T00:00:00');
const today = new Date();
startDate.setHours(0, 0, 0, 0);
today.setHours(0, 0, 0, 0);
const diff = Math.floor(
  (today - startDate) / (1000 * 60 * 60 * 24)
);
document.getElementById('dday').textContent = ' D+' + diff;
