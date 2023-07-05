/**
 * ! Bundlers: vite, parcel, webpack.
 * ! npm init: NPM is a package manager (Node Package Manager)
 * ! HMR: Hot Module Replacement
 * ? Parcel also running File Watcher Algorithm which constantly watching any changes that is done in our file. This Algorithm's code is written in C++. 
 * ! Parcel does compresstion, minification, rewriting, Image Optimization and cleaning of the code. 
 * ! Parcel also renames the variables.
 * ! Parcle takes care of older versions of browsers
 * ! Parcel does caching while devolopment
 * ! Parcel adds Polyfills
 * ! Parcel provides HTTPS on dev
 * ! Parcel manages PORT number
 * ! Parcel uses Consistant Hashing Alogorithm to cache things up
 * ! Parcel needs Zero Configuration
 * 
 * todo Transitive Denpendendies: When a denpendency depends on another dependency and that dependency depends on another dependency and it goes on and on then it's called Transitive Dependency.
 * ? Component Composition: When we use a component inside a component, thus creating componet with other component
 * ? Babel is a Compiler or you can say it Transpiler as well
 * ? JSX, ES6 is not mendatory in React
 * ? React.Fragment: It's a component which is imported by React. It's like a empty tag
 * ! Reconsilation: React uses diff algorithm to find out the difference between the trees(actual DOM and virtual DOM). And it finds out what needs to be updated. OR, The algorithm React uses to diff one tree to another to determine which parts need to be changed 
 * 
 * TODO keys: It's use because React became confused to different between similar divs. That's why we have to assign an unique key to differentiat between them. unique key >>> index key >> no key
 * 
 * ! Virtual DOM: It's not an actual DOM, it's just a representation of a DOM.
 * ! React fiber is a new reconsiliation engine. It came in React 16. It's reponsible for diff
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
// Named Import
import Body from './Component/Body';
import Header from './Component/Header';
import Footer from './Component/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Cart from './Component/Cart';
import About from './Component/About';
import Error from './Component/Error';
import Contact from './Component/Contact';
import RestaurentMenu from './Component/RestaurentMenu';


const AppLayout = () => {
    // ! Never create a component inside a component's Body
    // ! Never write a useState inside a if() condition or for() Loop

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/restaurent/:resId',
                element: <RestaurentMenu />
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = { appRouter } />); 