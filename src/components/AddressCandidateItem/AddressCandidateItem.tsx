import { Button, Typography } from '@mui/material';
import React, { useState} from 'react';
import { Address } from '../../types/Address';
import './AddressCandidateItem.css';

type AddressCandidateItemProps = {
    address: Address;
}
const AddressCandidateItem = (props: AddressCandidateItemProps) => {
    const { address } = props;
    const [isValidated, setIsValidated] = useState(false);

    const handleClick = () => {
        setIsValidated(prevState => !prevState);
    }
    
    return (
        <div className='container'>
            <div className='row-container'>
                <Typography style={{fontWeight: 600}}>{address?.id}</Typography>
                <Button variant="text" onClick={handleClick}>{isValidated ? 'Revoke' : 'Associate'}</Button>
            </div>
            <div className='row-container'>
                <Typography>Street No.</Typography>
                <Typography>{address?.streetNumber}</Typography>
            </div>
            <div className='row-container'>
                <Typography>Street Name</Typography>
                <Typography>{address?.streetName}</Typography>
            </div>
            <div className='row-container'>
                <Typography>Street Type</Typography>
                <Typography>{address?.streetType}</Typography>
            </div>
            <div className='row-container'>
                <Typography>City</Typography>
                <Typography>{address?.city}</Typography>
            </div>
            <div className='row-container'>
                <Typography>State</Typography>
                <Typography>{address?.state}</Typography>
            </div>
            <div className='row-container'>
                <Typography>Zip</Typography>
                <Typography>{address?.zip}</Typography>
            </div>
        </div>
    )
}

export default AddressCandidateItem;