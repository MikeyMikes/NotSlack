import React from "react";
import MessagesHeader from "./message_view_components/MessagesHeader";
import MessagesScreen from "./message_view_components/MessagesScreen";
import MessagesTextBox from "./message_view_components/MessagesTextBox";
import TypingIndicator from "./message_view_components/TypingIndicator";

export default function MessageView() {
    return (
        <>
            <MessagesHeader />
            <MessagesScreen />
            <TypingIndicator />
            <MessagesTextBox />
        </>
    )
}