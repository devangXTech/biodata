$(document).ready(function(){


	// start header position sticky
	$(window).scroll(function(){
		if(window.pageYOffset > 100){
			$("#header").addClass("active");
			$("#scroll-top").addClass("active");
		}else{
			$("#header").removeClass("active");
			$("#scroll-top").removeClass("active");
		};
	});
	// end header position sticky

	// start scroll top 
	$("#scroll-top").click(function(){
		window.scrollTo(0,0);
	});	
	// end scroll top 


	// start the functionality of dark and light mode
	const lightTheme = () => {
		const lightBtn = document.querySelector("#header .light-btn");

		$(".light-btn").click(function(){
			if(lightBtn.classList.contains("fa-sun")){
				$(this).removeClass("fa-sun");
				$(this).addClass("fa-moon");

				localStorage.setItem("mode","light");
				const val = localStorage.getItem("mode");
				document.body.classList.add(val);
			}else{
				$(this).addClass("fa-sun");
				$(this).removeClass("fa-moon");

				localStorage.removeItem("mode");
				document.body.classList.remove("light");
			}
		})

		if(localStorage.getItem("mode") == "light"){
			lightBtn.classList.add("fa-moon");
			lightBtn.classList.remove("fa-sun");
			const val = localStorage.getItem("mode");
			document.body.classList.add(val);
		}else{
			document.body.classList.remove("light");
		}

	};
	lightTheme();

	// end the functionality of dark and light mode

	// start primary color change 
	$(".color-container #setting-btn").click(function(){
		$(".color-container").toggleClass("active");
	})
	$(".color-container .color-btn").click(function(){
		const color = $(this).attr("data-color");
		sessionStorage.setItem("primaryColor",color);
		$(":root").css("--primary-color",sessionStorage.getItem("primaryColor"));
	});
		$(":root").css("--primary-color",sessionStorage.getItem("primaryColor"));
	// end primary color change 



	// start typing effect
	const typingTextArray = ["developer","designer","freelancer"];
	let index = 0;
	let count = 0;
	const timing = 200;

	const typing = () => {
		if(index < typingTextArray[count].length){
			index++;
			$(".home .typing-text").html(typingTextArray[count].slice(0,index))
		}else{
			count++;
			index = 0;
			if(count == typingTextArray.length){
				count = 0;
			}
		}
		setTimeout(typing,timing)

	};
	typing();			
	// end typing effect


	// start project img showcase
	const imgBox = document.querySelectorAll(".project .img-box"),
			imgContainer = document.querySelector(".project .img-container"),
			imgContainerImg = document.querySelector(".project .img-container img"),
			nextBtn = document.querySelector(".project .img-container #next-btn"),
			prevBtn = document.querySelector(".project .img-container #prev-btn");


		imgBox.forEach((img,index,arr) => {
			img.addEventListener("click",()=>{
				imgContainer.classList.add("active");
				imgChange(img,index,arr);
			})
			nextBtn.addEventListener("click",() => {
				index++;
				if(index > arr.length - 1){
					index = 0;					
				}
				imgChange(img,index,arr);
			});
			prevBtn.addEventListener("click",() => {
				index--;
				if(index < 0){
					index = arr.length - 1;
				}
				imgChange(img,index,arr);
			});
		})

	function imgChange(imgBtn,ind,imgArr){
		const imgSrc = imgArr[ind].children[0].src;
		imgContainerImg.src = imgSrc;

		const imgN = `image ${ind + 1} of ${imgArr.length}`;
		$(".project .img-container .img-number").html(imgN)
	};

	$(".project .img-container #close-btn").click(function(){
		$('.project .img-container').removeClass("active");
	})	
	// end project img showcase

});