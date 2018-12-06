module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint"
    },
    env: {
        browser: true
    },
    extends: [
        "plugin:vue/essential",
        "standard"
    ],
    plugins: [
        "vue"
    ],
    rules: {
        "semi": [2, "always"],
        "generator-star-spacing": "off",
        "indent": "off",
        "space-before-function-paren": ["error", "never"],
        "vue/script-indent": ["error", 4,{"baseIndent":1}],
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    }
}
