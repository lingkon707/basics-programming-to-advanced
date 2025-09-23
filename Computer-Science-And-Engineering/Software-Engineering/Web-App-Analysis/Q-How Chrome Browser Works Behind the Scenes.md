# How Chrome Browser Works Behind the Scenes

1. **User Interface (UI)**
   - The visible part of Chrome: tabs, address bar, bookmarks, settings.
   - Minimal logic here; mostly sends requests to other Chrome components.

2. **Browser Engine**
   - Acts as a bridge between the UI and the rendering engine.
   - Interprets user commands like “open URL” or “refresh page.”

3. **Rendering Engine (Blink)**
   - Blink is Chrome’s engine (forked from WebKit).
   - Converts HTML, CSS, and JavaScript into what you see on the screen.
   - Steps:
     1. Parses HTML → DOM (Document Object Model)
     2. Parses CSS → CSSOM (CSS Object Model)
     3. Combines DOM + CSSOM → Render Tree
     4. Layout → Calculate positions and sizes
     5. Paint → Display pixels on screen

4. **JavaScript Engine (V8)**
   - Chrome uses V8 to run JavaScript fast.
   - Compiles JS into machine code, optimizing repeated code paths for speed.
   - Handles asynchronous tasks (e.g., fetch API, events) via the Event Loop.

5. **Networking**
   - Handles HTTP/HTTPS requests, caching, cookies, and SSL/TLS.
   - Chrome can prefetch DNS, cache content, and maintain secure connections.

6. **Multi-Process Architecture**
   - Each tab runs in its own process (sandboxed for security and stability).
   - If one tab crashes, others remain unaffected.
   - Also separates GPU, extensions, and plugins into separate processes.

7. **GPU Process**
   - Handles graphics-intensive tasks like CSS animations, WebGL, and video decoding.
   - Offloads work from CPU to GPU for smoother performance.

8. **Extensions and Plugins**
   - Run in isolated processes for security.
   - Communicate with Chrome via APIs.

9. **Security Layers**
   - Sandboxing: Limits what each process can do to protect the system.
   - Site Isolation: Each site runs in its own process to prevent malicious cross-site attacks.
   - Safe Browsing: Warns users about phishing, malware, or unsafe downloads.

10. **Event Loop & Task Scheduling**
    - Manages tasks like user input, network responses, rendering updates.
    - Ensures smooth interaction and responsiveness.

**Summary:**  
Chrome is essentially a multi-process system combining UI, rendering, networking, JavaScript execution, and security. Its design focuses on **speed, stability, and security**, ensuring that even complex web apps run efficiently.
