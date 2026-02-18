import type { ReactNode } from "react";

//discriminated union type:
type HintBoxProps = {
    mode: 'hint';
    children: ReactNode;
};

type WarningBoxProps = {
    mode: 'warning',
    severity: 'low' | 'medium' | 'high',
    children: ReactNode
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox = (props: InfoBoxProps) => {

    const { children, mode } = props;

    // if mode === 'mode'
    if (mode === 'hint') {
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
        )
    }

    const { severity } = props;

    // if mode === 'warning'
    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )
};

export default InfoBox;