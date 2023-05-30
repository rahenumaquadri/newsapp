import React, { Component } from 'react'

export class Newsitem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date,source } = this.props
        return (
            <div className='my-3'>
                <div className="card">
                <h5 className="card-title">{title}<span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" 
                style={{left:'90%',zIndex:'1',fontSize:'10px',paddingBottom:'5px'}}>
                            {source}
                        </span></h5>
                    <img src={!imageUrl ? "https ://image.cnbcfm.com/api/v1/image/107184779-16747687412023-01-26t212629z_1891667270_rc2r7t9n3ita_rtrmadp_0_autos-tesla-repairs.jpeg?v=1677032698&w=1920&h=1080 " : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body"> 
                        <p className="card-text">{description}....</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()} 3 mins ago</small></p>
                        <a rel="nonreferal" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Newsitem
