var canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => a.start - b.start);

  for (let i = 1; i < intervals.length; i += 1) {
      let prev = intervals[i - 1];
      let current = intervals[i];
      if (prev.end > current.start) return false;
  }
  return true; 
}

var data = [
{start: 190, end: 200},
{start: 30, end: 45},
{start: 50, end: 60}
]
