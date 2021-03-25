import { useEffect, useState } from 'react';
import * as petService from '../services/petService';

const PetDetails = ({
    match
}) => {
    let [pet, setPet] = useState({})
    useEffect(() => {
        petService.getOne(match.params.petId)
            .then(res => setPet(res))
    },[]);
    return (
        <section class="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes} <a href="#"><button class="button"><i class="fas fa-heart"></i>
                    Pet</button></a>
            </p>
            <p class="img"><img src={pet.imageURL} /></p>
            <p class="description">{pet.description}</p>
            <style jsx>{`
                            .detailsOtherPet,
                            .detailsMyPet,
                            .deletePet,
                            .otherPet,
                            .myPet {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
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

                `}</style>
        </section>
    );
}
export default PetDetails;