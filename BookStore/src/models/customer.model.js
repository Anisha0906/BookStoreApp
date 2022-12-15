import { number, string } from '@hapi/joi';
import { Schema, model } from 'mongoose';

const customerSchema = new Schema(
    {
        UserID: {
            type: String
        },
        customer: [{
            addressType: {
                type: String
            },
            fullAddress: {
                type: String
            },
            city: {
                type: String
            },
            landmark: {
                type: String
            },
            state: {
                type: String
            },
            name: {
                type: String
            },
            phoneNumber: {
                type: Number
            }, 
            pincode: {
                type: Number
            },
            locality: {
                type: String
            },
        }],
    }
);

export default model('customerDetails', customerSchema);