describe("Accounts", function() {
   
    

    function makeTest(x) {
        var acc= new Account(10001);
        let bal=acc.getBalance();
        var sav=new SavingsAccount(10002,2.5);
        let savBal=sav.getBalance();
        sav.deposit(1000);
        let interest=sav.getInterest();
      let expected = x+bal;
      acc.deposit(x);
      bal =acc.getBalance();
      let wth= acc.withdraw(5);
      
      it(`the deposit function make ${x} to be deposited to ${0} ${expected}`, function() {
        assert.equal(bal, expected);
      });
      it(`the get balance of  ${bal}  if ${expected}`, function() {
        assert.equal(bal, expected);
      });
      it(`the withdraw function of ${5} from  balance of  ${bal} ${bal-5}`, function() {
        assert.equal(bal, expected);
      });
      expected=savBal*interest;
      let intamount=sav.getInterestAmount();
      it(`get interest of ${2.5}/100 from balance of  ${savBal} ${savBal*int}`, function() {
        assert.equal(intAmount, expected);
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
