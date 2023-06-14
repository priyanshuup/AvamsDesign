gsap.registerPlugin(ScrollTrigger);

let mm = ScrollTrigger.matchMedia({

    "(min-width:1246px)": function(){
        // #for desktop only 

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: "#home",
                // markers:true,
                start: "top top",
                end: "bottom 80%",
                scrub: 3,
                pin:"#home",
                ease:"SlowMo.ease",
                // duration:0.5
            },
        })
        
        tl.to(".opensleft", {height:"50vh",width:"28vw", top:"0vw" , left:"0vw"}, "-=1")
        tl.to(".opens", {height:"50vh", width:"22vw",top:"0vh",right:"0vw"}, "-=1")  
        tl.to(".opensright", {height:"50vh", width:"40vw",top:"0vh",left:"0vw"}, "-=1")    
        tl.to(".opensrightmiddle", {height:"50vh", width:"10vw",top:"0vh",right:"0vw"}, "-=1")  
        tl.to(".imgdarkblueblur",{left:"0vw"}, "-=1")  
        tl.to(".imglightblueblur",{left:"0vw"}, "-=1")  
        tl.to(".imgorangeblur",{top:"0vw"}, "-=1")  
        // tl.to(".imgboxestoplast", { height: "350", width: "300", x: -150, y: -135, }, "-=1")
        // tl.to(".imagecontainer1",{"align-items":"flex-end"},"-=1")

        tl.to("#openbe1",{height:"50vh", width:"40vw",left:"0vw",top:"0vh"},"-=1")
        tl.to("#openbe2",{height:"50vh", width:"20vw",left:"0vw",top:"0vh"},"-=1")
        tl.to("#openbe3",{height:"50vh", width:"40vw",left:"0vw",top:"0vh"},"-=1")

        
        tl.to(".centerhead h1", { transform: "scale(0.5,0.5)", opacity: 0, delay: 0, ease: "SlowMo.ease" }, "-=1")
        tl.to(".centerhead h5", { transform: "scale(0.5,0.5 )", opacity: 0, delay: 0, ease: "SlowMo.ease" }, "-=1")
        tl.from(".texttop1", {
            y: 100, transform: "scale(0.2, 0)", opacity: 0, delay: 0, ease: "SlowMo.ease",
            onComplete: function () {
                $(window).scroll(function () {
                    var scroll = $(window).scrollTop();
                    $(".imgt1 img").css({
                        dealay:1,
                        width: (100 + scroll / 20) + "%"
                    })
                })
            }
        }, "-=1")
    },
    "(max-width:1246px)": function(){
        // #for desktop only 

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: "#home",
                // markers:true,
                start: "top top",
                end: "bottom 80%",
                scrub: 3,
                pin:"#home",
                ease:"SlowMo.ease",
                // duration:0.5
            },
        })
        
        tl.to(".opensleft", {height:"40vh",width:"28vw", top:"0vw" , left:"0vw"}, "-=1")
        tl.to(".opens", {height:"40vh", width:"22vw",top:"0vh",right:"0vw"}, "-=1")  
        tl.to(".opensright", {height:"40vh", width:"40vw",top:"0vh",left:"0vw"}, "-=1")    
        tl.to(".opensrightmiddle", {height:"40vh", width:"10vw",top:"0vh",right:"0vw"}, "-=1")  
        tl.to(".imgdarkblueblur",{left:"0vw"}, "-=1")  
        tl.to(".imglightblueblur",{left:"0vw"}, "-=1")  
        tl.to(".imgorangeblur",{top:"0vw"}, "-=1")  
        // tl.to(".imgboxestoplast", { height: "350", width: "300", x: -150, y: -135, }, "-=1")
        // tl.to(".imagecontainer1",{"align-items":"flex-end"},"-=1")

        tl.to("#openbe1",{height:"40vh", width:"40vw",left:"0vw",top:"0vh"},"-=1")
        tl.to("#openbe2",{height:"40vh", width:"20vw",left:"0vw",top:"0vh"},"-=1")
        tl.to("#openbe3",{height:"40vh", width:"40vw",left:"0vw",top:"0vh"},"-=1")

        
        tl.to(".centerhead h1", { transform: "scale(0.5,0.5)", opacity: 0, delay: 0, ease: "SlowMo.ease" }, "-=1")
        tl.to(".centerhead h5", { transform: "scale(0.5,0.5 )", opacity: 0, delay: 0, ease: "SlowMo.ease" }, "-=1")
        tl.from(".texttop1", {
            y: 100, transform: "scale(0.2, 0)", opacity: 0, delay: 0, ease: "SlowMo.ease",
            onComplete: function () {
                $(window).scroll(function () {
                    var scroll = $(window).scrollTop();
                    $(".imgt1 img").css({
                        dealay:1,
                        width: (100 + scroll / 20) + "%"
                    })
                })
            }
        }, "-=1")
    },
    "(max-width:995px)": function(){
        // #for desktop only 

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: "#home",
                // markers:true,
                start: "top top",
                end: "bottom 80%",
                scrub: 4,
                pin:"#home",
                ease:"SlowMo.ease",
                // duration:0.5
            },
        })
        
        tl.to(".opensleft", {height:"28vh",width:"35vw", top:"0vw" , left:"-4vw"}, "-=1")
        tl.to(".opens", {height:"28vh", width:"65vw",top:"0vh",right:"2vw"}, "-=1")  
        tl.to(".texnimages", {width:"100%"}, "-=1")  
        tl.to(".lastonepage2", {height:"28vh", width:"65vw",top:"0vh",left:"-2vw"}, "-=1")    
        tl.to("#imagepage2", {height:"28vh",top:"0vw", width:"35vw", left:"-4vw"}, "-=1")  
        tl.to(".imgdarkblueblur",{left:"0vw"}, "-=1")  
        tl.to(".imglightblueblur",{left:"0vw"}, "-=1")  
        tl.to(".imgorangeblur",{top:"0vw"}, "-=1")  
        // tl.to(".imgboxestoplast", { height: "350", width: "300", x: -150, y: -135, }, "-=1")
        // tl.to(".imagecontainer1",{"align-items":"flex-end"},"-=1")

        // tl.to("#openbe1",{height:"25vh", width:"40vw",left:"0vw",top:"0vh"},"-=1")
        tl.to("#openbe2",{height:"28vh", "min-width":"55vw",left:"0vw","margin-left":"5vw",top:"0vh"},"-=1")
        tl.to("#openbe3",{height:"28vh", "min-width":"45vw",left:"0vw",top:"0vh"},"-=1")

        
        tl.to(".centerhead h1", { transform: "scale(0.5,0.5)", opacity: 0, delay: 0, ease: "SlowMo.ease" }, "-=1")
        tl.to(".centerhead h5", { transform: "scale(0.5,0.5 )", opacity: 0, delay: 0, ease: "SlowMo.ease" }, "-=1")
        tl.from(".texttop1", {
            y: 100, transform: "scale(0.2, 0)", opacity: 0, delay: 0, ease: "SlowMo.ease",
            onComplete: function () {
                $(window).scroll(function () {
                    var scroll = $(window).scrollTop();
                    $(".imgt1 img").css({
                        dealay:1,
                        width: (100 + scroll / 20) + "%"
                    })
                })
            }
        }, "-=1")
    },
    "all":function(){
        // gsap.registerPlugin(ScrollTrigger);
        const t3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#maine",
                // markers:true,
                start: "top 70%",
                end: "bottom 10%",
                scrub: 5,
                // pin:"#maine",
                ease: "SlowMo.ease",
                duration: 10
            },
        })
        
        t3.to("#cont", { transform: "rotate(30deg)", transform: "rotate(15deg)", transform: "rotate(0deg)",y: 440 })
        t3.to("#cont", {
            scrollTrigger: {
                // markers: true,
                trigger: "#crain",
                start: "top 5%",
                end: "bottom 10%",
                pin: "#crain",
                duration: 10
            }
        })
        t3.to("#cont", { y: 440, transform: "scale(4,4)",delay:0 })
        
        // t3.to("#cont",{y:490,transform:"scale(4, 4)"})
        
        t3.from("#maine h2", {
            y: 100, transform: "scale(0.2, 0)", opacity: 0,
            delay: 0,
            ease: "SlowMo.ease",delay:0.5
        },"-=1")
        t3.from("#maine h4", {
            y: 100, transform: "scale(0.2, 0)", opacity: 0,
            delay: 0,
            ease: "SlowMo.ease",delay:0.5
        },"-=1")
        
        
        
        const t4 = gsap.timeline({
            scrollTrigger: {
                trigger:".divright",
                start:"top 60%",
                end:"top top",
                scrub:3,
                ease: "SlowMo.ease",
                duration: 20,
                // markers: true
                }
        })
        

        t4.to(".righttext h1",{left:"5vw"},"-=1")
        t4.to(".arrowimgright",{right:"0vw",width:"28vw"},"-=1")
        t4.to(".arrowimgleft",{left:"0vw",width:"28vw"},"-=1")

        // t4.to(".divleft h2",{x:-40,delay:0.3},"-=1")
        t4.to(".righttext h5",{left:"2vw",delay:0.3},"-=1")
    }
})




// let reduceMotionCB = document.querySelector("#motionToggle")
// reduceMotionCB.checked = window.matchMedia("(prefers-reduced-motion: reduce)").matches
// reduceMotionCB.addEventListener("change",gsap.matchMediaRefresh)

// let conditions = {
//     reduceMotion: `(prefers-reduced-motion: reduce)`,
//     safeToAnimate: `(prefers-reduced-motion: no preference)`
// };

// mm.add(conditions,(context)=>{
//     let{ reduceMotion,safeToAnimate} = context.conditions;
//     reduceMotion = reduceMotionCB.checked;
// })


    



gsap.from("#partners>#divsminibox",{
    scrollTrigger:{
    //   scroller:"#partners",
      trigger:".boxcontainer",
        // markers:true,
      start:"top 80%"
    },
    opacity:0,
    y:50,
    skewY:2,
    duration:1,
    stagger:.2
  })

  gsap.from("#about>#aboutleft",{
    scrollTrigger:{
        //   scroller:"#partners",
          trigger:"#about",
            // markers:true,
          start:"top 50%"
        },
        opacity:0,
        x:150,
        duration:1,
        stagger:.2
  })
  gsap.from("#contact>#contactform",{
    scrollTrigger:{
        //   scroller:"#partners",
          trigger:"#contact",
            // markers:true,
          start:"top 40%"
        },
        opacity:0,
        y:50,
        skewY:2,
        duration:1,
        stagger:.2
  })


  
