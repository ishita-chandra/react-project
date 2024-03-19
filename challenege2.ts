{

    type Transaction={
        description:string;
        amount:number,
        date:Date
    };
    const transactions:Transaction[] =[]
    let balance = document.getElementById("balance") as HTMLInputElement;
    const addTransaction=()=>{
        const description =document.getElementById("description") as HTMLInputElement
        const amount = document.getElementById("amount") as HTMLInputElement

        const newTransaction:Transaction={
            description:description.value,
            amount:+amount.value,
            date: new Date()
        }

        transactions.push(newTransaction);
        console.log(transactions)
        
        updateDisplay();
    }

    const updateDisplay=()=>{
        const description =document.getElementById("description") as HTMLInputElement
        const amount = document.getElementById("amount") as HTMLInputElement
        const balance = document.getElementById("balance") as HTMLInputElement;

        const transactionsarea=document.getElementById("transaction") as HTMLDivElement
        const list = transactions.map(
            transaction=>{
                return (`<li>${transaction.amount}${transaction.date}${transaction.description}`)
            }
        );
        transactionsarea.innerHTML="<ul>"+list.join('')+"</ul>"
        description.value=""
        amount.value=""
        balance.innerText=transactions.reduce((total,transaction)=>total+transaction.amount,0).toString();

    }
}