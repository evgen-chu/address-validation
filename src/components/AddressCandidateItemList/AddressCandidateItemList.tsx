import { Typography } from '@mui/material';
import React from 'react';
import { Address } from '../../types/Address';
import AddressCandidateItem from '../AddressCandidateItem/AddressCandidateItem';
import './AddressCandidateItemList.css'

type AdressesCandidateItemListProps = {
    addresses: Address[];
};

const AddressCandidateItemList = (props: AdressesCandidateItemListProps) => {
    const {addresses} = props;
    return (
        <div className='wrapper'>
            <Typography variant="h6" mt={2} ml={2}>Available Addresses</Typography>
            <div className='list-container'>
            {addresses.map((item) => {
                return (<AddressCandidateItem address={item}/>)
            })}
            </div>
        </div>
    )
}

export default AddressCandidateItemList;