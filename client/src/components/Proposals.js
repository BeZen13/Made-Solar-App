import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { useInput } from '../hooks/inputHook'
import {
    Form,
    TextInput,
    TextArea,
    Submit
} from './components/styledComponents/formStyles.js'

const FormBody = styled(Form)`
    margin: auto;
    width: 100%;
    display: grid;
    grid-gap: 8px;

    @media (${props => props.theme.media.mobile}) {
        grid-template-columns: 1fr;
    }
    @media (${props => props.theme.media.tabletPortrait}) {
        grid-template-columns: 1fr 1fr;
    }
    @media (${props => props.theme.media.tabletLandscape}) {
    }
    @media (${props => props.theme.media.desktop}) {
    }
    @media (${props => props.theme.media.desktopLarge}) {
    }
    `;
const FirstNameInput = styled(TextInput)`
  @media (${props => props.theme.media.mobile}) {
  }
  @media (${props => props.theme.media.tabletPortrait}) {
    grid-column: 1 / 2;
  }
  @media (${props => props.theme.media.tabletLandscape}) {
  }
  @media (${props => props.theme.media.desktop}) {
  }
  @media (${props => props.theme.media.desktopLarge}) {
  }
`;
const LastNameInput = styled(TextInput)`
  @media (${props => props.theme.media.mobile}) {
  }
  @media (${props => props.theme.media.tabletPortrait}) {
    grid-column: 2 / 3;
  }
  @media (${props => props.theme.media.tabletLandscape}) {
  }
  @media (${props => props.theme.media.desktop}) {
  }
  @media (${props => props.theme.media.desktopLarge}) {
  }
`;
const EmailInput = styled(TextInput)`
  @media (${props => props.theme.media.mobile}) {
  }
  @media (${props => props.theme.media.tabletPortrait}) {
    grid-column: 1 / 2;
  }
  @media (${props => props.theme.media.tabletLandscape}) {
  }
  @media (${props => props.theme.media.desktop}) {
  }
  @media (${props => props.theme.media.desktopLarge}) {
  }
`;
const PhoneInput = styled(TextInput)`
  @media (${props => props.theme.media.mobile}) {
  }
  @media (${props => props.theme.media.tabletPortrait}) {
    grid-column: 2 / 3;
  }
  @media (${props => props.theme.media.tabletLandscape}) {
  }
  @media (${props => props.theme.media.desktop}) {
  }
  @media (${props => props.theme.media.desktopLarge}) {
  }
`;
const LocationInput = styled(TextInput)`
  @media (${props => props.theme.media.mobile}) {
  }
  @media (${props => props.theme.media.tabletPortrait}) {
    grid-column: 1 / span 2;
  }
  @media (${props => props.theme.media.tabletLandscape}) {
  }
  @media (${props => props.theme.media.desktop}) {
  }
  @media (${props => props.theme.media.desktopLarge}) {
  }
`;
const MessageInput = styled(TextArea)`
  @media (${props => props.theme.media.mobile}) {
  }
  @media (${props => props.theme.media.tabletPortrait}) {
    grid-column: 1 / span 2;
  }
  @media (${props => props.theme.media.tabletLandscape}) {
  }
  @media (${props => props.theme.media.desktop}) {
  }
  @media (${props => props.theme.media.desktopLarge}) {
  }
`;
const SendButton = styled(Submit)`
  @media (${props => props.theme.media.mobile}) {
  }
  @media (${props => props.theme.media.tabletPortrait}) {
    grid-column: 1 / span 2;
  }
  @media (${props => props.theme.media.tabletLandscape}) {
  }
  @media (${props => props.theme.media.desktop}) {
  }
  @media (${props => props.theme.media.desktopLarge}) {
  }
`;

function RepSheet(props) {
    const {
       value: firstName,
       bind: bindFirstName,
       reset: resetFirstName 
    } = useInput("")
    const {
        value: lastName,
        bind: bindLastName,
        reset: resetLastName
    } = useInput("")
    const {
        value: email,
        bind: bindEmail,
        reset: resetEmail
    } = useInput("")
    const {
        value: phone,
        bind: bindPhone,
        reset: resetPhone
    } = useInput("")
    const {
        value: location,
        bind: bindLocation,
        reset: resetLocation
    }
    const {
        value: message,
        bind: bindMessage,
        reset: resetMessage
    }

    const inputs = {
        firstName,
        lastName,
        email,
        phone,
        location,
        message
    }

    const sendProposal = () => {
        axios.post("/send", inputs)
        .then(res => {
            if(res.data.status === "success"){
                alert("Proposal sent for Office Build!")
            }
            else if(res.data.status === "fail") {
                alert("Proposal failed to send! Sorry about that!!!")
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        sendProposal()
        resetFirstName()
        resetLastName()
        resetEmail()
        resetPhone()
        resetLocation()
        resetMessage()
    }

    return(
        <FormBody onSubmit={ handleSubmit }>
            <FirstNameInput
                type="text"
                name="firstName"
                placeholder="First Name"
                { ...bindFirstName }
                required
            />
            <LastNameInput
                type="text"
                name="lastName"
                placeholder="Last Name"
                { ...bindLastName }
            />
            <EmailInput
                type="email"
                name="email"
                placeholder="Email"
                { ...bindEmail }
                required
            />
            <PhoneInput
                type="phone"
                name="phone"
                placeholder="Phone"
                { ...bindPhone }
                required
            />
            <LocationInput
                type="text"
                name="location"
                placeholder="Location"
                { ...bindLocation }
                required
            />
            <MessageInput
                type="body"
                name="message"
                placeholder="Added Info..."
                { ...bindMessage }
            />
            <SendButton type="submit">Submit</SendButton>
        </FormBody>
    )
}

export default ProposalForm
