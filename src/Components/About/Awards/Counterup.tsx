import { useState } from "react"
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

//Types
interface Props {
    value: number;
}

const CounterUp = ({ value }: Props) => {
    const [view, setView] = useState<boolean>(false);
    const onVisibilityChange = (isVisible: boolean) => {
        if (isVisible) {
            setView(true);
        }
    };
    return (
        <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 8 }} delayedCall>
            <div>
                <CountUp
                    start={0}
                    end={view ? value : 0}
                    duration={1}
                />
            </div>
        </VisibilitySensor>
    );
};
export default CounterUp;