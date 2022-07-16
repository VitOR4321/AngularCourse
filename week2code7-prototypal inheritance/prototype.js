let parent ={
    value: "parentValue",
    obj: {
        objValue: "parentObjValue"
    },
    walk: function(){
        console.log("walking!");
    }
};

/*
let child = Object.create(parent);
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objvalue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objvalue: ", parent.obj.objValue);
console.log("parent:", parent);
console.log("child: ", child);
/////////////////////////////////////////////////
console.log("/////////////////////////////////////////////////")
child.value = "childValue";
child.obj.objValue = "childObjValue";
console.log("*** CHANGED: child.Value = 'childValue'");
console.log("*** CHANGED: child.obj.objValue = 'childObjValue'");
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objvalue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objvalue: ", parent.obj.objValue);
console.log("parent:", parent);
console.log("child: ", child);
/////////////////////////////////////////////////
console.log("/////////////////////////////////////////////////")
console.log("child.obj === parent.obj?", child.obj === parent.obj);
let grandChild = Object.create(child);
console.log("GrandChild: ", grandChild);
grandChild.walk();
*/
function Dog(name){
    this.name = name;
    console.log("'this' is:", this);
}

let myDog = new Dog("Max");
console.log("myDog: ",myDog);

Dog("Max2")
