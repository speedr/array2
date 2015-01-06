# speedr-array2

> Two-dimensional array

## Install

```sh
$ npm install --save speedr-array2
```

## Usage

```js
import Array2 from 'speedr-array2'

const Tiles = {
  SAND: 0,
  TREE: 1,
  WALL: 2
}

// Constructors
let map1 = new Array2(10, 10)
let map2 = new Array2(80, 50, Tiles.SAND)
let map3 = new Array2(40, 40, (x, y) => x * y)

// Access
map3.get(4, 9) // 36
map3.set(4, 9, 12)
```

## License

MIT © Florent Cailhol
