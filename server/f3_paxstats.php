<?php
$servername = "f3stlouis.cac36jsyb5ss.us-east-2.rds.amazonaws.com";
$username = "paxminer";
$password = "AyeF3cha-min-wood!";
$dbname = "f3cha-min-wood";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT PAX, TotalPosts, FirstPost, LastPost, IFNULL(TotalQs,0) as TotalQs, IFNULL(FirstQ,'N/A') as FirstQ, IFNULL(LastQ,'N/A') as LastQ, CONCAT (IFNULL(FORMAT(100*(TotalQs/TotalPosts),2),0.00),'%') as Q2Post_Ratio, BlackDiamond, ThreeRivers, Wood, BuckTown, ThreeRiversPM, TheIsland, DownRange
FROM
    (SELECT * FROM (
        SELECT av.PAX, tpv.totalCount as TotalPosts, max(Date) as LastPost, min(Date) as FirstPost,
        SUM(CASE WHEN av.AO = 'ao-black-diamond' THEN 1 ELSE 0 END) AS BlackDiamond,
        SUM(CASE WHEN av.AO = 'ao-three-rivers' THEN 1 ELSE 0 END) AS  ThreeRivers,
        SUM(CASE WHEN av.AO = 'ao-the-wood' THEN 1 ELSE 0 END) AS Wood,
        SUM(CASE WHEN av.AO = 'ao-buck-town' THEN 1 ELSE 0 END) AS BuckTown,
        SUM(CASE WHEN av.AO = 'ao-three-rivers-pm' THEN 1 ELSE 0 END) AS ThreeRiversPM,
        SUM(CASE WHEN av.AO = 'ao-the-island' THEN 1 ELSE 0 END) AS TheIsland,
        SUM(CASE WHEN av.AO = 'downrange' THEN 1 ELSE 0 END) AS DownRange
        FROM f3cha-min-wood.bd_attendance_view av, f3cha-min-wood.total_post_view tpv
        WHERE av.PAX NOT IN ('Down Range', 'Not On Slack', 'PAXminer', 'Slackbot') AND tpv.USER_ID = av.USER_ID
        GROUP BY av.PAX) p
    LEFT JOIN
        (SELECT Q, count(Date) as TotalQs, max(Date) as LastQ, min(Date) as FirstQ
        FROM f3cha-min-wood.beatdown_info bi
        WHERE Q <> 'Down Range' AND Q <> 'Not On Slack' AND ao in ('1st-f-general',
'downrange',
'ao-the-wood',
'ao-black-diamond',
'ao-three-rivers',
'ao-buck-town',
'ao-three-rivers-pm',
'ao-the-island')
        GROUP BY Q) bd
    ON p.PAX = bd.Q
    ORDER BY PAX) ps
    WHERE LastPost > (NOW()  - INTERVAL 90 DAY )";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
  // output data of each row
  echo "<link rel='stylesheet' src='//cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css'><script src='//cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js'></script>
<script>
    document.addEventListener('DOMContentLoaded', function () {
    let table = new DataTable('#main-table', {paging: false, order: [[0, 'asc']]});
});
</script><div id='table-scroll' class='table-scroll'><table id='main-table' class='main-table'><thead><tr><th scope='col'>PAX</th><th scope='col'>Total Posts</th><th scope='col'>First Post</th><th scope='col'>Last Post</th><th scope='col'>Total Q's</th><th scope='col'>First Q</th><th scope='col'>Last Q</th><th scope='col'>Q2Post Ratio</th>
<th scope='col'>Black Diamond</th>
<th scope='col'>Three Rivers</th>
<th scope='col'>Wood</th>
<th scope='col'>Buck Town</th>
<th scope='col'>Three Rivers PM</th>
<th scope='col'>The Island</th>
<th scope='col'>Down Range</th></tr></thead><tbody>";
  while($row = $result->fetch_assoc()) {
    echo "<tr><th>".$row["PAX"]. "</th><td>" . $row["TotalPosts"]. "</td><td>" . $row["FirstPost"]. "</td><td>" . $row["LastPost"]. "</td><td>" . $row["TotalQs"]. "</td><td>" . $row["FirstQ"]. "</td><td>" . $row["LastQ"]. "</td><td>" . $row["Q2Post_Ratio"]. "</td><td>" . $row["BlackDiamond"]. "</td><td>" . $row["ThreeRivers"]. "</td><td>" . $row["Wood"]. "</td><td>" . $row["BuckTown"]. "</td><td>" . $row["ThreeRiversPM"]. "</td><td>" . $row["TheIsland"]. "</td><td>" . $row["DownRange"]. "</td></tr>";
  }
  echo "</tbody></table></div>";
} else {
  echo "0 results";
}
$conn->close();
?>