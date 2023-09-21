select distinct s1.tno, t.tname, s1.stn as boarding, s1.arrival, s1.departure,
    s2.stn as destination , s2.arrival, s2.departure, s2.elapsed, t.run
from stops s1
    inner join stops s2 on s2.tno=s1.tno
    inner join train t on t.trainno=s1.tno
where s1.stn='JAM' AND s2.stn='SRR';


SELECT to_char((('2023-09-13'::date + arrival::time) - elapsed::interval), 'Day') AS day_of_week
FROM
  stops
WHERE
  tno = 19578
  AND stn = 'SRR';


SELECT t.trainno,t.tname
FROM train t
JOIN day dm ON substring(t.run, dm.id, 1) = '1'
WHERE dm.name IN (SELECT to_char((('2023-09-13'::date + arrival::time) - elapsed::interval), 'Day') AS day_of_week
FROM stops
WHERE stn = 'SRR');

SELECT t.trainno, t.tname
FROM train t
JOIN day dm ON substring(t.run, dm.id, 1) = '1'
JOIN stops s ON t.trainno = s.tno
WHERE to_char(('2023-09-13'::date + s.arrival::time - s.elapsed::interval), 'Day') = dm.name
 AND s.stn = 'SRR';

