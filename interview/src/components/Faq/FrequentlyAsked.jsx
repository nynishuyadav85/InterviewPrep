import { useState } from "react"

const Questions = [
    {
        id: 1,
        ques: "What is the right time to begin something?",
        ans: "The most important time is Now."
    },
    {
        id: 2,
        ques: "Which people should the king listen to?",
        ans: "The most important person is the one you are with at a particular moment."
    },
    {
        id: 3,
        ques: "What is the most important thing for him to do?",
        ans: "The most important business is to do that person good."
    }
]




const FrequentlyAsked = () => {
    const [expanded, setExpanded] = useState(null)


    const handleExpand = (id) => {
        setExpanded((currId) => currId === id ? null : id)
    }

    return (
        <div>
            <h1>FrequentlyAsked Questions
            </h1>

            <div>{Questions.map((ques) => {
                return (
                    <>
                        <h4 style={{ color: "blue", cursor: "pointer" }} onClick={() => handleExpand(ques.id)}>{ques.ques} {expanded === ques.id ? "+" : "-"} </h4>
                        {expanded === ques.id && <p>{ques.ans}</p>}
                    </>
                )
            })

            }</div>


        </div>
    )
}

export default FrequentlyAsked