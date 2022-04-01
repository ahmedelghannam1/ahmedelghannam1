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
        
        this.accounts.push({ id: this.nextNumber, account});
        this.nextNumber++;
        return this.nextNumber-1;
    }
    
    /**
     * Add Saving Account
     *  
     * 
     */
     addSavingsAccount(interest) {

        savingaccount= new SavingsAccount(this.nextNumber,interest);
        
        this.accounts.push({id: this.nextNumber,savingaccount});
        this.nextNumber++;
        return this.nextNumber-1;
    }
     /**
     * Add Checking Account
     *  
     * 
     */
      addcheckingAccount(overdraft) {

        checkingAccount= new CheckingAccount(this.nextNumber,overdraft);
        
        this.accounts.push({id:this.nextNumber,checkingAccount});
        this.nextNumber++;
        return this.nextNumber-1;
    }

     /**
     * Close Account
     *  
     * 
     */
      closeAccount(number) {

        this.accounts.splice( this.accounts.findIndex(x => x.id == number),1);
       
    }


     /**
     *  Account report
     *  
     * 
     */
      accountReport() {

        return this.accounts.reduce((acc,curr)=>acc.toString.concat(curr.toString,"\n"),"\n ");
       
    }
    
    endOfMonth() {
        var str="";
        this.accounts.forEach(element => {str=str+element.endOfMonth()+"\n";
            
        });
        return str;
    }
    
    
    /**
     * @returns {string} representation of this account
     */
       toString() {
        return "Account " + this.getNumber() + ": balance " + this.getBalance() +": overdraftLimit " + this.getoverdraftLimit();
    }

    }