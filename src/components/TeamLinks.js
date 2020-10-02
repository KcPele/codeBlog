import React from 'react'

const  TeamLinks = ({ author }) => {
    return (
        <div className="author-social-links text-center">
        <ul>
            <li><a href={author.facebook} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="facebook">
                <i className="fa fa-facebook-f fa-lg"></i></a></li>
                <li><a href={author.twitter} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="twitter">
                <i className="fa fa-twitter fa-lg"></i></a></li>
                <li><a href={author.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="instagram">
                <i className="fa fa-instagram fa-lg"></i></a></li>
                <li><a href={author.google} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="google">
                <i className="fa fa-google fa-lg"></i></a></li>
                <li><a href={author.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="linkedin">
                <i className="fa fa-github fa-lg"></i></a></li>
        
        </ul>
    </div>
    )
}

export default TeamLinks
