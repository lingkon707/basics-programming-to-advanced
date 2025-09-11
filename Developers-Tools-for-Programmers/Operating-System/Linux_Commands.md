👌 You want a one-stop list of essential Linux terminal commands.

🐧 Linux Essential Terminal Commands Cheat Sheet


1. File & Directory Management

pwd                 # show current directory
ls                  # list files
ls -la              # list all files with details
cd /path            # change directory
mkdir new_folder    # create directory
rmdir folder        # remove empty directory
rm -rf folder       # remove directory with files
touch file.txt      # create new empty file
cp file1 file2      # copy file
mv file1 file2      # move/rename file
cat file.txt        # view file content
less file.txt       # view content page by page
head -n 10 file.txt # view first 10 lines
tail -n 10 file.txt # view last 10 lines
nano file.txt       # edit file
vim file.txt        # edit file with vim


---

2. File Permissions & Ownership

ls -l                   # show permissions
chmod 755 file.sh       # change permissions
chmod +x script.sh      # make script executable
chown user:group file   # change ownership
umask                   # view default permissions


---

3. User & Group Management

whoami             # show current user
id                 # show user ID and groups
adduser newuser    # create user
passwd newuser     # set/change password
usermod -aG sudo u # add user to sudo group
deluser username   # delete user
groups             # list groups
groupadd devteam   # create group


---

4. Process & System Monitoring

ps aux             # show running processes
top                # live process monitor
htop               # advanced monitor (install needed)
kill -9 PID        # kill process
jobs               # list background jobs
fg %1              # bring job to foreground
bg %1              # send job to background
uptime             # show system uptime
free -h            # memory usage
df -h              # disk usage
du -sh folder      # folder size
uname -a           # system info
lsblk              # list storage devices


---

5. Package Management

(Debian/Ubuntu)

sudo apt update
sudo apt upgrade
sudo apt install pkg
sudo apt remove pkg
sudo apt autoremove

(Fedora)

sudo dnf install pkg
sudo dnf remove pkg
sudo dnf update

(Arch Linux)

sudo pacman -S pkg
sudo pacman -R pkg
sudo pacman -Syu


---

6. Networking

ifconfig             # show IP (needs net-tools)  
ip addr show         # show IP address  
ping google.com      # test connectivity  
curl ifconfig.me     # show public IP  
wget URL             # download file  
scp file user@host:/path  # copy file to remote server  
ssh user@host        # connect to remote server  
netstat -tuln        # list open ports (needs net-tools)


---

7. Disk & File Systems

mount /dev/sdb1 /mnt     # mount disk
umount /mnt              # unmount disk
df -Th                   # disk usage with type
fdisk -l                 # list partitions
mkfs.ext4 /dev/sdb1      # format partition as ext4
lsblk -f                 # show block devices with FS


---

8. Searching & Finding

find / -name file.txt       # find file by name
grep "text" file.txt        # search text inside file
grep -r "word" /path        # search recursively
locate filename             # find file (needs updatedb)
which command               # find command location
whereis command             # find binaries & docs


---

9. Archiving & Compression

tar -cvf archive.tar file/    # create archive
tar -xvf archive.tar          # extract archive
tar -czvf archive.tar.gz file # compress to .gz
tar -xzvf archive.tar.gz      # extract .gz
zip archive.zip file.txt      # create zip
unzip archive.zip             # extract zip


---

10. System & Services

systemctl status service     # service status
systemctl start service      # start service
systemctl stop service       # stop service
systemctl enable service     # auto start on boot
journalctl -xe               # view system logs
reboot                       # restart system
shutdown now                 # shutdown


---

11. Scripting & Automation

#!/bin/bash
echo "Hello Linux"
for i in {1..5}; do
  echo "Number $i"
done

Save as script.sh → chmod +x script.sh → ./script.sh



