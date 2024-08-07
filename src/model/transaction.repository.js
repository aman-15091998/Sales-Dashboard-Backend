import { transactionModel } from "./transaction.schema.js";
import transactions from "../../dummyData.js";
export const getDocCount=async()=>{
    const docCount=await transactionModel.countDocuments();
    return docCount;
}
export const addDocs=async ()=>{
    const docArr=transactions;
    await transactionModel.insertMany(docArr);
}
export const getFilteredTransactions=async (date)=>{
    const filteredTransactions=await transactionModel.aggregate([
        {
            $addFields: {
                day: { $dayOfMonth: "$date" },
                month: { $month: "$date" },
                year: { $year: "$date" }
            }
        },
        {
            $match:{
                day: { $eq: new Date(date).getDate() },
                month: { $eq: new Date(date).getMonth() + 1 },  
                year: { $eq: new Date(date).getFullYear() }
            }
        },
        {
            $project: {
                _id: 1,
                dateOfSale:0,
                __v:0,
                day:0, 
                month:0, 
                year:0
            }
        }
    ]);
    return filteredTransactions;
}
