# How Linux Works

1. **Boot Process**
   - **BIOS/UEFI**: Initializes hardware (CPU, memory, disks).
   - **Bootloader (GRUB/LILO)**: Loads the Linux kernel into memory.
   - **Kernel Initialization**: Kernel sets up memory management, process scheduler, and device drivers.
   - **Init/Systemd**: Starts essential system services and user-space processes.

2. **Kernel Operations**
   - **Process Management**: Linux uses a preemptive multitasking scheduler to manage multiple processes efficiently.
   - **Memory Management**: Handles RAM allocation using paging, virtual memory, and caches.
   - **Device Drivers**: Communicate with hardware (keyboard, disk, GPU, network cards) via standardized interfaces.
   - **File System Management**: Supports ext4, XFS, Btrfs, etc., for storing and accessing files.
   - **Inter-process Communication (IPC)**: Mechanisms like signals, pipes, and shared memory allow processes to communicate safely.

3. **System Calls**
   - Linux exposes system calls as an interface for applications to request services.
   - Examples: `open()`, `read()`, `write()`, `fork()`, `exec()`.
   - Kernel handles these requests and interacts with hardware when needed.

4. **User Space**
   - Everything outside the kernel: shells, applications, GUI (like GNOME/KDE), and utilities.
   - Applications run in **user mode**, with restricted access to hardware for security.

5. **Process Execution**
   - When a program runs:
     1. Linux loads it into memory.
     2. Allocates process ID (PID) and memory space.
     3. Schedules CPU time according to priority and fairness.
     4. Handles system calls and I/O requests through kernel.

6. **I/O Handling**
   - Linux uses **buffers and caches** to efficiently read/write from devices.
   - Hardware interrupts notify the kernel when input/output is ready.

7. **Security & Permissions**
   - Linux uses a **user/group model** for access control.
   - Kernel enforces permissions on files, devices, and system resources.
   - SELinux or AppArmor adds extra security policies if configured.

8. **Networking**
   - Linux kernel includes TCP/IP stack for networking.
   - Handles routing, sockets, and packet transmission.
   - Applications interact with network via system calls.

**Summary:**
Linux acts as a **mediator between hardware and applications**, efficiently managing CPU, memory, storage, and I/O.  
It uses a **monolithic kernel** with modular drivers, provides security via user permissions, and allows multitasking and networking, making it stable, flexible, and widely used for servers, desktops, and embedded devices.
