<?php
  $con = mysql_connect(getenv("MYSQL_ADDR"),getenv("MYSQL_USER"),getenv("MYSQL_PASS"));
  if(!$con)
  {
    die('失败' . mysql_error());
  }
  else {
    mysql_query("SET NAMES utf8");
    mysql_select_db("scores", $con);
    $result = mysql_query("SELECT * FROM name_score");
    while($row = mysql_fetch_array($result))
    {
      echo $row['name'] . " " . $row['score'];
      echo "<br/>";
    }
  }
  mysql_close($con);
 ?>
