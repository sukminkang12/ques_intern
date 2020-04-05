
How to use it? Just do some actions .. it is sooooooooooo easy (may be)
=================================================================
Build image using Dockerfile:

<pre><code>$ docker build --tag mygit .</code></pre>


And you must create Folder :

<pre><code>$ mkdir git_data 

$ mkdir git_data/keys/

$ mkdir git_data/repos/ </code></pre>

Run Container using docker-compose.yml:

<pre><code>$ docker-compose up -d </code></pre>

If you want to create your accounnt ? Just do this command:

<pre><code>$ docker exec -it git-server sh

$ adduser [your_nick_name] </code></pre>

If you want to create "FOR YOUR" repository ? Just do this command:

<pre><code>$ ssh [your_nick_name]@[your_docker_ip] -p 2223 </code></pre>

if you do this successfully, you can see THIS :

<pre><code>$ [your_nick_name]@[your_docker_ip]'s password:

Welcome to Alpine!

The Alpine Wiki contains a large amount of how-to guides and general

information about administrating Alpine systems.

See <http://wiki.alpinelinux.org>.

....

You may change this message by editing /etc/motd. </code></pre>


And you can use ALPINE system. for your own :

<pre><code>$ cd /home/</code></pre>

if you do this , you can see your own folder. Just you use it ! it is sooo Nice !

If you want to share your repository(for special user)? :

<pre><code>$ addgroup [your_group]

$ cd /group/</code></pre> 

if you do this, you can see SPACE( it is .. empty maybe ). 

<pre><code>$ mkdir [folder_name(can anything)]

$ chmod 770 [foloder_name(can anything)] </code></pre>

if you finished it ? you can share your repository to people(in your Group)

If you want to share your repository for "ALL user" ? (it is nice choice):

<pre><code/>$ cd /git-server/repos

$ mkdir [your_folder_name]

$ chmod 744 [your_floder_name]</code></pre>     

if you finished it ? you can share your repostiory to all user!! but they just can read .. 

In Local ,

<pre><code>$ cd /git-server/repos</code></pre>

maybe, there is your floder.

Entering password is so Bothersome Action . isn't it? But now, you can access container using RSA key :

In Local,

<pre><code>$ ssh-keygen -t rsa

And you can get "pub file" and "rsa file", you must send .pub file to container .

$ docker cp [path(rsa file)] git-server:/home/[your_own_/

$ docker-compose restart

$ ssh [your_nick_name]@[your_docker_ip] -p 2222 </code></pre>

And you can access. 

USING GIT
==================
In docker-container (on Logon),

How to create your repo:

<pre><code>$ cd /home/

$ cd [your_repo]

$ git init --shared=true

$ git add .

$ git commit -m "this space is free for you "

$ cd ..

$ git clone --bare [your_repo] [your_repo].git</code></pre>

And you can see your git repository.

How clone a repository:

In local,

<pre><code> $ git clone ssh://[your_nick_name]@[docker-ip]:2223/home/[your_repo].git </code></pre>






