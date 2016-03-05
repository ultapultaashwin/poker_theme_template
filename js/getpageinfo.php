<html>
<head>
<script>
function load()
{
document.events.submit()
}
</script>
</head>
<body onload="load()">
<form name='events' id='events' action='events_classes.js' method='get'>
<?php
mysql_connect('localhost','root','') or die("cannot connect");
mysql_select_db('eureka')or die ("cannot connect");


$sql="SELECT * FROM event_details WHERE event_id LIKE '%$event_id%' ";
echo'<table border="1">';
$res=mysql_query($sql);
$count=mysql_num_rows($res);
while($con=mysql_fetch_array($res))
{
$event_writeup = $con['info'];
$event_regtype = $con['regtype'];
$event_faq = $con['rules'];
$event_deadlines = $con['deadline'];
$contact = $con['contact'];
echo "<tr><td>info</td><td><input type='text' name='event_writeup' value='$info'>";
echo "<tr><td>registration</td><td><input type='text' name='event_regtype' value='$event_regtype'>";
echo "<tr><td>Rules</td><td><input type='text' name='event_faq' value='$event_faq'>";
echo "<tr><td>Deadline</td><td><input type='text' name='event_deadlines' value='$event_deadlines'>";
echo "<tr><td>contact</td><td><input type='text' name='contacts' value='$contact'>";

}echo "</table>";
}
?>
</form>
</body>
</html>