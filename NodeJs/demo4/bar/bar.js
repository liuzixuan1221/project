function People(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}



//原型和原型链的区别？    什么是原型？  prototype和_proto_的区别
People.prototype={
    sayHello: function () {
        console.log("我叫"+this.name+",我"+this.age+"岁了,我是"+this.sex+"的");
    }
};

module.exports = People;
