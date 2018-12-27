module.exports = (isDev) => {
    return {
        preserveWhitespace: true,
        extract: !isDev
    };
};
