import { useState } from "react";
import AxiosSecure from "../../Utils/AxiosSecure";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddItem = () => {
    const [selects, setSelects] = useState('')
    const [name, setName] = useState('')
    const axiosSecure = AxiosSecure()

    const addFood = (e) => {
        e.preventDefault()
        const price = parseFloat(e.target.price.value)
        const recipe = e.target.recipe.value
        const image = e.target.img.files[0]
        const formData = new FormData()
        formData.append('image', image)

        // post image in imageBB
        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGKEY}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                const image = data.data.display_url
                const foodData = {
                    name, price, recipe, category: selects, image
                }
                axiosSecure.post(`${import.meta.env.VITE_SERVER}/addFood`, foodData)
                    .then(res => {
                        
                        toast("Added Successful")
                    })
            })

    }
    return (
        <>
        <ToastContainer></ToastContainer>
            <div className="lg:w-[50%] mx-auto">
                <form className="" onSubmit={addFood}>
                    <label className="border p-1 rounded-md w-full text-center mt-5" htmlFor="Img">Upload Image</label><br />
                    <label htmlFor="Specialty">Category</label><br />
                    <select id="Specialty" className="border p-1 rounded-md w-full" value={selects} onChange={(e) => setSelects(e.target.value)} required>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="salad">Salad</option>
                        <option value="drinks">Drinks</option>
                    </select><br /><br />

                    <select id="Specialty" className="border p-1 rounded-md w-full" value={selects} onChange={(e) => setName(e.target.value)} required>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="salad">Salad</option>
                        <option value="drinks">Drinks</option>
                    </select><br /><br />
                    <input className="border p-1 rounded-md w-full" type="text" name="price" required placeholder="price" /><br /><br />
                    <textarea className="border w-full " name="recipe" id="" cols="10" rows="10"></textarea>
                    <input className="border hidden p-1 rounded-md w-full" type="file" name="img" id="Img" accept="image/*" required /><br />
                    <button className="bg-sky-700 text-white p-1 rounded-md w-full">ADD</button>
                </form>
            </div>
        </>
    );
};

export default AddItem;