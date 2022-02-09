module.exports = {
  "root": true,
  "parser": "vue-eslint-parser",
  "env": {
    "browser": true, // browser global variables
    "es2021": true,
    "vue/setup-compiler-macros": true
  },
  "extends": [
    "plugin:vue/vue3-recommended",
    "airbnb-base"
  ],
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "project": "./tsconfig.json",
    "extraFileExtensions": [".vue"]
  },
  "settings": {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      "alias": {
        "map": [
          ["@", "./src"]
        ],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "rules": {
    "linebreak-style": [
      0,
      "error",
      "windows"
    ],
    "comma-dangle": ["error", "never"],
    "import/extensions": ["error", "ignorePackages", {
      "js": "never",
      "jsx": "never",
      "ts": "never",
      "tsx": "never"
    }],
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
    "max-len" : ["error", {"code" : 300}] ,
    "vue/html-self-closing": ["error",{
      "html": {
        "void": "never",
        "normal": "any",
        "component": "any"
      },
      "svg": "always",
      "math": "always"
    }],
    "import/no-unresolved": [2,{
      "ignore": ["^@/"] // @ 是设置的路径别名
    }],
    "semi": 0,
		"no-mixed-spaces-and-tabs": 0,
    "no-plusplus": 0, // 不允许使用++，使用+=
    "prefer-template": 0,  // 必须使用es6中的模板文字而不是字符串连接 ``
    "no-param-reassign": 0,
    "vue/attribute-hyphenation": 0,  // 在模板中的自定义组件上强制执行属性命名样式,不能驼峰必须使用-间隔
    "no-restricted-syntax": 0,
    "no-else-return": 0,
    "no-restricted-globals": 0,  //不允许使用特定的全局变量，self top等
    "dot-notation": 0 //可以使用点符号（foo.bar）或方括号表示法（foo["bar"]）来访问属性。点符号通常是首选,方括号会警报
  }
}
  