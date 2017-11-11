var shape = {
    name: "rectangle",
    popup: function () {
        console.log("this inside popup(): " + this.name);
        setTimeout(function () {
            console.log("this inside setTimeout(): " + this.name);
        }, 3000);
    }
};
shape.popup();
var shape2 = {
    name: "rectangle",
    popup: function () {
        var _this = this;
        console.log("this inside popup(): " + this.name);
        setTimeout(function () { return console.log("this inside setTimeout(): " + _this.name); }, 3000);
    }
};
shape2.popup();
