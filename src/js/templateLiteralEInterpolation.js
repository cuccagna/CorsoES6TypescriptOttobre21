const hello = "Hello";
const world = "world";

console.log(`${hello} ${world} dall'Italia`);
//`${hello} ${world} dall'Italia`  equivalente a
//hello + " "+world+" dall'Italia"

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `
            <h2>${header}</h2>
            <ul>
                          `;

for (const x of tags) {
   html = `${html}
             <li>${x}</li>
           `;
}

html = `${html}</ul>`;
document.getElementById("demo").innerHTML = html;
