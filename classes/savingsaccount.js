class SavingsAccount extends Account {
    /**
     * Constructor for creating a new Account object
     * 
     * @param {number} number the number for this account
     * @param {Interest} interest the interest for this account
     * 
     */
    constructor(number,interest) {
        super(number); // the account number
        this._interest = interest;
    }
    /**
     * Getter for the 'private' Interest field
     * 
     * @returns {Interest} the account number
     */
     getInterest() {
        return this._interest;
    }

      /**
     * Getter for the 'private' Interest field
     * 
     * @returns {Interest} the account number
     */
       getInterestAmount() {
        return this._interest*this.getBalance()/100;
    }
    /**
     * return the interest added this month
     * 
     * @returns {Interest} the account number
     */
     endOfMonth() {

        var str= "Interest added SavingsAccount"+ this.getNumber() +": balance: " + this.getBalance()+" interest: "+this.getInterestAmount();
        this.addInterest();
        return str;
    }

    
     /**
     * Setter for the 'private' Interest field
     * 
     * @param {Interest} interest the interest for this account
     */
      setInterest() {
        return this._interest;
    }

    /**
     * add interest for the  balance field
     * 
     * 
     */
     addInterest() {
       return this.deposit(this.getInterest()*this.getBalance()/100);
       }
      /**
     * @returns {string} representation of this account
     */
       toString() {
        return "Account " + this.getNumber() + ": balance " + this.getBalance() +": Interest " + this.getInterest();
    }

}