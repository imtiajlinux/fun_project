import React from "react";

export default function LatestNews({ latestNews }) {
    

    const chunkedNews = [];
    for (let i = 0; i < latestNews.length; i += 3) {
        chunkedNews.push(latestNews.slice(i, i + 3));
    }

    return (
        <section className="latest-news py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">Latest News</h2>
                <div id="newsCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                    <div className="carousel-inner">
                        {chunkedNews.map((group, index) => (
                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                <div className="row">
                                    {group.map((news) => (
                                        <div className="col-lg-4 col-md-6 mb-4" key={news.id}>
                                            <div className="card news-card h-100">
                                                <img src={`/storage/${news.image}`} className="card-img-top" alt={news.title} style={{maxHeight:'300px'}} />
                                                <div className="card-body">
                                                    <p className="card-date text-muted small">{news.created_at.slice(0,10)}</p>
                                                    <h5 className="card-title">{news.title}</h5>
                                                    <p className="card-text">{news.description}</p>
                                                    <a href="#" className="read-more text-primary fw-medium">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    
                    {chunkedNews.length > 1 && (
                        <>
                            <button className="carousel-control-prev w-25" type="button" data-bs-target="#newsCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next w-25" type="button" data-bs-target="#newsCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
