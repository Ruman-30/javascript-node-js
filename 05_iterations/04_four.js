//for in 

const languages = {
    js: "javaScript",
    cpp: "c++",
    rb: "Ruby",
    swift: "swift by apple"

}

for (const key in languages) {
    //  console.log(`${key} is shortcut of ${languages[key]}`);
        
    }

    const map = new Map()
    map.set('IN', 'India')
    map.set('USA', 'United State Of America')
    map.set('Fr', 'France')

    for (const key in map) {
        console.log(key);
    }
