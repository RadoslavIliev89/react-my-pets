import * as petService from '../services/petService'

const CreatePet = ({history}) => {

    const onCreatePetHandler = (e) => {
        e.preventDefault();
        let { name, description, imageURL, category } = e.target

        petService.create(name.value, description.value, imageURL.value, category.value)
            .then(() => {
                history.push('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <section className="create">
            <form onSubmit={onCreatePetHandler} >
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea rows="4" cols="45" type="text" name="description" id="description"
                                placeholder="Description"></textarea>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageURL" id="image" placeholder="Image" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="category">Category</label>
                        <span className="input">
                            <select type="text" name="category">
                                <option value="Cat">Cat</option>
                                <option value="Dog">Dog</option>
                                <option value="Parrot">Parrot</option>
                                <option value="Reptile">Reptile</option>
                                <option value="Other">Other</option>
                            </select>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <input className="button" type="submit" className="submit" value="Add Pet" />
                </fieldset>
            </form>
          
        </section>
    )
}
export default CreatePet;