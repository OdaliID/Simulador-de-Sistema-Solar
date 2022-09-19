# Solar system visualization

**[Go to website](https://pablotrinidad.github.io/solar-system-visualization/)**

I created this project because I really wanted to try
[p5.js](https://p5js.org/) and also because this was one
of my [Introduction to Computer Science](https://github.com/pablotrinidad/icc) course
[**assignments**](https://github.com/pablotrinidad/icc/tree/master/projects/01).
The implementation we were given was depressively horrible and
got me frustrated after spending some time finishing it, it was
written in Java, and were not allowed to modify the base code 😭.

So... here is my version using ES6
(with [babel compilation in browser](https://babeljs.io/setup#installation))
and [p5.js](https://p5js.org/)! 🌈🎉.

My implementation is heavily based on [@shiffman's](https://github.com/shiffman)
[using processing](https://www.youtube.com/watch?v=l8SiJ-RmeHU). You should
definitively check out his [YouTube](https://www.youtube.com/user/shiffman) channel!

## Usage

If you are planning to play around with this, you can easily modify
what's being shown in the screen by editing the **`data.js`** file.
In this implementation `Astros` are the main class and an `Astros` can
have subastros orbiting around it and those astros can also have
subastros orbiting around then at the same time and so on. Astro properties
are:

* `name`: Atro's name
* `distance`: Distance to the parent astro
* `radius`: Radius
* `color`: RGB color stored in a 3-length array
* `period`: Integer specifying the amount of rotation it completes after one frame
* `satellites`: List of astros

**Example**

```javascript
let jupiter = new Astro({
    name: 'Jupiter',
    distance: 150,
    radius: 4,
    color: [255, 255, 255],
    period: -.04,
    satellites: []
})

jupiter.show()
jupiter.orbit()
```

## Contributing

Please fill free to submit pull requests, I'd love some feedback
on my JS since it's not my main programming language <3.

**Contributors:**

* [Pablo Trinidad](https://github.com/pablotrinidad)

## License

This project is licensed under the GNU General Public License v3 -
see the [LICENSE](LICENSE) file for details
