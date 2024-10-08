import {useState} from "react"
import "./index.css"

const Questions=[
    {question:"What is the capital of india?", answer:"Delhi"},
    {question: "What is the capital of france?", answer:"Paris"}
]

const MobileView=()=>{
    const [index,setIndex]=useState(0);
        const [question,setQuestion]=useState(Questions[index].question);
        const [name,setName]=useState();
        const [answer,setAnswer]=useState();
        const [message,setMessage]=useState();
        const handletheAnswer=()=>{
            if(answer===Questions[index].answer){
                setMessage("Congratulations! Ypur answer is correct")
                if(index<Questions.length){
                    setIndex(prev=>prev+1)
                    setQuestion(Questions[index].question)
                }
            }else{
                setMessage("Sorry! Your answer is not correct")
            }
        }

    return(
        <div>
            {!name&&
            <input value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter the name"
            className="name"
            />
            }
            <p>{JSON.stringify(question)}</p>
            <p>Enter the answer for the above Question</p>
            <input 
            value={answer}
            onChange={(e)=>setAnswer(e.target.value)}
            placeholder="Enter Your Answer"
            className="answer"
            />
            <button type="button" onClick={handletheAnswer}>Submit</button>
            {message&& <p>{message}</p>}
        </div>
       
    )
}

export default MobileView