const canAttendMeetings = (intervals) => {
  intervals.sort((a, b) => a.start - b.start);

  for (let i = 1; i < intervals.length; i += 1) {
    const prev = intervals[i - 1];
    const current = intervals[i];
    if (prev.end > current.start) return false;
  }
  return true;
};

const data = [
  { start: 190, end: 200 },
  { start: 30, end: 45 },
  { start: 50, end: 60 },
];


