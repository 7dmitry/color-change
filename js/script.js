const cols = document.querySelectorAll('.col')


function SetGenerateColors() {
    const hexCodes = '0123456789ABCDEF'

    let color = ''
    for (i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

document.addEventListener ('keydown', (event) =>{
    event.preventDefault()
    if (event.code.toLowerCase() === 'space'){
        SetRandomColors()
    }
})

document.addEventListener('click', (event) =>{
    const type = event.target.dataset.type

    if (type === 'lock') {
        const node = event.target.tagName.toLowerCase() === 'i'
        ?event.target :
        event.target.children[0]

        node.classList.toggle('fa-lock')
        node.classList.toggle('fa-lock-open')
    }
})

function SetRandomColors() {
    cols.forEach((col) =>{
        const isLocked = col.querySelector('i').classList.contains('fa-lock')
        const text = col.querySelector('h2')
        const buttom = col.querySelector('button')
        const color = chroma.random()

        if (isLocked){
            return
        }

        text.textContent = color
        col.style.background = color

        setTextColor(text, color)
        setTextColor(buttom, color)
    })
}

function setTextColor(text, color) {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}

SetRandomColors()
