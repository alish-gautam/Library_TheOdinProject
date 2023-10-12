let cards=document.querySelector(".cards")
const title=document.getElementById("title")
const author=document.getElementById("author")
const pages=document.getElementById("pages")
const submitbut=document.querySelector(".submit")
const form=document.getElementById("form")
const addBut=document.querySelector(".addBut")

const myLibrary=[]

class Books{
    constructor(title,author,pages){
        this.title=title
        this.author=author
        this.pages=pages
    }
}
function addToLibrary(){
    let newbook=new Books(title.value,author.value,pages.value)
    myLibrary.push(newbook)
}
function displayBooks(){
    cards.innerHTML=""
    myLibrary.forEach((book,index)=>{
    const card=document.createElement("div")
    card.className="readORnot"
    const cardTitle=document.createElement("p")
    cardTitle.innerText="Title: "+book.title

    const cardAuthor=document.createElement("p")
    cardAuthor.innerText="Author: "+book.author
    
    const inputlabel=document.createElement("label")
    inputlabel.innerText="Read Status:"
    
    const read=document.createElement("input")
    read.type="button"
    read.value="Read"

    const delButton=document.createElement("button")
    delButton.innerText="Delete"
    

    const cardPages=document.createElement("p")
    cardPages.innerText="Pages: "+book.pages
    card.appendChild(cardTitle)
    card.appendChild(cardAuthor)
    card.appendChild(cardPages)
    card.appendChild(delButton)
    card.appendChild(inputlabel)
    card.appendChild(read)
    cards.appendChild(card)

    delButton.addEventListener("click",()=>{
        myLibrary.splice(index,1)
        displayBooks()
    })
    let readStatus=true
read.addEventListener("click",()=>{
    if(readStatus){
        card.style.backgroundColor="lightgreen"
        readStatus=false
    }
    else{
        card.style.backgroundColor="white"
        readStatus=true
    }
})
    })
   
}

addBut.addEventListener("click",(()=>{
    form.style.display="block";
}))


submitbut.addEventListener("click",((e)=>{
    e.preventDefault()
    addToLibrary()
    displayBooks()
}))


