import Logo from "../../../public/assets/images/Isologo Geniorama - otros fondos.png";
import GeniusText from "../GeniusText/GeniusText";

interface CardTeamProps {
    name?: string;
    position?: string;
}

export default function CardTeam(props:CardTeamProps) {
  return (
    <div className="flex items-center gap-8">
        <div className="w-1/5" style={{maxWidth: '93px'}}>
            <img style={{width: '100%'}} src={Logo.src} alt="" />
        </div>
        <div>
            <h5 className="text-2xl md:text-5xl font-light">{props.name}</h5>
            <span className="md:text-lg font-light">
                <GeniusText>
                    {`${props.position}`}
                </GeniusText>
            </span>
        </div>
    </div>
  )
}
