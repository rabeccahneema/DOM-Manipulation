const title = document.getElementById('title');
const fruit = document.getElementById('fruit');
const veges= document.getElementById('veges');
const fruitList = document.getElementById('fruitList')
const vegList = document.getElementById('vegList');
const paragraph = document.getElementById('paragraph')
// const fruts = document.querySelector('.fruity');

document.body.style.backgroundColor = 'silver'

document.body.style.marginTop = '50px';
// document.body.style.marginBottom = '50px'
document.body.style.marginLeft = '200px' ;
document.body.style.marginRight = '200px' ;
document.body.style.borderRadius = '30px' ;
// document.body.style.boxShadow = '0 2px 4px' ;
document.body.style.padding = '30px' ;


title.style.color = 'green';
fruit.style.textTransform = 'uppercase';
// fruit.style.fontFamily =''Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif';
fruit.style.fontSize = 'larger'
veges.style.textTransform = 'uppercase';


paragraph.style.display = 'flex';
paragraph.style.justifyContent ='center';
paragraph.style.fontSize = '40px';

// const newVeg = document.createElement('li');
// vegList.appendChild(newVeg);

// newVeg.textContent = 'Broccoli'

// const image = document.createElement('img');
// image.src = 'imagefolder/raw-foodstuff-with-water-drops-studio (1).jpg';
// image.style.width= '200px'

// const targetElement = document.getElementById('newFruit');
// newFruit.appendChild(image);



const fruits = document.querySelectorAll('#fruitList li') ;
const imagesUrls = [
    'imagefolder/alexander-schimmeck-vTXtQ8ZBzvY-unsplash.jpg',
    'imagefolder/fabrizio-frigeni-lcrZgpLTNvU-unsplash.jpg',
    'imagefolder/crina-miriam-cretu-ynp_0R23rQ4-unsplash.jpg',
    'imagefolder/matheus-cenali-wXuzS9xR49M-unsplash.jpg'
    
];

function addFruit(name,imageUrl){
    const newFruit = document.createElement('li');
    newFruit.textContent = name;
    fruitList.appendChild(newFruit);
   

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = `Image of ${name}`;
    img.style.width= '200px'
    img.style.display = 'flex'
    img.style.borderRadius = '20px';


    newFruit.appendChild(img);
}

fruits.forEach((fruit,index) =>{
    const img = document.createElement('img');
    img.src =imagesUrls[index];
    img.alt =`Image of ${fruit.textContent}`;
    img.style.width ='200px'
    img.style.display = 'flex'
    img.style.borderRadius = '20px';
    img.style.boxShadow = '0 2px 4px black'
    img.style.gap = '3cm'
    fruit.appendChild(img);
});

addFruit('Apple',imagesUrls[3]);


fruitList.style.display = 'flex'
fruitList.style.gap = '3cm';
fruitList.style.paddingLeft = '100px'


const vegetables = document.querySelectorAll('#vegList li') ;
const imagessrc = [
    'imagefolder/sincerely-media-GrHWJVA1KTA-unsplash.jpg',
    'imagefolder/tom-hermans-nM6qrtnVKn8-unsplash.jpg',
    'imagefolder/victor-birai-VTfqXNftdR8-unsplash.jpg',
    'imagefolder/hans-ripa-4cEmT3AsoVc-unsplash.jpg'
    
];

function addVeges(name,imgUrl){
    const newVeg = document.createElement('li');
    newVeg.textContent = name;
    vegList.appendChild(newVeg);
   

    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = `Image of ${name}`;
    img.style.width= '200px';
    img.style.display = 'flex';
    img.style.borderRadius = '20px';


    newVeg.appendChild(img);
}

vegetables.forEach((vegetable,index) =>{
    const img = document.createElement('img');
    img.src =imagessrc[index];
    img.alt =`Image of ${vegetable.textContent}`;
    img.style.width ='200px'
    img.style.display = 'flex'
    img.style.borderRadius = '20px';
    img.style.boxShadow = '0 2px 4px black'
    img.style.gap = '3cm'
    vegetable.appendChild(img);
});

addVeges('Broccoli',imagessrc[3]);


vegList.style.display = 'flex'
vegList.style.gap = '3cm';
vegList.style.paddingLeft = '100px';
