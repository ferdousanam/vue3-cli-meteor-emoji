module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "VueJS 3 CLI Meteor Emoji";
                return args;
            })
    }
}
