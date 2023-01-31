const empties=document.querySelectorAll(".empty")
const fill=document.querySelector(".fill")

fill.addEventListener("dragstart",dragStart)
function dragStart() {
    // console.log("start");
    this.className+= " hold";
    setTimeout(()=>(this.className = "isVisible"),0)
}

fill.addEventListener("dragend",dragEnd)
function dragEnd() {
    // console.log("end");
    this.className = "fill"
}
for(const empty of empties){
    empty.addEventListener("dragover",dragOver)
    empty.addEventListener("dragenter",dragEnter)
    empty.addEventListener("dragleave",dragLeave)
    empty.addEventListener("drop",drapDrop)
}
function dragOver(e) {
    // console.log("over");
    e.preventDefault();
    this.classList.add("hover")
}
function dragEnter(e) {
    // console.log("enter");
    e.preventDefault()
    this.className += " hold"
}
function dragLeave() {
    // console.log("leave");
    this.className = "empty"
}
function drapDrop() {
    // console.log("drop");
    this.className= "empty"
    this.append(fill)
}