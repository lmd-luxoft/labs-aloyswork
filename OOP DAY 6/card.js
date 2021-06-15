class Card
{
    #pin = undefined;
    #cardid = undefined;
    #balance = undefined;

    constructor()
    {
        this.#cardid = 777555;
        this.#balance = 0;               
    }
    getBalance()
    {
        return this.#balance;     
    }

    income(money)
    {
       this.#balance=Number(this.#balance) + Number(money);     
    }

    outcome(money)
    {
       this.#balance=Number(this.#balance) - Number(money);     
    }
    
  
}