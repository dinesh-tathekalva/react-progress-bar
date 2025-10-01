import { useEffect, useState } from "react"

const ProgressBar = ({value}) => {
const [percent, setPercent] = useState(value)
useEffect(()=> {
    setPercent(Math.min(100, Math.max(0)))
})
    return (
         <div className="progress">

            <span> {value.toFixed()}% </span>
            
         </div>
    )
}

export default ProgressBar