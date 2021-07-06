describe("Accounts", function() {
   
    

    function makeTest(x) {
        var acc= new Account(10001);
        let bal=acc.getBalance();
        var sav=new SavingsAccount(10002,2.5);
        var savNumber=sav.getNumber();
        var chk= new CheckingAccount(10003,500);
        chk.deposit(10000);
        let ovr=chk.getoverdraftLimit();
        let chkNumber=chk.getNumber();
        sav.deposit(1000);
        let savBal=sav.getBalance();
        let interest=sav.getInterest();
       
      let expected = x+bal;
      acc.deposit(x);
      bal =acc.getBalance();
      let wth= acc.withdraw(5);
      let exp=savBal*interest;
      let intamount=sav.getInterestAmount(); 
      sav.addInterest();
      let addInterestBal=sav.getBalance();
      
      it(`the get number  function of acount  ${savNumber} is  ${savNumber}`, function() {
        assert.equal(savNumber, 10002);
      });
      
      it(`the deposit function make a deposit of  ${x} to  ${0} to get  ${expected}`, function() {
        assert.equal(bal, expected);
      });
      it(`the get balance of  ${bal}  is ${expected}`, function() {
        assert.equal(bal, expected);
      });
      
      
      it(`the withdraw function of ${5} from  balance of  ${bal} ${bal-5}`, function() {
        assert.equal(bal, expected);
      });
      it(`the get interest function of ${interest} from  balance of  ${savBal} ${interest*savBal/100}`, function() {
        assert.equal(intamount, exp/100);
      });

      it(`the add interest function of account number ${savNumber} is  ${addInterestBal}`, function() {
        assert.equal(addInterestBal, 1025);
      });
      it(`the get over draft Limit function of ${ovr} for account number  ${chkNumber} is  ${ovr}`, function() {
        assert.equal(ovr, 500);
      });
      
     
      

     
      
    }
  
    
      makeTest(100);
    
  
  });

  describe("getBalance", function() {
   
    

    function makeTest() {
        var acc= new Account(10001);
        let bal=acc.getBalance();
        
      let expected = bal;
     
      it(`${x} to be deposited to ${bal} ${expected}`, function() {
        assert.equal(bal, expected);
      });
    }
  
    for (let x = 1; x <= 1; x++) {
      makeTest(x);
    }
  
  });
