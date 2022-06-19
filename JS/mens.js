import {navbar} from "../Components/navbar.js";
import {footer} from "../Components/footer.js";

let navdiv = document.getElementById("navbar");
navdiv.innerHTML = navbar();

let footdiv = document.getElementById("footer");
footdiv.innerHTML = footer();

let category

let categories = document.querySelectorAll(".elements>a")

// console.log(categories)
categories.forEach(function(el){
    let dd_content = el.nextElementSibling
    // console.log(dd_content)
    el.addEventListener("click",function click(){
        if(dd_content.style.display=="block")
        {
            dd_content.style.display="none"
            el.style.borderBottom = "0px"
        }
        else{
            dd_content.style.display="block"
            el.style.borderBottom = "1px solid black"
        }

    })
})

const designers = [
    'Acne Studios',
    'Alexander McQueen',
    'Burberry',
    'Comme des Garçons Homme Deux',
    'Diesel',
    'Dita',
    'Dolce & Gabbana',
    'Frédérique Constant',
    'Givenchy',
    'Gucci',
    'Hed Mayner',
    'JW Anderson',
    'Kenzo',
    'Lemaire',
    'Maison Margiela',
    'Moncler',
    'Marsèll',
    'Rick Owens',
    'Salvatore Ferragamo',
    'Thom Browne',
    'thisisneverthat',
    'YMC',
    '032c',
    '1017 ALYX 9SM',
    '11 by Boris Bidjan Saberi',
    '132 5. ISSEY MIYAKE',
    '3.1 Phillip Lim',
    '3MAN',
    '424',
    '44 Label Group',
    '4SDESIGNS',
    '99% IS',
    'A BETTER FEELING',
    'A PERSONAL NOTE 73',
    'A-COLD-WALL*',
    'A. A. Spectrum',
    'A.P.C.',
    'AAPE by A Bathing Ape',
    'Acne Studios',
    'ACRONYM',
    'ADER error',
    'adidas Originals',
    'adidas x Human Made',
    'adidas x Humanrace by Pharrell Williams',
    'adidas x IVY PARK',
    'Adieu',
    'ADISH',
    'Advisory Board Crystals',
    'ADYAR',
    'ænrmòus',
    'AFFXWRKS',
    'Afield Out',
    'Agnona',
    'AGR',
    'Ahluwalia',
    'Ahluwalia &PaulSmith',
    'AïE',
    'AIREI',
    'Aitor Throup’s TheDSA',
    'Alan Crocetti',
    'Alchemist',
    'Alexander McQueen',
    'Alighieri',
    'All Blues',
    'AMBUSH',
    'AMI Alexandre Mattiussi',
    'AMIRI',
    'AMOMENTO',
    'and wander',
    'Andersson Bell',
    'ANDREĀDAMO',
    'Ann Demeulemeester',
    'Another Aspect',
    'Aries',
    'Arnar Már Jónsson',
    'ARTURO OBEGERO',
    'Ashley Williams',
    'Asics',
    'ASPESI',
    'AURALEE',
    'Awake NY',
    'Axel Arigato',
    'Aztech Mountain',
    'Balenciaga',
    'Bally Hike',
    'Balmain',
    'Bao Bao Issey Miyake',
    'BAPE',
    'Barbour',
    'Barena',
    'Bather',
    'BEAMS PLUS',
    'BED J.W. FORD',
    'Belstaff',
    'Benjamin Edgar',
    'Bethany Williams',
    'Bianca Saunders',
    'Billionaire Boys Club',
    'Birkenstock',
    'Blackmerle',
    'Bless',
    'Bleue Burnham',
    'BLK DNM',
    'Bloke',
    'Bode',
    'BONNIE CLYDE',
    'Boramy Viguier',
    'Boris Bidjan Saberi',
    'Boss',
    'both',
    'Bottega Veneta',
    'Botter',
    'Brain Dead',
    'Brioni',
    'Brownstone',
    'Brunello Cucinelli',
    'BRYAN JIMENÈZ',
    'Burberry',
    'By Walid',
    'BYBORRE',
    'C.P. Company',
    'C2H4',
    'Calvin Klein Underwear',
    'CALVINLUO',
    'Camber USA',
    'Camiel Fortgens',
    'CamperLab',
    'Canada Goose',
    'Carhartt Work In Progress',
    'Carlota Barrera',
    'Carne Bollente',
    'CARSON WACH',
    'Cartier',
    'Casablanca',
    'Castañer',
    'CAYL',
    'CDLP',
    'CFCL',
    'Champion Reverse Weave',
    'Charles Jeffrey Loverboy',
    'Chemist Creations',
    'Chen Peng',
    'Chet Lo',
    'Children of the Discordance',
    'CHIMI',
    'Chin Teo',
    'Chopova Lowena',
    'Christian Louboutin',
    'Clarks Originals',
    'Clot',
    'CMMN SWDN',
    'Coach 1941',
    'Collina Strada',
    'Come Back as a Flower',
    'COMMAS',
    'Comme des Garçons Homme',
    'Comme des Garçons Homme Deux',
    'Comme des Garçons Homme Plus',
    'Comme des Garçons Play',
    'Comme des Garçons Shirt',
    'Comme des Garçons Wallets',
    'Commission',
    'Common Projects',
    'Completedworks',
    'Connor McKnight',
    'Converse',
    'Coperni',
    'Cornerstone',
    'Corridor',
    'Côte&Ciel',
    'COTTON CITIZEN',
    'Courrèges',
    'Cowgirl Blue Co',
    'Craig Green',
    'Crocs',
    'Cutler And Gross',
    "D'heygere",
    'Daniel W. Fletcher',
    'Danner',
    'Davi Paris',
    'De Bonne Facture',
    'Dear Letterman',
    'Denim Tears',
    'Descente Allterrain',
    'DEVÁ STATES',
    'DEVEAUX NEW YORK',
    'Diemme',
    'Dime',
    'Dion Lee',
    'District Vision',
    'Dita',
    'Dolce & Gabbana',
    'DOPPIAA',
    'Double Rainbouu',
    'Doublet',
    'Dr. Martens',
    "Drake's",
    'drew house',
    'Dries Van Noten',
    'Drôle De Monsieur',
    'Dsquared2',
    'Dunhill',
    'Eastwood Danso',
    'Eckhaus Latta',
    'EDEN power corp',
    'Edward Cuming',
    'EGONlab',
    'Eidos',
    'éliou',
    'Emanuele Bicocchi',
    'Endless Joy',
    'Enfants Riches Déprimés',
    'Engineered Garments',
    'Entire Studios',
    'Erdem',
    'ERL',
    'Ermenegildo Zegna',
    'Ermenegildo Zegna Couture',
    'Ernest W. Baker',
    'Essentials',
    'Etro',
    'Études',
    'Evisu',
    'extreme cashmere',
    'Eytys',
    'F-LAGSTUF-F',
    "Factor's",
    'Faith Connexion',
    'FARIS',
    'FDMTL',
    'Fear of God',
    'Feit',
    'Fendi',
    'Feng Chen Wang',
    'FLATLIST EYEWEAR',
    'FRAME',
    'FREI-MUT',
    'Frenckenberger',
    'Fumito Ganryu',
    'Gabriela Hearst',
    'Garrett Leight',
    'GAUCHERE',
    'GCDS',
    'Gentle Fullness',
    'Gentle Monster',
    'Georges Wendell',
    'Georgia Kemball',
    'Gianvito Rossi',
    'Gil Rodriguez',
    'Gimaguas',
    'Giorgio Armani',
    'Giuseppe Zanotti',
    'Givenchy',
    'GmbH',
    'Golden Goose',
    'Goldwin',
    'Good News',
    'Goodfight',
    'GR10K',
    'Gramicci',
    'Greg Lauren',
    'Grey Ant',
    'Gucci',
    'Guidi',
    'Haider Ackermann',
    'Han Kjobenhavn',
    'Hannah Jewett',
    'HANREJ',
    'HARAGO',
    'Harmony',
    'Harris Wharf London',
    'Hatton Labs',
    'Hed Mayner',
    'HELIOT EMIL',
    'Helmut Lang',
    'Henrik Vibskov',
    'Herno',
    'Heron Preston',
    'Heron Preston for Calvin Klein',
    'HH-118389225',
    'Holden',
    'Holubar',
    'Homme Plissé Issey Miyake',
    'Honey Fucking Dijon',
    'Hood by Air',
    'HOPE',
    'House of the Very Islands',
    'Hugo',
    'Human Recreational Services',
    'Husbands',
    'Hyein Seo',
    'ICECREAM',
    'IN GOLD WE TRUST PARIS',
    'Innerraum',
    'Isabel Benenato',
    'Isabel Marant',
    'Isaia',
    'Izzue',
    'Jacquemus',
    'JACQUES',
    'JACQUES MARIE MAGE',
    'Jam',
    'Jan-Jan Van Essche',
    'Jean Paul Gaultier',
    'JERIH',
    'JieDa',
    'Jil Sander',
    'JiyongKim',
    'John Elliott',
    'Johnlawrencesullivan',
    'Judy Turner',
    'Julius',
    'Junya Watanabe',
    'Just Cavalli',
    'Juun.J',
    'JW Anderson',
    'Kanghyuk',
    'Kanuk',
    'KARA',
    'Karu Research',
    'KASSL Editions',
    'Keenkee',
    'KIDILL',
    'Kids Worldwide',
    'KidSuper',
    'Kiko Kostadinov',
    'King & Tuckfield',
    'Klättermusen',
    'Kuboraum',
    'Kuro',
    'KUSIKOHC',
    "L'Homme Rouge",
    'Label Under Construction',
    'Labrum',
    'Lacoste',
    'Lady White Co.',
    'Landlord',
    'Lanvin',
    'Le Gramme',
    'LE17SEPTEMBRE',
    'Les Tien',
    "Levi's",
    "Levi's Made & Crafted",
    "Levi's Vintage Clothing",
    'Lexxola',
    'Li-Ning',
    'Liam Hodges',
    'Liberal Youth Ministry',
    'Loewe',
    'Lorette Colé Duprat',
    "LU'U DAN",
    'Luar',
    'Ludovic de Saint Sernin',
    'Lukhanyo Mdingi',
    'M.A. Martin Asbjørn',
    'MAAP',
    'Mackage',
    'Mackintosh',
    'MAD Paris',
    'Magliano',
    'Mainline:RUS/Fr.CA/DE',
    'Maison Kitsuné',
    'Maison Margiela',
    'Malibu Sandals',
    'Manolo Blahnik',
    'Manors Golf',
    'Marc Jacobs',
    'Marc Jacobs Heaven',
    'Marcelo Burlon County of Milan',
    'Margaret Howell',
    'Marine Serre',
    'Marni',
    'Marsèll',
    'Marshall Columbia',
    'Martin Asbjørn',
    'Martine Ali',
    'Martine Rose',
    'Maryam Nassir Zadeh',
    'Massimo Alba',
    'Master-Piece Co',
    'mastermind JAPAN',
    'mastermind WORLD',
    'Matsuda',
    'Max Mara',
    'Maximilian Davis',
    'MCQ',
    'McQ Alexander McQueen',
    'Merrell 1TRL',
    'Meta Campania Collective',
    'mfpen',
    'MHL by Margaret Howell',
    'Miharayasuhiro',
    'MISBHV',
    'Missoni',
    'Missoni Sport',
    'MM6 Maison Margiela',
    'Molly Goddard',
    'Moncler Genius',
    'Moncler Grenoble',
    'Moose Knuckles x Eckhaus Latta',
    'Moschino',
    'Moussy Vintage',
    'Mowalola',
    'Mr. Saturday',
    'MSGM',
    'Mugler',
    'Mühle-Glashütte',
    'Museum of Peace & Quiet',
    'Mykita',
    'N.Hoolywood',
    'Nahmias',
    'Naked & Famous Denim',
    'Namacheko',
    'NAMESAKE',
    'Nanamica',
    'Nanushka',
    'NAPA by Martine Rose',
    'Native Sons',
    'Needles',
    'Neighborhood',
    'Neil Barrett',
    'NEMEN®',
    'New Balance',
    'Nicholas Daley',
    'Nike Jordan',
    'Noah',
    'Nobis',
    'NOMA t.d.',
    'non',
    'nonnative',
    'Noon Goons',
    'Norda',
    'Norse Projects',
    'NotSoNormal',
    'Nudie Jeans',
    'Numbering',
    'Oakley',
    'OAMC',
    'Off-White',
    'Officine Creative',
    'Officine Générale',
    'Ole Mathiesen',
    'Oliver Peoples',
    'On',
    'Online Ceramics',
    'Opening Ceremony',
    'Ostrya',
    'Ottolinger',
    'Our Legacy',
    'OVERCOAT',
    'Paco Rabanne',
    'Padmore & Barnes',
    'Palm Angels',
    'PALMER',
    'Palmes',
    'Paloma Wool',
    'Palomo Spain',
    'Panconesi',
    'PANGAIA',
    'PARADIS PERDUS',
    'Parajumpers',
    'paria /FARZANEH',
    'Pas Normal Studios',
    'Paul Smith',
    'Paul Smith + Christoph Niemann',
    'Paul Smith 50th Anniversary',
    'Paul Stuart',
    'Pearls Before Swine',
    'PEdALED',
    'Peter Do',
    'Phileo',
    'PHIPPS',
    'Phlemuns',
    'Pierre Hardy',
    'Polo Ralph Lauren',
    'Port Tanger',
    'Post Archive Faction (PAF)',
    'Praying',
    "PRESIDENT's",
    'PROJEKT PRODUKT',
    'PS by Paul Smith',
    'Psychworld',
    'Pyer Moss',
    'Quiet Golf',
    'R13',
    'RAEN',
    'Raf Simons',
    'rag & bone',
    'RAINS',
    'Ralph Lauren Purple Label',
    'Random Identities',
    'RANDT',
    'Rassvet',
    'RÄTHEL & WOLF',
    'Ray-Ban',
    'Re/Done',
    'Recto',
    'Red Wing Heritage',
    'Reebok by Pyer Moss',
    'Reebok Classics',
    'Reese Cooper',
    'Remi Relief',
    'RETROSUPERFUTURE',
    'Rhude',
    'Rick Owens',
    'Rick Owens Drkshdw',
    'Ring Jacket',
    'rito structure',
    'RK',
    'RLX Ralph Lauren',
    'ROA',
    'Rochambeau',
    'Rochas Homme',
    'ROGIC',
    'Rombaut',
    'RRL',
    's.k. manor hill',
    'S.R. STUDIO. LA. CA.',
    'S.S.Daley',
    'sacai',
    'Saint Laurent',
    'Saintwoods',
    'Salie 66',
    'Salomon',
    'Sankuanz',
    'Santangelo',
    'Santoni',
    'Sasquatchfabrix.',
    'Satisfy',
    'Satta',
    'Saturdays NYC',
    'Saul Nash',
    'SC103',
    "Schnayderman's",
    'Schott',
    'Sean Suen',
    'Seb Brown',
    'Sebago',
    'Sebastien Ami.',
    'Sébline',
    'Second/Layer',
    'SEEKINGS',
    'Séfr',
    'Serapis',
    'Sergio Tacchini',
    'Shinola',
    'Sies Marjan',
    'Situationist',
    'Sky High Farm Workwear',
    'Smythson',
    'Snow Peak',
    'Soar Running',
    'Solid & Striped',
    'Solid Homme',
    'Song for the Mute',
    'Sophie Buhai',
    'SOPHNET.',
    'Soulland',
    'South2 West8',
    'SPENCER BADU',
    'Sporty & Rich',
    'SSENSE WORKS',
    'St-Henri',
    'Stay Made',
    'Stefan Cooke',
    'Stella McCartney',
    'Stockholm (Surfboard) Club',
    'Stolen Girlfriends Club',
    'Stone Island Shadow Project',
    'Story mfg.',
    'Stray Rats',
    'Stüssy',
    'Stutterheim',
    'SUBU',
    'Suicoke',
    'Sulvam',
    'Sunflower',
    'Sunnei',
    'Sunspel',
    'SWEETLIMEJUICE',
    'System',
    'Taiga Takahashi',
    'TAION',
    'TAKAHIROMIYASHITA TheSoloist.',
    'Tanaka',
    'Tanner Fletcher',
    'Tekla',
    'Ten c',
    'Teva',
    'Thames MMXX.',
    'The Conspires',
    'The Elder Statesman',
    'The Farmers Market Global',
    'The North Face',
    'The Row',
    'The Very Warm',
    'The Viridi-anne',
    'THEBE MAGUGU',
    'Theophilio',
    'Theory',
    'Thierry Lasry',
    'thisisneverthat',
    'Tibi',
    'Tiger of Sweden',
    'Tiger of Sweden Jeans',
    'Toga Virilis',
    'Tokyo James',
    'TOM FORD',
    'Tom Sachs',
    'Tom Wood',
    'Toogood',
    'Total Luxury Spa',
    'True Tribe',
    'ts(s)',
    'Ugo Cacciatori',
    'Undercover',
    'Undercoverism',
    'Uniform Experiment',
    'UNIFORME',
    'Valentino',
    'Valentino Garavani',
    'Vans',
    'VEERT',
    'Veilance',
    'VEJA',
    'Vejas Maksimas',
    'Versace',
    'Versace Jeans Couture',
    'Versace Underwear',
    'VETEMENTS',
    'Vince',
    'Virón',
    'Visvim',
    'VITELLI',
    'VIVENDII',
    'Vivienne Westwood',
    'VTMNTS',
    'Vyner Articles',
    'WACKO MARIA',
    'Wales Bonner',
    'WARDROBE.NYC',
    'We11done',
    'Wekaforé',
    'WESTERN HYDRODYNAMIC RESEARCH',
    'White Mountaineering',
    'Who Decides War by MRDR BRVDO',
    'Winnie New York',
    'Wolford',
    'Won Hundred',
    'Wood Wood',
    'Wooyoungmi',
    'WWW.WILLSHOTT',
    'Xander Zhou',
    'XLIM',
    'Y-3',
    'Y/Project',
    'Yohji Yamamoto',
    'Youths in Balaclava',
    'Yuichi Toyama',
    'Yuki Hashimoto',
    'Yves Salomon',
    'Yves Salomon - Army',
    'Z Zegna',
    'ZAYN x ARNETTE',
    'ZEGNA'
]


function display_designers(data){
    data.forEach(function(el){
        let li = document.createElement("li")
        li.setAttribute("class","design")
        let a= document.createElement("a")
        a.innerText = el

        let designer_div = document.querySelector("#designers ul")
        li.append(a)
        designer_div.append(li)
    })
}

display_designers(designers)

function display_products(data){

    let products = document.querySelector("#products")

    products.innerHTML = null

    data.forEach(function(el){

        let card = document.createElement("div")

        let image_div = document.createElement("div")
        image_div.setAttribute("class","image")

        let content_div = document.createElement("div")
        content_div.setAttribute("class","content")

        let image = document.createElement("img")
        image.src = el.image
        image_div.append(image)
        let designer = document.createElement("p")
        designer.innerText = el.designer.toUpperCase()
        let name = document.createElement("p")
        name.innerText = el.name
        let price = document.createElement("p")
        price.innerText = el.price
        
        content_div.append(designer,name,price)

        card.addEventListener("click",() => {
          //console.log(el);
          sendToProductPage(el)
        });

        card.append(image_div,content_div)

        products.append(card)
    })

}


  const prod = [
    { image:
      'https://img.ssensemedia.com/images/222451M131008_1/gucci-undefined.jpg',
     name: 'Reversible Black GG Marmont Belt',
     designer: 'Gucci',
     price: '$545',
     category: 'Belts & Suspenders' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222270M131027_1/salvatore-ferragamo-undefined.jpg',
     name: 'Black Gancini Belt',
     designer: 'Salvatore Ferragamo',
     price: '$545',
     category: 'Belts & Suspenders' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222270M131031_1/salvatore-ferragamo-undefined.jpg',
     name: 'Reversible Black Gancini Belt',
     designer: 'Salvatore Ferragamo',
     price: '$545',
     category: 'Belts & Suspenders' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222807M131000_1/valentino-garavani-undefined.jpg',
     name: 'Black VLogo Belt',
     designer: 'Valentino Garavani',
     price: '$490',
     category: 'Belts & Suspenders' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222776M131000_1/alyx-undefined.jpg',
     name: 'Black Classic Rollercoaster Belt',
     designer: '1017 ALYX 9SM',
     price: '$325',
     category: 'Belts & Suspenders' }
     ,
     { image:'https://img.ssensemedia.com/images/222278M131004_1/givenchy-undefined.jpg',
       name: 'Black 4G Belt',
       designer: 'Givenchy',
       price: '$330',
       category: 'Belts & Suspenders' }
     ,
     { image:
      'https://img.ssensemedia.com/images/221789M133042_1/dita-undefined.jpg',
     name: 'Brown Buckeye Glasses',
     designer: 'Dita',
     price: '$625',
     category: 'Eyewear' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222789M134000_1/dita-undefined.jpg',
     name: 'Pink Laniti Limited Edition Sunglasses',
     designer: 'Dita',
     price: '$875',
     category: 'Eyewear' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222789M134001_1/dita-undefined.jpg',
     name: 'Black Creator Limited Edition Sunglasses',
     designer: 'Dita',
     price: '$600',
     category: 'Eyewear' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221789M134034_1/dita-undefined.jpg',
     name: 'Black Vers One Sunglasses',
     designer: 'Dita',
     price: '$650',
     category: 'Eyewear' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221789M134038_1/dita-undefined.jpg',
     name: 'Gold Vers Two Sunglasses',
     designer: 'Dita',
     price: '$650',
     category: 'Eyewear' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222376M134006_1/burberry-undefined.jpg',
       name: 'Brown Rectangular Sunglasses',
       designer: 'Burberry',
       price: '$265',
       category: 'Eyewear' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222789M134000_1/dita-undefined.jpg',
       name: 'Pink Laniti Limited Edition Sunglasses',
       designer: 'Dita',
       price: '$875',
       category: 'Eyewear' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222789M134001_1/dita-undefined.jpg',
       name: 'Black Creator Limited Edition Sunglasses',
       designer: 'Dita',
       price: '$600',
       category: 'Eyewear' }
     ,
     { image:
      'https://img.ssensemedia.com/images/221232M150009_1/rick-owens-undefined.jpg',
     name: 'Burgundy Cotton Mask',
     designer: 'Rick Owens',
     price: '$75',
     category: 'Face Masks' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221232M150010_1/rick-owens-undefined.jpg',
     name: 'Green Cotton Mask',
     designer: 'Rick Owens',
     price: '$75',
     category: 'Face Masks' }
   ,
   { image:
      'https://img.ssensemedia.com/images/212232M150025_1/rick-owens-undefined.jpg',
     name: 'Grey Cotton Mask',
     designer: 'Rick Owens',
     price: '$85',
     category: 'Face Masks' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221232M150011_1/rick-owens-undefined.jpg',
     name: 'Black Silk Long Mask',
     designer: 'Rick Owens',
     price: '$170',
     category: 'Face Masks' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221251M150000_1/balmain-undefined.jpg',
     name: 'Black & Off-White Logo Face Mask',
     designer: 'Balmain',
     price: '$137',
     category: 'Face Masks' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221942M135040_1/theophilio-undefined.jpg',
       name: 'SSENSE Exclusive Yellow Leather Gloves',
       designer: 'Theophilio',
       price: '$720',
       category: 'Gloves' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221381M135000_1/thom-browne-undefined.jpg',
       name: 'Navy Cashmere 4-Bar Gloves',
       designer: 'Thom Browne',
       price: '$385',
       category: 'Gloves' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222270M135000_1/salvatore-ferragamo-undefined.jpg',
       name: 'Black Lambskin Gloves',
       designer: 'Salvatore Ferragamo',
       price: '$525',
       category: 'Gloves' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221232M135005_1/rick-owens-undefined.jpg',
       name: 'Black Calfskin Gloves',
       designer: 'Rick Owens',
       price: '$1065',
       category: 'Gloves' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221232M135006_1/rick-owens-undefined.jpg',
       name: 'Orange Calfskin Gloves',
       designer: 'Rick Owens',
       price: '$1065',
       category: 'Gloves' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222129M138026_1/acne-studios-undefined.jpg',
       name: 'Black Wool Beanie',
       designer: 'Acne Studios',
       price: '$145',
       category: 'Hats' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222807M139001_1/valentino-garavani-undefined.jpg',
       name: 'Black Baseball Cap',
       designer: 'Valentino Garavani',
       price: '$450',
       category: 'Hats' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222111M138002_1/moncler-undefined.jpg',
       name: 'Black Wool Beanie',
       designer: 'Moncler',
       price: '$315',
       category: 'Hats' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221379M139001_1/marni-undefined.jpg',
       name: 'Orange Denim Bucket Hat',
       designer: 'Marni',
       price: '$385',
       category: 'Hats' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222745M139000_1/online-ceramics-undefined.jpg',
       name: 'Green \'Good Deed\' Cap',
       designer: 'Online Ceramics',
       price: '$45',
       category: 'Hats' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222999M145002_1/veert-undefined.jpg',
       name: 'Gold \'The Shape\' Necklace',
       designer: 'VEERT',
       price: '$1065',
       category: 'Jewelry' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222999M145003_1/veert-undefined.jpg',
       name: 'Gray \'The Shape\' Necklace',
       designer: 'VEERT',
       price: '$1065',
       category: 'Jewelry' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222503M142004_1/dear-letterman-undefined.jpg',
       name: 'Gold Hanun Bracelet',
       designer: 'Dear Letterman',
       price: '$285',
       category: 'Jewelry' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222999M144002_1/veert-undefined.jpg',
       name: 'Gold & Green \'The Round\' Drop Earrings',
       designer: 'VEERT',
       price: '$160',
       category: 'Jewelry' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222503M144004_1/dear-letterman-undefined.jpg',
       name: 'Silver Matin Ear Cuffs',
       designer: 'Dear Letterman',
       price: '$190',
       category: 'Jewelry' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221477M148012_1/jw-anderson-undefined.jpg',
       name: 'Red Mushroom Keychain',
       designer: 'JW Anderson',
       price: '$83',
       category: 'Keychains' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221477M148014_1/jw-anderson-undefined.jpg',
       name: 'Multicolor Pol Black Eye Keychain',
       designer: 'JW Anderson',
       price: '$95',
       category: 'Keychains' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221646M148004_1/lemaire-undefined.jpg',
       name: 'Brown Leather Wadded Key Holder',
       designer: 'Lemaire',
       price: '$105',
       category: 'Keychains' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221646M148005_1/lemaire-undefined.jpg',
       name: 'Green Leather Wadded Key Holder',
       designer: 'Lemaire',
       price: '$105',
       category: 'Keychains' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221646M148008_1/lemaire-undefined.jpg',
       name: 'Black Leather Wadded Key Holder',
       designer: 'Lemaire',
       price: '$105',
       category: 'Keychains' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222259M146000_1/alexander-mcqueen-undefined.jpg',
       name: 'Silver Graffiti Logo Tie Bar',
       designer: 'Alexander McQueen',
       price: '$315',
       category: 'Pocket Squares & Tie Bars' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222376M149000_1/burberry-undefined.jpg',
       name: 'Silver Monogram Tie Bar',
       designer: 'Burberry',
       price: '$260',
       category: 'Pocket Squares & Tie Bars' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221379M149000_1/bleue-burnham-undefined.jpg',
       name:
        'SSENSE Exclusive Silver & Multicolor Gemstone Money Clip Tie Bar',
       designer: 'Bleue Burnham',
       price: '$358',
       category: 'Pocket Squares & Tie Bars' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221379M149001_1/bleue-burnham-undefined.jpg',
       name: 'SSENSE Exclusive Silver Money Clip Tie Bar',
       designer: 'Bleue Burnham',
       price: '$256',
       category: 'Pocket Squares & Tie Bars' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221490M149001_1/in-gold-we-trust-undefined.jpg',
       name: 'SSENSE Exclusive Gold Classical Tie Bar',
       designer: 'IN GOLD WE TRUST PARIS',
       price: '$140',
       category: 'Pocket Squares & Tie Bars' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221490M149000_1/in-gold-we-trust-undefined.jpg',
       name: 'SSENSE Exclusive Silver Classical Tie Bar',
       designer: 'IN GOLD WE TRUST PARIS',
       price: '$140',
       category: 'Pocket Squares & Tie Bars' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222381M149002_1/thom-browne-undefined.jpg',
       name: 'Silver Classic Tie Bar',
       designer: 'Thom Browne',
       price: '$385',
       category: 'Pocket Squares & Tie Bars' }
     ,
     { image:
        'https://img.ssensemedia.com/images/212376M149001_1/burberry-undefined.jpg',
       name: 'Silver Engraved Tie Bar',
       designer: 'Burberry',
       price: '$245',
       category: 'Pocket Squares & Tie Bars' }
     ,
     { image:
        'https://img.ssensemedia.com/images/212376M150097_1/burberry-undefined.jpg',
       name: 'Silver Icon Stripe Tie Bar',
       designer: 'Burberry',
       price: '$275',
       category: 'Pocket Squares & Tie Bars' }
     ,
     { image:
        'https://img.ssensemedia.com/images/211260M149007_1/paul-smith-undefined.jpg',
       name: 'Black & Multicolor Stripes Tie Bar',
       designer: 'Paul Smith',
       price: '$52',
       category: 'Pocket Squares & Tie Bars' }
     ,
     { image:
        'https://img.ssensemedia.com/images/211381M149393_1/thom-browne-undefined.jpg',
       name: 'Silver Classic Long Tie Bar',
       designer: 'Thom Browne',
       price: '$445',
       category: 'Pocket Squares & Tie Bars' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222270M150013_1/salvatore-ferragamo-undefined.jpg',
       name: 'Gray Wool Scarf',
       designer: 'Salvatore Ferragamo',
       price: '$295',
       category: 'Scarves' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222270M150014_1/salvatore-ferragamo-undefined.jpg',
       name: 'Gray Cashmere Scarf',
       designer: 'Salvatore Ferragamo',
       price: '$325',
       category: 'Scarves' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222270M150015_1/salvatore-ferragamo-undefined.jpg',
       name: 'Gray & Navy Wool Scarf',
       designer: 'Salvatore Ferragamo',
       price: '$295',
       category: 'Scarves' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221970M150000_1/takahiromiyashita-thesoloist-undefined.jpg',
       name: 'Black Attachment Turtle Neck Warmer',
       designer: 'TAKAHIROMIYASHITA TheSoloist.',
       price: '$85',
       category: 'Scarves' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221287M150002_1/raf-simons-undefined.jpg',
       name: 'Black Netting Scarf',
       designer: 'Raf Simons',
       price: '$325',
       category: 'Scarves' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221314M220006_1/vivienne-westwood-undefined.jpg',
       name: 'Black Tartan Socks',
       designer: 'Vivienne Westwood',
       price: '$36',
       category: 'Socks' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221445M220004_1/sacai-undefined.jpg',
       name: 'Black Buffalo Check Socks',
       designer: 'sacai',
       price: '$70',
       category: 'Socks' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221249M220004_1/jil-sander-undefined.jpg',
       name: 'Black Cotton Patch Socks',
       designer: 'Jil Sander',
       price: '$110',
       category: 'Socks' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221249M220005_1/jil-sander-undefined.jpg',
       name: 'White Cotton Patch Socks',
       designer: 'Jil Sander',
       price: '$110',
       category: 'Socks' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221260M220007_1/paul-smith-undefined.jpg',
       name: 'Four-Pack Black Camouflage Socks',
       designer: 'Paul Smith',
       price: '$50',
       category: 'Socks' }
     ,
     { image:
        'https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/192387M153016_1/kenzo-pink-shifting-eye-iphone-x-xs-case.jpg',
       name: 'Pink Shifting Eye iPhone X/XS Case',
       designer: 'KENZO',
       price: '$60',
       category: 'Tech' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222270M158003_1/salvatore-ferragamo-undefined.jpg',
       name: 'Navy Silk Tie',
       designer: 'Salvatore Ferragamo',
       price: '$200',
       category: 'Ties' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221058M213147_1/comme-des-garcons-homme-deux-undefined.jpg',
       name: 'Black & White Geo Tie',
       designer: 'Comme des Garçons Homme Deux',
       price: '$150',
       category: 'Ties' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221600M158002_1/ernest-w-baker-undefined.jpg',
       name: 'Brown Heart Embroidered Neck Tie',
       designer: 'Ernest W. Baker',
       price: '$95',
       category: 'Ties' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221085M158005_1/boss-hugo-boss-undefined.jpg',
       name: 'Grey Silk Tie',
       designer: 'Boss',
       price: '$71',
       category: 'Ties' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221085M158004_1/boss-hugo-boss-undefined.jpg',
       name: 'Navy Silk Tie',
       designer: 'Boss',
       price: '$75',
       category: 'Ties' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222451M158008_1/gucci-undefined.jpg',
       name: 'Black Geometric G Tie',
       designer: 'Gucci',
       price: '$255',
       category: 'Ties' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222259M159003_1/alexander-mcqueen-undefined.jpg',
       name: 'Black & Gold Skull Umbrellas',
       designer: 'Alexander McQueen',
       price: '$505',
       category: 'Umbrellas' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222259M159002_1/alexander-mcqueen-undefined.jpg',
       name: 'Black & Silver Skull Cane',
       designer: 'Alexander McQueen',
       price: '$475',
       category: 'Umbrellas' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222259M159005_1/alexander-mcqueen-undefined.jpg',
       name: 'Black & Gold Skull Cane',
       designer: 'Alexander McQueen',
       price: '$475',
       category: 'Umbrellas' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222259M159000_1/alexander-mcqueen-undefined.jpg',
       name: 'Black & Silver Skull Umbrellas',
       designer: 'Alexander McQueen',
       price: '$505',
       category: 'Umbrellas' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222259M159003_1/alexander-mcqueen-undefined.jpg',
       name: 'Black & Gold Skull Umbrellas',
       designer: 'Alexander McQueen',
       price: '$505',
       category: 'Umbrellas' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222807M164006_1/valentino-garavani-undefined.jpg',
       name: 'Black VLTN Wallet',
       designer: 'Valentino Garavani',
       price: '$370',
       category: 'Wallets & Card Holders' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222807M164001_1/valentino-garavani-undefined.jpg',
       name: 'Black VLogo Signature Wallet',
       designer: 'Valentino Garavani',
       price: '$415',
       category: 'Wallets & Card Holders' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222807M163013_1/valentino-garavani-undefined.jpg',
       name: 'Black Identity Card Holder',
       designer: 'Valentino Garavani',
       price: '$320',
       category: 'Wallets & Card Holders' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222807M164011_1/valentino-garavani-undefined.jpg',
       name: 'Black VLogo Signature Card Holder',
       designer: 'Valentino Garavani',
       price: '$360',
       category: 'Wallets & Card Holders' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222807M164008_1/valentino-garavani-undefined.jpg',
       name: 'Brown Identity Wallet',
       designer: 'Valentino Garavani',
       price: '$415',
       category: 'Wallets & Card Holders' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222807M164010_1/valentino-garavani-undefined.jpg',
       name: 'Black Identity Wallet',
       designer: 'Valentino Garavani',
       price: '$415',
       category: 'Wallets & Card Holders' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221769M165002_1/frandeacutedandeacuterique-constant-undefined.jpg',
       name: 'Silver Classics Index Automatic Watch',
       designer: 'Frédérique Constant',
       price: '$1465',
       category: 'Watches' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221769M165001_1/frandeacutedandeacuterique-constant-undefined.jpg',
       name: 'Black & Silver Highlife Automatic Watch',
       designer: 'Frédérique Constant',
       price: '$2440',
       category: 'Watches' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221769M165003_1/frandeacutedandeacuterique-constant-undefined.jpg',
       name: 'Silver Highlife Heart Beat Watch',
       designer: 'Frédérique Constant',
       price: '$2540',
       category: 'Watches' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221769M165004_1/frandeacutedandeacuterique-constant-undefined.jpg',
       name: 'Silver & Brown Classics Quartz Watch',
       designer: 'Frédérique Constant',
       price: '$875',
       category: 'Watches' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221769M165005_1/frandeacutedandeacuterique-constant-undefined.jpg',
       name: 'Black Classics Heart Beat Watch',
       designer: 'Frédérique Constant',
       price: '$1525',
       category: 'Watches' }
     ,        
     { image:
      'https://img.ssensemedia.com/images/222129M166000_1/acne-studios-undefined.jpg',
     name: 'Black Ripstop Backpack',
     designer: 'Acne Studios',
     price: '$200',
     category: 'Backpacks' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222129M166001_1/acne-studios-undefined.jpg',
     name: 'Blue Ripstop Backpack',
     designer: 'Acne Studios',
     price: '$200',
     category: 'Backpacks' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221817M166000_1/and-wander-undefined.jpg',
     name: 'Black X-Pac 45L Backpack',
     designer: 'and wander',
     price: '$510',
     category: 'Backpacks' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221817M166003_1/and-wander-undefined.jpg',
     name: 'White X-Pac 45L Backpack',
     designer: 'and wander',
     price: '$485',
     category: 'Backpacks' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221631M166000_1/thisisneverthat-undefined.jpg',
     name: 'Black UL 15 Day Backpack',
     designer: 'thisisneverthat',
     price: '$115',
     category: 'Backpacks' }
     ,
     { image:
      'https://img.ssensemedia.com/images/221084M167000_1/hugo-hugo-boss-undefined.jpg',
     name: 'Black Ethon Briefcase',
     designer: 'Hugo',
     price: '$65',
     category: 'Briefcase' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221168M167004_1/maison-margiela-undefined.jpg',
     name: 'Black 5AC Briefcase',
     designer: 'Maison Margiela',
     price: '$1510',
     category: 'Briefcase' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221451M167001_1/gucci-undefined.jpg',
     name: 'Beige & Brown GG Supreme Business Briefcase',
     designer: 'Gucci',
     price: '$1995',
     category: 'Briefcase' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221451M167000_1/gucci-undefined.jpg',
     name: 'Black Cripto Business Briefcase',
     designer: 'Gucci',
     price: '$2230',
     category: 'Briefcase' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221264M167000_1/ermenegildo-zegna-undefined.jpg',
     name: 'Black Leather Business Briefcase',
     designer: 'Ermenegildo Zegna',
     price: '$1280',
     category: 'Briefcase' }
     ,
     { image:
      'https://img.ssensemedia.com/images/221703M169000_1/guidi-undefined.jpg',
     name: 'Black Horse Leather Duffle Bag',
     designer: 'Guidi',
     price: '$1180',
     category: 'Duffle Bags' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221254M169000_1/lanvin-undefined.jpg',
     name: 'Black Curb Duffle Bag',
     designer: 'Lanvin',
     price: '$1150',
     category: 'Duffle Bags' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221379M169000_1/marni-undefined.jpg',
     name: 'Black Trompe L\'œil Duffle Bag',
     designer: 'Marni',
     price: '$1720',
     category: 'Duffle Bags' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221138M169001_1/y-3-undefined.jpg',
     name: 'Black Mobile Archive Holdall Duffle Bag',
     designer: 'Y-3',
     price: '$1005',
     category: 'Duffle Bags' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221368M169000_1/neil-barrett-undefined.jpg',
     name: 'Black Eastpak Edition Duffle Bag',
     designer: 'Neil Barrett',
     price: '$248',
     category: 'Duffle Bags' }
     ,
     { image:
      'https://img.ssensemedia.com/images/222807M170010_1/valentino-garavani-undefined.jpg',
     name: 'Black VLTN Messenger Bag',
     designer: 'Valentino Garavani',
     price: '$1670',
     category: 'Messenger Bags' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222807M170004_1/valentino-garavani-undefined.jpg',
     name: 'Black Leather Messenger Bag',
     designer: 'Valentino Garavani',
     price: '$795',
     category: 'Messenger Bags' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222807M170002_1/valentino-garavani-undefined.jpg',
     name: 'Navy Leather Messenger Bag',
     designer: 'Valentino Garavani',
     price: '$1095',
     category: 'Messenger Bags' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221168M170093_1/maison-margiela-undefined.jpg',
     name: 'Tan Large Glam Slam Bag',
     designer: 'Maison Margiela',
     price: '$2250',
     category: 'Messenger Bags' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221389M172012_1/maison-kitsune-undefined.jpg',
     name: 'Tan Profil Fox Stamp Tote',
     designer: 'Maison Kitsuné',
     price: '$150',
     category: 'Messenger Bags' }
   ,
   { image:
    'https://img.ssensemedia.com/images/222387M171010_1/kenzo-undefined.jpg',
   name: 'Black Small Kampus Tiger Pouch',
   designer: 'Kenzo',
   price: '$195',
   category: 'Pouches & Document Holders' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222387M171033_1/kenzo-undefined.jpg',
   name: 'Black Large Crest Pouch',
   designer: 'Kenzo',
   price: '$285',
   category: 'Pouches & Document Holders' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222387M171012_1/kenzo-undefined.jpg',
   name: 'Black Small Kampus Tiger Pouch',
   designer: 'Kenzo',
   price: '$220',
   category: 'Pouches & Document Holders' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222259M171001_1/alexander-mcqueen-undefined.jpg',
   name: 'Black Mini Graffiti Pouch',
   designer: 'Alexander McQueen',
   price: '$705',
   category: 'Pouches & Document Holders' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221310M171000_1/gr10k-undefined.jpg',
   name: 'Grey & Burgundy Pautel Pouch',
   designer: 'GR10K',
   price: '$124',
   category: 'Pouches & Document Holders' }
   ,
   { image:
    'https://img.ssensemedia.com/images/212169M172039_1/bode-undefined.jpg',
   name: 'SSENSE Exclusive Black Linen Cinch Tote',
   designer: 'Bode',
   price: '$490',
   category: 'Tote Bags' }
  ,
  { image:
    'https://img.ssensemedia.com/images/212169M172040_1/bode-undefined.jpg',
   name: 'SSENSE Exclusive Black Linen Large Tote',
   designer: 'Bode',
   price: '$490',
   category: 'Tote Bags' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222129M172000_1/acne-studios-undefined.jpg',
   name: 'Black Logo Tote',
   designer: 'Acne Studios',
   price: '$160',
   category: 'Tote Bags' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222129M172001_1/acne-studios-undefined.jpg',
   name: 'Red Ripstop Tote',
   designer: 'Acne Studios',
   price: '$160',
   category: 'Tote Bags' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221817M172001_1/and-wander-undefined.jpg',
   name: 'Black X-Pac 25L 3-Way Tote',
   designer: 'and wander',
   price: '$235',
   category: 'Tote Bags' }
   ,
   { image:
    'https://img.ssensemedia.com/images/222381M171005_1/thom-browne-undefined.jpg',
   name: 'Black Leather Luggage Tag',
   designer: 'Thom Browne',
   price: '$310',
   category: 'Travel Bags' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221886M173000_1/amiri-undefined.jpg',
   name: 'Off-White & Brown Bandana Bag',
   designer: 'AMIRI',
   price: '$2690',
   category: 'Travel Bags' }
  ,
  { image:
    'https://img.ssensemedia.com/images/212401M173026_1/master-piece-co-undefined.jpg',
   name: 'Black Trolley Suitcase',
   designer: 'Master-Piece Co',
   price: '$490',
   category: 'Travel Bags' }
  ,
  { image:
    'https://img.ssensemedia.com/images/212055M173004_1/rag-and-bone-undefined.jpg',
   name: 'Black Nylon Commuter Overnighter Bag',
   designer: 'rag & bone',
   price: '$430',
   category: 'Travel Bags' }
  ,
  { image:
    'https://img.ssensemedia.com/images/202171M173079_1/moncler-genius-undefined.jpg',
   name: 'Moncler Rimowa \'Reflection\' Silver Suitcase',
   designer: 'Moncler Genius',
   price: '$3310',
   category: 'Travel Bags' }
        ,
  { image:
          'https://img.ssensemedia.com/images/221631M180008_1/thisisneverthat-undefined.jpg',
         name: 'Khaki T-Light Jacket',
         designer: 'thisisneverthat',
         price: '$120',
         category: 'Jackets & Coats' }
  ,
  { image:
          'https://img.ssensemedia.com/images/221631M180009_1/thisisneverthat-undefined.jpg',
         name: 'Off-White Polyester Jacket',
         designer: 'thisisneverthat',
         price: '$190',
         category: 'Jackets & Coats' }
  ,
  { image:
          'https://img.ssensemedia.com/images/221631M180007_1/thisisneverthat-undefined.jpg',
         name: 'Black Nylon Jacket',
         designer: 'thisisneverthat',
         price: '$220',
         category: 'Jackets & Coats' }
  ,
  { image:
          'https://img.ssensemedia.com/images/222259M180000_1/alexander-mcqueen-undefined.jpg',
         name: 'White Workwear Denim Jacket',
         designer: 'Alexander McQueen',
         price: '$1570',
         category: 'Jackets & Coats' }
          ,
       { image:
          'https://img.ssensemedia.com/images/222259M180001_1/alexander-mcqueen-undefined.jpg',
         name: 'Black Polyester Jacket',
         designer: 'Alexander McQueen',
         price: '$1110',
         category: 'Jackets & Coats' }
       ,
       { image:
        'https://img.ssensemedia.com/images/221193M191001_1/paria-farzaneh-undefined.jpg',
       name: 'Gray New Jeans',
       designer: 'paria /FARZANEH',
       price: '$575',
       category: 'Jeans' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221001M186027_1/diesel-undefined.jpg',
       name: 'Blue D-Mand Jeans',
       designer: 'Diesel',
       price: '$460',
       category: 'Jeans' }
     ,
     { image:
        'https://img.ssensemedia.com/images/221001M186030_1/diesel-undefined.jpg',
       name: 'Blue Logo Jeans',
       designer: 'Diesel',
       price: '$450',
       category: 'Jeans' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222001M186002_1/diesel-undefined.jpg',
       name: 'Blue D-Strukt Jeans',
       designer: 'Diesel',
       price: '$220',
       category: 'Jeans' }
     ,
     { image:
        'https://img.ssensemedia.com/images/222001M186004_1/diesel-undefined.jpg',
       name: 'Black Sleenker Jeans',
       designer: 'Diesel',
       price: '$315',
       category: 'Jeans' }
     ,
     { image:
      'https://img.ssensemedia.com/images/222161M190000_1/ymc-undefined.jpg',
     name: 'Navy Umbro Edition Trousers',
     designer: 'YMC',
     price: '$175',
     category: 'Pants' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222161M190001_1/ymc-undefined.jpg',
     name: 'Tan Umbro Edition Trousers',
     designer: 'YMC',
     price: '$175',
     category: 'Pants' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222381M190004_1/thom-browne-undefined.jpg',
     name: 'Gray 4-Bar Lounge Pants',
     designer: 'Thom Browne',
     price: '$720',
     category: 'Pants' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222381M191003_1/thom-browne-undefined.jpg',
     name: 'Gray 4-Bar Trousers',
     designer: 'Thom Browne',
     price: '$1160',
     category: 'Pants' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222381M191006_1/thom-browne-undefined.jpg',
     name: 'Gray Wool Trousers',
     designer: 'Thom Browne',
     price: '$895',
     category: 'Pants' }
     ,
     { image:
      'https://img.ssensemedia.com/images/221776M192013_1/gimaguas-undefined.jpg',
     name: 'Red Cotton Shirt',
     designer: 'Gimaguas',
     price: '$85',
     category: 'Shirts' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222381M192013_1/thom-browne-undefined.jpg',
     name: 'Blue 4-Bar Shirt',
     designer: 'Thom Browne',
     price: '$455',
     category: 'Shirts' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221891M192000_1/a-cold-wall-undefined.jpg',
     name: 'Black Surface Shirt',
     designer: 'A-COLD-WALL*',
     price: '$405',
     category: 'Shirts' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221897M192058_1/hed-mayner-undefined.jpg',
     name: 'Blue Linen Shirt',
     designer: 'Hed Mayner',
     price: '$940',
     category: 'Shirts' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221897M192059_1/hed-mayner-undefined.jpg',
     name: 'Beige Linen Shirt',
     designer: 'Hed Mayner',
     price: '$590',
     category: 'Shirts' }
     ,
     { image:
      'https://img.ssensemedia.com/images/221249M193004_1/jil-sander-undefined.jpg',
     name: 'White Cotton Shorts',
     designer: 'Jil Sander',
     price: '$425',
     category: 'Shorts' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222001M193002_1/diesel-undefined.jpg',
     name: 'Pink Haty Shorts',
     designer: 'Diesel',
     price: '$200',
     category: 'Shorts' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221776M193009_1/gimaguas-undefined.jpg',
     name: 'Red Dudu Shorts',
     designer: 'Gimaguas',
     price: '$75',
     category: 'Shorts' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222576M193003_1/manors-golf-undefined.jpg',
     name: 'Beige Polyester Shorts',
     designer: 'Manors Golf',
     price: '$120',
     category: 'Shorts' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222576M193004_1/manors-golf-undefined.jpg',
     name: 'Navy Polyester Shorts',
     designer: 'Manors Golf',
     price: '$120',
     category: 'Shorts' }
     ,
     { image:
      'https://img.ssensemedia.com/images/221264M180025_1/ermenegildo-zegna-undefined.jpg',
     name: 'Navy Cotton Blazer',
     designer: 'Ermenegildo Zegna',
     price: '$1825',
     category: 'Suits & Blazers' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221460M195002_1/ermenegildo-zegna-couture-undefined.jpg',
     name: 'SSENSE Exclusive Blue Cotton Blazer',
     designer: 'Ermenegildo Zegna Couture',
     price: '$1983',
     category: 'Suits & Blazers' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222085M196001_1/boss-hugo-boss-undefined.jpg',
     name: 'Beige Hanry Suit',
     designer: 'Boss',
     price: '$810',
     category: 'Suits & Blazers' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221262M196001_1/giorgio-armani-undefined.jpg',
     name: 'Navy Wool Suit',
     designer: 'Giorgio Armani',
     price: '$2327',
     category: 'Suits & Blazers' }
   ,
   { image:
      'https://img.ssensemedia.com/images/221016M195001_1/ottolinger-undefined.jpg',
     name: 'Black Wool Blazer',
     designer: 'Ottolinger',
     price: '$684',
     category: 'Suits & Blazers' }
     ,
     { image:
      'https://img.ssensemedia.com/images/222745M201002_1/online-ceramics-undefined.jpg',
     name: 'Navy Puppy Sweatshirt',
     designer: 'Online Ceramics',
     price: '$180',
     category: 'Sweaters' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222387M202024_1/kenzo-undefined.jpg',
     name: 'Black Cotton Hoodie',
     designer: 'Kenzo',
     price: '$425',
     category: 'Sweaters' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222387M202025_1/kenzo-undefined.jpg',
     name: 'Gray Cotton Hoodie',
     designer: 'Kenzo',
     price: '$425',
     category: 'Sweaters' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222387M202026_1/kenzo-undefined.jpg',
     name: 'White Cotton Hoodie',
     designer: 'Kenzo',
     price: '$425',
     category: 'Sweaters' }
   ,
   { image:
      'https://img.ssensemedia.com/images/222387M204021_1/kenzo-undefined.jpg',
     name: 'Gray Cotton Sweatshirt',
     designer: 'Kenzo',
     price: '$305',
     category: 'Sweaters' }
   ,
   { image:
    'https://img.ssensemedia.com/images/221653M208057_1/versace-underwear-undefined.jpg',
   name: 'Blue Polyester Swim Shorts',
   designer: 'Versace Underwear',
   price: '$270',
   category: 'Swimwear' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221653M208058_1/versace-underwear-undefined.jpg',
   name: 'Pink Polyester Swim Shorts',
   designer: 'Versace Underwear',
   price: '$270',
   category: 'Swimwear' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221653M208039_1/versace-underwear-undefined.jpg',
   name: 'Purple Polyester Swim Briefs',
   designer: 'Versace Underwear',
   price: '$225',
   category: 'Swimwear' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221653M208042_1/versace-underwear-undefined.jpg',
   name: 'Blue Polyester Swim Shorts',
   designer: 'Versace Underwear',
   price: '$400',
   category: 'Swimwear' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221776M208005_1/gimaguas-undefined.jpg',
   name: 'SSENSE Exclusive Blue Swim Shorts',
   designer: 'Gimaguas',
   price: '$80',
   category: 'Swimwear' }
   ,
   { image:
    'https://img.ssensemedia.com/images/222669M213060_1/vetements-undefined.jpg',
   name: 'Red \'Vetements Translation\' T-Shirt',
   designer: 'VETEMENTS',
   price: '$440',
   category: 'Tops' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222003M213015_1/dolce-and-gabbana-undefined.jpg',
   name: 'White Cotton T-Shirt',
   designer: 'Dolce & Gabbana',
   price: '$520',
   category: 'Tops' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221897M213018_1/hed-mayner-undefined.jpg',
   name: 'White Cotton T-Shirt',
   designer: 'Hed Mayner',
   price: '$270',
   category: 'Tops' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221897M213022_1/hed-mayner-undefined.jpg',
   name: 'Beige Linen T-Shirt',
   designer: 'Hed Mayner',
   price: '$510',
   category: 'Tops' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221254M212005_1/lanvin-undefined.jpg',
   name: 'Navy Batman & Catwoman Edition Polo',
   designer: 'Lanvin',
   price: '$510',
   category: 'Tops' }
   ,
   { image:
    'https://img.ssensemedia.com/images/222782M216001_1/fear-of-god-undefined.jpg',
   name: 'Two-Pack Black Boxers',
   designer: 'Fear of God',
   price: '$150',
   category: 'Underwear & Loungewear' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221101M192010_1/charles-jeffrey-loverboy-undefined.jpg',
   name: 'Blue Silk Pyjama Shirt',
   designer: 'Charles Jeffrey Loverboy',
   price: '$390',
   category: 'Underwear & Loungewear' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221101M190001_1/charles-jeffrey-loverboy-undefined.jpg',
   name: 'Blue Pyjama Pants',
   designer: 'Charles Jeffrey Loverboy',
   price: '$380',
   category: 'Underwear & Loungewear' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222482M219017_1/tekla-undefined.jpg',
   name: 'Off-White Organic Cotton Bathrobe',
   designer: 'Tekla',
   price: '$200',
   category: 'Underwear & Loungewear' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222482M219008_1/tekla-undefined.jpg',
   name: 'White Organic Cotton Bathrobe',
   designer: 'Tekla',
   price: '$200',
   category: 'Underwear & Loungewear' }
   ,
   { image:
    'https://img.ssensemedia.com/images/211782M237029_1/fear-of-god-undefined.jpg',
   name: 'Off-White Suede Boat Shoes',
   designer: 'Fear of God',
   price: '$462',
   category: 'Boat Shoes & Moccasins' }
 ,
 { image:
    'https://img.ssensemedia.com/images/211782M237030_1/fear-of-god-undefined.jpg',
   name: 'Black Suede Moc Loafers',
   designer: 'Fear of God',
   price: '$426',
   category: 'Boat Shoes & Moccasins' }
 ,
 { image:
    'https://img.ssensemedia.com/images/211693M239189_1/fendi-undefined.jpg',
   name: 'Beige Nubuck \'FF\' Loafers',
   designer: 'Fendi',
   price: '$715',
   category: 'Boat Shoes & Moccasins' }
 ,
 { image:
    'https://img.ssensemedia.com/images/211381M239000_1/thom-browne-undefined.jpg',
   name: 'White Diagonal Stripe Boat Shoes',
   designer: 'Thom Browne',
   price: '$510',
   category: 'Boat Shoes & Moccasins' }
 ,
 { image:
    'https://img.ssensemedia.com/images/211693M239187_1/fendi-undefined.jpg',
   name: 'Black \'Forever Fendi\' Loafers',
   designer: 'Fendi',
   price: '$980',
   category: 'Boat Shoes & Moccasins' }
 ,
 { image:
    'https://img.ssensemedia.com/images/202259M239442_1/alexander-mcqueen-undefined.jpg',
   name: 'Black Leather Boat Shoes',
   designer: 'Alexander McQueen',
   price: '$372',
   category: 'Boat Shoes & Moccasins' }
   ,
   { image:
    'https://img.ssensemedia.com/images/222349M255001_1/marsell-undefined.jpg',
   name: 'Black Carrucola Lace-Up Boots',
   designer: 'Marsèll',
   price: '$975',
   category: 'Boots' }
 ,
 { image:
    'https://img.ssensemedia.com/images/222349M255006_1/marsell-undefined.jpg',
   name: 'Brown Parrucca Lace-Up Boots',
   designer: 'Marsèll',
   price: '$875',
   category: 'Boots' }
 ,
 { image:
    'https://img.ssensemedia.com/images/222349M255007_1/marsell-undefined.jpg',
   name: 'Black Parrucca Lace-Up Boots',
   designer: 'Marsèll',
   price: '$875',
   category: 'Boots' }
 ,
 { image:
    'https://img.ssensemedia.com/images/222349M255010_1/marsell-undefined.jpg',
   name: 'Black Zucca Zeppa Lace-Up Boots',
   designer: 'Marsèll',
   price: '$785',
   category: 'Boots' }
 ,
 { image:
    'https://img.ssensemedia.com/images/222349M255011_1/marsell-undefined.jpg',
   name: 'Brown Zucca Zeppa Lace-Up Boots',
   designer: 'Marsèll',
   price: '$785',
   category: 'Boots' }
   ,
   { image:
    'https://img.ssensemedia.com/images/222387M231000_1/kenzo-undefined.jpg',
   name: 'Black Tiger Espadrilles',
   designer: 'Kenzo',
   price: '$230',
   category: 'Espadrilles' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222387M231001_1/kenzo-undefined.jpg',
   name: 'Navy Elasticated Tiger Espadrilles',
   designer: 'Kenzo',
   price: '$230',
   category: 'Espadrilles' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222085M229001_1/boss-hugo-boss-undefined.jpg',
   name: 'Black Madeira Espadrilles',
   designer: 'Boss',
   price: '$160',
   category: 'Espadrilles' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221695M229001_1/palm-angels-undefined.jpg',
   name: 'Black Canvas Espadrilles',
   designer: 'Palm Angels',
   price: '$355',
   category: 'Espadrilles' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222278M229000_1/givenchy-undefined.jpg',
   name: 'Blue 4G Espadrilles',
   designer: 'Givenchy',
   price: '$545',
   category: 'Espadrilles' }
   ,
   { image:
    'https://img.ssensemedia.com/images/222381M225000_1/thom-browne-undefined.jpg',
   name: 'Black Longwing Brogue Oxfords',
   designer: 'Thom Browne',
   price: '$970',
   category: 'Lace Ups & Oxfords' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222259M225000_1/alexander-mcqueen-undefined.jpg',
   name: 'Black Punk Stud Derbys',
   designer: 'Alexander McQueen',
   price: '$1345',
   category: 'Lace Ups & Oxfords' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221094M225018_1/clarks-originals-undefined.jpg',
   name: 'Black Suede Desert Trek Gore-Tex Lace-Up Shoes',
   designer: 'Clarks Originals',
   price: '$205',
   category: 'Lace Ups & Oxfords' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221094M225013_1/clarks-originals-undefined.jpg',
   name: 'Black Suede Wallabee Gore-Tex Lace-Up Shoes',
   designer: 'Clarks Originals',
   price: '$275',
   category: 'Lace Ups & Oxfords' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221094M225014_1/clarks-originals-undefined.jpg',
   name: 'Beige Suede Wallabee Gore-Tex Lace-Up Shoes',
   designer: 'Clarks Originals',
   price: '$275',
   category: 'Lace Ups & Oxfords' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221600M243003_1/ernest-w-baker-undefined.jpg',
   name: 'Black Patent T-Bar Monkstraps',
   designer: 'Ernest W. Baker',
   price: '$312',
   category: 'Monkstraps' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221688M228018_1/toga-virilis-undefined.jpg',
   name: 'Black Leather Monkstraps',
   designer: 'Toga Virilis',
   price: '$260',
   category: 'Monkstraps' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221688M228019_1/toga-virilis-undefined.jpg',
   name: 'Black & White Leather Monkstraps',
   designer: 'Toga Virilis',
   price: '$260',
   category: 'Monkstraps' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221688M228020_1/toga-virilis-undefined.jpg',
   name: 'Navy Leather Monkstraps',
   designer: 'Toga Virilis',
   price: '$239',
   category: 'Monkstraps' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221600M243004_1/ernest-w-baker-undefined.jpg',
   name: 'Brown T-Bar Monkstraps',
   designer: 'Ernest W. Baker',
   price: '$247',
   category: 'Monkstraps' }
   ,
   { image:
    'https://img.ssensemedia.com/images/221249M234007_1/jil-sander-undefined.jpg',
   name: 'Black Nabuk Sandals',
   designer: 'Jil Sander',
   price: '$680',
   category: 'Sandals' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222381M234000_1/thom-browne-undefined.jpg',
   name: 'Navy Pool Slides',
   designer: 'Thom Browne',
   price: '$350',
   category: 'Sandals' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222381M234001_1/thom-browne-undefined.jpg',
   name: 'Gray Pool Slides',
   designer: 'Thom Browne',
   price: '$350',
   category: 'Sandals' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221817M234000_1/and-wander-undefined.jpg',
   name: 'Black OOFOS Edition Recovery Sandals',
   designer: 'and wander',
   price: '$160',
   category: 'Sandals' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221817M234001_1/and-wander-undefined.jpg',
   name: 'Black OOFOS Edition Recovery Sandals',
   designer: 'and wander',
   price: '$160',
   category: 'Sandals' }
   ,
   { image:
    'https://img.ssensemedia.com/images/221249M234007_1/jil-sander-undefined.jpg',
   name: 'Black Nabuk Sandals',
   designer: 'Jil Sander',
   price: '$680',
   category: 'Slippers & Loafers' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222381M234000_1/thom-browne-undefined.jpg',
   name: 'Navy Pool Slides',
   designer: 'Thom Browne',
   price: '$350',
   category: 'Slippers & Loafers' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222381M234001_1/thom-browne-undefined.jpg',
   name: 'Gray Pool Slides',
   designer: 'Thom Browne',
   price: '$350',
   category: 'Slippers & Loafers' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221817M234000_1/and-wander-undefined.jpg',
   name: 'Black OOFOS Edition Recovery Sandals',
   designer: 'and wander',
   price: '$160',
   category: 'Slippers & Loafers' }
  ,
  { image:
    'https://img.ssensemedia.com/images/221817M234001_1/and-wander-undefined.jpg',
   name: 'Black OOFOS Edition Recovery Sandals',
   designer: 'and wander',
   price: '$160',
   category: 'Slippers & Loafers' }
   ,
   { image:
    'https://img.ssensemedia.com/images/222807M237052_1/valentino-garavani-undefined.jpg',
   name: 'White One Stud Sneakers',
   designer: 'Valentino Garavani',
   price: '$775',
   category: 'Sneakers' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222387M237008_1/kenzo-undefined.jpg',
   name: 'Black Tiger K-Skate Sneakers',
   designer: 'Kenzo',
   price: '$245',
   category: 'Sneakers' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222387M237010_1/kenzo-undefined.jpg',
   name: 'White Tiger K-Skate Sneakers',
   designer: 'Kenzo',
   price: '$245',
   category: 'Sneakers' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222381M237005_1/thom-browne-undefined.jpg',
   name: 'Black Cable Knit Court Sneakers',
   designer: 'Thom Browne',
   price: '$560',
   category: 'Sneakers' }
  ,
  { image:
    'https://img.ssensemedia.com/images/222381M237006_1/thom-browne-undefined.jpg',
   name: 'Navy Cable Knit Court Low-Top Sneakers',
   designer: 'Thom Browne',
   price: '$565',
   category: 'Sneakers' }
  , 
  ]  


// console.log(prod[0].price.slice(1))

display_products(prod)

let cats = document.querySelectorAll(".elements li")

// console.log(cats)
cats.forEach(function(el){
    el.addEventListener("click",catFun)
})

function catFun(){
    // console.log(this.innerText)
    category = event.target.innerText

    let newProd = prod.filter(function(el){
        return el.category === event.target.innerText
    })
    // console.log(newProd)

    display_products(newProd)
}


let design = document.querySelectorAll(".design")

// console.log(design)
design.forEach(function(el){
    el.addEventListener("click",designFun)
})

function designFun(){
    // console.log(this.innerText)
    let newProd = prod.filter(function(el){
        if(category)
        {
            return (el.category==category)&&(el.designer == event.target.innerText)
        }
        return el.designer == event.target.innerText
    })

    display_products(newProd)
}

let trending = document.querySelector("#sort li")
// console.log(trending)
trending.addEventListener("click",trendFun)

let lth = document.querySelector("#sort li+li")
// console.log(lth)
lth.addEventListener("click",lthFun)

let htl = document.querySelector("#sort li+li+li")
// console.log(htl)
htl.addEventListener("click",htlFun)


function lthFun(){
    if(category)
    {
        newProd = prod.filter(function(el){
            return el.category == category
        })
        newProd.sort(function(a,b){
            return Number(a.price.slice(1)) - Number(b.price.slice(1))
        })
        display_products(newProd)
    }
    else{
        prod.sort(function(a,b){
        
            return Number(a.price.slice(1)) - Number(b.price.slice(1))
        })
    
        display_products(prod)

    }
    
}

function htlFun(){
    if(category)
    {
        newProd = prod.filter(function(el){
            return el.category == category
        })
        newProd.sort(function(a,b){
            return Number(b.price.slice(1)) - Number(a.price.slice(1))
        })
        display_products(newProd)
    }
    else{
        prod.sort(function(a,b){
        
            return Number(b.price.slice(1)) - Number(a.price.slice(1))
        })
    
        display_products(prod)

    }

}

function trendFun(){
    if(category)
    {
        newProd = prod.filter(function(el){
            return el.category==category
        })
        newProd = newProd.filter(function(el){
            return el.price.slice(1)<400 && el.price.slice(1)>50
        })
        display_products(newProd)
    }
    else{
        newProd = prod.filter(function(el){
            return el.price.slice(1)<400 && el.price.slice(1)>50
        })
        display_products(newProd)

    }
    
}

let sendToProductPage = (elem) => {
  console.log(elem);
  localStorage.setItem("productData",JSON.stringify(elem));
  window.location.href="../HTML/product.html";
}