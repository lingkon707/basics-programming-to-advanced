An iterator is an object that knows how to step through a sequence of values.

👉 It must follow the iterator protocol:

Has a next() method.

Each next() call returns an object like:
{ value: <data>, done: <true/false> }
value: the next item

done: true if sequence is finished, otherwise false