const fs = require("fs");
const path = require("path");
const fetch = require("C:/Users/Ndiing/Documents/ndiing/be/src/lib/fetch.js");

const [, , method, type, name] = process.argv;

const helper = {
    read: (file, data) => {
        try {
            data = fs.readFileSync(file, {
                encoding: "utf8",
            });
        } catch (error) {}
        return data;
    },
    write: (file, data) => {
        let dir = path.dirname(file);
        try {
            fs.readdirSync(dir);
        } catch (error) {
            fs.mkdirSync(dir, {
                recursive: true,
            });
        }
        if(data)
        fs.writeFileSync(file, data);
    },
    toPascalCase: (string) => {
        return string
            .replace(/[^a-zA-Z0-9]/g, " ")
            .replace(/(^| )([a-zA-Z])/g, ($, $1, $2, i) => $2.toUpperCase())
            .replace(/[^a-zA-Z0-9]+$/g, "");
    },
};

const source = {
    component_js: "./src/com/index.js", // ???
    component_scss: "./src/com/index.scss", // ???
    template_js: "./src/com/example/example.js",
    template_scss: "./src/com/example/example.scss",
    demo_js: "./src/dev/example.js",
    index_js: "./src/index.js", // ???
};

const cli = {
    component: {
        create: (name) => {
            let className = helper.toPascalCase(name);

            let read_template_js = helper.read(source.template_js).replaceAll("example", name).replaceAll("Example", className);
            let read_template_scss = helper.read(source.template_scss).replaceAll("example", name).replaceAll("Example", className);
            let read_demo_js = helper.read(source.demo_js).replaceAll("example", name).replaceAll("Example", className);

            let read_component_js = helper.read(source.component_js);
            let read_component_scss = helper.read(source.component_scss);
            let read_index_js = helper.read(source.index_js);

            read_component_js += 'import "./example/example.js"\r\n'.replaceAll("example", name);
            read_component_scss += '@import "./example/example.scss";\r\n'.replaceAll("example", name);

            read_index_js = read_index_js.split("\r\n");
            const index = read_index_js.indexOf('    { path: "example", load: () => import("./dev/example.js").then((m) => m.default) },');
            const index2 = index - read_index_js.length;
            read_index_js.splice(index2 + 1, 0, '    { path: "example", load: () => import("./dev/example.js").then((m) => m.default) },'.replaceAll("example", name));
            read_index_js = read_index_js.join("\r\n");

            const file_template_js = source.template_js.replaceAll("example", name);
            const file_template_scss = source.template_scss.replaceAll("example", name);
            const file_demo_js = source.demo_js.replaceAll("example", name);

            helper.write(file_template_js, read_template_js);
            helper.write(file_template_scss, read_template_scss);
            helper.write(file_demo_js, read_demo_js);
            helper.write(source.component_js, read_component_js);
            helper.write(source.component_scss, read_component_scss);
            helper.write(source.index_js, read_index_js);
        },
        delete: (name) => {
            let read_component_js = helper.read(source.component_js);
            let read_component_scss = helper.read(source.component_scss);
            let read_index_js = helper.read(source.index_js);

            read_component_js = read_component_js.split("\r\n");
            let index_component_js = read_component_js.indexOf('import "./example/example.js"'.replaceAll("example", name));
            read_component_js.splice(index_component_js, 1);
            read_component_js = read_component_js.join("\r\n");

            read_component_scss = read_component_scss.split("\r\n");
            let index_component_scss = read_component_scss.indexOf('@import "./example/example.scss";'.replaceAll("example", name));
            read_component_scss.splice(index_component_scss, 1);
            read_component_scss = read_component_scss.join("\r\n");

            read_index_js = read_index_js.split("\r\n");
            let index_index_js = read_index_js.indexOf('    { path: "example", load: () => import("./dev/example.js").then((m) => m.default) },'.replaceAll("example", name));
            read_index_js.splice(index_index_js, 1);
            read_index_js = read_index_js.join("\r\n");

            fs.unlinkSync(source.template_js.replaceAll("example", name));
            fs.unlinkSync(source.template_scss.replaceAll("example", name));
            fs.rmdirSync(path.dirname(source.template_scss.replaceAll("example", name)), { force: true });
            fs.unlinkSync(source.demo_js.replaceAll("example", name));

            helper.write(source.component_js, read_component_js);
            helper.write(source.component_scss, read_component_scss);
            helper.write(source.index_js, read_index_js);
        },
    },
    font: {
        download: async (source = "https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&family=Noto+Sans:wght@400;500&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap", dir = "./src/lib") => {
            const response = await fetch(source);
            const text = await response.text();

            for (const [, source] of text.matchAll(/url\((.*?)\)/g)) {
                const url = new URL(source);
                const file = dir + url.pathname;
                const response = await fetch(source)
                const stream = fs.createWriteStream(file)
                helper.write(file)
                response.body.pipe(stream)
            }
        },
    },
};

cli[type][method](name);
