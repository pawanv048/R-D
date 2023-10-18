### How React is different from other javascript framework?
===========

- **React works on virtual dom**

React Utilizes a Virtual Dom, an in-memory representation of the actual browser Dom, 
When the state of a component changes, React creates a new Virtual Dom representation
and compares it with its previous one.

- **React is View-orientated**

React is primarily concerned with the View layer of an application. it provides a declarative way to build UI
component and manages the rendering of those components efficiently.

- **React works on Unidirectional data flow**

React follows unidirectional data flow, where the data flows in a single direction from the parent to child components.
This promotes predictable and easier-to-manage data flow and helps in debugging and understanding the application state.

- **React works on Component-based architecture**

React encourages the components-based architecture, where UIs are broken down into modular,
and reusable components, components can be composed and create a complex UI structure.

### What is the purpose of Virtual Dom?###

It is a fake Dom, Dom is the thing where the Entrie tree is rendered. So the copy of the view tree
is with react called virtual dom. Whenever you change something in the state or in prop
any change that changes the view, React changes it first on Virtual Dom.
It sees what minimal changes are necessary on the current DOM. and implies those changes 
in it. 

so what is the benefit of this?

The benefit of this is that the browser, because the whole dom is not being 
repainted every time, so less work is being done. so because of that app is getting fast and responding quickly.

### How does React handle updating and re-rendering? what is Reconciliation ###

You have Real Dom and Virtual Dom, some changes have happened, so the copy of the Real Dom is the Virtual Dom.
Now a new Dom is created with new changes, And a diffing algorithm is running between these two.

Diffing Algorithm: it's nothing but comparing and seeing the new changes, diffing is called reconciliation.
First is diffing happen, then remove only changes in Dom, Go & update, which is also called commit.

### How does data flow work in React? what are props and state.

Props:(Read Only) 
- Props allow you to pass data from one component to other component as an argument
- Props are read-only properties that are pass from parent to child
  whenever there is a change in properties or props the child is being re-render

state:
- it holds information of the components
- state is internal to a component, when you change something in it, there is a change in the compoenet
- state is also transferred as a prop from parents, in that case too for the children it a read-only property only
it cannot be change by the child compoenet

### What is server side rendering and client side rendering?

Data heavy app or other words we can say content heavy app are begin re-render as server side rending


### what are the use of ref in react?

React makes it own DOM or you do not directly access that DOM, whenever you have to change in it, you do it through state or 
state or props, not directly through accessing.
But somewhere, like a thing to put focus on an input element. somewhere you need to access dom Direcltly.
in those cases, ref, are very important because, ref directly give the access to the dom, so the element can
directly control through the programming side.

so, for Directly changes in DOM is not suggest to anyone for that reason ref should not be considered. Only use for exceptions


### What is React Fiber?

Before react fiber, when virtual dom was created and there was diffing done, then the whole diffing cycle used to run at once.
so the Diffing cycle that run is CPU intensive, so that CPU use to get blocked in that case, then what react fiber did
that those who are running diffing, they will run one by one on each node and they can break into parts.
Meaning that they can be run it in each fiber. so, the response of button where heavy changes it done the app get stuck
with react fiber it's getting smooth.

### Why were Hooks introduce?

So, With Hooks the state logic is getting reusable, it becomes testable, it can be taken out from the component and tested in the other
component. so you do not need to lock the state logic in the component. so the most important thing was code reuse and composability both became very good.

