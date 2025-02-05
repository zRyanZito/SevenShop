import styled from "styled-components"

const RadioContainer = styled.div`
    /* From Uiverse.io by Shoh2008 */ 
    .input {
        -webkit-appearance: none;
        /* remove default */
        display: block;
        margin: 10px;
        width: 24px;
        height: 24px;
        border-radius: 12px;
        cursor: pointer;
        vertical-align: middle;
        box-shadow: hsla(0,0%,100%,.15) 0 1px 1px, inset hsla(0, 0.00%, 100.00%, 0.50) 0 0 0 1px;
        background-color: hsla(0,0%,0%,.2);
        background-image: -webkit-radial-gradient( hsla(200,100%,90%,1) 0%, hsla(200,100%,70%,1) 15%, hsla(200,100%,60%,.3) 28%, hsla(200,100%,30%,0) 70% );
        background-repeat: no-repeat;
        -webkit-transition: background-position .15s cubic-bezier(.8, 0, 1, 1),
        -webkit-transform .25s cubic-bezier(.8, 0, 1, 1);
        outline: none;
    }

    .input:checked {
        -webkit-transition: background-position .2s .15s cubic-bezier(0, 0, .2, 1),
        -webkit-transform .25s cubic-bezier(0, 0, .2, 1);
    }

    .input:active {
        -webkit-transform: scale(1.5);
        -webkit-transition: -webkit-transform .1s cubic-bezier(0, 0, .2, 1);
    }

    .input,
    .input:active {
        background-position: 0 24px;
    }

    .input:checked {
        background-position: 0 0;
    }

    .input:checked ~ .input,
    .input:checked ~ .input:active {
        background-position: 0 -24px;
    }
`

function RadioInput({check}){

    return(
        <RadioContainer>
            <input name="radio" type="radio" className="input" checked={check}/>
        </RadioContainer>
    )
}

export default RadioInput