import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic(
        'ef5f7155-544e-4f0e-9fa0-0f39a64b6571',
        props.user.username,
        props.user.secret 
    );
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100%'}} />
        </div>
    )
}

export default ChatsPage