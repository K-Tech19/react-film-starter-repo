import React, {Component} from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {

    handleDetailsClick = (film)=>{
        console.log(`Fetch details here: ${film}`)
    }


    render(){
        return(
            <div onClick={()=> this.handleDetailsClick('film')} className="film-row" >
                <FilmPoster poster_path={this.props.film.poster_path} title={this.props.film.title}/>
                <div className="film-summary">
                    <Fave />
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.split('-')[0]}</p>
                </div>
            </div>
        )
    }
}

export default FilmRow