class Bank {
    /**
     * Constructor for creating a new Account object
     * 
     * @param {Array} Array of accounte number for this account
     * @param {overdraftLimit} overdraftLimit the overdraftLimit for this account
     * 
     */
     static nextNumber=100001;
    constructor() {
        this.accounts=[];
        
    }
    /**
     * Add Account
     *  
     * 
     */
     addAccount() {
        account= new Account(this.nextNumber);
        this.nextNumber++;
        this.accounts.push(account);
        return this.nextNumber-1;
    }
    
    /**
     * Add Saving Account
     *  
     * 
     */
     addSavingsAccount(interest) {

        savingaccount= new SavingsAccount(this.nextNumber,interest);
        this.nextNumber++;
        this.accounts.push(account);
        return this.nextNumber-1;
    }
     /**
     * Add Checking Account
     *  
     * 
     */
      addcheckingAccount(interest) {

        checkingAccount= new CheckingAccount(this.nextNumber,interest);
        this.nextNumber++;
        this.accounts.push(account);
        return this.nextNumber-1;
    }
    
    
    /**
     * @returns {string} representation of this account
     */
       toString() {
        return "Account " + this.getNumber() + ": balance " + this.getBalance() +": overdraftLimit " + this.getoverdraftLimit();
    }

    }