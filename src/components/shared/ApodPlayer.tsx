import { ApodType } from "@/types"
import { CircleChevronLeft, CircleChevronRight, Loader } from "lucide-react"

type ApodsProps = {
    apods: ApodType
    day : number
    setDay: React.Dispatch<React.SetStateAction<number>>
    isLoading: boolean
}

const ApodPlayer = ({apods,day,setDay,isLoading}: ApodsProps) => {
  const prevHandler = () =>  {
    setDay(state => {
      return state +1
    })
  }

  const nextHandler = () => {
    setDay(state => {
      if(state < 1) return 0;
      return state +1
    }

    )
  }

  return (
    <>
        <div className="w-full mx-auto flex justify-between">
            <button onClick={nextHandler} disabled={day === 0} className="mx-4">
            <CircleChevronLeft
						size={36}
						className={`transition-all text-[--clr-violet-light] ${
							day !== 0 ? "hover:scale-110 hover:text-[--clr-violet]" : ""
						}`}
					/>
            </button>
            {!isLoading ?
            (<div className="h-[400px w-full]">
              {apods.media_type === "video" ? 
                 (<iframe height="100%" width="100%" src={apods.url} title={apods.title}/>)
                 : 
                 (<img className="h-full w-full object-cover" src={apods.url}  alt="apod-img"/>

                 )}
              </div>
              ) : (
                <div className="h-[400px w-full flex justify-center items-center">
                  <Loader size={64}/>
                </div>
              )
            }
               <button onClick={prevHandler}>
               <CircleChevronRight
						size={36}
						className="transition-all text-[--clr-violet-light] hover:scale-110 hover:text-[--clr-violet]"
					/>
                </button> 
        </div>
     <div className="capitalize text-center text-2xl">{apods.date}</div>
      <div className="mx-auto w-full my-8">
        <p className="capitalize text-2xl mb-2">{apods.title}</p>
        <p>{apods.explanation}</p>
        <p className="capitalize mt-4 text-right">{apods.copyright}</p>
        <p className="capatalize text-right">{apods.date}</p>
      </div>
    </>
  )
}

export default ApodPlayer