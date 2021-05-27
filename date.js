function getDate() 
{
	var dateString = new Date();
	document.getElementById("date").innerHTML=dateString;
}
function green()
{
	document.getElementById("date").style.color="green";
}
function red()
{
	document.getElementById("date").style.color="red";
}