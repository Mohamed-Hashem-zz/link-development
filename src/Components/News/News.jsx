import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function News() {
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);

    const fetchData = async () => {
        await axios.get("https://api.npoint.io/d275425a434e02acf2f7").then((res) => {
            console.log(res.data.News);
            setData(res.data.News)
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchData();
    },);

    return (<div className="my-5">
        <h6 className="fs-6 fw-bold text-center">Media</h6>
        <h2 className="fs-1 fw-bold text-center">Top News</h2>
        <div className="">
            <ul className="nav nav-pills d-flex justify-content-center mb-4" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-news-tab" data-bs-toggle="pill" data-bs-target="#pills-news" type="button" role="tab" aria-controls="pills-news" aria-selected="true">All News</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-technology-tab" data-bs-toggle="pill" data-bs-target="#pills-technology" type="button" role="tab" aria-controls="pills-technology" aria-selected="false">Technology</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-sport-tab" data-bs-toggle="pill" data-bs-target="#pills-sport" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Sport</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-health-tab" data-bs-toggle="pill" data-bs-target="#pills-health" type="button" role="tab" aria-controls="pills-health" aria-selected="false">Health</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-economics-tab" data-bs-toggle="pill" data-bs-target="#pills-economics" type="button" role="tab" aria-controls="pills-economics" aria-selected="false">Economics</button>
                </li>

            </ul>
            <div className="tab-content container" id="pills-tabContent">
                <div className="tab-pane fade show active d-flex justify-content-between flex-wrap" id="pills-news" role="tabpanel" aria-labelledby="pills-news-tab" tabindex="0">
                    {
                        data.map((item, index) => (
                            <div className="card col-lg-3  col-sm-4 m-4" key={item.id}>
                                <img src={item.urlToImage} className="card-img-top" style={{ width: "100%", height: "300px" }} alt="..." />
                                <div className="card-body">
                                    <p className="card-text">{String(item.title).substring(0, 100) + '...'}</p>
                                    <div className="d-flex justify-content-between">
                                        <span>{String(new Date(item.publishedDate)).substring(0, 15)}</span>
                                        <span onClick={() => setFlag((flag) => !flag)} style={{ cursor: "pointer" }}>{flag ? "🤍" : "❤"}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="tab-pane fade d-flex justify-content-between flex-wrap" id="pills-technology" role="tabpanel" aria-labelledby="pills-technology-tab" tabindex="0">
                    {
                        data.map((item, index) => (
                            <div className="card col-lg-3 col-sm-4 m-4" key={item.id}>
                                <img src={item.urlToImage} className="card-img-top" style={{ width: "100%", height: "300px" }} alt="..." />
                                <div className="card-body">
                                    <p className="card-text">{String(item.title).substring(0, 100) + '...'}</p>
                                    <div className="d-flex justify-content-between">
                                        <span>{String(new Date(item.publishedDate)).substring(0, 15)}</span>
                                        <span onClick={() => setFlag((flag) => !flag)} style={{ cursor: "pointer" }}>{flag ? "🤍" : "❤"}</span>
                                    </div>
                                </div>
                            </div>
                        )).slice(0, 6)
                    }
                </div>
                <div className="tab-pane fade d-flex justify-content-between flex-wrap" id="pills-sport" role="tabpanel" aria-labelledby="pills-sport-tab" tabindex="0">
                    {
                        data.map((item, index) => (
                            <div className="card col-lg-3  col-sm-4 m-4" key={item.id}>
                                <img src={item.urlToImage} className="card-img-top" style={{ width: "100%", height: "300px" }} alt="..." />
                                <div className="card-body">
                                    <p className="card-text">{String(item.title).substring(0, 100) + '...'}</p>
                                    <div className="d-flex justify-content-between">
                                        <span>{String(new Date(item.publishedDate)).substring(0, 15)}</span>
                                        <span onClick={() => setFlag((flag) => !flag)} style={{ cursor: "pointer" }}>{flag ? "🤍" : "❤"}</span>
                                    </div>
                                </div>
                            </div>
                        )).slice(6, 9)
                    }
                </div>
                <div className="tab-pane fade d-flex justify-content-between flex-wrap" id="pills-health" role="tabpanel" aria-labelledby="pills-health-tab" tabindex="0">
                    {
                        data.map((item, index) => (
                            <div className="card col-lg-3  col-sm-4 m-4" key={item.id}>
                                <img src={item.urlToImage} className="card-img-top" style={{ width: "100%", height: "300px" }} alt="..." />
                                <div className="card-body">
                                    <p className="card-text">{String(item.title).substring(0, 100) + '...'}</p>
                                    <div className="d-flex justify-content-between">
                                        <span>{String(new Date(item.publishedDate)).substring(0, 15)}</span>
                                        <span onClick={() => setFlag((flag) => !flag)} style={{ cursor: "pointer" }}>{flag ? "🤍" : "❤"}</span>
                                    </div>
                                </div>
                            </div>
                        )).slice(9, 15)
                    }
                </div>
                <div className="tab-pane fade d-flex justify-content-between flex-wrap" id="pills-economics" role="tabpanel" aria-labelledby="pills-economics-tab" tabindex="0">
                    {
                        data.map((item, index) => (
                            <div className="card col-lg-3  col-sm-4  m-4" key={item.id}>
                                <img src={item.urlToImage} className="card-img-top" style={{ width: "100%", height: "300px" }} alt="..." />
                                <div className="card-body">
                                    <p className="card-text">{String(item.title).substring(0, 100) + '...'}</p>
                                    <div className="d-flex justify-content-between">
                                        <span>{String(new Date(item.publishedDate)).substring(0, 15)}</span>
                                        <span onClick={() => setFlag((flag) => !flag)} style={{ cursor: "pointer" }}>{flag ? "🤍" : "❤"}</span>
                                    </div>
                                </div>
                            </div>
                        )).slice(15,)
                    }
                </div>
            </div>
        </div>
    </div>);
}
