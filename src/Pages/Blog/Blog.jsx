import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blog = () => {
    return (
        <div className='md:px-36 px-4  py-10'>
            <h1 className="text-4xl text-primary text-center font-bold">Blog</h1>
            <section className='my-10'>
                <div className='text-center'>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button className='btn btn-outline btn-primary text-center mx-auto' onClick={toPdf}>Generate Pdf</button>}
                    </Pdf>
                </div>

                <div ref={ref} tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-4">
                    <div className="collapse-title text-xl font-bold">
                        What is the differences between uncontrolled and controlled components?
                    </div>
                    <div className="collapse-content">
                        <p>A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component. When the user interacts with the component, the parent component updates the state, which in turn updates the component's value. </p>
                        <br></br> <p>
                            An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state, which in turn updates the component's value.
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-4">
                    <div className="collapse-title text-xl font-bold">
                        How to validate React props using PropTypes?
                    </div>
                    <div className="collapse-content">
                        <p>React component might require a prop to be defined, otherwise, it will not render properly. Forgetting to pass a required prop into a component that needs it could cause your app to behave unexpectedly.
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-4">
                    <div className="collapse-title text-xl font-bold">
                        What is the difference between nodejs and express js?
                    </div>
                    <div className="collapse-content">
                        <p> Express Js is used to build web-apps using approaches and principles of Node.js. </p>
                        <br></br>
                        <p>
                            Node Js It is used to build server-side, input-output, event-driven apps.
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-4">
                    <div className="collapse-title text-xl font-bold">
                        What is a custom hook, and why will you create a custom hook?
                    </div>
                    <div className="collapse-content">
                        <p>In React, you can do so by using a custom hook, which is a JavaScript function that begins with the prefix "use". Without requiring higher-order components or render properties, or duplicating any code, custom hooks give components a means to exchange logic. value. </p>
                        <br></br> <p>
                            Custom hooks are a feature in React, a popular JavaScript library for building user interfaces. Hooks are functions that allow developers to use state and other React features in functional components, which were traditionally stateless. Custom hooks enable developers to encapsulate reusable logic and share it between components.
                        </p>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default Blog;