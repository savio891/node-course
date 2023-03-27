let compareWithThis = function (param) {
    console.log(this === param)
}

compareWithThis(global)

const obj = {}
compareWithThis = compareWithThis.bind(obj)
compareWithThis(global)

compareWithThis(obj)

let compareWithThisArrow = param => console.log(this === param)
compareWithThisArrow(global)
compareWithThisArrow(this)

compareWithThisArrow = compareWithThisArrow.bind(obj)
compareWithThisArrow(module.exports)