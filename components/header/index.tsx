import { useState } from "react"
import Pen from "../../public/icons/pen.svg"
import Image from "next/image"
import ChangeValue from "./ChangeValue"

export default function Header () {
    
    const [titleApp,setTitleApp] = useState([])
    const [changeValueTitle,setChangeValueTitle] = useState(false)
    
    const handleToValueClick = (event) => {
        if(changeValueTitle == false) {
            setChangeValueTitle(true)
        }else if (changeValueTitle == true) {
            setChangeValueTitle(false)
        }

        setTitleApp(event.target.value)
    }
    
    return (
        <>
            <section className="w-full h-12 px-4 bg-slate-100 flex items-center">
                <div className="flex gap-2">
                    <h1>{titleApp}</h1>
                    <button>
                       <Image src={Pen} alt="Alterar titulo" width={20} onClick={handleToValueClick}/> 
                    </button>
                    {changeValueTitle?<ChangeValue setTitleApp={handleToValueClick}/>:<h1 className="hidden">a</h1>}
                </div>
                
            </section>
        </>
    )
}