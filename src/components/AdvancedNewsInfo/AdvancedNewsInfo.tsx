import "./advancedNewsInfo.css"
import {useLocation} from 'react-router-dom';

function AdvancedNewsInfo() {
    const location = useLocation();

    return (
        <div className="advancedInfo__container">
            <div className="advancedInfo__container-top">
                <div className="advancedInfo__container-top-author-date">
                    <span>{location.state.source.name}</span> <span className="dot"/><span>21 July 2022</span>
                </div>
                <span className="advancedInfo__container-top-title">{location.state.title}</span>
                <span>{location.state.author}</span>
            </div>
            <div className="news-advanced-thumbnail">
                <img src={location.state.urlToImage} alt="thumbnail"/>
            </div>
            <div className="advancedInfo__container-content">
                <p>{location.state.content}
                    <a href={location.state.url} target="_blank" rel="noreferrer">
                        <button className="learn-more">Learn more</button>
                    </a>
                </p>

            </div>
        </div>
    )


}

export default AdvancedNewsInfo