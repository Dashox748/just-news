import noImage from "../../images/no-image.png"
import {useParams, useNavigate} from "react-router-dom";
import {
    useQuery,
} from 'react-query'
import axios, {AxiosResponse} from "axios";
import "./content.css"
import temporaryData from "./data.json"
import {FetchNews} from "../../utils/interfaces"

function Content() {
    const navigate = useNavigate();
    const routeParams = useParams();


    const {isLoading, data} = useQuery(['news-data', routeParams], () =>
            axios.get<Array<FetchNews>>
                //            fetch google for live demo due to api cors restrictions
                //            ("www.google.com").then((res: AxiosResponse) => res.data.articles)
                (`https://newsapi.org/v2/top-headlines?q=${routeParams.keyword ? routeParams.keyword : ""}&category=${routeParams.category ? routeParams.category : routeParams.keyword ? "" : "general"}&language=${routeParams.category ? "en" : routeParams.keyword ? "" : "en"}&sortBy=popularity&pageSize=40&apiKey=92cffcd19d2d4ed9968f4758d793bf6f`).then((res: AxiosResponse) => res.data.articles)
        , {
//            while on demo live to work on static generated data
//            placeholderData: temporaryData,
//            retry: 90
        })
    if (isLoading) {
        return <span className="loader"></span>
    }
    return (
        <>

            <div className="content__container">
                <div className="content__container-news">
                    {data?.map((data: any, index: number) => (
                        <div
                            className={`news__container ${index === 0 ? "heading" : ""}${index === 1 ? "heading2" : ""}`}
                            key={index}>
                            <div className="news-thumbnail" onClick={() => navigate('/advancedInfo/', {state: data})}>
                                <img
                                    src={data.urlToImage === null ? noImage : data.urlToImage}
                                    alt="thumbnail"/>
                            </div>
                            <div className="news-info">
                                <div className="news__container-author-date">
                                    <span>{data.source.name}</span> <span className="dot"/><span>21 July 2022</span>
                                </div>
                                <div className="news__container-title"
                                     onClick={() => navigate('/advancedInfo/', {state: data})}>
                                    <span>{data.title}</span>
                                </div>
                                <div className="news-container-description">
                                    <span>{data.description}</span>
                                </div>
                                <div className="news-conainer-author">
                                    <span>{data.author}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Content