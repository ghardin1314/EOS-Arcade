import React from "react";

import CustomTopbar from "../components/Topbar"

export default function CustomLayour(props) {
    return (
        <div>
            <CustomTopbar />
            {props.children}
        </div>
    )
}