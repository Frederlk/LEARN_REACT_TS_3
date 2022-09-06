import React, { FC, useState } from "react";

export enum CardVariant {
    outlined = "outlined",
    primary = "primary",
}

interface CardProps {
    width: string;
    height: string;
    children?: React.ReactNode | React.ReactChild;
    variant: CardVariant;
    onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({ width, variant, height, children, onClick }) => {
    const [state, setState] = useState(0);

    return (
        <div
            onClick={() => onClick(state)}
            style={{
                width,
                height,
                border: variant === CardVariant.outlined ? "2px solid grey" : "none",
                background: variant === CardVariant.primary ? "lightblue" : "none",
                padding: "10px",
            }}>
            {children}
        </div>
    );
};

export default Card;
