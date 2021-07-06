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
        this.deposit(this.getInterest()*this.getBalance()/100);
       }
      /**
     * @returns {string} representation of this account
     */
       toString() {
        return "Account " + this.getNumber() + ": balance " + this.getBalance() +": Interest " + this.getInterest();
    }

}