import { addDocs, getDocCount, getFilteredTransactions } from "../model/transaction.repository.js";

export const initializeDb=async (req, res, next)=>{
    try{
        const count=await getDocCount();

        if(count==0){
            await addDocs();
        }
        res.send({success:true, message:"DB initialized!"});
    }
    catch(err){
        console.log(err);
        next(err);
    }
}
export const filterTransactions=async (req, res, next)=>{
    try{
        let {date}=req.query;
        if(!date)
            date=new Date().toDateString();
        const filteredDocs=await getFilteredTransactions(date);
        res.send({success:true, data:filteredDocs});
    }catch(err){
        next(err);
    }
}
