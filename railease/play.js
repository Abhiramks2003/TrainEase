let c = { name: "at" }

function swap(fel) {
    fel.name = "wild";
    fel = { name: "tabby" };
}

swap(c)
console.log(c.name);