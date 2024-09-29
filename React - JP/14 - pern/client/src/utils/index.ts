export function formatCurrencty(amount:number){
    return new Intl.NumberFormat('en-Us',{
        style:'currency',
        currency:'USD'
        
    }).format(amount)
}