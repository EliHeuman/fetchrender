import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';



function App () {
  // Filter by Category
  // https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
  // const { Container } = ReactBootstrap;  
    const [renderData, setRenderData] = useState([]);
    const [url, setUrl] = useState ('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const [query, setQuery] =useState("");
    const drinksArr=[];
    useEffect (() => {
      const fetchData = async () => {
      //  setIsLoading(true);
      console.log(url);
        const result = await axios(url);
        let data = result.data;
        
        data.drinks.map((item) => {
          console.log(item);
          drinksArr.push(item)
        });
        console.log(drinksArr);
        setRenderData(drinksArr);
        console.log(drinksArr[0]['strIngredient1']);
    };

    fetchData()
    },[url]);
    
    const handleSubmit = (event) => {
      setUrl(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
      event.preventDefault();
    };

    return (
      <div>
      <form onSubmit={handleSubmit}>
      <input value="text" value={query} onChange={event => setQuery(event.target.value)}></input>
      <button type="button" onClick={handleSubmit} >Search</button>
      </form> 
      {console.log('query')}
      {console.log(query)}
      {console.log('renderData')}
      {console.log(renderData)}
       <ul id="drinks"> {renderData.map(item =>  (
        <li id="drink" key={item.idDrink}>
        <a href={item.url}>{item.strDrink}</a><br></br>
        <img
          src={item.strDrinkThumb}
          width="200"
          height="200"
          alt={`Image of a ${item.strDrink} Image source is ${item.strImageSource}`}>
         </img><br></br>
        <ol>
        {item.strIngredient1 ? <li href={item.url}>{item.strMeasure1} : {item.strIngredient1}</li> : ''}
        {item.strIngredient2 ? <li href={item.url}>{item.strMeasure2} : {item.strIngredient2}</li> : ''}
        {item.strIngredient3 ? <li href={item.url}>{item.strMeasure3} : {item.strIngredient3}</li> : ''}
        {item.strIngredient4 ? <li href={item.url}>{item.strMeasure4} : {item.strIngredient4}</li> : ''}
        {item.strIngredient5 ? <li href={item.url}>{item.strMeasure5} : {item.strIngredient5}</li> : ''}
        {item.strIngredient6 ? <li href={item.url}>{item.strMeasure6} : {item.strIngredient6}</li> : ''}
        {item.strIngredient7 ? <li href={item.url}>{item.strMeasure7} : {item.strIngredient7}</li> : ''}
        {item.strIngredient8 ? <li href={item.url}>{item.strMeasure8} : {item.strIngredient8}</li> : ''}
        {item.strIngredient9 ? <li href={item.url}>{item.strMeasure9} : {item.strIngredient9}</li> : ''}
        {item.strIngredient10 ? <li href={item.url}>{item.strMeasure10} : {item.strIngredient10}</li> : ''}
        </ol>
        <a href={item.url}>{item.strInstructions}</a>
        </li>
        
       ))}
       </ul>
    </div>
    ); 
};


export default App;
