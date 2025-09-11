👉 Summary:
Use iterables when you want to access items one by one in a flexible, standardized way — especially with loops, spreads, destructuring, and conversions. They make your code cleaner and more powerful when handling sequential data.

✅ Summary:

Iterable → defines [Symbol.iterator] → gives an iterator.

Iterator → has next() → returns { value, done }.

Built-ins (Array, String, Map, Set) already have iterators.

You can make your own iterators with custom logic or use generators for simplicity.