<?php
$coname = "BuzzX";
function makeName() {
  $first = array("Buzz", "Snap", "Pay", "Bit", "Square");
  $second = array("X", "Hub", "Wire", "DB", "Ware", "Labs");
  $firstrand = int rand (0, count($first-1));
  $secondrand = int rand (0, count($second-1));
  global $coname = $first[$firstrand] . $second[$secondrand];
}
$doc->getElementById('co-name')->$coname;
?>
