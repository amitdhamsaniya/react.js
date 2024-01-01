import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

const CustomCard = ({ title, price, description, image, rating }) => {
    return (
        <MDBCard style={{ width: '18rem' }}>
            <MDBCardImage src={image} alt={title} position='top' />
            <MDBCardBody>
                <MDBCardTitle>{title}</MDBCardTitle>
                <MDBCardText>{description}</MDBCardText>
                <p>Price: ${price}</p>
                <p>Rating: {rating}</p>
                <MDBBtn>Go somewhere</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
};

export default CustomCard;



