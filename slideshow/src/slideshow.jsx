import { useState } from 'react'
import filmData from './data/film-data.json'


export function Slideshow() {
    const [index, setIndex] = useState(0);
    const next = () => {
        setIndex(index + 1);
        console.log(index);
    }
  
    const back = () => {
        setIndex(index - 1);
        console.log(index);
    }

    const startOver = () => {
        setIndex(0);
        console.log(index);
    }
    return (
    <>
        <Slide
            filmTitle={filmData[index].title}
            filmOriginalTitle={filmData[index].original_title}
            key={filmData[index].id}
            releaseDate={filmData[index].release_date}
            description={filmData[index].description}
            coverImage={filmData[index].image}
        />
        <div className='buttons'>
            <button disabled={index === 0} onClick={ startOver }>Start Over</button>
            <button disabled={index === 0} onClick={ back }>Back</button>
            <button disabled={index === filmData.length - 1} onClick={ next }>Next</button>
        </div>
    </>
    )
}


const Slide = ({ filmTitle, filmOriginalTitle, releaseDate, description, coverImage}) => {
    return (
        <div className='slide'>
            <p className='title text'>{filmTitle}</p>
            <p className='text'>{filmOriginalTitle}</p>
            <p className='text'>{releaseDate}</p>
            <p className='text'>{description}</p>
            <img src={coverImage} alt='Movie Poster'/>
        </div>
        
    )
}