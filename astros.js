class Astro {

    constructor({name, distance, radius, color, planetas, period}) {
        this.name = name
        this.distance = distance
        this.radius = radius
        this.color = color
        this.period = period

        this.angle = 0
        this.planetas = {
            instances: [],
            planets: planetas
        }
    }

    spawnPlanetas() {
        if (this.planetas.planets != null) {
            this.planetas.planets.forEach(s => {
                let planetas = new Astro(s)
                this.planetas.instances.push(planetas)
                planetas.show()
                planetas.spawnPlanetas()
            })
        }
    }

    orbit() {
        this.angle += this.period
        this.planetas.instances.forEach(s => s.orbit())
    }

    show() {
        push()

        noStroke()
        fill(this.color)

        rotate(this.angle)
        translate(this.distance, 0)

        ellipse(0, 0, this.radius*2, this.radius*2)

        if (this.planetas.instances.length > 0) {
            this.planetas.instances.forEach(s => s.show())
        }

        pop()
    }

}
