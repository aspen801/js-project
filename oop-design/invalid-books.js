import * as yup from 'yup';



const schema = yup.object().shape({
    name: yup.string().required(),
    author: yup.string().required(),
    pagesCount: yup.number().positive().integer(),
    link: yup.string().url(),
    genre: yup.string().oneOf(['Classic', 'Drama', 'Fantasy', 'Romance']),
  });



const books = [
    {
      name: "Lost Warriors Of Elysium",
    
      pagesCount: 80,
      link: "https://1688.com/at/velit/vivamus/vel/nulla/eget.js",
      genre: "Drama"
    },
    {
      name: "Lost Warriors Of Elysium",
      author: "Dene Cordall",
      pagesCount: 66,
      link: "http://yale.edu/ultrices/enim/lorem.html",
      genre: "Poetry"
    },
    {
      name: "The Other Animals",
      author: "Mara Szymoni",
      pagesCount: null,
      link: "https://amazon.com/magna/vulputate/luctus/cum/sociis/natoque/penatibus.xml",
      genre: "Romance"
    },
    {
      name: "Burger Boy",
      author: "Germana Stittle",
      pagesCount: 7,
      link: "https://marriott.com/ut/rhoncus.png",
      genre: "Classic"
    },
    {
      name: "Martian Boy",
      author: "Lancelot Edelheit",
      pagesCount: 35,
      link: "https://apache.org/nulla/tellus/in/sagittis/dui/vel/nisl.js",
      genre: "Romance"
    },
    {
      name: "Invaders of the Earth",
      author: "Ivie Jordi",
      pagesCount: 6,
      link: "http://wordpress.com/ultrices/posuere/cubilia/curae/mauris/viverra/diam.png",
      genre: "Classic"
    },
    {
      name: "Christmas Turtle",
      author: "Heda Hembery",
      pagesCount: 18,
      link: "http://salon.com/adipiscing/elit/proin/interdum/mauris.html",
      genre: "Romance"
    },
    {
      name: "Innocent Eyes",
      author: "Tandie Limpertz",
      pagesCount: 84,
      link: "http://ed.gov/magnis/dis/parturient/montes/nascetur/ridiculus/mus.html",
      genre: "Drama"
    },
    {
      name: "The Mystery of Mr Watkins",
      author: "Bev Reuble",
      pagesCount: null,
      link: "http://ovh.net/maecenas/leo/odio/condimentum/id/luctus/nec.html",
      genre: "Classic"
    },
    {
      name: "The Prince of Darkness",
      author: "Kerby Pelz",
      pagesCount: 67,
      link: "http://psu.edu/auctor/gravida.png",
      genre: "Drama"
    },
    {
      name: "Lost Warriors Of Elysium",
      author: "Prent Goble",
      pagesCount: null,
      link: "http://newsvine.com/mauris/morbi/non/lectus/aliquam/sit/amet.json",
      genre: "Drama"
    },
    {
      name: "Lost Warriors Of Elysium",
      author: "Haroun Adami",
      pagesCount: 82,
      link: "https://sitemeter.com/odio/porttitor/id.json",
      genre: "Romance"
    },
    {
      name: "The Other Animals",
      author: "Maxwell Nickolls",
      pagesCount: 87,
      link: "https://imgur.com/in/hac/habitasse/platea.js",
      genre: "Romance"
    },
    {
      name: "Burger Boy",
      author: "Collete Robbe",
      pagesCount: 57,
      link: "https://about.me/id.json",
      genre: "Classic"
    },
    {
      name: "Martian Boy",
      author: "Robin Sawden",
      pagesCount: 49,
      link: "http://sakura.ne.jp/tincidunt/in/leo/maecenas/pulvinar/lobortis/est.json",
      genre: "Romance"
    },
    {
      name: "Invaders of the Earth",
      author: "Nathalia Tumbelty",
      pagesCount: null,
      link: "https://biblegateway.com/erat/curabitur/gravida/nisi.js",
      genre: "Drama"
    },
    {
      name: "Christmas Turtle",
      author: "Antoni Groves",
      pagesCount: null,
      link: "https://xinhuanet.com/mauris/enim/leo/rhoncus/sed/vestibulum/sit.xml",
      genre: "Romance"
    },
    {
      name: "Innocent Eyes",
      author: "Vivyanne De Blase",
      pagesCount: 56,
      link: "https://infoseek.co.jp/sagittis.xml",
      genre: "Classic"
    },
    {
      name: "The Mystery of Mr Watkins",
      author: "Philippe Epgrave",
      pagesCount: 15,
      link: "https://ask.com/convallis/nunc/proin/at.json",
      genre: "Romance"
    },
    {
      name: "The Prince of Darkness",
      author: "Mercedes Elliss",
      pagesCount: 43,
      link: "http://exblog.jp/ultrices/enim/lorem/ipsum/dolor.js",
      genre: "Drama"
    },
    {
      name: "Lost Warriors Of Elysium",
      author: "Stacy Chenery",
      pagesCount: null,
      link: "http://hc360.com/diam/vitae/quam.json",
      genre: "Romance"
    },
    {
      name: "Lost Warriors Of Elysium",
      author: "Loralyn McReynolds",
      pagesCount: 37,
      link: "http://booking.com/praesent/blandit/lacinia/erat/vestibulum/sed/magna.html",
      genre: "Classic"
    },
    {
      name: "The Other Animals",
      author: "Jeffry O'Loughane",
      pagesCount: 48,
      link: "http://ycombinator.com/congue/risus/semper/porta.jpg",
      genre: "Fantasy"
    },
    {
      name: "Burger Boy",
      author: "Junie Sivill",
      pagesCount: 41,
      link: "https://cafepress.com/at/vulputate/vitae/nisl/aenean/lectus/pellentesque.jsp",
      genre: "Drama"
    },
    {
      name: "Martian Boy",
      author: "Biron Swainger",
      pagesCount: 78,
      link: "https://dyndns.org/turpis/elementum.js",
      genre: "Romance"
    },
    {
      name: "Invaders of the Earth",
      author: "Wyndham Giraudo",
      pagesCount: null,
      link: "http://digg.com/massa/id/nisl/venenatis/lacinia.aspx",
      genre: "Drama"
    },
    {
      name: "Christmas Turtle",
      author: "Taite O'Lagen",
      pagesCount: 59,
      link: "http://geocities.jp/suspendisse/potenti/nullam/porttitor/lacus/at.png",
      genre: "Classic"
    },
    {
      name: "Innocent Eyes",
      author: "Bette-ann Tipping",
      pagesCount: null,
      link: "http://cafepress.com/magna.jpg",
      genre: "Fantasy"
    },
    {
      name: "The Mystery of Mr Watkins",
      author: "Corbett Pawden",
      pagesCount: 65,
      link: "https://sciencedirect.com/proin/risus.png",
      genre: "Romance"
    },
    {
      name: "The Prince of Darkness",
      author: "Sauncho Osgood",
      pagesCount: 11,
      link: "https://nydailynews.com/etiam/vel/augue/vestibulum/rutrum.js",
      genre: "Fantasy"
    },
    {
      name: "Lost Warriors Of Elysium",
      author: "Flynn Bohills",
      pagesCount: null,
      link: "https://oakley.com/lacus.js",
      genre: "Drama"
    },
    {
      name: "Lost Warriors Of Elysium",
      author: "Germain Aviss",
      pagesCount: 13,
      link: "https://nyu.edu/id.jsp",
      genre: "Drama"
    },
    {
      name: "The Other Animals",
      author: "Jacky O'Shaughnessy",
      pagesCount: 90,
      link: "http://xing.com/dolor/morbi/vel/lectus/in/quam.jpg",
      genre: "Romance"
    },
    {
      name: "Burger Boy",
      author: "Neill Siggs",
      pagesCount: null,
      link: "http://friendfeed.com/suspendisse/ornare/consequat.aspx",
      genre: "Romance"
    },
    {
      name: "Martian Boy",
      author: "Lacie Sisnett",
      pagesCount: 41,
      link: "https://google.pl/tempus.html",
      genre: "Drama"
    },
    {
      name: "Invaders of the Earth",
      author: "Constantine Quan",
      pagesCount: 19,
      link: "https://skyrock.com/natoque.json",
      genre: "Drama"
    },
    {
      name: "Christmas Turtle",
      author: "Donnell Edwards",
      pagesCount: 17,
      link: "https://examiner.com/auctor/sed/tristique/in/tempus/sit/amet.json",
      genre: "Romance"
    },
    {
      name: "Innocent Eyes",
      author: "Harrie Mothersole",
      pagesCount: 44,
      link: "http://flavors.me/at/nibh.xml",
      genre: "Classic"
    },
    {
      name: "The Mystery of Mr Watkins",
      author: "Farrah Parratt",
      pagesCount: null,
      link: "https://cocolog-nifty.com/nulla/suscipit/ligula/in/lacus/curabitur/at.js",
      genre: "Drama"
    },
    {
      name: "The Prince of Darkness",
      author: "Justine Brittain",
      pagesCount: null,
      link: "http://ucla.edu/auctor/gravida/sem/praesent/id/massa.json",
      genre: "Romance"
    },
    {
      name: "Lost Warriors Of Elysium",
      author: "Layton Westgarth",
      pagesCount: 78,
      link: "https://skyrock.com/convallis/duis/consequat/dui.json",
      genre: "Romance"
    },
    {
      name: "Lost Warriors Of Elysium",
      author: "Reed Bushrod",
      pagesCount: 46,
      link: "http://tumblr.com/id/massa/id/nisl/venenatis/lacinia/aenean.jsp",
      genre: "Fantasy"
    },
    {
      name: "The Other Animals",
      author: "Merry Cakes",
      pagesCount: 18,
      link: "https://craigslist.org/habitasse/platea/dictumst/maecenas/ut.jpg",
      genre: "Drama"
    },
    {
      name: "Burger Boy",
      author: "Marven Adcocks",
      pagesCount: 70,
      link: "http://woothemes.com/ligula/suspendisse/ornare/consequat/lectus.jpg",
      genre: "Romance"
    },
    {
      name: "Martian Boy",
      author: "Rafaello Schoenfisch",
      pagesCount: null,
      link: "http://time.com/a/nibh.html",
      genre: "Romance"
    },
    {
      name: "Invaders of the Earth",
      author: "Peggy Sodory",
      pagesCount: null,
      link: "http://globo.com/lacus.json",
      genre: "Classic"
    },
    {
      name: "Christmas Turtle",
      author: "Silvio Ayto",
      pagesCount: null,
      link: "https://home.pl/felis/sed/interdum/venenatis/turpis.png",
      genre: "Drama"
    },
    {
      name: "Innocent Eyes",
      author: "Giraldo Eronie",
      pagesCount: 74,
      link: "http://blog.com/ante/ipsum/primis.xml",
      genre: "Drama"
    },
    {
      name: "The Mystery of Mr Watkins",
      author: "Tandie Callway",
      pagesCount: 49,
      link: "http://businessinsider.com/faucibus/accumsan/odio/curabitur/convallis/duis/consequat.json",
      genre: "Classic"
    },
    {
      name: "The Prince of Darkness",
      author: "Brand Cawte",
      pagesCount: 64,
      link: "https://devhub.com/mauris/sit/amet/eros/suspendisse/accumsan.json",
      genre: "Drama"
    },
    {
      name: "Lost Warriors Of Elysium",
      author: "Anatole Skill",
      pagesCount: 76,
      link: "http://furl.net/ac/leo/pellentesque/ultrices/mattis.jsp",
      genre: "Drama"
    },
    {
      name: "Lost Warriors Of Elysium",
      author: "Raymond Paz",
      pagesCount: 72,
      link: "http://wordpress.com/gravida/nisi/at/nibh/in/hac.html",
      genre: "Romance"
    },
    {
      name: "The Other Animals",
      author: "Helyn Epsley",
      pagesCount: 65,
      link: "https://weather.com/sit/amet.json",
      genre: "Fantasy"
    },
    {
      name: "Burger Boy",
      author: "Kate Gallier",
      pagesCount: null,
      link: "https://jugem.jp/quis.xml",
      genre: "Fantasy"
    },
    {
      name: "Martian Boy",
      author: "Pam Marmion",
      pagesCount: 33,
      link: "http://baidu.com/est/congue.jsp",
      genre: "Fantasy"
    }
  ]
function getInvalidBooks(books){
   return books.filter((book) => !schema.isValidSync(book));
}

console.log(getInvalidBooks(books));

