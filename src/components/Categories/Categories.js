import CategoryNavigation from './CategoryNavigation/CategoryNavigation'

const Categories = () => {
    return (
        <section className="dashboard">
            <h1>Dashboard</h1>

            <CategoryNavigation />

            <ul className="other-pets-list">
                <li className="otherPet">
                    <h3>Name: Gosho</h3>
                    <p>Category: Cat</p>
                    <p className="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" /></p>
                    <p className="description">This is not my cat Gosho</p>
                    <div className="pet-info">
                        <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
                        <a href="#"><button className="button">Details</button></a>
                        <i className="fas fa-heart"></i> <span> 2</span>
                    </div>
                </li>
                <li className="otherPet">
                    <h3>Name: Gosho</h3>
                    <p>Category: Cat</p>
                    <p className="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" /></p>
                    <p className="description">This is not my cat Gosho</p>
                    <div className="pet-info">
                        <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
                        <a href="#"><button className="button">Details</button></a>
                        <i className="fas fa-heart"></i> <span> 2</span>
                    </div>

                </li>
                <li className="otherPet">
                    <h3>Name: Kiro</h3>
                    <p>Category: Dog</p>
                    <p className="img"><img src="http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bbde.png" />
                    </p>
                    <p className="description">This is my dog Kiro</p>
                    <div className="pet-info">
                        <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
                        <a href="#"><button className="button">Details</button></a>
                        <i className="fas fa-heart"></i> <span> 4</span>
                    </div>
                </li>
            </ul>
            <style jsx>{`
                            .button {
                                display: block;
                                padding: 0.6rem 1rem;
                                border-radius: 0.4rem;
                                text-decoration: none;
                                font-weight: bold;
                                background: cadetblue;
                                color: rgb(255, 255, 255);
                                border: none;
                                font-size: 1rem;

                            }

                            a {
                                text-decoration: none;
                                display: inline-block;
                            }

                            li {
                                list-style-type: none;
                            }

                            .fa-heart {
                                color: red;
                            }

                            .img {
                                width: 15rem;
                                position: relative;
                                overflow: hidden;
                                padding: 0rem;
                            }

                            img {
                                display: block;
                                position: absolute;
                                left: 0;
                                right: 0;
                                width: 100%;
                                height: auto;
                                object-fit: cover;
                            }

                            .img::after {
                                display: block;
                                content: "";
                                padding-top: 100%;
                            }

                            .detailsOtherPet,
                            .detailsMyPet,
                            .deletePet,
                            .otherPet,
                            .myPet {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                            }

                            .detailsMyPet>p:nth-child(2),
                            .deletePet>p:nth-child(2),
                            .otherPet>p:nth-child(2),
                            .myPet>p:nth-child(2) {
                                font-size: 1.2rem;
                                font-weight: bold;
                            }

                            .dashboard>nav>ul {
                                display: flex;

                            }

                            .dashboard>nav>ul li:not(:last-child) {
                                padding-right: 1rem;
                            }

                            .dashboard .navbar {
                                justify-content: center;
                            }

                            .basic h1,
                            .my-pets h1,
                            .dashboard h1 {
                                text-align: center;
                                margin: 0rem;
                                padding: 2rem 0 1rem 0;
                            }

                            h3 {
                                margin-bottom: 0;
                            }

                            .pet-info {
                                padding-bottom: 1rem;
                            }

                            .deletePet>form,
                            .detailsMyPet>form {
                                display: flex;
                                flex-direction: column;
                                padding-bottom: 1rem;
                            }

                            .my-pets .my-pets-list,
                            .dashboard .other-pets-list {
                                display: flex;
                                justify-content: space-around;
                                flex-wrap: wrap;
                            }

                            .detailsMyPet textarea,
                            .my-pets textarea {
                                margin-bottom: 2rem;
                            }
                `}</style>
        </section>

    );
};

export default Categories;