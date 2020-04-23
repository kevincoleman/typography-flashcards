const flashcards = [
    {
      "name": "Bodoni",
      "image": "/images/Bodoni.png",
      "url": "https://www.myfonts.com/fonts/linotype/bodoni/"
    },
    {
      "name": "ITC Bookman",
      "image": "/images/ITC Bookman.png",
      "url": "https://www.myfonts.com/fonts/itc/bookman/"
    },
    {
      "name": "Brandon Grotesque",
      "image": "/images/Brandon Grotesque.png",
      "url": "https://www.myfonts.com/fonts/hvdfonts/brandon-grotesque/regular/"
    },
    {
      "name": "Broadway",
      "image": "/images/Broadway.png",
      "url": "https://www.myfonts.com/fonts/linotype/broadway/"
    },
    {
      "name": "Brush Script",
      "image": "/images/Brush Script.png",
      "url": "https://www.myfonts.com/fonts/bitstream/brush-script/"
    },
    {
      "name": "Caslon",
      "image": "/images/Caslon.png",
      "url": "https://www.myfonts.com/fonts/bitstream/caslon-540/"
    },
    {
      "name": "Centaur",
      "image": "/images/Centaur.png",
      "url": "https://www.myfonts.com/fonts/mti/centaur/"
    },
    {
      "name": "Century Gothic",
      "image": "/images/Century Gothic.png",
      "url": "https://www.myfonts.com/fonts/mti/century-gothic/wgl-regular/"
    },
    {
      "name": "Clarendon",
      "image": "/images/Clarendon.png",
      "url": "https://www.myfonts.com/fonts/bitstream/clarendon/"
    },
    {
      "name": "Comic Sans",
      "image": "/images/Comic Sans.png",
      "url": "https://www.myfonts.com/fonts/ascender/comic-sans/"
    },
    {
      "name": "Compacta",
      "image": "/images/Compacta.png",
      "url": "https://www.myfonts.com/fonts/itc/compacta/pro-regular/"
    },
    {
      "name": "Cooper Black",
      "image": "/images/Cooper Black.png",
      "url": "https://www.myfonts.com/fonts/linotype/cooper-black/cooper-black/"
    },
    {
      "name": "Copperplate",
      "image": "/images/Copperplate.png",
      "url": "https://www.myfonts.com/fonts/urw/copperplate/t-medium/"
    },
    {
      "name": "Courier",
      "image": "/images/Courier.png",
      "url": "https://www.myfonts.com/fonts/adobe/courier/regular/"
    },
    {
      "name": "Dax",
      "image": "/images/Dax.png",
      "url": "https://www.myfonts.com/fonts/fontfont/ff-dax/pro-regular/"
    },
    {
      "name": "Didot",
      "image": "/images/Didot.png",
      "url": "https://www.myfonts.com/fonts/linotype/didot/"
    },
    {
      "name": "DIN",
      "image": "/images/DIN.png",
      "url": "https://www.myfonts.com/fonts/fontfont/ff-din/pro-regular/"
    },
    {
      "name": "Edwardian Script",
      "image": "/images/Edwardian Script.png",
      "url": "https://www.myfonts.com/fonts/itc/edwardian-script/pro-regular/"
    },
    {
      "name": "Eurostile",
      "image": "/images/Eurostile.png",
      "url": "https://www.myfonts.com/fonts/linotype/eurostile/"
    },
    {
      "name": "Fette Fraktur",
      "image": "/images/Fette Fraktur.png",
      "url": "https://www.myfonts.com/fonts/linotype/fette-fraktur/"
    },
    {
      "name": "Folio",
      "image": "/images/Folio.png",
      "url": "https://www.myfonts.com/fonts/linotype/folio/medium/"
    },
    {
      "name": "Franklin Gothic",
      "image": "/images/Franklin Gothic.png",
      "url": "https://www.myfonts.com/fonts/linotype/franklin-gothic/franklin-gothic-no-2-roman/"
    },
    {
      "name": "Frutiger",
      "image": "/images/Frutiger.png",
      "url": "https://www.myfonts.com/fonts/linotype/frutiger/"
    },
    {
      "name": "Futura",
      "image": "/images/Futura.png",
      "url": "https://www.myfonts.com/fonts/linotype/futura/"
    },
    {
      "name": "Futura",
      "image": "/images/Futura.png",
      "url": "https://www.myfonts.com/fonts/linotype/futura/pro-medium-2/"
    },
    {
      "name": "Garamond",
      "image": "/images/Garamond.png",
      "url": "https://www.myfonts.com/fonts/bitstream/original-garamond/original-garamond/"
    },
    {
      "name": "Gill Sans",
      "image": "/images/Gill Sans.png",
      "url": "https://www.myfonts.com/fonts/mti/gill-sans/pro-book/"
    },
    {
      "name": "Goudy Old Style",
      "image": "/images/Goudy Old Style.png",
      "url": "https://www.myfonts.com/fonts/mti/goudy-old-style-mt/goudy-old-style-mt/"
    },
    {
      "name": "Helvetica",
      "image": "/images/Helvetica.png",
      "url": "https://www.myfonts.com/fonts/linotype/helvetica/"
    },
    {
      "name": "Hobo",
      "image": "/images/Hobo.png",
      "url": "https://www.myfonts.com/fonts/tilde/hobo/regular/"
    },
    {
      "name": "Impact",
      "image": "/images/Impact.png",
      "url": "https://www.myfonts.com/fonts/mti/impact/std-roman/"
    },
    {
      "name": "Johnston",
      "image": "/images/Johnston.png",
      "url": "https://www.myfonts.com/fonts/itc/johnston/pro-medium/"
    },
    {
      "name": "Meta",
      "image": "/images/Meta.png",
      "url": "https://www.myfonts.com/fonts/fontfont/ff-meta/pro-regular/"
    },
    {
      "name": "Meta Serif",
      "image": "/images/Meta Serif.png",
      "url": "https://www.myfonts.com/fonts/fontfont/meta-serif/pro-book/"
    },
    {
      "name": "Minion Pro",
      "image": "/images/Minion Pro.png",
      "url": "https://www.myfonts.com/fonts/adobe/minion/minion/"
    },
    {
      "name": "Museo",
      "image": "/images/Museo.png",
      "url": "https://www.myfonts.com/fonts/exljbris/museo/500/"
    },
    {
      "name": "Museo Sans",
      "image": "/images/Museo Sans.png",
      "url": "https://www.myfonts.com/fonts/exljbris/museo-sans/500/"
    },
    {
      "name": "Museo Slab",
      "image": "/images/Museo Slab.png",
      "url": "https://www.myfonts.com/fonts/exljbris/museo-slab/500/"
    },
    {
      "name": "Neutra",
      "image": "/images/Neutra.png",
      "url": "https://houseind.com/hi/neutraface"
    },
    {
      "name": "OCR-A",
      "image": "/images/OCR-A.png",
      "url": "https://www.myfonts.com/fonts/adobe/ocra/medium/"
    },
    {
      "name": "Officina Sans",
      "image": "/images/Officina Sans.png",
      "url": "https://www.myfonts.com/fonts/itc/officina-sans/"
    },
    {
      "name": "Officina Serif",
      "image": "/images/Officina Serif.png",
      "url": "https://www.myfonts.com/fonts/itc/officina-serif/std-book/"
    },
    {
      "name": "Open Sans",
      "image": "/images/Open Sans.png",
      "url": "https://www.myfonts.com/fonts/google-web-fonts/open-sans/open-sans/"
    },
    {
      "name": "Optima",
      "image": "/images/Optima.png",
      "url": "https://www.myfonts.com/fonts/linotype/optima/pro-medium/"
    },
    {
      "name": "Palatino",
      "image": "/images/Palatino.png",
      "url": "https://www.myfonts.com/fonts/linotype/palatino/pro-roman/"
    },
    {
      "name": "Perpetua",
      "image": "/images/Perpetua.png",
      "url": "https://www.myfonts.com/fonts/mti/perpetua/pro-roman/"
    },
    {
      "name": "Gotham",
      "image": "/images/Gotham.png",
      "url": "https://www.typography.com/fonts/gotham/characters"
    },
    {
      "name": "Quadraat",
      "image": "/images/Quadraat.png",
      "url": "https://www.typeby.com/fonts/quadraat"
    },
    {
      "name": "Rockwell",
      "image": "/images/Rockwell.png",
      "url": "https://www.myfonts.com/fonts/mti/rockwell/rockwell/"
    },
    {
      "name": "Rotis",
      "image": "/images/Rotis.png",
      "url": "https://www.myfonts.com/fonts/mti/rotis-serif/pro-55-roman/"
    },
    {
      "name": "Rotis Sans",
      "image": "/images/Rotis Sans.png",
      "url": "https://www.myfonts.com/fonts/mti/rotis-sans-serif/pro-55-roman/"
    },
    {
      "name": "Sabon",
      "image": "/images/Sabon.png",
      "url": "https://www.myfonts.com/fonts/linotype/sabon/roman/"
    },
    {
      "name": "Scala",
      "image": "/images/Scala.png",
      "url": "https://www.myfonts.com/fonts/fontfont/ff-scala/pro-regular-113288/"
    },
    {
      "name": "Scala Sans",
      "image": "/images/Scala Sans.png",
      "url": "https://www.myfonts.com/fonts/fontfont/ff-scala-sans/pro-regular-113292/"
    },
    {
      "name": "Souvenir",
      "image": "/images/Souvenir.png",
      "url": "https://www.myfonts.com/fonts/itc/souvenir/medium/"
    },
    {
      "name": "Stencil",
      "image": "/images/Stencil.png",
      "url": "https://www.myfonts.com/fonts/linotype/stencil/stencil/"
    },
    {
      "name": "Times New Roman",
      "image": "/images/Times New Roman.png",
      "url": "https://www.myfonts.com/fonts/mti/times-new-roman/pro-regular/"
    },
    {
      "name": "Trade Gothic",
      "image": "/images/Trade Gothic.png",
      "url": "https://www.myfonts.com/fonts/linotype/trade-gothic/pro-roman/"
    },
    {
      "name": "Trajan",
      "image": "/images/Trajan.png",
      "url": "https://www.myfonts.com/fonts/adobe/trajan/trajan/"
    },
    {
      "name": "Univers",
      "image": "/images/Univers.png",
      "url": "https://www.myfonts.com/fonts/linotype/univers/pro-55-roman/"
    },
    {
      "name": "Walbaum",
      "image": "/images/Walbaum.png",
      "url": "https://www.myfonts.com/fonts/mti/walbaum/06-regular/"
    },
    {
      "name": "Zapfino",
      "image": "/images/Zapfino.png",
      "url": "https://www.myfonts.com/fonts/linotype/zapfino-extra/one/"
    },
    {
      "name": "Baskerville",
      "image": "/images/Baskerville.png",
      "url": "https://www.myfonts.com/fonts/bitstream/baskerville/roman/"
    },
    {
      "name": "Bauhaus",
      "image": "/images/Bauhaus.png",
      "url": "https://www.myfonts.com/fonts/itc/bauhaus/pro-medium-177552/"
    },
    {
      "name": "Bell Centennial",
      "image": "/images/Bell Centennial.png",
      "url": "https://www.myfonts.com/fonts/linotype/bell-centennial/name-and-number/"
    },
    {
      "name": "Bembo",
      "image": "/images/Bembo.png",
      "url": "https://www.myfonts.com/fonts/mti/bembo/pro-roman/"
    },
    {
      "name": "Bickham Script",
      "image": "/images/Bickham Script.png",
      "url": "https://www.myfonts.com/fonts/adobe/bickham-script-mm/regular/"
    },
    {
      "name": "Avenir",
      "image": "/images/Avenir.png",
      "url": "https://www.myfonts.com/fonts/linotype/avenir/pro-45-book/"
    },
    {
      "name": "Avant Garde",
      "image": "/images/Avant Garde.png",
      "url": "https://www.myfonts.com/fonts/itc/avant-garde-gothic/pro-book/"
    },
    {
      "name": "Arial",
      "image": "/images/Arial.png",
      "url": "https://www.fonts.com/font/monotype/arial/regular"
    },
    {
      "name": "American Typewriter",
      "image": "/images/American Typewriter.png",
      "url": "https://www.myfonts.com/fonts/itc/american-typewriter/pro-medium/"
    },
    {
      "name": "Akzidenz Grotesk",
      "image": "/images/Akzidenz Grotesk.png",
      "url": "https://www.bertholdtypes.com/font/akzidenz-grotesk/proplus/"
    },
    {
      "name": "Alternate Gothic",
      "image": "/images/Alternate Gothic.png",
      "url": "https://www.myfonts.com/fonts/linotype/alternate-gothic-lt/no1/"
    }
  ]

export default flashcards;