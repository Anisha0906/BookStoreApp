import customerDetails from '../models/customer.model';

//Add address in customer details
export const  AddCustomerAddress = async (body) => {
    let CustomerAddress = {
       addressType: body.addressType,
        fullAddress: body.fullAddress,
        city: body.city,
        landmark: body.landmark,
        state: body.state,
        name: body.name,
        phoneNumber: body.phoneNumber,
        pincode: body.pincode,
        locality: body.locality
    };
    const address = await customerDetails.findOne({UserID:body.UserID})
        if(address == null){
        const CreateAddress = await customerDetails.create({ UserID: body.UserID, customer:CustomerAddress });
         return CreateAddress; 
        } else {
            address.customer.push(CustomerAddress)
            address.save();
            return address;
     }
    };