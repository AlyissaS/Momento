import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { Bubble, GiftedChat, MessageProps } from 'react-native-gifted-chat';

interface IMessage {
    _id: string | number; 
    text: string;
    createdAt: number;
    user: {
        _id: number;
    };
}

const Chat = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [inputMessage, setInputMessage] = useState("");

    const handleInputText = (text: string) => {
        setInputMessage(text);
    };

    const renderMessage = (props: MessageProps<IMessage>) => {
        const { currentMessage } = props;

        return (
            <View style={{ flex: 1, flexDirection: "row", justifyContent: currentMessage.user._id === 1 ? "flex-end" : "flex-start" }}>
                <Bubble {...props}
                    wrapperStyle={{
                        right: {
                            backgroundColor: "#ffbd94",
                            marginRight: 12,
                            marginVertical: 12
                        },
                        left: {
                            backgroundColor: "lightgray",
                            marginLeft: 12,
                            marginVertical: 12
                        }
                    }}
                    textStyle={{
                        right: {
                            color: "black",
                            fontWeight: "bold"
                        },
                        left: {
                            color: "black",
                            fontWeight: "bold"
                        }
                    }}
                />
            </View>
        );
    };

    const submitHandler = () => {
        if (inputMessage.trim()) {  // Prevent sending empty messages
            const message: IMessage = {
                _id: Math.random().toString(36).substring(7),
                text: inputMessage,
                createdAt: new Date().getTime(),
                user: { _id: 1 }
            };

            setMessages((previousMessages) => GiftedChat.append(previousMessages, [message]));
            setInputMessage("");
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 1 }}>
                <GiftedChat
                    messages={messages}
                    renderInputToolbar={() => null}
                    user={{ _id: 1 }}
                    renderMessage={renderMessage}
                />
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputMessageContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type here..."
                        placeholderTextColor="black"
                        value={inputMessage}
                        onChangeText={handleInputText}
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={submitHandler}>
                        <Text> {/* Wrap FontAwesome in a Text component */}
                            <FontAwesome name="send" size={22} color={"Black"} />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        position: 'absolute',
        bottom: 0,
        height: 160,
        width: '100%',
        backgroundColor: "white",
        paddingBottom: 120, // Space from the bottom
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputMessageContainer: {
        height: 54,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 16,
        borderColor: "rgba(128,128,128,.4)",
        borderWidth: 1,
        flex: 1,
        paddingHorizontal: 10,
    },
    input: {
        color: "black",
        flex: 1,
        paddingHorizontal: 10,
    },
    sendButton: {
        padding: 8,
    }
});

export default Chat;
