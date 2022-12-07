import React, { useState, useEffect } from 'react';

import Markdown from 'markdown-to-jsx';

export default function MdComponent(props) {
    const file_name = props.md_title;
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`../markdown/${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });

    return (
        <div class="font-bold md:container md:mx-auto">
            <Markdown>
                {post}
            </Markdown>
        </div>
    );
}

