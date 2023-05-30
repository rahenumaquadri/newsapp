import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes  from 'prop-types';

export class News extends Component {

    //static defaultprops={
       //counrty: "us",
       //pageSize: 8,
       //category: 'general',
    //}

    //static PropTypes={
     //country: PropTypes.string,
     //pageSize: PropTypes.number,
     //ca//tegory: PropTypes.string,
    //}


    constructor() {
        super();
        console.log("hlo iam a constracture from news items");
        this.state = {
            articles: [],
            loading:false,
            page:2
        }
    }


    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category${this.props.category}&apiKey=3221616d954e45dfb99fb3a4a7538667&page=2&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({articles: parseData.articles, totalResults: parseData.totalResults})
    }

     handlePreviousClick =  async()=>{
        console.log('previous');
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category${this.props.category}&apiKey=3221616d954e45dfb99fb3a4a7538667&page=${this.state.page - 2}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({
            page: this.state.page - 2,
            articles: parseData.articles
        }
           
        )

    }

    handleNextClick= async()=>{
        console.log('Next');
        if( this.state.page + 1 > Math.ceil(this.state.totalResults/5)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category${this.props.category}&apiKey=3221616d954e45dfb99fb3a4a7538667&page=${this.state.page + 2}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({
            page: this.state.page + 2,
            articles: parseData.articles
        }
           
        )
        }
        
    }


    render() {
        return (
            <div className='container my-4'>
                <h1 className='text-center'> NewsMonkey - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                             imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page <=1}  type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>
                     &larr; Previous </button>
                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr; </button>
                </div>

            </div>
        )
    }
}

export default News
