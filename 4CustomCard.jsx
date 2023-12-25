import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

const CustomCard = (props) => {
    return (
        <>
            <MDBCard>
                <MDBCardImage src={props.image} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>{props.title}</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href='#'>Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </>
    );
};

export default CustomCard;