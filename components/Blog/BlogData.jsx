import PostImage from '@/public/images/blog-post-img.jpg'
import Image from '@/public/images/col-1.jpg';

export const blogData = {
    mainData: {
        title: "Blog",
        title2: "Latest Blog Posts",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
    },
    posts: [
        {
            title: 'Blog Post Title',
            slug: 'blog-post-title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            keywords: 'key1, key2, key3',
            category: 'Category',
            date: 'Aug 25',
            postedBy: 'admin',
            image: PostImage,
            content: '<div class="row g-4 mt-2"><div class="col-12"> <h4 class="fw-medium">Medium Heading</h4> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </div> <div class="col-12"> <h4 class="fw-medium">Custom Circle List</h4> <ul class="list-circle"> <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li> <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</li> <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li> </ul> </div></div>',
            images: [
                { image: Image },
                { image: Image },
            ],
            tags: [
                { name: 'Tag1' },
                { name: 'Tag2' },
                { name: 'Tag3' }
            ]
        },
        {
            title: 'Blog Post Title',
            slug: 'blog-post-title-1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            keywords: 'key1, key2, key3',
            category: 'Category',
            date: 'Aug 25',
            postedBy: 'admin',
            image: PostImage,
            content: '<div class="row g-4 mt-2"><div class="col-12"> <h4 class="fw-medium">Medium Heading</h4> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </div> <div class="col-12"> <h4 class="fw-medium">Custom Circle List</h4> <ul class="list-circle"> <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li> <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</li> <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li> </ul> </div></div>',
            images: [
                { image: Image },
                { image: Image },
            ],
            tags: [
                { name: 'Tag1' },
                { name: 'Tag2' },
                { name: 'Tag3' }
            ]
        },
        {
            title: 'Blog Post Title',
            slug: 'blog-post-title-2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            keywords: 'key1, key2, key3',
            category: 'Category',
            date: 'Aug 25',
            postedBy: 'admin',
            image: PostImage,
            content: '<div class="row g-4 mt-2"><div class="col-12"> <h4 class="fw-medium">Medium Heading</h4> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </div> <div class="col-12"> <h4 class="fw-medium">Custom Circle List</h4> <ul class="list-circle"> <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li> <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</li> <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li> </ul> </div></div>',
            images: [
                { image: Image },
                { image: Image },
            ],
            tags: [
                { name: 'Tag1' },
                { name: 'Tag2' },
                { name: 'Tag3' }
            ]
        },
    ],

};