const button=document.querySelector("button")
		button.addEventListener('click',changeText);
		const heading=document.querySelector("h1")
		function changeText(){
			//alert('test successful!'); test to make sure things are connected correctly
			const name=prompt("enter text");
			heading.textContent= name;
		}
const background=document.querySelector("section")
		background.addEventListener('click',()=>{
			let color='#';
			color +=Math.random().toString(16).slice(2,8);
			console.log(color);
			background.style.backgroundColor=color;
		});