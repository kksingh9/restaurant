import React, { useRef } from "react";

const NewMovies = (props) => {
    
    const enterTitleRef = useRef('');
    const enterTextRef = useRef('');
    const enterDateRef = useRef('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const movieData = {
            title: enterTitleRef.current.value,
            openingText: enterTextRef.current.value,
            releaseDate: enterDateRef.current.value
        }
       // props.onSaveMovieData(movieData);
        console.log(movieData);
    }

    return (
        <>
        <form onSubmit={onSubmitHandler}>
        <div>
        <label htmlFor="title">Title</label><br></br>
        <input id="title" type="text" ref={enterTitleRef} />
        </div>
        <div>
        <label htmlFor="text">Opening Text</label><br></br>
        <textarea id='text' rows='5' type="text" ref={enterTextRef} ></textarea>
        </div>
        <div>
        <label htmlFor="date">Release Date</label><br></br>
        <input id="date" type="text" ref={enterDateRef} />
        </div>
        <button type="submit">Add Movies</button>
        </form>
        </>
    )
};

export default NewMovies;