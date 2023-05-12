
// Codes using querySelecter

var secondItems = document.querySelector('.list-group-item:nth-child(2)');

secondItems.style.color = 'green';
var thirdItems = document.querySelector('.list-group-item:nth-child(3)');

thirdItems.style.visibility = 'hidden';



// Codes using queryselecterAll

var Items = document.querySelectorAll('.list-group-item');

Items[1].style.color = 'green';

console.log(Items);

var odd = document.querySelectorAll('li:nth-child(odd)');

for(i = 0; i < odd.length; i++)
{
   odd[i].style.backgroundColor = 'green';
}