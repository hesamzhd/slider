import { useState } from "react";
import data from "./data.js";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { FaRegMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

const App = () => {
    const [people, setPeople] = useState(data)
    const [index, setIndex] = useState(0)
    const [dark, setDark] = useState(true)


    const switchMode = () => {
        setDark(!dark)
    }

    const nextbtn = () => {
        if(index < people.length - 1){
            setIndex(index + 1)
        }else{
            setIndex(0)
        }
    }
    const prevbtn = () => {
        if(index < 1){
            setIndex(2)
        }else{
            setIndex(index - 1)
        }
    }

 
    return ( 
        <div className={dark? "section section-dark" : "section"}>
            <div className={dark? "mode dark": "mode"} onClick={switchMode}>
                <div className="moon"><FaRegMoon /></div>
                <div className="sun"><BsSun /></div>
                <span></span>
            </div>
            <div className="section-title">
                <span>کاربران</span>
            </div>
            <div className="section-center">
                {
                    people.map((person, personIndex) => {
                        const {id, image, name, title, qoute} = person;
                        
                        let position = 'nextSlider'
                        if(personIndex === index){
                            position = 'activeSlider'
                        }

                        if(personIndex == index-1 || (index == 0 && personIndex == people.length - 1)){
                            position = 'lastSlider'
                        }

                        return(
                            <article className={position} key={id}>
                                <img src= {image} alt="#" className="image" />
                                <h4 className={dark? "dark-name" : "name"}>{name}</h4>
                                <p className="title">{title}</p>
                                <p className="qoute">{qoute}</p>
                            </article>
                        )
                    
                    })
                }
                <button className="next" onClick={nextbtn}>
                    <AiFillCaretRight />
                </button>
                <button className="prev" onClick={prevbtn}>
                    <AiFillCaretLeft />
                </button>
            </div>
        </div>
     );
}
 
export default App;