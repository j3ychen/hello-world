<!doctype html>
<html>
<body>

<form action="test.php">
  <button type="submit">Name</button>
</form>

<?php
$first = array("Buzz", "Snap", "Pay", "Bit", "Crunch", "Square");
$second = array("feed", "X", "book", "base", "space", "Hub");

$firstrand = rand(0, 5);
$secondrand = rand(0, 5);

echo $first[$firstrand] . $second[$secondrand];
?>

</body>
</html>
