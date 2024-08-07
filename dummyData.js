const products=[
  {"name": "Item 1", "category": "Electronics", "amount": 99},
  {"name": "Item 2", "category": "Clothing", "amount": 49},
  {"name": "Item 3", "category": "Home Goods", "amount": 29},
  {"name": "Item 4", "category": "Books", "amount": 9},
  {"name": "Item 5", "category": "Toys", "amount": 19},
  {"name": "Item 6", "category": "Electronics", "amount": 199},
  {"name": "Item 7", "category": "Clothing", "amount": 59},
  {"name": "Item 8", "category": "Home Goods", "amount": 39},
  {"name": "Item 9", "category": "Books", "amount": 12},
  {"name": "Item 10", "category": "Toys", "amount": 24},
]

const transactions=[];

for(let i=0; i<=30; i++){
    const today = new Date();
    const saleDate = new Date(today);
    saleDate.setDate(today.getDate() - i);   
    products.forEach(obj=>{
        let quantity=Math.floor(Math.random() * 20) + 1;
        let t={name:obj.name, category:obj.category, quantity, amount:quantity*obj.amount, date:saleDate}
        transactions.push(t);
    });
}
export default transactions;
