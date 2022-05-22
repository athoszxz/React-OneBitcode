import React from "react";

const DescriptionWithLink = (props) => {
    if(props.link) {
        return (
            <div>
                <p>
                    {props.description}
                </p>
                <a href={props.link}>Fonte</a>           
            </div>
        );
    } else {
        return (
            <div>
                <p>
                    {props.description}
                </p>
            </div>
        );
    }
};

export default DescriptionWithLink;