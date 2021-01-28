var list=Array();
var star=Array();
var c1=0;


		var e1=0;
		var a1=0;
		var b1=0;
		var d1=0;
		var f1=0;
		var m1=0;
		var h1=0;
		var abd=0;
		var g1=0;
		var p=0;
		var str="";
		
		
		var session=sessionStorage.getItem('TheArray');
		var arr=JSON.parse(session);
		



var l1=0,l2=0,l3=0;




window.onload=function(){
	document.getElementById('out').innerHTML=str;
	for(var i=0;i<9;i++) {
			if(arr[i]>0) {
				l1++;
			}
		}
		for(var i=9;i<18;i++) {
			if(arr[i]>0) {
				l2++;
			}
		}
		for(var i=18;i<27;i++) {
			if(arr[i]>0) {
				l3++;
			}
		}

		for(var i=0;i<27;i++) {
			if(arr[i]>0) {
				p++;
				if(p==1 || p==5 || p==8 || p==11 || p==15) {
					star.push(arr[i]);
					
				}
			}
		}
		tab();
	
	
}
function tab(){
	for(var i=0;arr.length;i++){
				console.log(arr);
				var ui=i;
				var gy="tab"+ui;
				if(arr[i]>0){
				document.getElementById(gy).innerHTML=arr[i];
			}
			else{
				document.getElementById(gy).innerHTML=" ";
			}
			}
}



function limyfunc(){
	var a=document.getElementById("inlist").value;
	
	var c=0;
			var e=0;
			var a=0;
			var b=0;
			var d=0;
			var f=0;
			var m=0;
			var h=0;
			var qwe =document.getElementById("inlist").value;
			var andl=0;
			for(var i=0;i<list.length;i++){
				if(qwe!=list[i]){

					andl++;
					
				}
				
			}
			if(andl!=list.length){
				alert("Already Exist");
				
			}
			
			else if(andl==list.length && qwe>0 && qwe<91 && l1==5 && l2==5 && l3==5){
				list.push(qwe);
				
				
			
				
			
		
			
			
			for(var i =0;i<9;i++) {
				for(var j=0;j<list.length;j++) {
					if(arr[i]==list[j]) {
						a++;
						var ui=i;
				var gy="t"+ui;
				document.getElementById(gy).style.backgroundColor="yellow";
					}
				}
			}
			if(a==5) {
				a1++;
				if(a1==1) {
				
				str=str+"First Line"+"<br/>";
				}
			
			}
			
			for(var i =9;i<18;i++) {
				for(var j=0;j<list.length;j++) {
					if(arr[i]==list[j]) {
						b++;
						var ui=i;
				var gy="t"+ui;
						document.getElementById(gy).style.backgroundColor="yellow";
					}
				}
			}
			if(b==5) {
				b1++;
				if(b1==1) {
				
				str=str+"Second Line"+"<br/>";
				}
			}
			
			for(var i =18;i<27;i++) {
				for(var j=0;j<list.length;j++) {
					if(arr[i]==list[j]) {
						d++;
						var ui=i;
				var gy="t"+ui;
						document.getElementById(gy).style.backgroundColor="yellow";
					}
				}
			}
			if(d==5) {
				d1++;
				if(d1==1) {
					
					str=str+"Third Line"+"<br/>";
				}
				
			}
			
			
			for(var i=0;i<8;i++) {
				for(var j=0;j<list.length;j++) {
					
					if(arr[i]==list[j]) {
						for(var l=0;l<list.length;l++) {
						if(arr[i+1]==list[l]) {
							e++;
						}
					}
				}
			}
		}
			for(var i=9;i<17;i++) {
				for(var j=0;j<list.length;j++) {
					
					if(arr[i]==list[j]) {
						for(var l=0;l<list.length;l++) {
						if(arr[i+1]==list[l]) {
							e++;
						}
					}
				}
			}
		}
			for(var i=18;i<26;i++) {
				for(var j=0;j<list.length;j++) {
					
					if(arr[i]==list[j]) {
						for(var l=0;l<list.length;l++) {
						if(arr[i+1]==list[l]) {
							e++;
						}
					}
				}
			}
		}
			var pa=0;
		for(var po=0;po<8;po++) {
			if(arr[po]>0 && arr[po+1]>0) {
				pa++;
			}
		}
		for(var po=9;po<17;po++) {
			if(arr[po]>0 && arr[po+1]>0) {
				pa++;
			}
		}
		for(var po=18;po<25;po++) {
			if(arr[po]>0 && arr[po+1]>0) {
				pa++;
			}
		}
			
			if(e==pa) {
				e1++;
				if(e1==1) {
				
				str=str+"Pair"+"<br/>";}
			}
			for(var i=0;i<arr.length;i++) {
				if(arr[i]>0 && arr[i]<46) {
					f++;
					
				}
			}
			
			var g=15 - f;
			
			for(var i =0;i<27;i++){
				for(var j=0;j<list.length;j++) {
					if(arr[i]==list[j] && arr[i]<46  ) {
						h++;
					}
				}
			}
			if(f==h && h!=0) {
				f1++;
				if(f1==1) {
				
				str=str+"Lower"+"<br/>";}
			}
			var k=0;
			for(var i =0;i<27;i++) {
				for(var j=0;j<list.length;j++) {
					if(arr[i]==list[j] && arr[i]>45  ) {
						k++;
					}
				}
			}
			
			if(g==k && k!=0) { 
				g1++;
				if(g1==1) {
				alert("Upper");
				str=str+"Upper"+"<br/>";}
			}
			for(var i=0;i<5;i++) {
				for(var j=0;j<list.length;j++) {
					if(star[i]==list[j]) {
						m++;
						
					}
				}
				
			}
			if(m==5) {
				m1++;
				if(m1==1) {
				
				str=str+"Star"+"<br/>";}
			}
			
			
			if(a==5&&b==5&&d==5) {
				abd++;
				if(abd==1) {
					
					str=str+"Housey"+"<br/>";
				}
				
			}
			

		
		
			
			
			
			
			}
			document.getElementById('inlist').value="";
			document.getElementById('out').innerHTML=str;
	
}