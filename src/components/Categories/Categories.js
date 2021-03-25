import { Component } from 'react';

import CategoryNavigation from './CategoryNavigation/CategoryNavigation';
import Pet from './Pet/Pet';
import * as petService from '../services/petService';

class Categories extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pets: [],
            currentCategory:'all'
        }
    }
    componentDidMount() {
        petService.getAll()
            .then(res => this.setState({ pets: res }))
    }
    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category;

        if (prevProps.match.params.category == category) {
            return;
        }

        petService.getAll(category)
            .then(res => {

                this.setState({ pets: res, currentCategory: category })
            })
    }
    render() {
        console.log(this.state.pets);
        return (
            <section className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNavigation />

                <ul className="other-pets-list">
                    {this.state.pets.map(x =>

                        <Pet key={x.id} {...x} />
                    )}
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
    }
};

export default Categories;