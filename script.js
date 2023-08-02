// your code here
let h3=document.getElementById("url");
let value1=h3.innerText;
function addTheme(){
	let add=document.getElementById("add");
	let name=document.getElementById("name");
	let year=document.getElementById("year")
	let nameValue=name.value;
	let yearValue=year.value;
	if(nameValue!=="" && yearValue!=="")
	{
		add.innerText=value1+`?name=${nameValue}&year=${yearValue}`
		
	}
	else if(nameValue==="")
	{
		add.innerText=value1+`?year=${yearValue}`
	}
	else if(yearValue==="")
	{
		add.innerText=value1+`?name=${nameValue}`
	}
	else if(yearValue==="" && nameValue==="")
	{
		add.innerText=value1;
	}
	
}
const submit=document.getElementById("button");
submit.addEventListener("click",addTheme)