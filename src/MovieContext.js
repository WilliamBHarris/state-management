import React, {useState, createContext} from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
          name: "Harry Potter",
          price: "10$",
          id: 234124
        },
        {
          name: "Game of Thrones",
          price: "10$",
          id: 23412224
        },
        {
          name: "Inception",
          price: "10$",
          id: 2465724
        }
      ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}