({
    block: 'b-page',
    title: 'index',
    head: [
        { elem: 'css', url: 'index.css'},
        { elem: 'css', url: 'index.ie.css', ie: 'lt IE 8'},
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'index.js'}
    ],
    content: [
        {
            block: 'b-cut',
            content: [
                {
                    elem: 'opener',
                    content: 'открыть кат'
                },
                {
                    elem: 'content',
                    content: {
                        block: 'b-text',
                        content: [
                            {
                                elem: 'p',
                                content: 'Мама мыла раму'
                            }
                        ]
                    }
                }
            ]
        }
    ]
})
