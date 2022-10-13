import React from "react";
import Banner from "./Banner";
import MessageView from "./message_view/MessageView";
import HomeView from "./home_view/HomeView";

export default function AppView() {
    return (
        <>
            <Banner />
            <MessageView />
            <HomeView />
        </>
    )
}