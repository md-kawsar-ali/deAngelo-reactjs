import React from 'react';

const Blog = () => {
    return (
        <section className='bg-slate-100'>
            <div className="container mx-auto px-20 py-20 flex justify-between flex-1">
                <div className='bg-slate-100 p-10 rounded-lg'>
                    <h2 className='text-2xl font-bold text-slate-700 mb-2'>What is context semantic tag in HTML?</h2>
                    <p className='text-lg text-slate-700'>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a (p tag) indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.<br />
                        On the flip side of this equation, tags such as (b tag) and (i tag) are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup. </p>
                </div>

                <div className='bg-slate-100 p-10 rounded-lg mb-2'>
                    <h2 className='text-2xl font-bold text-slate-700'>What is Context API?</h2>
                    <p className='text-lg text-slate-700'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
            </div>
        </section>
    );
};

export default Blog;