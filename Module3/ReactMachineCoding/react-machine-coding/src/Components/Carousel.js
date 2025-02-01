
import {useEffect, useState} from "react";

const items = [
    {
        id: 1,
        imageUrl: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
        title: "High-Performance Laptop",
        description: "A powerful laptop with the latest processor, 16GB RAM, and a 512GB SSD, perfect for work and gaming.",
        category: "Electronics",
        ratings: "4.8/5"
    },
    {
        id: 2,
        imageUrl: "https://images.pexels.com/photos/1727692/pexels-photo-1727692.jpeg",
        title: "Premium Coffee Mug",
        description: "A stylish ceramic mug with a heat-retaining design, ideal for enjoying your morning coffee or tea.",
        category: "Home & Kitchen",
        ratings: "4.5/5"
    },
    {
        id: 3,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZA9vtia3KPkY3VEcZM6HQtAUP1hQAUVduw&s",
        title: "Latest Smartphone",
        description: "An advanced smartphone with a 6.5-inch display, 108MP camera, and long-lasting battery life.",
        category: "Electronics",
        ratings: "4.7/5"
    },
    {
        id: 4,
        imageUrl: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
        title: "Running Shoes",
        description: "Lightweight and comfortable running shoes designed for both casual wear and professional sports.",
        category: "Footwear",
        ratings: "4.6/5"
    },
    {
        id: 5,
        imageUrl: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg",
        title: "Bestselling Novel",
        description: "An intriguing novel with a captivating storyline that keeps you hooked till the last page.",
        category: "Books",
        ratings: "4.9/5"
    }
];




function Carousel(){

    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    
    useEffect(()=>{

        const timer = setInterval(() => {
            nextItem();
        }, 3000);

        return ()=>{
            clearInterval(timer);
        }

    },[currentItemIndex]);

    function nextItem(){
        console.log("Next Item Called", currentItemIndex);

        if(currentItemIndex === items.length-1){
            setCurrentItemIndex(0);
        }else{
            setCurrentItemIndex(currentItemIndex+1);
        }
    }
    
    function prevItem(){
        console.log("Prev Item Called", currentItemIndex);

        if(currentItemIndex === 0 ){
            setCurrentItemIndex(items.length-1);
        }else{
            setCurrentItemIndex(currentItemIndex-1);
        }

    }




    return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >

        <button onClick={prevItem}  > Prev </button>

        <img src={items[currentItemIndex].imageUrl} width={300} height={300} />

        <h2> {items[currentItemIndex].title}  </h2>

        <p> {items[currentItemIndex].description}  </p>

        <button onClick={nextItem} > Next </button>



    </div>

}

export default Carousel;