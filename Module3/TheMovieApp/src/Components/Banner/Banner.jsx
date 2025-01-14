import { useState } from "react";
import PlaceHolderImage from "../../assets/imapgePlaceholder.png"


function Banner(){

    const [bannerImage, setBannerImage] = useState(PlaceHolderImage);


    return <div className="h-[75vh] border bg-cover bg-center flex items-end justify-center"  
    style={{backgroundImage:`url(${PlaceHolderImage})`}}>

        <div className="text-white">

            PlaceHolder Movie

        </div>


    </div>
}

export default Banner;