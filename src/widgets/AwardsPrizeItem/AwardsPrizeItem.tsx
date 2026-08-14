import PrizeIcon from "../../assets/awards-section/prize-icon.png";
import "./AwardsPrizeItem.scss";

export const AwardsPrizeItem = ({ descrPrize }: { descrPrize: string }) => {
    return (
        <li className="app-awards-prize__item">
            <img src={PrizeIcon} alt="" width={40}/>
            <p>
                {descrPrize}
            </p>
        </li>
    )
}