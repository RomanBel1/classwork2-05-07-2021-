data = {
    title: "about header popup",
    content: `<iframe width="800" height="600" src="https://www.youtube.com/embed/jNQXAC9IVRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}

let popUp = function PopUp(){
    this.create = function(selector, data){
    
        let popup = document.createElement('div')
        popup.classList.add('popup')
        popup.innerHTML=`<div class="popUp">
                            <div class="popUp__container">
                                <div class="popUp__header">
                                    <h3 class="popUp__h3">${data.title}</h3>
                                     <button class="btn__close">X</button>
                                </div>
                                <div class="popUp__content">${data.content}</div>
                            </div>
                        </div>`
        let elementToAdd = document.querySelector(`.${selector}`)
        elementToAdd.appendChild(popup)

        let elementPopup = document.querySelector('.popup')
        elementPopup.addEventListener('click',(event)=>{
           let element = event.target
           console.log(event.target.classList)
            if(event.target.classList[0] == 'popUp'){
                element.remove()
            }
        })

        let btnClose = document.querySelector('.btn__close')
        btnClose.addEventListener('click', (event)=>{
            let popup = event.target.parentElement.parentElement.parentElement
                popup.remove()
        })
    }
}

window.addEventListener('load', ()=>{
    let btn = document.querySelector('.btn_popUp')
    btn.addEventListener('click', ()=>{
        let popup = new popUp()
        popup.create('container', data) 
    })
})