export default function App ( {setTitleApp} ) {
    return( 
        
        <section className="w-36 bg-red-300 h-10 absolute top-10 rounded-[1rem] p-2 shadow-2xl">
            <input name="newTitle" className="w-full h-full" onChange={() => setTitleApp()}></input>
        </section>
        
    )
}