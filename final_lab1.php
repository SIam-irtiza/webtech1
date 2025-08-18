<?php
echo "<h2>LAB TASK 1 - PHP Solutions</h2>";

//q1
echo "<h3>1. Area & Perimeter of a Rectangle</h3>";
$length = 10;
$width = 5;
$area = $length * $width;
$perimeter = 2 * ($length + $width);
echo "Length = $length, Width = $width <br>";
echo "Area = $area <br>";
echo "Perimeter = $perimeter <br>";

//q2
echo "<h3>2. Calculate VAT</h3>";
$amount = 2000;
$vat = $amount * 0.15;
echo "Amount = $amount <br>";
echo "VAT (15%) = $vat <br>";
echo "Total with VAT = " . ($amount + $vat) . "<br>";

//q3
echo "<h3>3. Odd or Even</h3>";
$num = 17;
if ($num % 2 == 0) {
    echo "$num is Even<br>";
} else {
    echo "$num is Odd<br>";
}

//q4
echo "<h3>4. Largest Number from Three</h3>";
$a = 10;
$b = 25;
$c = 15;
if ($a >= $b && $a >= $c) {
    echo "Largest number is $a<br>";
} elseif ($b >= $a && $b >= $c) {
    echo "Largest number is $b<br>";
} else {
    echo "Largest number is $c<br>";
}

//q5
echo "<h3>5. Odd Numbers between 10 and 100</h3>";
for ($i = 10; $i <= 100; $i++) {
    if ($i % 2 != 0) {
        echo $i . " ";
    }
}
echo "<br>";

//q6
echo "<h3>6. Search Element in Array</h3>";
$arr = array(5, 10, 15, 20, 25);
$search = 15;
$found = false;
foreach ($arr as $value) {
    if ($value == $search) {
        $found = true;
        break;
    }
}
if ($found) {
    echo "$search is found in the array.<br>";
} else {
    echo "$search is not found in the array.<br>";
}

//q7
echo "<h3>7. Print Shapes</h3>";
// Shape 1: Stars
for ($i = 1; $i <= 3; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo "* ";
    }
    echo "<br>";
}
echo "<br>";

// Shape 2: Numbers
$num = 1;
for ($i = 3; $i >= 1; $i--) {
    for ($j = 1; $j <= $i; $j++) {
        echo $num . " ";
        $num++;
    }
    echo "<br>";
}
echo "<br>";

// Shape 3: Alphabets
$ch = 'A';
for ($i = 1; $i <= 3; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo $ch . " ";
        $ch++;
    }
    echo "<br>";
}
//q8
echo "<h3>8. 2D Array and Shapes</h3>";
$arr2D = array(
    array(1, 2, 3, "A"),
    array(1, 2, "B", "C"),
    array(1, "D", "E", "F")
);
for ($i = 0; $i < count($arr2D); $i++) {
    for ($j = 0; $j < count($arr2D[$i]); $j++) {
        echo $arr2D[$i][$j] . " ";
    }
    echo "<br>";
}
?>
