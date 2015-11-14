<!DOCTYPE html>
<html>
<body>

<?php
function makeName() {
  $first = array("Buzz", "Snap", "Pay", "Bit", "Square");
  $second = array("X", "Hub", "Wire", "DB", "Ware", "Labs");
  $firstrand = int rand (0, count($first));
  $secondrand = int rand (0, count($second));
  echo $first[$firstrand] . $second[$secondrand];
}
?>

</body>
</html>
