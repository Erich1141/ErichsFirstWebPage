

var text=`The man in that clip is Dr. Eric W. Davis, an American astrophysicist and aerospace researcher. The YouTube video itself identifies him as Eric Davis, and the Disclosure Foundation lists him on its advisory board.

And this is not just someone using “Dr.” loosely. He has a Ph.D. in astrophysics from the University of Arizona, earned in 1991, plus a B.S. in physics and mathematics. He is not a medical doctor.

His background is pretty unusual and directly relevant to what he's talking about in that video. He has worked on:

advanced and nuclear space propulsion
general relativity, warp-drive and wormhole physics
quantum-field and quantum-gravity concepts
directed-energy research
U.S. government aerospace programs
AAWSAP/AATIP, the Pentagon-associated programs that investigated unusual aerospace/UAP phenomena
work supporting the UAP Task Force

He was at EarthTech International / the Institute for Advanced Studies at Austin for many years, and from 2019 through 2024 was a senior project engineer at The Aerospace Corporation, supporting projects involving NASA, the Air Force Research Laboratory and the Office of the Secretary of Defense.

He's also published actual technical work on extremely exotic propulsion. For example, in 2006 he authored an AIAA paper called “An Assessment of Faster-Than-Light Spacetimes: Make or Break Issues,” examining warp drives, traversable wormholes and the exotic-energy requirements involved.

Now, here's the important part about that clip

Davis has become a major figure in the UFO/UAP disclosure world because he says he has had access to people and information associated with highly classified UAP programs. In the clip you sent, he's discussing alleged categories of non-human beings and claims regarding what the U.S. government knows.

His scientific credentials and government-contracting background are real and verifiable. That does not, by itself, verify his claims about alien species, recovered craft, or bodies. Those are a separate evidentiary question.

And Eric, there's a much bigger rabbit hole attached to this particular guy. 🛸 He is the “Davis” in the famous “Wilson-Davis notes”, which allegedly document a 2002 conversation concerning a deeply classified UFO crash-retrieval/reverse-engineering program.`



var davis=document.querySelector("#dr-davis")
davis.addEventListener("click",  (e) =>{
e.preventDefault()

 const newTab = window.open("", "_blank");

newTab.document.body.style.whiteSpace = "pre-wrap";
newTab.document.body.textContent=text

var goBack= newTab.document.createElement("a")
goBack.textContent="\n\nGO BACK"
goBack.href="#"
goBack.addEventListener("click", (e) => {
    

    newTab.window.close()








})
newTab.document.body.appendChild(goBack)




})

