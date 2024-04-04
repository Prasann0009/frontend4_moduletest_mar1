import React,{useState} from "react";
import MoviesList from "./MoviesList";
import GenreFilter from "./GenreFilter";
import {movies,genres} from "./data";
import "./App.css"

const App = ()=>{
    const [selectedGenre,setSelectedGenre] = useState(null);
      
    const handleGenreSelect = (genre) => {
        console.log(`Selected genre: ${genre}`);
        setSelectedGenre(genre);
      };

    return (
         <div className="container">
             <h2>Top 15 Movies of All Time</h2>
             <GenreFilter genres={genres} onGenreSelect={handleGenreSelect} /> 
             {/* if genre is not present 
            movies.map(movies=>movies.genre)
            .filter((genre,index,self)=>self.indexOf(genre)===index)
             */}
             <MoviesList movies={movies.filter(movie => !selectedGenre || movie.genre === selectedGenre)} />
         </div>
        )
}

export default App;