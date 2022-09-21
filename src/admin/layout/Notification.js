import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, Snackbar } from '@mui/material';
import { css } from '@emotion/react';
import {
    useNotificationContext,
    //undoableEventEmitter,
} from '@alkuip/core';

const defaultAnchorOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
};
const root = css({
    backgroundColor: '#ffffff',
    color: '#00000'
})
/**
 * Provides a way to show a notification.
 * @see useNotify
 *
 * @example <caption>Basic usage</caption>
 * <Notification />
 *
 * @param props The component props
 * @param {string} props.type The notification type. Defaults to 'info'.
 * @param {number} props.autoHideDuration Duration in milliseconds to wait until hiding a given notification. Defaults to 4000.
 * @param {boolean} props.multiLine Set it to `true` if the notification message should be shown in more than one line.
 */
export const Notification = (props) => {
    const {
        className,
        type = 'info',
        autoHideDuration = 4000,
        multiLine = false,
        anchorOrigin = defaultAnchorOrigin,
        ...rest
    } = props;
    const { notifications, takeNotification } = useNotificationContext();
    const [open, setOpen] = useState(false);
    const [messageInfo, setMessageInfo] = React.useState(undefined);

    useEffect(() => {
        if (notifications.length && !messageInfo) {
            // Set a new snack when we don't have an active one
            setMessageInfo(takeNotification());
            setOpen(true);
        } else if (notifications.length && messageInfo && open) {
            // Close an active snack when a new one is added
            setOpen(false);
        }
    }, [notifications, messageInfo, open, takeNotification]);

    const handleRequestClose = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const handleExited = useCallback(() => {
        if (messageInfo && messageInfo.notificationOptions.undoable) {
            //undoableEventEmitter.emit('end', { isUndo: false });
        }
        setMessageInfo(undefined);
    }, [messageInfo]);

    const handleUndo = useCallback(() => {
        //undoableEventEmitter.emit('end', { isUndo: true });
        setOpen(false);
    }, []);

    if (!messageInfo) return null;

    return (
        <Snackbar
            className={className}
            css= { root }
            open={open}
            message={
                messageInfo.message
                
            }
            autoHideDuration={
                messageInfo.notificationOptions.autoHideDuration ||
                autoHideDuration
            }
            disableWindowBlurListener={messageInfo.notificationOptions.undoable}
            TransitionProps={{ onExited: handleExited }}
            onClose={handleRequestClose}
            /*ContentProps={{
                className: clsx(NotificationClasses[messageInfo.type || type], {
                    [NotificationClasses.multiLine]:
                        messageInfo.multiLine || multiLine,
                }),
            }}*/
            action={
                messageInfo.notificationOptions.undoable ? (
                    <Button
                        color="primary"
                        
                        size="small"
                        onClick={handleUndo}
                    >
                        <>Undo</>
                    </Button>
                ) : null
            }
            anchorOrigin={anchorOrigin}
            {...rest}
        />
    );
};

Notification.propTypes = {
    type: PropTypes.string,
    autoHideDuration: PropTypes.number,
    multiLine: PropTypes.bool,
};
