describe("Accounts", function() {
   
    

    function makeTest(x) {
        var acc= new Account(10001);
        let bal=acc.getBalance();
        var sav=new SavingsAccount(2.5);
        
      let expected = x+bal;
      acc.deposit(x);
      bal =acc.getBalance();
      let wth= acc.withdraw(5);
      
      it(`${x} to be deposited to ${0} ${expected}`, function() {
        assert.equal(bal, expected);
      });
      it(` to  get balance to ${bal} ${expected}`, function() {
        assert.equal(bal, expected);
      });
      it(`${5} to withdraw from  balance of  ${bal} ${bal-5}`, function() {
        assert.equal(bal, expected);
      });
      
      
    }
  
    for (let x = 1; x <= 1; x++) {
      makeTest(100);
    }
  
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
