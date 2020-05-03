module.exports = {
  presets: [
    ['@vue/app', {
      polyfills: [
        'es6.array.fill',
        'es6.array.iterator',
        'es6.object.assign',
        'es6.object.keys',
        'es6.promise',
        'es6.string.includes',
        'es6.symbol',
        'es7.array.includes',
        'es7.object.entries',
        'es7.promise.finally',
        'es7.symbol.async-iterator'
      ],
      corejs: 2
    }]
  ]
}
