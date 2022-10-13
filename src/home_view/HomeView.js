import React from "react";
import HomeHeader from "./home_view_components/HomeHeader";
import AddFriend from "./home_view_components/AddFriend";
import ComposeMessage from "./home_view_components/ComposeMessage";
import DirectMessagesSection from "./home_view_components/DirectMessagesSection";
import GroupsSection from "./home_view_components/GroupsSection";
import HomeFooter from "./home_view_components/HomeFooter";

export default function HomeView() {
    return (
        <>
            <HomeHeader />
            <GroupsSection />
            <DirectMessagesSection />
            <AddFriend />
            <ComposeMessage />
            <HomeFooter />
        </>
    )
}