var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
{
    var age = 20;
    //age="twenty"
    console.log(age);
    var coder = "matt";
    var incrementAge = function (age) {
        return age + 1;
    };
    var printAge = function (age) {
        console.log(age);
    };
    printAge(age);
    age = incrementAge(age);
    printAge(age);
    var roomname = void 0;
    roomname = 801;
    roomname = "Tower B 801";
    var dhoniage = void 0;
    dhoniage = 42;
    incrementAge(dhoniage);
    dhoniage = null;
    if (dhoniage !== null)
        incrementAge(dhoniage);
    else {
        incrementAge(1);
    }
    incrementAge(dhoniage !== null && dhoniage !== void 0 ? dhoniage : 42);
    incrementAge(dhoniage);
    var incrementAge2 = function (age) {
        var _a;
        return (_a = age + 1) !== null && _a !== void 0 ? _a : 21;
    };
    var incrementAge3 = function (age) {
        return age !== null && age !== void 0 ? age : 21;
    };
    var incrementAge4 = function (age) {
        if (age === void 0) { age = 21; }
        return age;
    };
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.active = false;
            this.name = name;
            this.age = age;
        }
        Person.prototype.celebratebday = function () {
            this.name = "Ranbir";
            if (this.age !== undefined)
                this.age++;
        };
        return Person;
    }());
    var person1 = new Person('ishita', 22);
    var person2 = new Person('aayushi', 23);
    console.log(person1, person2);
    person1.celebratebday();
    console.log(person1);
    var Person2 = /** @class */ (function () {
        function Person2(name, age) {
            this.name = name;
            this.age = age;
            this.active = false;
            this._changed = false;
        }
        Object.defineProperty(Person2.prototype, "changed", {
            get: function () {
                return this._changed;
            },
            set: function (value) {
                this._changed = value;
            },
            enumerable: false,
            configurable: true
        });
        return Person2;
    }());
    var person3 = new Person2("ranbir", 45);
    person3.changed = true;
    console.log(person3.changed);
    var Child = /** @class */ (function (_super) {
        __extends(Child, _super);
        function Child(name, toys, age) {
            var _this = _super.call(this, name, age) || this;
            _this.toys = toys;
            return _this;
        }
        return Child;
    }(Person2));
    var child1 = new Child('ishita', ["car", "star parents"], 5);
    console.log(child1);
    var CheckingAccount = /** @class */ (function () {
        function CheckingAccount(id, balance, transactions) {
            this.id = id;
            this.balance = balance;
            this.transactions = transactions;
        }
        CheckingAccount.prototype.addBalance = function (amt) {
            this.balance += amt;
        };
        return CheckingAccount;
    }());
    var account = { id: 34, balance: 8000, transactions: [100, 200], addBalance: function (amt) { this.balance += amt; } };
    console.log(account);
    account.addBalance(400);
    console.log(account);
    var transaction1 = { date: new Date(), amount: 1000, desc: "desposit" };
    var EnhancedTransaction = /** @class */ (function () {
        function EnhancedTransaction(date, amount, desc) {
            this.date = date;
            this.amount = amount;
            this.desc = desc;
        }
        return EnhancedTransaction;
    }());
    //combining types
    var x = void 0;
    var s1 = { name: "abc", role: "teacher", id: 1, salary: 2000 };
    var t1 = 23;
    var t2 = true;
    // let t3:type3= "abc";
    //generia
    function convertNumToArr(x, y) {
        return [x, y];
    }
    var result1 = convertNumToArr(20, 30);
    console.log(result1);
    function convertToArray(x, y) {
        return [x, y];
    }
    var result2 = convertToArray('hello', 'world');
    console.log(result2);
    var result3 = convertToArray(23, 45);
    console.log(result3);
    var AccountManager = /** @class */ (function () {
        function AccountManager(account) {
            this.account = account;
        }
        return AccountManager;
    }());
    var checkingAcctManager = new AccountManager(new CheckingAccount(1, 100, [1, 2, 3]));
    ;
    var ttype = "W" /* TransactionType.Withdrawal */;
    console.log(ttype);
    var user = { name: "Matt", active: true };
    console.log(((_a = user.password) === null || _a === void 0 ? void 0 : _a.length) || "no pwd set");
    //type casting
    // const desc =document.getElementById('desc') as HTMLInputElement;
    // desc.value
}
