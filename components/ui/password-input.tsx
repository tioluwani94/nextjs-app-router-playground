"use client"

import React, { useState } from 'react'
import { css } from '~/styled-system/css';
import { ViewIcon } from '../icons/view';
import { ViewOffIcon } from '../icons/view-off';
import { Button } from './button';
import { Input, InputProps } from './input';

export const PasswordInput = (props: InputProps) => {
    const [togglePasswordInputType, setTogglePasswordInputType] = useState(false);

    return (
        <div className={css({ w:'100%', position: 'relative' })}>
            <Input type={!togglePasswordInputType ? "password" : "input"} {...props} />

            <div className={css({ position:'absolute', top: 0, right: '4px' })}>
                <Button
                    type="button"
                    variant='ghost' 
                    onClick={() => setTogglePasswordInputType(!togglePasswordInputType)}
                >
                    {!togglePasswordInputType ? (
                        <ViewIcon css={{ w: "16px", h: "16px", color: "gray.800" }} />
                    ) : (
                        <ViewOffIcon css={{ w: "16px", h: "16px", color: "gray.800" }} />
                    )}
                </Button>
            </div>
        </div> 
    )
}
