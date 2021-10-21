const bookTitles = [
  "angels",
  "ups_and_downs",
  "the_law",
  "think_and_grow_rich",
  "laws_of_power",
  "mastery",
  "holy_spirit",
  "holy_bible",
  "rambo",
  "creed",
];
//  console.log(bookTitles);

const addUl = (arr) => {
  const list = document.createElement("ul");

  for (let i = 0; i < arr.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(bookInfo[i]));
    list.appendChild(item);
  }
  return list;
};


// document.getElementById("pee").appendChild(addUl(bookInfo));

const bookInfo = {
  angels:{ 
      title: "angles", 
      language: "english", 
      author: "Billy Graham"
     },
  shades_of_the_church: { 
      title: "shades of the church", 
      language: "english", 
      author: "Pastor James" 
    },
  the_law: { 
      title: "the 50th law",
       language: "english",
        author: "Robert Green"
     },
  think_and_grow_rich: {
    title: "think and grow rich",
    language: "english",
    author: "Napoleon Hill",
  },
  laws_of_power: {
    title: "48 laws of power",
    language: "english",
    author: "Robert Green",
  },
  mastery: { 
      title: "mastery",
       language: "english", 
       author: "Robert Green" 
    },
  holy_spirit: {
       title: "holy spirit", 
       language: "english", 
       author: "Billy Graham"
     },
  holy_bible: {
       title: "holy bible",
        language: "english", 
        author: "God" 
    },
  rambo: { 
      title: "rambo", 
      language: "english",
       author: "Stallon"
    },
  creed: { 
      title: "creed",
       language: "english", 
       author: "Stallon" 
    },
};

const bookCover = {
    angels: 'https://bit.ly/3AUrjRR',
    shades_of_the_church:'https://m.media-amazon.com/images/I/41oidl1qS2L.jpg',
    the_law: 'https://images-na.ssl-images-amazon.com/images/I/91mji0TWNdL.jpg',
    think_and_grow_rich:'https://bit.ly/3G0WMWb',
    laws_of_power:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBy_wtXOuprhkCtZz6HNWSwWMrUSlXu2Tbeg&usqp=CAU',
    mastery:'https://cf.shopee.ph/file/5da8731f84aaa076d2d75437a3e557ac',
    holy_spirit:'https://bit.ly/3BXf3kX',
    holy_bible:'https://image.bokus.com/images/9780564096244_200x_nkjv-holy-bible',
    rambo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5WSHU1hI4jcyDVJA55SPWEMJ7rTI4kEXTQ&usqp=CAU',
    creed:'https://pics.filmaffinity.com/Creed-232228847-large.jpg'

}

const addImage = (obj) =>{
   for(let [key,value] of Object.entries(obj)){
       return `${value}`;
   }
}


const addTitles = (obj) => {
    const rootDiv = document.querySelector(".root");
    const list = document.createElement("ul");
    for(let [key, value] of Object.entries(obj)){
        let items = document.createElement("li");
        let head = document.createElement("h2");
        let coverImage = document.createElement("img");
        coverImage.src = addImage(bookCover);
        head.innerText = value.title;
        let sub = document.createElement("h4");
        sub.innerText = `written by ${value.author} in ${value.language}`
        newDiv = document.createElement("div");
        newDiv.appendChild(coverImage);
        newDiv.appendChild(head);
        newDiv.appendChild(sub);
        items.appendChild(newDiv);
        list.appendChild(items);

    }

    rootDiv.appendChild(list);

}

addTitles(bookInfo);





