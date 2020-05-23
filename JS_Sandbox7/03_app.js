// FACTORY PATTERN - it's a way of creating interface for creating objects but we can let subclasses to decide which classes to instanciate. Often used to create, manage, & manipulate collections of objs that are different but at the same time common characteristics.
// Its good when you have different objects... they are different but share a lot of the same properties.

function MemberFactory() {
  this.createMemeber = function(name, type) {
    let member;

    if (type === "simple") {
      member = new SimpleMembership(name);
    } else if (type === "standard") {
      member = new SimpleMembership(name);
    } else if (type === "super") {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };

    return member;
  };
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = "$5";
};
const StandardMembership = function(name) {
  this.name = name;
  this.cost = "$15";
};
const SuperMembership = function(name) {
  this.name = name;
  this.cost = "$25";
};

const members = [];
const factory = new MemberFactory();

members.push(factory.createMemeber("Akash", "simple"));

// console.log(members);

members.forEach(function(member) {
  member.define();
});