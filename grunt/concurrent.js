module.exports = {

    // Task options
    options: {
        limit: 4
    },

    // Dev tasks
    devFirst: [
        'clean'
    ],
    devSecond: [
        'sass:dev',
        'uglify'
    ],

    // Production tasks
    prodFirst: [
        'clean'
    ],
    prodSecond: [
        'sass:prod',
        'uglify'
    ],

    // Image tasks
    imgFirst: [
        'imagemin'
    ]
};
