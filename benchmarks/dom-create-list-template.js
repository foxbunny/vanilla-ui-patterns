{
  'use strict'

  let text = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam a tellus dapibus ultricies. Ut rutrum rhoncus magna, quis faucibus metus malesuada nec. Ut eget efficitur massa. Sed in rutrum risus. Donec eget risus sagittis, eleifend sem et, ultricies mauris. Nam nec tortor ultrices, gravida nunc ut, pellentesque ante. Mauris at suscipit lectus.',
    'Aliquam et congue ligula. Sed risus leo, scelerisque non varius vulputate, condimentum ut mauris. Maecenas nec nibh aliquam, aliquam turpis a, malesuada magna. Nullam vel mauris neque. Curabitur vel feugiat nisi. Donec fermentum sed lectus ac malesuada. Morbi at commodo nibh. Maecenas finibus sem id cursus blandit. Mauris nec laoreet orci, ac rutrum arcu. Morbi et lectus consectetur purus blandit vehicula vel eget nunc. Sed interdum nisl ex, ut iaculis nunc suscipit eget. Cras laoreet tellus lorem, id fermentum dui tempus in. Integer facilisis vitae neque vitae vestibulum.',
    'Aliquam sed urna vitae diam venenatis hendrerit. Maecenas non enim leo. Fusce vel mi vel massa congue pharetra at quis massa. Sed tempus laoreet sollicitudin. Donec a fermentum ex, vitae cursus felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus placerat, tortor nec malesuada volutpat, turpis augue porta libero, sed interdum sem massa sit amet nibh. Quisque ut magna est. Praesent tellus nisi, consequat blandit odio malesuada, accumsan dignissim nunc. Sed commodo gravida consequat. Integer laoreet nibh tellus, vitae iaculis ipsum dapibus vel. Nulla metus dolor, egestas dignissim ex at, porttitor suscipit urna. Nam vestibulum enim ut purus egestas ornare. In non arcu vitae lectus faucibus auctor. Vestibulum id velit risus.'
  ]

  let $itemTemplate = document.getElementById('item')

  __BENCHMARK(() => new Promise(res => {
    let div = document.createElement('div')
    document.body.append(div)
    for (let i = 0; i < 10; i++) {
      let $p = $itemTemplate.content.cloneNode(true).firstChild
      $p.textContent = `<p>${text[i % 3]}</p>`
      div.appendChild($p)
    }
    setTimeout(res, 1)
  }))
}
