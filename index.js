const  canvas = document.querySelector('canvas') 
const c = canvas.getContext('2d');

canvas.width = innerWidth
canvas.height = innerHeight

class Boundary {
    constructor({position}) {
        this.position = position
        this.width = 40
        this.height = 40
    }
    draw() {
        c.fillStyle = 'orange'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const boundries = [
    new Boundary({
        position: {
            x: 10,
            y: 10
        }
    }),
    new Boundary({
        position: {
            x: 51,
            y: 10
        }
    })
]

boundries.forEach((boundary) => {
    boundary.draw()
});