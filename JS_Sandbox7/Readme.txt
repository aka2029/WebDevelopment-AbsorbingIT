# Es6 introduced actual modules in JavaScript meaning that we can use separate files
to export modules which are just custom pieces of code & import them into new file.
However, this is still not supported in browsers, we'll have to use a compiler like
Babel along with a module loader like web pack for that to work and i'll be making a
project on it later.

# But in Es5 we have something called the module pattern that allows us to break up 
parts of our code into self-contained modules with private properties and methods or 
private variables and functions.

This is a very broad topic and very vast as well.
so we'll be looking at the basics.

There are many designe patterns but we'll be looking at:
1. Module
2. Revealing Module pattern
3. Singleton
4. Factory
5. Observer
6. Mediator
7. State

-> 1. & 2. are useful for overall structure. It allows us to breakup our code into modules. So, that we can have private functions & variables, public functions & variables.

-> 3. kind of variation of module pattern where we can create one instance of the object

-> 4. used to create many many objects

-> 5. helps to subscribe and unsubscribe to events

-> 6. has a kind of central mediator. and then it has collegues that seperate from it

-> 7. allows to certain state in our application & allows us to change our state