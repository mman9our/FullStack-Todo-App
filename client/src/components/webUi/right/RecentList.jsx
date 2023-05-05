import './recentlist.css';

function RecentList() {
return (
    <div className="recent-list">
    <div className="header">
                        <h3>Recent Lists</h3>
                        <a href="#">More 
                            <span className="material-symbols-sharp">chevron_right</span>
                        </a>
                    </div>
                    <div className="list-item">
                        <div className="service">
                            <div className="icon bg-success-light">
                                <span className="material-symbols-sharp success">terminal</span>
                            </div>
                            <div className="details">
                                <h4>Coding</h4>
                                <p>29.2.2023</p>
                            </div>
                        </div>
                        <div className="card-details">
                            <div className="card bg-success">
                                <p>Complete</p>
                            </div>
                            <div className="details">
                                <h4>5</h4>
                                <small>completed tasks</small>
                            </div>
                        </div>
                        <h4>100%</h4>
                    </div>

                    <div className="list-item">
                        <div className="service">
                            <div className="icon bg-purple-light">
                                <span className="material-symbols-sharp purple">school</span>
                            </div>
                            <div className="details">
                                <h4>College</h4>
                                <p>26.2.2023</p>
                            </div>
                        </div>
                        <div className="card-details">
                            <div className="card bg-purple">
                                <p>Progress</p>
                            </div>
                            <div className="details">
                                <h4>13</h4>
                                <small>completed tasks</small>
                            </div>
                        </div>
                        <h4>15%</h4>
                    </div>

                    <div className="list-item">
                        <div className="service">
                            <div className="icon bg-primary-light">
                                <span className="material-symbols-sharp purple">Shopping_bag</span>
                            </div>
                            <div className="details">
                                <h4>Shopp</h4>
                                <p>2.11.2023</p>
                            </div>
                        </div>
                        <div className="card-details">
                            <div className="card bg-purple">
                                <p>Progress</p>
                            </div>
                            <div className="details">
                                <h4>3</h4>
                                <small>completed tasks</small>
                            </div>
                        </div>
                        <h4>40%</h4>
                    </div>

                    <div className="list-item">
                        <div className="service">
                            <div className="icon bg-success-light">
                                <span className="material-symbols-sharp success">directions_bike</span>
                            </div>
                            <div className="details">
                                <h4>Soprt</h4>
                                <p>4.1.2023</p>
                            </div>
                        </div>
                        <div className="card-details">
                            <div className="card bg-success">
                                <p>Complete</p>
                            </div>
                            <div className="details">
                                <h4>10</h4>
                                <small>completed tasks</small>
                            </div>
                        </div>
                        <h4>100%</h4>
                    </div>

                    <div className="list-item">
                        <div className="service">
                            <div className="icon bg-danger-light">
                                <span className="material-symbols-sharp danger">local_library</span>
                            </div>
                            <div className="details">
                                <h4>Read</h4>
                                <p>4.4.2023</p>
                            </div>
                        </div>
                        <div className="card-details">
                            <div className="card bg-danger">
                                <p>Canceled</p>
                            </div>
                            <div className="details">
                                <h4>1</h4>
                                <small>completed tasks</small>
                            </div>
                        </div>
                        <h4>20%</h4>
                    </div>

                </div>
);
}

export default RecentList;
