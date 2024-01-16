const shortName = {
    js: "javascript",
    cpp: "c++",
    ts: "Typescript",
}

// for (const key in shortName) {
//     console.log(`${key} is ShortForm of ${shortName[key]} `);
// }
//this is mostly used in objects


// const coding : ["Java","C++","Javascript","Ruby","Rust"]

// coding.forEach( (val) :> (console.log(val)))


const objOfLang = [
    {
        langName : "Java",
        LangFileName : ".java"
    },
    {
        langName : "Javascript",
        LangFileName : ".js"
    },
    {
        langName : "C++",
        LangFileName : ".cpp"
    },
    {
        langName : "Python",
        LangFileName : ".py"
    },
    {
        langName : "ruby",
        LangFileName : ".rb"
    }
]


objOfLang.forEach( (item) => {
    console.log(`${item.langName} has its extenstion as ${item.LangFileName}`);
})