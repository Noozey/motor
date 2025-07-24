import { connectdb} from "@/lib/db";
import ExchangeEV from "@/model/exchangeEV.model";
import SellCar from "@/model/sellCar.model";
import User from "@/model/user.model";

export async function getAllNewEVVehicleDetails() {
    try {
        await connectdb();
        const evDetails=await ExchangeEV.find({}).sort({ createdAt: -1 });
        return { success: true, evDetails };
    } catch (error) {
        console.error(`Error getting categories:`, error);
        return { success: false, message: `Failed to fetch categories` };
    }
}

export async function registerEvExchangeDetails(data:any){
    try{
        await connectdb();
        const {fullname, email, phone,city,vehicleModel, accidents,accidentInfo, additionalInfo, condition,downpayment,expectedValuation,features,finance, fuelType,kmDriven, makeYear, newVehicleBrand, newVehicleModel,newVehiclePriceRange,transmission,vehicleColor,vehicleType}=data;

        console.log({fullname, email, phone,city,vehicleModel, accidents,accidentInfo, additionalInfo, condition,downpayment,expectedValuation,features,finance, fuelType,kmDriven, makeYear, newVehicleBrand, newVehicleModel,newVehiclePriceRange,transmission,vehicleColor,vehicleType})

        if(!fullname || !email || !phone || !city){
          return { success: false, message: `All fields are required` };
        }
        
        if(!vehicleModel || !condition || !fuelType || !kmDriven || !makeYear || !vehicleColor || !vehicleType || !expectedValuation || !features || !accidents || !transmission){
          return { success: false, message: `Vehicle full details are required` };
        }

        if(!newVehicleBrand || !newVehicleModel || !newVehiclePriceRange || !downpayment || !finance ){
          return { success: false, message: `New vehicle all details are required` };
        }
        const newUser=new User({
            fullname,
            email,
            phone,
            city
        })
        await newUser.save();
        const newSellCar= new SellCar({
            user: newUser._id,
            vehicleModel,
            vehicleType,
            makeYear,
            vehicleColor,
            kmDriven,
            expectedValuation,
            features,
            fuelType,
            condition,
            accidents,
            accidentInfo,
            additionalInfo,
            transmission,
            // downpayment,
            // finance,
        })
        await newSellCar.save();

        const newExchangeEV= new ExchangeEV({
            user: newUser._id,
            sellCar: newSellCar._id,
            downpayment,
            finance,
            newVehicleBrand,
            newVehicleModel,
            newVehiclePriceRange
        })
        await newExchangeEV.save();
        return { success: true, data };
    }catch(error){
        console.error(`Error registering EV exchange details:`, error);
        return { success: false, message: `Failed to register EV exchange details` };
    }
}
