import React from 'react'
import classes from './Message.module.css';


export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}>
            <div className={classes.avaMain}><img src={props.avatar} alt="" className={classes.avaPic}/></div>
            <div className={classes.post}>
                <div>
                    <div className={classes.postName}>{props.name}</div>
                    <div>{props.message}</div>
                </div>
                <div className={classes.postTime}>
                    <div>{props.time}</div>
                </div>
                <div className={classes.postBox}></div>
                <div className={classes.postBoxС}></div>
            </div>
        </div>
    )
}