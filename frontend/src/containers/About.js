import React from "react"

import Button from "@material-ui/core/Button";

import Myreacteroids from '../components/Reacteroids/Myreacteroids'

export default function About() {
    return (
        <React.Fragment>
            <Button href="/Play/" variant="contained" color="primary">Testing</Button>
            <Myreacteroids/>
        </React.Fragment>
    )
}