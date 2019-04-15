import React from 'react';
import { css } from '@emotion/core';
import { BounceLoader } from 'react-spinners';

const override = css`
    display: inline-block;
    margin-right: 5px;
    border-color: red;
`;

const renderDefault = (props) => {

    const { caption } = props;

    return (
        <button className="btn btn-primary" type="submit">
            {caption}
        </button>
    )
}

const renderLoading = (props) => {

    const { loadingCaption } = props;

    return (
        <button className="btn btn-primary" type="submit" disabled>
            <BounceLoader css={override} color="#FFF" sizeUnit="px" size={12} />{loadingCaption}
        </button>
    )

}

const LoadingButton = (props) => {
    
    if(!props.condition) {
        return (
            renderDefault(props)
        )
    } else {
        return (
            renderLoading(props)
        )
    }
}

export default LoadingButton;