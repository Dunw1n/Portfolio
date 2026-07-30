
import "./TopBlock.scss"

interface ITopBlock {
    textContent: string
}



export const TopBlock = ({textContent}: ITopBlock) => {
    return (
        <div className="top-block">
            {textContent}
        </div>
    )
}