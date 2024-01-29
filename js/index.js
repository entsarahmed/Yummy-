/// <reference types="../@types/jquery" />



$('.close').on('click',() => {
   $('.links').animate({width:'toggle',padding:'toggle',margin:'toggle'},3000)
   $('.close').toggleClass('d-none')
   $('.open').toggleClass('d-none')
   $('li').toggleClass('animate__bounceOutDown','animate__faster')
   $('li').toggleClass('animate__bounceInUp')
   $('li').toggleClass('animate__faster')
})

$('.open').on('click',() => {
  $('.links').animate({width:'toggle',padding:'toggle',margin:'toggle'},3000)
  $('.close').toggleClass('d-none')
  $('.open').toggleClass('d-none')
  $('li').toggleClass('animate__bounceOutDown')
  $('li').toggleClass('animate__bounceInUp')
})

//!'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'
//!'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'


let listArray=[]
let itemMeal;

  async function getHome(area){
let response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
const Data=await response.json();
listArray=Data.meals;
getDataHome();
 $('.layer').on('click',function(e){
  itemMeal=e.target.innerText;
  console.log(itemMeal);
  document.getElementById('meals').classList.add('d-none');
document.getElementById('description').classList.remove('d-none');
document.getElementById('contact').classList.add('d-none');
document.getElementById('descriptiongredients').classList.add('d-none');
document.getElementById('catgredients').classList.add('d-none');
document.getElementById('Ingredients').classList.add('d-none');
document.getElementById('descriptionarea').classList.add('d-none');
document.getElementById('catarea').classList.add('d-none');
document.getElementById('area').classList.add('d-none');
document.getElementById('descriptionCategory').classList.add('d-none');
document.getElementById('catdata').classList.add('d-none');
document.getElementById('category').classList.add('d-none');
document.getElementById('inputs').classList.add('d-none');
document.getElementById('search').classList.add('d-none')
      display.classList.add('d-none');
     document.getElementById('searchName').classList.add('d-none');
     document.getElementById('searchLetter').classList.add('d-none')
     
document.getElementById('meals').classList.add('d-none');
getDisplayImage(itemMeal)
 }) 
  } 
 getHome('British');
 
 

  function getDataHome(){
let cols='';
for( let i=0;i<listArray.length;i++){
  cols+=`
  <div class="col-md-3">
      <div class="des">
        <img src="${listArray[i].strMealThumb}" alt="meal" class="w-100 rounded-3">
<div class="layer rounded-3" role="button">
  <h3 class="fs-3 text-black p-2 meal">${listArray[i].strMeal}</h3>
</div>
      </div>
    </div>
  `
}
document.getElementById('meals').innerHTML=cols;
}  
 
 
  let descritionList=[]
  async function getDisplayImage(e){
  itemMeal=e;
  let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`);
  const Data=await response.json();
descritionList=Data.meals;
console.log(descritionList);
displayInfo()
}   

 function displayInfo(){
  let cartona=`
  <div class="col-md-4">
    <div>
      <img src="${descritionList[0].strMealThumb}" alt="" class="w-100 rounded-3">
    </div>
    <h3 class="text-white">${descritionList[0].strMeal}</h3>
  </div>
  <div class="col-md-8">
<h3 class="text-white">Instructions</h3>
<p class="text-white">${descritionList[0].strInstructions}</p>
<p class="text-white fs-3">Area : <span>${descritionList[0].strArea}</span></p>
<p class="text-white fs-3">Category : <span>${descritionList[0].strCategory}</span></p>
<h4 class="text-white fs-4">Recipes :</h4>
<button class="btn btn-info">${descritionList[0].strIngredient1}</button>
<button class="btn btn-info">${descritionList[0].strIngredient2}</button>
<button class="btn btn-info">${descritionList[0].strIngredient3}</button>
<button class="btn btn-info">${descritionList[0].strIngredient4}</button>
<button class="btn btn-info">${descritionList[0].strIngredient5}</button>
<button class="btn btn-info">${descritionList[0].strIngredient6}</button>
  <h4 class="text-white fs-4">Tags :</h4>
<div class="d-flex flex-column ">
<button class="btn btn-secondary mb-3 w-25">${descritionList[0].strTags}</button>
<div>
<a href="${descritionList[0].strSource}" class="btn btn-success">Source</a>
<a href="${descritionList[0].strYoutube}" class="btn btn-danger">Youtube</a>
</div> 
</div>
</div>
  `
  document.getElementById('description').innerHTML=cartona;
}   







// !----------Search Data---------//

let dataName=[];
 async function searchDataName(e){
let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`);
 let Name=await response.json();
dataName=Name.meals;
  console.log(dataName);
  getDataSearchName()
  $('.layer').on('click',function(e){
    itemMeal=e.target.innerText;
    console.log(itemMeal);
    getDisplayImage(itemMeal)
    document.getElementById('meals').classList.add('d-none');
    
    document.getElementById('contact').classList.add('d-none');
document.getElementById('descriptiongredients').classList.add('d-none');
document.getElementById('catgredients').classList.add('d-none');
document.getElementById('Ingredients').classList.add('d-none');
document.getElementById('descriptionarea').classList.add('d-none');
document.getElementById('catarea').classList.add('d-none');
document.getElementById('area').classList.add('d-none');
document.getElementById('descriptionCategory').classList.add('d-none');
document.getElementById('catdata').classList.add('d-none');
document.getElementById('category').classList.add('d-none');
document.getElementById('search').classList.remove('-none');
document.getElementById('inputs').classList.remove('d-none');
document.getElementById('description').classList.add('d-none');
  document.getElementById('seach').classList.remove('d-none')  
    $('.links').animate({width:'toggle',padding:'toggle',margin:'toggle'},3000)
          $('.close').toggleClass('d-none');
          $('.open').toggleClass('d-none');
          document.getElementById('inputs').classList.toggle('d-none');
          document.getElementById('search').classList.toggle('d-none')
          display.classList.toggle('d-none');
                
   }) 
}  
 function getDataSearchName(){
  let cols='';
  for( let i=0;i<dataName.length;i++){
    cols+=`
    <div class="col-md-3">
        <div class="des">
          <img src="${dataName[i].strMealThumb}" alt="meal" class="w-100 rounded-3">
  <div class="layer rounded-3" role="button">
    <h3 class="fs-3 text-black p-2 meal">${dataName[i].strMeal}</h3>
  </div>
        </div>
      </div>
    `
  }
  document.getElementById('search').innerHTML=cols;
  } 

  let searchName=document.getElementById('searchName');

  searchName.addEventListener('input',function(e){
let text=e.target.value;
searchDataName(text);

  }) 
 
  

  let searchLetter=document.getElementById('searchLetter');
let dataLetter=[];

 async function searchDataLetter(e){
let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${e}`);
 let Name=await response.json();
dataLetter=Name.meals;
  console.log(dataLetter);
  getDataSearchLetter();
  $('.layer').on('click',function(e){
    itemMeal=e.target.innerText;
    console.log(itemMeal);
    getDisplayImage(itemMeal)
    document.getElementById('meals').classList.add('d-none');
          $('.links').animate({width:'toggle',padding:'toggle',margin:'toggle'},3000)
          $('.close').toggleClass('d-none');
          $('.open').toggleClass('d-none');
          document.getElementById('inputs').classList.add('d-none');
          document.getElementById('search').classList.add('d-none')
          document.getElementById('contact').classList.add('d-none');
document.getElementById('descriptiongredients').classList.add('d-none');
document.getElementById('catgredients').classList.add('d-none');
document.getElementById('Ingredients').classList.add('d-none');
document.getElementById('descriptionarea').classList.add('d-none');
document.getElementById('catarea').classList.add('d-none');
document.getElementById('area').classList.add('d-none');
document.getElementById('descriptionCategory').classList.add('d-none');
document.getElementById('catdata').classList.add('d-none');
document.getElementById('category').classList.add('d-none');
document.getElementById('description').classList.remove('d-none');
                
   }) 
}  
 function getDataSearchLetter(){
  let cols='';
  for( let i=0;i<dataLetter.length;i++){
    cols+=`
    <div class="col-md-3">
        <div class="des">
          <img src="${dataLetter[i].strMealThumb}" alt="meal" class="w-100 rounded-3">
  <div class="layer rounded-3" role="button">
    <h3 class="fs-3 text-black p-2 meal">${dataLetter[i].strMeal}</h3>
  </div>
        </div>
      </div>
    `
  }
  document.getElementById('search').innerHTML=cols;
  } 

 searchLetter.addEventListener('input',function(e){
  let text=e.target.value;
  searchDataLetter(text);
    }) 
let display=document.getElementById('seach')
    let Display=document.getElementById('Display');
    Display.addEventListener('click',() => {
      document.getElementById('inputs').classList.remove('d-none');
document.getElementById('search').classList.remove('d-none')
      display.classList.remove('d-none');
     document.getElementById('searchName').classList.remove('d-none');
     document.getElementById('searchLetter').classList.remove('d-none')
     
      document.getElementById('contact').classList.add('d-none');
      document.getElementById('descriptiongredients').classList.add('d-none');
      document.getElementById('catgredients').classList.add('d-none');
      document.getElementById('Ingredients').classList.add('d-none');
      document.getElementById('descriptionarea').classList.add('d-none');
      document.getElementById('catarea').classList.add('d-none');
      document.getElementById('area').classList.add('d-none');
      document.getElementById('descriptionCategory').classList.add('d-none');
      document.getElementById('catdata').classList.add('d-none');
      document.getElementById('category').classList.add('d-none');
      document.getElementById('description').classList.add('d-none');
      document.getElementById('meals').classList.add('d-none');
     
     
      $('.links').animate({width:'toggle',padding:'toggle',margin:'toggle'},3000)
      $('.close').toggleClass('d-none');
      $('.open').toggleClass('d-none');
    })  


     let dataCategory=[];
    let mealcross;
let mealtype;
    async function showCategory(){
      let response= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
      const Data=await response.json();
    dataCategory=Data.categories;
    console.log(dataCategory);
    getCategory();

     $('#category .layer').on('click', function(e){
      document.getElementById('category').classList.add('d-none')
      document.getElementById('description').classList.add('d-none')
     
      document.getElementById('inputs').classList.add('d-none');
      document.getElementById('search').classList.add('d-none')
            display.classList.add('d-none');
           document.getElementById('searchName').classList.add('d-none');
           document.getElementById('searchLetter').classList.add('d-none')
           
            document.getElementById('contact').classList.add('d-none');
            document.getElementById('descriptiongredients').classList.add('d-none');
            document.getElementById('catgredients').classList.add('d-none');
            document.getElementById('Ingredients').classList.add('d-none');
            document.getElementById('descriptionarea').classList.add('d-none');
            document.getElementById('catarea').classList.add('d-none');
            document.getElementById('area').classList.add('d-none');
            document.getElementById('descriptionCategory').classList.add('d-none');
            document.getElementById('catdata').classList.remove('d-none');
            document.getElementById('meals').classList.add('d-none');
           
           
      
      
      
      mealcross=$(e.target).attr('title');
       sameMeal(mealcross);
    });
  } 
  
    showCategory();

     function getCategory(){
      let cols='';
      for( let i=0;i<dataCategory.length;i++){
        cols+=`
        <div class="col-md-3">
            <div class="des">
              <img src="${dataCategory[i].strCategoryThumb}" alt="meal" class="w-100 rounded-3" title="${dataCategory[i].strCategory}">
      <div class="layer rounded-3 d-flex flex-column typemeal" role="button" title="${dataCategory[i].strCategory}">
        <h3 class="fs-3 text-black p-2 meal" title="${dataCategory[i].strCategory}">${dataCategory[i].strCategory}</h3>
        <p class="py-2 px-2" title="${dataCategory[i].strCategory}">${dataCategory[i].strCategoryDescription}</p>
        </div>
            </div>
          </div>
        `
       
      }
      document.getElementById('category').innerHTML=cols;
      
      }





let listMeals;
      async function sameMeal(e){
        mealcross=e;
        let response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e}`);
        const Data=await response.json();
        listMeals=Data.meals;
         console.log(listMeals);
         getCatInfo()
         $('.layer').on('click',function(e){
          mealtype=e.target.innerText;
        
      document.getElementById('descriptionCategory').classList.remove('d-none');
       
      document.getElementById('inputs').classList.add('d-none');
      document.getElementById('search').classList.add('d-none')
            display.classList.add('d-none');
           document.getElementById('searchName').classList.add('d-none');
           document.getElementById('searchLetter').classList.add('d-none')
           
            document.getElementById('contact').classList.add('d-none');
            document.getElementById('descriptiongredients').classList.add('d-none');
            document.getElementById('catgredients').classList.add('d-none');
            document.getElementById('Ingredients').classList.add('d-none');
            document.getElementById('descriptionarea').classList.add('d-none');
            document.getElementById('catarea').classList.add('d-none');
            document.getElementById('area').classList.add('d-none');
            document.getElementById('catdata').classList.add('d-none');
            document.getElementById('category').classList.add('d-none');
            document.getElementById('description').classList.add('d-none');
            document.getElementById('meals').classList.add('d-none');
           
  
      getDisplayCatImg(mealtype);  
      })  
          } 
         
 function getCatInfo(){
let cols='';
for( let i=0;i<listMeals.length;i++){
  cols+=`
  <div class="col-md-3">
      <div class="des cat">
        <img src="${listMeals[i].strMealThumb}" alt="meal" class="w-100 rounded-3">
<div class="layer rounded-3" role="button">
  <h3 class="fs-3 text-black p-2 meal">${listMeals[i].strMeal}</h3>
</div>
      </div>
    </div>
  `
}
document.getElementById('catdata').innerHTML=cols;
}  

 let descritioncategory=[]
async function getDisplayCatImg(e){
mealtype=e;
let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`);
const Data=await response.json();
descritioncategory=Data.meals;
displayInfoCat()
}    

 function displayInfoCat(){
let cartona=`
<div class="col-md-4">
  <div>
    <img src="${descritioncategory[0].strMealThumb}" alt="" class="w-100 rounded-3">
  </div>
  <h3 class="text-white">${descritioncategory[0].strMeal}</h3>
</div>
<div class="col-md-8">
<h3 class="text-white">Instructions</h3>
<p class="text-white">${descritioncategory[0].strInstructions}</p>
<p class="text-white fs-3">Area : <span>${descritioncategory[0].strArea}</span></p>
<p class="text-white fs-3">Category : <span>${descritioncategory[0].strCategory}</span></p>
<h4 class="text-white fs-4">Recipes :</h4>
<button class="btn btn-info">${descritioncategory[0].strIngredient1}</button>
<button class="btn btn-info">${descritioncategory[0].strIngredient2}</button>
<button class="btn btn-info">${descritioncategory[0].strIngredient3}</button>
<button class="btn btn-info">${descritioncategory[0].strIngredient4}</button>
<button class="btn btn-info">${descritioncategory[0].strIngredient5}</button>
<button class="btn btn-info">${descritioncategory[0].strIngredient6}</button>
<h4 class="text-white fs-4">Tags :</h4>
<div class="d-flex flex-column ">
<button class="btn btn-secondary mb-3 w-25">${descritioncategory[0].strTags}</button>
<div>
<a href="${descritioncategory[0].strSource}" class="btn btn-success">Source</a>
<a href="${descritioncategory[0].strYoutube}" class="btn btn-danger">Youtube</a>
</div> 
</div>
</div>
`
document.getElementById('descriptionCategory').innerHTML=cartona;
} 
     



        

       let Category=document.getElementById('Category');
      Category.addEventListener('click',() => {
        document.getElementById('category').classList.remove('d-none');
        document.getElementById('contact').classList.add('d-none');
        document.getElementById('descriptiongredients').classList.add('d-none');
        document.getElementById('catgredients').classList.add('d-none');
        document.getElementById('Ingredients').classList.add('d-none');
        document.getElementById('descriptionarea').classList.add('d-none');
        document.getElementById('catarea').classList.add('d-none');
        document.getElementById('area').classList.add('d-none');
        document.getElementById('descriptionCategory').classList.add('d-none');
        document.getElementById('catdata').classList.add('d-none');
        document.getElementById('inputs').classList.add('d-none');
        document.getElementById('search').classList.add('d-none')
              display.classList.add('d-none');
             document.getElementById('searchName').classList.add('d-none');
             document.getElementById('searchLetter').classList.add('d-none')
             
        document.getElementById('description').classList.add('d-none');
        document.getElementById('meals').classList.add('d-none');
      })
 








      let dataArea=[];
      let areaCross;
let imgType;
    async function showArea(){
      let response= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
      const Data=await response.json();
    dataArea=Data.meals;
    //console.log(dataArea);
    getArea()
    $('div[title]').on('click', function(e){
       
      
      document.getElementById('inputs').classList.add('d-none');
      document.getElementById('search').classList.add('d-none')
            display.classList.add('d-none');
           document.getElementById('searchName').classList.add('d-none');
           document.getElementById('searchLetter').classList.remove('d-none')
           
            document.getElementById('contact').classList.add('d-none');
            document.getElementById('descriptiongredients').classList.add('d-none');
            document.getElementById('catgredients').classList.add('d-none');
            document.getElementById('Ingredients').classList.add('d-none');
            document.getElementById('descriptionarea').classList.add('d-none');
            document.getElementById('catarea').classList.remove('d-none');
            document.getElementById('area').classList.add('d-none');
            document.getElementById('descriptionCategory').classList.add('d-none');
            document.getElementById('catdata').classList.add('d-none');
            document.getElementById('category').classList.add('d-none');
            document.getElementById('description').classList.add('d-none');
            document.getElementById('meals').classList.add('d-none');
           
           
      
      areaCross=$(e.target).attr('title');
       console.log(areaCross);
      sameArea(areaCross);
    });
    } 
    showArea();


    function getArea(){
      let cols='';
      for( let i=0;i<dataArea.length;i++){
        cols+=`
        <div class="col-md-3 text-center area">
    <div title="${dataArea[i].strArea}">
      <i class="fa-solid fa-house-laptop icon" title="${dataArea[i].strArea}"></i>
      <h3 class="fs-1 text-white" title="${dataArea[i].strArea}">${dataArea[i].strArea}</h3>
    </div>
  </div>
        `
      }
      document.getElementById('area').innerHTML=cols;
      }
 
     
let listAreaMeal=[];
async function sameArea(e){
  areaCross=e;
  let response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${e}`);
  const Data=await response.json();
  listAreaMeal=Data.meals;
   getAreaInfo()
    $('.layer').on('click',function(e){
    imgType=e.target.innerText;
    document.getElementById('inputs').classList.add('d-none');
document.getElementById('search').classList.add('d-none')
      display.classList.add('d-none');
     document.getElementById('searchName').classList.add('d-none');
     document.getElementById('searchLetter').classList.add('d-none')
     
      document.getElementById('contact').classList.add('d-none');
      document.getElementById('descriptiongredients').classList.add('d-none');
      document.getElementById('catgredients').classList.add('d-none');
      document.getElementById('Ingredients').classList.add('d-none');
      document.getElementById('descriptionarea').classList.remove('d-none');
      document.getElementById('catarea').classList.add('d-none');
      document.getElementById('area').classList.add('d-none');
      document.getElementById('descriptionCategory').classList.add('d-none');
      document.getElementById('catdata').classList.add('d-none');
      document.getElementById('category').classList.add('d-none');
      document.getElementById('description').classList.add('d-none');
      document.getElementById('meals').classList.add('d-none');
     
      
console.log(imgType);
getDisplayAreaImg(imgType);  
})   
    } 
   
function getAreaInfo(){
let cols='';
for( let i=0;i<listAreaMeal.length;i++){
cols+=`
<div class="col-md-3">
<div class="des cat">
  <img src="${listAreaMeal[i].strMealThumb}" alt="meal" class="w-100 rounded-3">
<div class="layer rounded-3" role="button">
<h3 class="fs-3 text-black p-2 meal" title="${listAreaMeal[i].strMeal}">${listAreaMeal[i].strMeal}</h3>
</div>
</div>
</div>
`
}
document.getElementById('catarea').innerHTML=cols;
}  

 let descritionArea=[]
async function getDisplayAreaImg(e){
imgType=e;
let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`);
const Data=await response.json();
descritionArea=Data.meals;
displayInfoArea()
}    

function displayInfoArea(){
let cartona=`
<div class="col-md-4">
<div>
<img src="${descritionArea[0].strMealThumb}" alt="" class="w-100 rounded-3">
</div>
<h3 class="text-white">${descritionArea[0].strMeal}</h3>
</div>
<div class="col-md-8">
<h3 class="text-white">Instructions</h3>
<p class="text-white">${descritionArea[0].strInstructions}</p>
<p class="text-white fs-3">Area : <span>${descritionArea[0].strArea}</span></p>
<p class="text-white fs-3">Category : <span>${descritionArea[0].strCategory}</span></p>
<h4 class="text-white fs-4">Recipes :</h4>
<button class="btn btn-info">${descritionArea[0].strIngredient1}</button>
<button class="btn btn-info">${descritionArea[0].strIngredient2}</button>
<button class="btn btn-info">${descritionArea[0].strIngredient3}</button>
<button class="btn btn-info">${descritionArea[0].strIngredient4}</button>
<button class="btn btn-info">${descritionArea[0].strIngredient5}</button>
<button class="btn btn-info">${descritionArea[0].strIngredient6}</button>
<h4 class="text-white fs-4">Tags :</h4>
<div class="d-flex flex-column ">
<button class="btn btn-secondary mb-3 w-25">${descritionArea[0].strTags}</button>
<div>
<a href="${descritionArea[0].strSource}" class="btn btn-success">Source</a>
<a href="${descritionArea[0].strYoutube}" class="btn btn-danger">Youtube</a>
</div> 
</div>
</div>
`
document.getElementById('descriptionarea').innerHTML=cartona;
}   
      
      let Area=document.getElementById('Area');
      Area.addEventListener('click',() => {
        document.getElementById('area').classList.remove('d-none');
        document.getElementById('contact').classList.add('d-none');
document.getElementById('descriptiongredients').classList.add('d-none');
document.getElementById('catgredients').classList.add('d-none');
document.getElementById('Ingredients').classList.add('d-none');
document.getElementById('descriptionarea').classList.add('d-none');
document.getElementById('catarea').classList.add('d-none');
document.getElementById('descriptionCategory').classList.add('d-none');
document.getElementById('catdata').classList.add('d-none');
document.getElementById('category').classList.add('d-none');
document.getElementById('inputs').classList.add('d-none');
document.getElementById('search').classList.add('d-none')
      display.classList.add('d-none');
     document.getElementById('searchName').classList.add('d-none');
     document.getElementById('searchLetter').classList.add('d-none')
     
document.getElementById('description').classList.add('d-none');
document.getElementById('meals').classList.add('d-none');
        $('.links').animate({width:'toggle',padding:'toggle',margin:'toggle'},3000)
        $('.close').toggleClass('d-none')
        $('.open').toggleClass('d-none')
      })









 let dataGredients=[]
      async function showIngredients(){
        let response= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        const Data=await response.json();
      dataGredients=Data.meals;
     // console.log(dataGredients);

      getGredienta()
      $('div[title]').on('click', function(e){
        document.getElementById('catgredients').classList.remove('d-none');
        document.getElementById('inputs').classList.add('d-none');
        document.getElementById('search').classList.add('d-none')
              display.classList.add('d-none');
             document.getElementById('searchName').classList.add('d-none');
             document.getElementById('searchLetter').classList.add('d-none')
             
              document.getElementById('contact').classList.add('d-none');
              document.getElementById('descriptiongredients').classList.add('d-none');
              document.getElementById('Ingredients').classList.add('d-none');
              document.getElementById('descriptionarea').classList.add('d-none');
              document.getElementById('catarea').classList.add('d-none');
              document.getElementById('area').classList.add('d-none');
              document.getElementById('descriptionCategory').classList.add('d-none');
              document.getElementById('catdata').classList.add('d-none');
              document.getElementById('category').classList.add('d-none');
              document.getElementById('description').classList.add('d-none');
              document.getElementById('meals').classList.add('d-none');
             
             
      gradCross=$(e.target).attr('title');
        console.log(gradCross);
       sameGrad(gradCross);
     });
      } 
      showIngredients();
  
  
      function getGredienta(){
        let cols='';
        for( let i=0;i<15;i++){
          cols+=`
          <div class="col-md-3 text-center gredient">
      <div title="${dataGredients[i].strIngredient}">
      <i class="fa-solid fa-drumstick-bite fs-1 igred text-white" title="${dataGredients[i].strIngredient}"></i>
    <h3 class="text-white" title="${dataGredients[i].strIngredient}">${dataGredients[i].strIngredient}</h3>
  <p class="text-white" title="${dataGredients[i].strIngredient}">${dataGredients[i].strDescription.slice(0,200)}</p>
</div>
    </div>
  `
        }
        document.getElementById('Ingredients').innerHTML=cols;
        } 

    
        let listGradientMeals=[];
        let gradCross;
        async function sameGrad(e){
          gradCross=e;
          let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`);
          const Data=await response.json();
          listGradientMeals=Data.meals;
           getGradInfo()
           $('.layer').on('click',function(e){
            gradType=e.target.innerText;
            document.getElementById('inputs').classList.add('d-none');
            document.getElementById('search').classList.add('d-none')
                  display.classList.add('d-none');
                 document.getElementById('searchName').classList.add('d-none');
                 document.getElementById('searchLetter').classList.add('d-none')
                 
                  document.getElementById('contact').classList.add('d-none');
                  document.getElementById('descriptiongredients').classList.remove('d-none');
                  document.getElementById('catgredients').classList.add('d-none');
                  document.getElementById('Ingredients').classList.add('d-none');
                  document.getElementById('descriptionarea').classList.add('d-none');
                  document.getElementById('catarea').classList.add('d-none');
                  document.getElementById('area').classList.add('d-none');
                  document.getElementById('descriptionCategory').classList.add('d-none');
                  document.getElementById('catdata').classList.add('d-none');
                  document.getElementById('category').classList.add('d-none');
                  document.getElementById('description').classList.add('d-none');
                  document.getElementById('meals').classList.add('d-none');
                 
                  console.log(gradType);
        getDisplayGradImg(gradType);  
        })  
      } 
    
        function getGradInfo(){
        let cols='';
        for( let i=0;i<listGradientMeals.length;i++){
        cols+=`
        <div class="col-md-3">
        <div class="des cat" title="${listGradientMeals[i].strMeal}">
          <img src="${listGradientMeals[i].strMealThumb}" alt="meal" class="w-100 rounded-3" title="${listGradientMeals[i].strMeal}">
        <div class="layer rounded-3" role="button" title="${listGradientMeals[i].strMeal}">
        <h3 class="fs-3 text-black p-2 meal" title="${listGradientMeals[i].strMeal}">${listGradientMeals[i].strMeal}</h3>
        </div>
        </div>
        </div>
        `
        }
        document.getElementById('catgredients').innerHTML=cols;
        } 
        
        



        let gradType;
        let descritionGradients=[]
        async function getDisplayGradImg(e){
        gradType=e;
        let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`);
        const Data=await response.json();
        descritionGradients=Data.meals;
        displayInfoGrad();
        }     
        
        function displayInfoGrad(){
        let cartona=`
        <div class="col-md-4">
        <div>
        <img src="${descritionGradients[0].strMealThumb}" alt="" class="w-100 rounded-3">
        </div>
        <h3 class="text-white">${descritionGradients[0].strMeal}</h3>
        </div>
        <div class="col-md-8">
        <h3 class="text-white">Instructions</h3>
        <p class="text-white">${descritionGradients[0].strInstructions}</p>
        <p class="text-white fs-3">Area : <span>${descritionGradients[0].strArea}</span></p>
        <p class="text-white fs-3">Category : <span>${descritionGradients[0].strCategory}</span></p>
        <h4 class="text-white fs-4">Recipes :</h4>
        <button class="btn btn-info">${descritionGradients[0].strIngredient1}</button>
        <button class="btn btn-info">${descritionGradients[0].strIngredient2}</button>
        <button class="btn btn-info">${descritionGradients[0].strIngredient3}</button>
        <button class="btn btn-info">${descritionGradients[0].strIngredient4}</button>
        <button class="btn btn-info">${descritionGradients[0].strIngredient5}</button>
        <button class="btn btn-info">${descritionGradients[0].strIngredient6}</button>
        <h4 class="text-white fs-4">Tags :</h4>
        <div class="d-flex flex-column ">
        <button class="btn btn-secondary mb-3 w-25">${descritionGradients[0].strTags}</button>
        <div>
        <a href="${descritionGradients[0].strSource}" class="btn btn-success">Source</a>
        <a href="${descritionGradients[0].strYoutube}" class="btn btn-danger">Youtube</a>
        </div> 
        </div>
        </div>
        `
        document.getElementById('descriptiongredients').innerHTML=cartona;
        }   
 




      let openIngredients=document.getElementById('showIngredients');
      openIngredients.addEventListener('click',() => {
        document.getElementById('Ingredients').classList.remove('d-none');
        document.getElementById('contact').classList.add('d-none');
        document.getElementById('descriptiongredients').classList.add('d-none');
        document.getElementById('catgredients').classList.add('d-none');
        document.getElementById('descriptionarea').classList.add('d-none');
        document.getElementById('catarea').classList.add('d-none');
        document.getElementById('area').classList.add('d-none');
        document.getElementById('descriptionCategory').classList.add('d-none');
        document.getElementById('catdata').classList.add('d-none');
        document.getElementById('category').classList.add('d-none');
        document.getElementById('inputs').classList.add('d-none');
        document.getElementById('search').classList.add('d-none')
              display.classList.add('d-none');
             document.getElementById('searchName').classList.add('d-none');
             document.getElementById('searchLetter').classList.add('d-none')
             
        document.getElementById('description').classList.add('d-none');
        document.getElementById('meals').classList.add('d-none');
        $('.links').animate({width:'toggle',padding:'toggle',margin:'toggle'},3000)
        $('.close').toggleClass('d-none')
        $('.open').toggleClass('d-none')
      
      })


















        //*...........contact......*/
let showContact=document.getElementById('showContact');
showContact.addEventListener('click',() =>{
document.getElementById('contact').classList.remove('d-none');
document.getElementById('descriptiongredients').classList.add('d-none');
document.getElementById('catgredients').classList.add('d-none');
document.getElementById('Ingredients').classList.add('d-none');
document.getElementById('descriptionarea').classList.add('d-none');
document.getElementById('catarea').classList.add('d-none');
document.getElementById('area').classList.add('d-none');
document.getElementById('descriptionCategory').classList.add('d-none');
document.getElementById('catdata').classList.add('d-none');
document.getElementById('category').classList.add('d-none');
document.getElementById('inputs').classList.add('d-none');
document.getElementById('search').classList.add('d-none')
      display.classList.add('d-none');
     document.getElementById('searchName').classList.add('d-none');
     document.getElementById('searchLetter').classList.add('d-none')
     
document.getElementById('description').classList.add('d-none');
document.getElementById('meals').classList.add('d-none');
$('.links').animate({width:'toggle',padding:'toggle',margin:'toggle'},3000);
$('.close').toggleClass('d-none')
  $('.open').toggleClass('d-none')
})

let enterName=document.getElementById('enterName');
let enterPhone=document.getElementById('enterPhone');
let enterPassword=document.getElementById('enterPassword');

let enterEmail=document.getElementById('enterEmail');
let enterAge=document.getElementById('enterAge');
let enterRepassword=document.getElementById('enterRepassword')
let formData=document.getElementById('formData');
let isValid=false;


for(let i=0;i<formData.length;i++){
formData[i].addEventListener("input", function () {
  if (validationName()==true && validationPhone()==true && validationPassword()==true && validationEmail()==true && validationAge()==true && validationRePassword()==true){
     isValid = true;
  } else {
     isValid = false;
  }

});
}


/* 
enterName.addEventListener("input", function () {
  if (validationName()) {
     isValid = true;
  } else {
     isValid = false;
  }
});


enterPhone.addEventListener("input", function () {
  if (validationPhone()) {
     isValid = true;
  } else {
     isValid = false;
  }
});


enterPassword.addEventListener("input", function () {
  if (validationPassword()) {
     isValid = true;
  } else {
     isValid = false;
  }
});


enterEmail.addEventListener("blur", function () {
  if (validationEmail()) {
     isValid = true;
  } else {
     isValid = false;
  }
});


enterAge.addEventListener("blur", function () {
  if (validationAge()) {
     isValid = true;
  } else {
     isValid = false;
  }
});


enterRepassword.addEventListener("input", function () {
  if (validationRePassword()) {
     isValid = true;
  } else {
     isValid = false;
  }
}); */

function validationName(){
  let text=enterName.value;
  let regex=/^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/;
  if (regex.test(text)) {
    enterName.classList.add("is-valid");
    enterName.classList.remove("is-invalid");
    return true;
 } else {
  
    enterName.classList.add("is-invalid");
    enterName.classList.remove("is-valid");

    return false;
 }
}
function validationPhone(){
  let text=enterPhone.value;
  let regex=/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  if (regex.test(text)) {
    enterPhone.classList.add("is-valid");
    enterPhone.classList.remove("is-invalid");
    return true;
 } else {
  
    enterPhone.classList.add("is-invalid");
    enterPhone.classList.remove("is-valid");

    return false;
 }
}


function validationPassword(){
  let text=enterPassword.value;
  let regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (regex.test(text)) {
    enterPassword.classList.add("is-valid");
    enterPassword.classList.remove("is-invalid");
    return true;
 } else {
  
    enterPassword.classList.add("is-invalid");
    enterPassword.classList.remove("is-valid");

    return false;
 }
}


function validationEmail() {
  let text=enterEmail.value;
  const regex =
     /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  if (regex.test(text)) {
     
     enterEmail.classList.add("is-valid");
     enterEmail.classList.remove("is-invalid");
     return true;
  } else {
    

     enterEmail.classList.add("is-invalid");
     enterEmail.classList.remove("is-valid");

     return false;
  }
}


function validationAge() {
let text=enterAge.value;
  const regex = /^([1-7][0-9]|80)$/;
  if (regex.test(text)) {
     
     enterAge.classList.add("is-valid");
     enterAge.classList.remove("is-invalid");
     return true;
  } else {
     enterAge.classList.add("is-invalid");
     enterAge.classList.remove("is-valid");
     return false;
  }
}

function validationRePassword(){
  let pw1=enterPassword.value;
  let pw2=enterRepassword.value;
  if (pw1===pw2) {
    enterRepassword.classList.add("is-valid");
    enterRepassword.classList.remove("is-invalid");
    return true;
 } else {
  
    enterRepassword.classList.add("is-invalid");
    enterRepassword.classList.remove("is-valid");

    return false;
 }
}


$(function(){
  $('.loader').fadeOut(1500,function(){
    $('.loading').slideUp(1500,function(){
      $('body').css('overflow','auto')
      $('.loading').remove();
    });
  });
  }) 







