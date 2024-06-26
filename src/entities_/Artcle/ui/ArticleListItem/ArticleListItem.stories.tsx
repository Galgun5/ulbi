import { Meta, StoryObj } from '@storybook/react';

import { ArticleListItem } from './ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';

const meta = {
    title: 'entities_/Article/ArticleListItem',
    component: ArticleListItem,
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const article = {
    id: '1',
    title: 'Javascript news',
    subtitle: "What's new in JS for 2024?",
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [
        'IT',
    ],
    user: {
        id: '1',
        username: 'user',
        avatar: 'https://i.pravatar.cc/?img=15',
    },
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'The title of this block is.',
            paragraphs: [
                'The program traditionally called "Hello, world!" is very simple. It outputs somewhere the phrase "Hello, world!", or some other similar phrase, by means of some language.',
                "JavaScript is a language that can be executed in different environments. In our case, we're talking about browsers and the Node.js server platform. If you haven't written a line of code in JS until now and you're reading this text in a browser, on a desktop computer, that means you're literally seconds away from your first JavaScript program.",
                "There are other ways to run JS code in the browser. So, if we talk about the common use of JavaScript programs, they are loaded into the browser to make web pages work. As a rule, the code is designed as separate files with the extension .js, which are attached to web pages, but program code can be included directly in the code of the page. All this is done with the <script> tag. When the browser detects such code, it executes it. You can learn more about the script tag at w3school.com. In particular, let's look at an example that demonstrates how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we'll do things a little differently. Namely, we'll create a new file in some text editor (e.g. VS Code or Notepad++) called hello.html and add the following code to it:",
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'The title of this block is.',
            paragraphs: [
                'The program traditionally called "Hello, world!" is very simple. It outputs the phrase "Hello, world!", or another similar phrase, using some language.',
                "There are other ways to run JS code in the browser. For example, in common usage, JavaScript programs are loaded into the browser to make web pages work. As a rule, the code is formatted as separate files with the extension .js, which are attached to web pages, but program code can also be included directly in the code of the page. All this is done with the <script> tag. When the browser detects such code, it executes it. You can learn more about the script tag at w3school.com. In particular, let's look at an example that demonstrates how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we'll do things a little differently. Namely, we'll create a new file in a text editor (e.g., VS Code or Notepad++) called hello.html and add the following code to it:",
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Figure 1 - screenshot of the site',
        },
        {
            id: '3',
            type: 'CODE',
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'The title of this block is.',
            paragraphs: [
                "JavaScript is a language that can be executed in different environments. In our case, we're talking about browsers and the Node.js server platform. If you haven't written a single line of JS code so far and you're reading this text in a browser, on a desktop computer, it means you're literally seconds away from your first JavaScript program.",
                "There are other ways to run JS code in the browser. For example, in common usage, JavaScript programs are loaded into the browser to make web pages work. As a rule, the code is formatted as separate files with the extension .js, which are attached to web pages, but program code can also be included directly in the code of the page. All this is done with the <script> tag. When the browser detects such code, it executes it. You can learn more about the script tag at w3school.com. In particular, let's look at an example that demonstrates how to work with a web page using JavaScript, given on this resource. This example can also be run using this resource (look for the Try it Yourself button), but we'll do things a little differently. Namely, we'll create a new file in a text editor (e.g., VS Code or Notepad++) called hello.html and add the following code to it:",
            ],
        },
        {
            id: '8',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Figure 1 - screenshot of the site',
        },
        {
            id: '9',
            type: 'TEXT',
            title: 'The title of this block is.',
            paragraphs: [
                "JavaScript is a language that can be executed in different environments. In our case, we're talking about browsers and the Node.js server platform. If you haven't written a single line of JS code so far and you're reading this text in a browser, on a desktop computer, it means you're literally seconds away from your first JavaScript program.",
            ],
        },
    ],
} as Article;

export const Big: Story = {
    args: {
        view: ArticleView.BIG,
        article,
    },

};
export const Small: Story = {
    args: {
        view: ArticleView.SMALL,
        article,
    },

};
