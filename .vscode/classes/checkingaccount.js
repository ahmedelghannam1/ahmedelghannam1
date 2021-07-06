class CheckingAccount extends Account {
    /**
     * Constructor for creating a new Account object
     * 
     * @param {number} number the number for this account
     * @param {overdraftLimit} overdraftLimit the overdraftLimit for this account
     * 
     */
    constructor(number,overdraftLimit) {
        super(number); // the account number
        this._overdraftLimit = overdraftLimit;
    }
    /**
     * Getter for the 'private' overdraftLimit field
     * 
     * @returns {overdraftLimit} the account number
     */
     getoverdraftLimit() {
        return this._overdraftLimit;
    }
     /**
     * Setter for the 'private' overdraftLimit field
     * 
     * @param {overdraftLimit} overdraftLimit the overdraftLimit for this account
     */
      setoverdraftLimit() {
        return this._overdraftLimit;
    }

    
    /**
     * @returns {string} representation of this account
     */
       toString() {
        return "Account " + this.getNumber() + ": balance " + this.getBalance() +": overdraftLimit " + this.getoverdraftLimit();
    }

     /**
     * Method to take money out of the account
     * 
     * @param {number} amount money to be taken out of the account
     * @returns {undefined}
     * @throws {RangeError} when amount is less than or equal to zero-
     * @throws {Error} when the account has insufficient funds (balance + overdraft)
     */
      withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this.getBalance()+this.getoverdraftLimit())) {
            throw Error("Insufficient funds");
        }
        this.modefy(amount);
    }
    

    }