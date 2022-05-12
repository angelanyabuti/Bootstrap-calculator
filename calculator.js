var cvalue;
	//calc Funtions
	//This function is called when you click the 'clr' button
	function calcClear()
	{

		document.getElementById('inpt').value="";
	}

	//This method is called when we click the'=' operator. Variable x accepts the expression provided by the user. it is evaluated and stored in variable y
	function solve()
{

			let x = document.getElementById("inpt").value
			let y = eval(x)
			document.getElementById("inpt").value = y
}

//This function accepts the values clicked as a parameter and returns the same to the textbox
function dis(val)
		{
			document.getElementById("inpt").value+=val
		}
	function calcBksp()
	{
		var cvalue=document.getElementById('inpt').value;
		lvalue=cvalue.substring(0,cvalue.length-1);
		//alert(lvalue);
		document.getElementById('inpt').value=lvalue;
	}
		//operators Functions

	function addPlusMinus()
	{
		var cvalue=document.getElementById('inpt').value;
		var sign=cvalue.substr(0,1);
		var nval=cvalue.substr(1);
		//alert(sign);
		//alert(nval);

		if (sign=="+")
			cvalue="-"+nval;
		else
			if (sign=="-")
				cvalue="+"+nval;
			else
				cvalue="+"+cvalue;

			document.getElementById('inpt').value=cvalue;
	} 
	
	function addEqual(){
		var svalue=document.getElementById('inpt').value;
		cvalue=svalue+"=";
		document.getElementById('inpt').value=cvalue;
		//alert(cvalue);

	}
	//Operand Functions
	function addOne(){
		var svalue=document.getElementById('inpt').value;
		cvalue=svalue+document.getElementById('one').value;
		document.getElementById('inpt').value=cvalue;
	}
	function addTwo(){
		var svalue=document.getElementById('inpt').value;
		cvalue=svalue+document.getElementById('two').value;
		document.getElementById('inpt').value=cvalue;
	}
	function addThree(){
		var svalue=document.getElementById('inpt').value;
		cvalue=svalue+document.getElementById('thr').value;
		document.getElementById('inpt').value=cvalue;
	}
	function addFour(){
		var svalue=document.getElementById('inpt').value;
		cvalue=svalue+document.getElementById('fr').value;
		document.getElementById('inpt').value=cvalue;
	}
	function addFive(){
		var svalue=document.getElementById('inpt').value;
		cvalue=svalue+document.getElementById('fv').value;
		document.getElementById('inpt').value=cvalue;
	}
	function addSix(){
		var svalue=document.getElementById('inpt').value;
		cvalue=svalue+document.getElementById('sx').value;
		document.getElementById('inpt').value=cvalue;
	}
	function addSeven(){
		var svalue=document.getElementById('inpt').value;
		cvalue=svalue+document.getElementById('sv').value;
		document.getElementById('inpt').value=cvalue;
	}
	function addEight(){
		var svalue=document.getElementById('inpt').value;
		cvalue=svalue+document.getElementById('et').value;
		document.getElementById('inpt').value=cvalue;
	}
	function addNine(){
		var svalue=document.getElementById('inpt').value;
		cvalue=svalue+document.getElementById('nn').value;
		document.getElementById('inpt').value=cvalue;

	}
