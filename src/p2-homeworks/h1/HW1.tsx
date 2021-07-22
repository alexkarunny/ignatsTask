import React from 'react'
import {Message} from "./Message";

const messageData = {
    avatar: 'https://thumbs.dreamstime.com/b/%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%B0-h-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B3%D0%BE-%D1%86%D0%B2%D0%B5%D1%82%D0%B0-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D1%81-%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9-121994137.jpg',
    name: 'Alex',
    message: 'Lorem ipsum dolor sit amet',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

         {/* should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
