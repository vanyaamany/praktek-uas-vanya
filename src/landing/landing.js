import React, { Component } from "react";
import "./landing.css";
import TopName from ""
import Description from "../components/topName.";
import Form from "../components/form";
import ScrollDown from "../components/scrollDown";



class Landing extends Component {
    render() {
        return (
            <div class="wrapper with-image ">
                <div class="flex-wrapper">
                    {/*topname*/}
                    <TopName
                        name="vanyaamany"
                    ></TopName>
                    {/*--*/}
                    {/*description*/}
                    <description></description>
                    {/*--*/}
                    {/*form*/}
                    <form></form>
                    {/*--*/}
                    {/*scroll down*/}
                    <ScrollDown></ScrollDown>
                    {/*--*/}
                </div>
                <div class="opacity">
                </div>
            </div>
        )
    }
}

export default Landing;