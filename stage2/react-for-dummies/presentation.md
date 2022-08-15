# outlaw0-JSFE2022Q1
## presentation on the topic of react
- a link to your YouTube video;
- a link to your Reveal presentation's deploy;
- (optional) a link to the transcript of your presentation;
- (optional) your comments;


Hello guys!
I must say that I have never studied a React before. 
And 

Slide 1 - React for Dummies
Hello Guys! I would like to talk about the React. I chose this topic because I expect to use this technology in future projects.
I must say that I have not studied the react before. 
I was analyze a couple of applications on it. But its all of my experience.
However this presentation will be interesting only to those who know nothing about React or those who want to start studying React.

You can also title this: what you can learn about React in a week)

Slide 2 - Its framework?
We constantly hear that React is a framework, is it really so?
No! the React is a library
U can say: hey it doesnt matter. 
Yes but Technically, the library differs from the framework in what is called inversion of control.
Using the library, the programmer is independently responsible for the flow of the application. Only he decides when to involve third-party functionality.
The framework itself is responsible for the flow. It provides several places to place your code, but whether it is called or not is up to him.

Slide 3 - React is MAINLY THE VIEW LAYER

React is mentioned in the same breath as other Javascript frameworks, but "React vs Angular" doesn't make sense because they aren't directly comparable. Angular is a complete framework (including a view layer), React is not. This is why React is confusing to understand, it's emerging in an ecosystem of complete frameworks, but it's mostly the view.

React gives you a template language and some function hooks to essentially render HTML. That's all React outputs, HTML. Your bundles of HTML / Javascript, called "components," can have their own internal state (such as which tab is selected in a tab view), but in the end you just barf out HTML.

Slide 4 - JSX
If you like the HTML, you'll like the JSX.
JSX (JavaScript Syntax Extension and occasionally referred as JavaScript XML) is a React extension to the JavaScript language syntax[1] which provides a way to structure component rendering using syntax familiar to many developers. It is similar in appearance to HTML.
JSX: It looks like HTML in your JS file. The most obvious difference is you say


Slide 5 - React Ecosystem



slide 6 - Declarative



slide 7 - State 

State is the most complex thing in React, and it's something both beginners and experienced developers struggle to understand. 
So i try to explore how state work in React.

This is what React does when state is changed: it re-renders the entire app.

Here are some reasons why state might change:

The user clicks or taps a button
Some data is received from the server – either from a websocket message, or from a response to a previous request
A timer goes off – perhaps there’s a timer that fires every second to update the current time onscreen
So, how does React know that state has changed? Is it continually polling for changes? Watching for events, like Angular does? Nope. Nothing that fancy.

React knows when state has changed because you tell it explicitly, by calling this.setState from inside a component. In other words, there’s no “magic.” React will only re-render when you tell it to.

slide 8 - Component and Props

React is composed of various "components". Components are the building blocks of React code. It is a JavaScript function, always starting with a capital letter to differentiate from the regular functions from vanilla JavaScript. A React component would look something like this:

Before I explain what props are, I would have to point out that I have said above "components are the building blocks of React code." What does that mean? You will create each component as a block to build, and place them in the top level component. From that top level component, you have access to each of the building block components. For example, an App component as a "parent" component, could have a "child" component called About. As the naming suggests, a "parent" component will pass down "props" to its "child" component(s). When the parent component calls child components, it will assign "props" by giving the prop's name and what that prop points to.